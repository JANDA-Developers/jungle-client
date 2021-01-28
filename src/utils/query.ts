import { DocumentNode, LazyQueryResult, MutationHookOptions, QueryHookOptions, useMutation } from "@apollo/client";
import { useEffect } from "react";
import {useLazyQuery} from "@apollo/client";
import { ListInitOptions, useListQuery } from "../hook/useListQuery";
import { DEFAULT_PAGE_INFO } from "@janda-com/front";
import { FoffsetPagingInfo } from "../type/api";
import { Loading } from "../component/Loading";



const dataCheck = (data:any,operationName:string, checkProperty: string[] = ["items","pageInfo"]) => {
    if(data?.hasOwnProperty(operationName) === false) {
        throw Error(`result data object dose not have property ${operationName} look this above object ↑ `)
    }

    checkProperty.forEach(p => {
        if(data?.[operationName].hasOwnProperty(p) === false) {
            throw Error(`result data object dose not have property ${p} look this above object ↑ `)
        }
    })
}

type TDefaultSort = {
    defaultSort:any[]
}

export const generateListQueryHook = <F,S,Q,V,ResultFragment>(
    QUERY: DocumentNode,
    queryInit: Partial<ListInitOptions<F, S>> = {}
    ) => {

    const listQueryHook = (
        {
            initialPageIndex = 0,
            initialSort = [],
            initialFilter,
            initialViewCount = 20,
        }: Partial<ListInitOptions<F, S>> = {
            ...queryInit
        },
        options: QueryHookOptions<Q, V> = {}
    )=> {
        const { variables: overrideVariables, ...ops } = options;
        const { integratedVariable,...params } = useListQuery({
            initialFilter,
            initialPageIndex,
            initialSort,
            initialViewCount
        })

        const [getData, queryContext] = useLazyQuery<Q,V>(QUERY,{
            // @ts-ignore
            variables: {
                ...integratedVariable,
                ...overrideVariables
            },
            fetchPolicy: "cache-first",
            ...ops,
        })

        const { data,  networkStatus } = queryContext;
        const getLoading = networkStatus != 7

        const operationName = getQueryName(QUERY);
        // @ts-ignore
        const items: ResultFragment[] = data?.[operationName]?.items || []
        // @ts-ignore
        const pageInfo: FoffsetPagingInfo = data?.[operationName]?.pageInfo || DEFAULT_PAGE_INFO

        dataCheck(data,operationName)


        useEffect(()=>{
            getData()
        },[
            params.filter,
            params.sort,
            params.viewCount,
            params.paginatorHook.page
        ])

        return { pageInfo,  getLoading, items, ...params, ...queryContext }
    }

    return listQueryHook
}

// refetchQueries: [getOperationName(BOOKING_LIST) || ""],

export const generateMutationHook = <M,V>(MUTATION:DocumentNode,defaultOptions?: MutationHookOptions<M,V>) => {
    const mutationHook = (options?: MutationHookOptions<M,V>) => {
        const muHook = useMutation<M, V>(MUTATION, {
            ...defaultOptions,
            ...options
        });

        
        return muHook
    }
    return mutationHook
}


export const useGenerateFindQuery = <Q,V,ResultFragment>(findBy: keyof V,QUERY:DocumentNode) => {
    const usefindQueryHook = (key:any, options:QueryHookOptions<Q, V> = {}) => {
        const [getData, queryContext] = useLazyQuery<Q, V>(QUERY, {
            skip: !key,
            nextFetchPolicy: "network-only",
            // @ts-ignore
            variables: {
                [findBy]: key
            },
            ...options,
        })
        const { networkStatus, data} = queryContext;
        const getLoading =  networkStatus != 7;
        
        const operationName = getQueryName(QUERY);
        // @ts-ignore
        if(data?.[operationName] && !data[operationName].hasOwnProperty("data")){
            throw Error("data is not exist on response")
        }
        // @ts-ignore
        const item:ResultFragment | undefined = data?.[operationName].data || undefined;
        
        useEffect(()=>{
            if(key)
                getData()
        },[key])

        return {item, getLoading, ...queryContext}
    }

    return usefindQueryHook
}

export const capitalize = (s:string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


export const getQueryName = (QUERY:DocumentNode) => {
    const operation = QUERY.definitions[0];
    // @ts-ignore
    const operationName = operation && operation.name.value;

    return capitalize(operationName);
}
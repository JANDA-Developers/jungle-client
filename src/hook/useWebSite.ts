import { ADD_DOMAIN, WEBPAGE_LIST, WEB_PAGE_CREATE, WEB_PAGE_DELETE, WEB_PAGE_FIND_BY_KEY, WEB_PAGE_UPDATE } from "../apollo/gql/webPage";
import { FwebPage, webPageList,webPageFindByKey,webPageFindByKeyVariables, _WebPageSort, webPageListVariables, _WebPageFilter, webPageCreate, webPageCreateVariables, webPageUpdate, webPageUpdateVariables, webPageDelete, webPageDeleteVariables, WebPageUpdateInput, WebPageCreateInput, webPageCreate_WebPageCreate, webPageDelete_WebPageDelete, addDomain, addDomainVariables } from "../type/api";
import { getRefetch } from "../utils/api";
import { completeMsg } from "../utils/completeMsg";
import { useGenerateFindQuery, generateListQueryHook, generateMutationHook} from "../utils/query";

export const useWebPageFindByKey = useGenerateFindQuery<webPageFindByKey, webPageFindByKeyVariables, FwebPage>("key",WEB_PAGE_FIND_BY_KEY);
export const useWebPageList = generateListQueryHook<_WebPageFilter,_WebPageSort,webPageList, webPageListVariables, FwebPage>(WEBPAGE_LIST,{initialSort: [_WebPageSort.createdAt_desc]});
export const useWebPageCreate = generateMutationHook<webPageCreate,webPageCreateVariables>(WEB_PAGE_CREATE,{...getRefetch(WEBPAGE_LIST)});
export const useWebPageUpdate = generateMutationHook<webPageUpdate,webPageUpdateVariables>(WEB_PAGE_UPDATE,{...getRefetch(WEBPAGE_LIST)});
export const useWebPageDelete = generateMutationHook<webPageDelete,webPageDeleteVariables>(WEB_PAGE_DELETE,{...getRefetch(WEBPAGE_LIST)});
export const useAddDomain = generateMutationHook<addDomain,addDomainVariables>(ADD_DOMAIN,{...getRefetch(WEBPAGE_LIST)});

//shortcut 만들기 example
export const webpageDelete = () => {
    const [deleteMu, context] = useWebPageDelete()

    const deletePage = async (WebPageId:string) => {
        await deleteMu({
            variables:{
                WebPageId
            }
        }).then(mu => {
            return mu.data?.WebPageDelete
        })
    }

    return  {deletePage, context}
}

export const webpageUpdate = () => {
    const [updateMu,context] = useWebPageUpdate({onCompleted: ({WebPageUpdate})=>{
        completeMsg(WebPageUpdate,"업데이트","업데이트실패")
    }})

    const updatePage = async (id:string, input:WebPageUpdateInput) => {
        await updateMu({
            variables:{
                id,
                input
            }
        }).then(mu => {
            return mu.data?.WebPageUpdate
        })
    }

    return  {updatePage, context}
}

export const webpageCreate = () => {
    const [updateMu,context] = useWebPageCreate({onCompleted: ({WebPageCreate})=>{
        completeMsg(WebPageCreate,"페이지추가","페이지 추가실패")
    }})

    const createPage = async (
            input:WebPageCreateInput,
            onComplete?: (data:webPageCreate_WebPageCreate) => void
        ) => {
        await updateMu({
            variables:{
                input
            }
        }).then(mu => {
            const result = mu.data?.WebPageCreate;
            if(result) {
                onComplete?.(result)
            }
            return mu.data?.WebPageCreate
        })
    }

    return  {createPage, ...context}
}
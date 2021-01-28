import { usePagination } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import { useState } from "react";
import { OffsetPagingInput } from "../type/api";

export interface ListInitOptions<F, S> {
    initialPageIndex: number,
    initialViewCount: number
    initialFilter: F,
    initialSort: S[]
}

export interface IListHook<F, S> {
    setViewCount: ISet<number>;
    filter: F;
    sort: S[];
    setSort: ISet<S[]>;
    setFilter: ISet<F>;
    setPage: ISet<number>;
    viewCount: number;
    page: number
}

export function useListQuery<F, S>({ initialFilter, initialPageIndex, initialSort, initialViewCount }: ListInitOptions<F, S>) {
    const [filter, setFilter] = useState<F>(initialFilter);
    const [sort, setSort] = useState<S[]>(initialSort);
    const [viewCount, setViewCount] = useState(initialViewCount);
    const paginatorHook = usePagination(initialPageIndex)

    const integratedVariable = {
        pagingInput: {
            pageIndex: paginatorHook.page,
            pageItemCount: viewCount
        },
        filter,
        sort,
    }

    return { filter, setFilter, paginatorHook, integratedVariable, sort, setSort, viewCount, setViewCount }
}
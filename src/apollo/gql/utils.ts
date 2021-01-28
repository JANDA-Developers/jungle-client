import { gql } from "@apollo/client";

export const F_OFFSET_PAGE_INFO = gql`
    fragment FoffsetPagingInfo on OffsetPagingInfo {
        pageIndex
        pageItemCount
        currentItemCount
        totalPageCount
    }
`

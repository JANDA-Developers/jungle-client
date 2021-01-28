import { gql } from "@apollo/client";
import { lower } from "../../utils/char";
import { F_OFFSET_PAGE_INFO } from "./utils";

export const F_WEBPAGE = gql`
    fragment FwebPage on WebPage {
        _id
        createdAt
        updatedAt
        title
        keyWards
        description
        key
        templateKey
        supportLanguage
        value
        type
        domain
        owner {
            _id
            name
        }
    }
`

export const ADD_DOMAIN = gql`
    mutation addDomain($domain: String!, $id: ObjectId!) {
        AddDomain(domain:$domain, id:$id) {
            ok
            errors {
                code
                message
                details
            }
            data {
                ...FwebPage
            }
        }
    }
  ${F_WEBPAGE}
`

export const WEB_PAGE_CREATE = gql`
    mutation webPageCreate($input: WebPageCreateInput!) {
        WebPageCreate(input:$input) {
            ok
            errors {
                code
                message
                details
            }
            data {
                ...FwebPage
            }
        }
    }
  ${F_WEBPAGE}
`
export const WEB_PAGE_UPDATE = gql`
  mutation webPageUpdate($input:WebPageUpdateInput!,$id:ObjectId!){
    WebPageUpdate(input:$input, id:$id) {
      ok
      errors {
        code
        message
      }
      data {
        ...FwebPage
      }
    }
  }
  ${F_WEBPAGE}
`
export const WEB_PAGE_DELETE = gql`
  mutation webPageDelete($WebPageId: ObjectId!){
    WebPageDelete(WebPageId:$WebPageId) {
      ok
      errors {
        code
        message
      }
    }
  }
 ` 
export const WEB_PAGE_FIND_BY_KEY = gql`
    query webPageFindByKey(
        $key: String!
    ){
        WebPageFindByKey(key:$key){
            ok
            errors {
                code
                message
                details
            }
            data {
                ...FwebPage
            }
        }
    }
    ${F_WEBPAGE}
`

export const WEBPAGE_LIST = gql`
    query webPageList(
        $sort: [_WebPageSort!],
        $filter: _WebPageFilter,
        $pagingInput: OffsetPagingInput!
    ){
        WebPageList(sort:$sort, filter:$filter, pagingInput:$pagingInput){
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...FwebPage
        }
        }
    }
    ${F_OFFSET_PAGE_INFO}
    ${F_WEBPAGE}
`

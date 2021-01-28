import { gql } from "@apollo/client";
import { F_OFFSET_PAGE_INFO } from "./utils";
import { F_WEBPAGE } from "./webPage";

export const F_USER = gql`
    fragment Fuser on User {
        _id
        name
        email
        isVerified
        phoneNumber
        updatedAt
        createdAt
        role
        pageLimit
        webpages {
          ...FwebPage
        }
    }
    ${F_WEBPAGE}
`

export const SING_UP = gql`
mutation signUp(
    $input: SignUpInput!
  ) {
    SignUp(
      input:$input
    ) {
      ok
    }
  }
`
export const SING_IN = gql`
  mutation signIn($email:String!,$password:String!){
    SignIn(email: $email,password:$password) {
      ok
      data {
        token
      }
    }
  }
`

export const RESIGN = gql`
  mutation reSign($email:String!){
    ReSign(email: $email) {
      ok
      errors {
        code
        message
        details
      }
    }
  }
`
export const USER_UPDATE = gql`
  mutation userUpdate($input: UserUpdateInput!, $id: String){
    UserUpdate(input:$input, id:$id) {
      ok
      errors {
        code
        message
        details
      }
    }
  }
`

export const USER_LIST = gql`
    query userList(
        $sort: [_UserSort!],
        $filter: _UserFilter,
        $pagingInput: OffsetPagingInput!
    ){
        UserList(sort:$sort, filter:$filter, pagingInput:$pagingInput){
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Fuser
        }
        }
    }
    ${F_OFFSET_PAGE_INFO}
    ${F_USER}
`

export const ME = gql`
  query me {
    Me {
      ...Fuser
    }
  }
  ${F_USER}
`
import { gql } from "@apollo/client";

export const F_USER_ERROR = gql`
    fragment FuserError on UserError  {
        code
        message
        details
    }
`
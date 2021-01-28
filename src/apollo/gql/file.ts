import { gql } from "@apollo/client";

export const F_FILE = gql`
    fragment Ffile on File {
        _id
        createdAt
        updatedAt
        name
        description
        extension
        uri
    }
`

export const FILE_UPLOAD = gql`
    mutation fileUploads($files: [FileInput!]!) {
        FileUploads(files:$files) {
            ok
            errors {
                code
                message
                details
            }
            data {
                ...Ffile
            }
        }
    }
  ${F_FILE}
`
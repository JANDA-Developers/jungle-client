import { ApolloClient, gql, InMemoryCache, useLazyQuery } from "@apollo/client"
import { isEmail, toast } from "@janda-com/front";
import { useEffect } from "react"

const GET_GUIDE_DATA = gql`
  query sellerFindByEmailPublic($email: String!) {
    SellerFindByEmailPublic(email: $email) {
      ok
      error
      data {
        gender,
        nickName,
        keywards
        products {
            _id
            createdAt
        }
      }
    } 
  }
`

const itsGuideServer = process.env.REACT_APP_ITS_GUIDE_SERVER_URI!
const cache = new InMemoryCache();
const client = new ApolloClient({uri: itsGuideServer,cache  });

export const useGuideInfo = (email:string) => {
    const [getData, { data, loading }] = useLazyQuery<any,{email:string}>(GET_GUIDE_DATA, {
        fetchPolicy: "network-only",
        client,
        onCompleted: ({SellerFindByEmailPublic:result}) => {
          if(isEmail(email))
            if (result.error === "User is not found") {
                toast.warn("해당 계정을 찾을 수 없습니다.");
            }
        }
    })

    useEffect(()=>{
        if(email) {
          getData({variables:{email}})
        }
    },[])

   
    const result = data?.SellerFindByEmailPublic;
    const guide = data?.SellerFindByEmailPublic?.data;

    return {getData, data, loading,guide,result}
}
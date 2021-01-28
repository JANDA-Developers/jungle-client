import {  useQuery } from "@apollo/client"
import { ME } from "../apollo/gql/user"
import { me } from "../type/api"

export const useMeQuery = () => {
    const {data,loading} = useQuery<me>(ME,{fetchPolicy: "network-only"});
    const me = data?.Me;


    return {me,loading}
}
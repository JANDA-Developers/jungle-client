import {  RESIGN, SING_IN, SING_UP, USER_LIST, USER_UPDATE } from "../apollo/gql/user";
import { Fuser, reSign, reSignVariables, signIn, signInVariables, signUp, signUpVariables, userList, userListVariables, userUpdate, userUpdateVariables, _UserFilter, _UserSort } from "../type/api";
import { getRefetch } from "../utils/api";
import { generateListQueryHook, generateMutationHook } from "../utils/query";

export const useUserList = generateListQueryHook<_UserFilter,_UserSort, userList, userListVariables, Fuser>(USER_LIST);
export const useSignIn = generateMutationHook<signIn,signInVariables>(SING_IN);
export const useSignUp = generateMutationHook<signUp,signUpVariables>(SING_UP);
export const useReSign = generateMutationHook<reSign,reSignVariables>(RESIGN,{...getRefetch(USER_LIST)});
export const useUserUpdate = generateMutationHook<userUpdate,userUpdateVariables>(USER_UPDATE,{...getRefetch(USER_LIST)});
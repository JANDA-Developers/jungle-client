/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: fileUploads
// ====================================================

export interface fileUploads_FileUploads_errors {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 에러 디테일들... 
   */
  details: string[] | null;
}

export interface fileUploads_FileUploads_data {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  uri: string;
}

export interface fileUploads_FileUploads {
  __typename: "FileUploadsResponse";
  ok: boolean;
  errors: fileUploads_FileUploads_errors[] | null;
  data: fileUploads_FileUploads_data[];
}

export interface fileUploads {
  FileUploads: fileUploads_FileUploads;
}

export interface fileUploadsVariables {
  files: FileInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUp
// ====================================================

export interface signUp_SignUp {
  __typename: "SignUpResponse";
  ok: boolean;
}

export interface signUp {
  SignUp: signUp_SignUp;
}

export interface signUpVariables {
  input: SignUpInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signIn
// ====================================================

export interface signIn_SignIn_data {
  __typename: "SignIn";
  token: string;
}

export interface signIn_SignIn {
  __typename: "SignInResponse";
  ok: boolean;
  data: signIn_SignIn_data | null;
}

export interface signIn {
  SignIn: signIn_SignIn;
}

export interface signInVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: reSign
// ====================================================

export interface reSign_ReSign_errors {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 에러 디테일들... 
   */
  details: string[] | null;
}

export interface reSign_ReSign {
  __typename: "ReSignResponse";
  ok: boolean;
  errors: reSign_ReSign_errors[] | null;
}

export interface reSign {
  ReSign: reSign_ReSign;
}

export interface reSignVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userUpdate
// ====================================================

export interface userUpdate_UserUpdate_errors {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 에러 디테일들... 
   */
  details: string[] | null;
}

export interface userUpdate_UserUpdate {
  __typename: "UserUpdateResponse";
  ok: boolean;
  errors: userUpdate_UserUpdate_errors[] | null;
}

export interface userUpdate {
  UserUpdate: userUpdate_UserUpdate;
}

export interface userUpdateVariables {
  input: UserUpdateInput;
  id?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userList
// ====================================================

export interface userList_UserList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

export interface userList_UserList_items_webpages_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface userList_UserList_items_webpages {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: userList_UserList_items_webpages_owner;
}

export interface userList_UserList_items {
  __typename: "User";
  _id: any;
  name: string | null;
  email: string;
  isVerified: boolean;
  phoneNumber: string;
  updatedAt: any;
  createdAt: any;
  role: UserRole;
  pageLimit: number;
  webpages: userList_UserList_items_webpages[] | null;
}

export interface userList_UserList {
  __typename: "OffsetPagenatedUserData";
  pageInfo: userList_UserList_pageInfo;
  items: userList_UserList_items[];
}

export interface userList {
  UserList: userList_UserList;
}

export interface userListVariables {
  sort?: _UserSort[] | null;
  filter?: _UserFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_Me_webpages_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface me_Me_webpages {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: me_Me_webpages_owner;
}

export interface me_Me {
  __typename: "User";
  _id: any;
  name: string | null;
  email: string;
  isVerified: boolean;
  phoneNumber: string;
  updatedAt: any;
  createdAt: any;
  role: UserRole;
  pageLimit: number;
  webpages: me_Me_webpages[] | null;
}

export interface me {
  Me: me_Me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addDomain
// ====================================================

export interface addDomain_AddDomain_errors {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 에러 디테일들... 
   */
  details: string[] | null;
}

export interface addDomain_AddDomain_data_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface addDomain_AddDomain_data {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: addDomain_AddDomain_data_owner;
}

export interface addDomain_AddDomain {
  __typename: "AddDomainResponse";
  ok: boolean;
  errors: addDomain_AddDomain_errors[] | null;
  data: addDomain_AddDomain_data | null;
}

export interface addDomain {
  AddDomain: addDomain_AddDomain;
}

export interface addDomainVariables {
  domain: string;
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: webPageCreate
// ====================================================

export interface webPageCreate_WebPageCreate_errors {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 에러 디테일들... 
   */
  details: string[] | null;
}

export interface webPageCreate_WebPageCreate_data_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface webPageCreate_WebPageCreate_data {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: webPageCreate_WebPageCreate_data_owner;
}

export interface webPageCreate_WebPageCreate {
  __typename: "WebPageCreateResponse";
  ok: boolean;
  errors: webPageCreate_WebPageCreate_errors[] | null;
  data: webPageCreate_WebPageCreate_data | null;
}

export interface webPageCreate {
  WebPageCreate: webPageCreate_WebPageCreate;
}

export interface webPageCreateVariables {
  input: WebPageCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: webPageUpdate
// ====================================================

export interface webPageUpdate_WebPageUpdate_errors {
  __typename: "UserError";
  code: string | null;
  message: string;
}

export interface webPageUpdate_WebPageUpdate_data_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface webPageUpdate_WebPageUpdate_data {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: webPageUpdate_WebPageUpdate_data_owner;
}

export interface webPageUpdate_WebPageUpdate {
  __typename: "WebPageUpdateResponse";
  ok: boolean;
  errors: webPageUpdate_WebPageUpdate_errors[] | null;
  data: webPageUpdate_WebPageUpdate_data | null;
}

export interface webPageUpdate {
  WebPageUpdate: webPageUpdate_WebPageUpdate;
}

export interface webPageUpdateVariables {
  input: WebPageUpdateInput;
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: webPageDelete
// ====================================================

export interface webPageDelete_WebPageDelete_errors {
  __typename: "UserError";
  code: string | null;
  message: string;
}

export interface webPageDelete_WebPageDelete {
  __typename: "WebPageDeleteResponse";
  ok: boolean;
  errors: webPageDelete_WebPageDelete_errors[] | null;
}

export interface webPageDelete {
  WebPageDelete: webPageDelete_WebPageDelete;
}

export interface webPageDeleteVariables {
  WebPageId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: webPageFindByKey
// ====================================================

export interface webPageFindByKey_WebPageFindByKey_errors {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 에러 디테일들... 
   */
  details: string[] | null;
}

export interface webPageFindByKey_WebPageFindByKey_data_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface webPageFindByKey_WebPageFindByKey_data {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: webPageFindByKey_WebPageFindByKey_data_owner;
}

export interface webPageFindByKey_WebPageFindByKey {
  __typename: "WebPageFindByKeyResponse";
  ok: boolean;
  errors: webPageFindByKey_WebPageFindByKey_errors[] | null;
  data: webPageFindByKey_WebPageFindByKey_data | null;
}

export interface webPageFindByKey {
  /**
   * 도메인을 넣으면 도메인 으로 검사
   */
  WebPageFindByKey: webPageFindByKey_WebPageFindByKey;
}

export interface webPageFindByKeyVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: webPageList
// ====================================================

export interface webPageList_WebPageList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

export interface webPageList_WebPageList_items_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface webPageList_WebPageList_items {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: webPageList_WebPageList_items_owner;
}

export interface webPageList_WebPageList {
  __typename: "OffsetPagenatedWebPageData";
  pageInfo: webPageList_WebPageList_pageInfo;
  items: webPageList_WebPageList_items[];
}

export interface webPageList {
  WebPageList: webPageList_WebPageList;
}

export interface webPageListVariables {
  sort?: _WebPageSort[] | null;
  filter?: _WebPageFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  uri: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_webpages_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface Fuser_webpages {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: Fuser_webpages_owner;
}

export interface Fuser {
  __typename: "User";
  _id: any;
  name: string | null;
  email: string;
  isVerified: boolean;
  phoneNumber: string;
  updatedAt: any;
  createdAt: any;
  role: UserRole;
  pageLimit: number;
  webpages: Fuser_webpages[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FoffsetPagingInfo
// ====================================================

export interface FoffsetPagingInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FwebPage
// ====================================================

export interface FwebPage_owner {
  __typename: "User";
  _id: any;
  name: string | null;
}

export interface FwebPage {
  __typename: "WebPage";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  keyWards: string[] | null;
  description: string;
  key: string;
  /**
   * 이건 이넘없이 프론트에서 전달받은 키를 그대로 사용한다.
   */
  templateKey: string;
  supportLanguage: Langs[];
  value: any;
  type: string;
  /**
   * 사용자 도메인 (프로토콜포함)
   */
  domain: string | null;
  owner: FwebPage_owner;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 언어목록
 */
export enum Langs {
  GB = "GB",
  KR = "KR",
}

/**
 * 유저 역할!
 */
export enum UserRole {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  UNCONFIRMED = "UNCONFIRMED",
}

/**
 * 웹페이지의 역할
 */
export enum WebPageType {
  BUSI = "BUSI",
  PERSONAL = "PERSONAL",
}

/**
 * Auto generated sort type
 */
export enum _UserSort {
  name_asc = "name_asc",
  name_desc = "name_desc",
}

/**
 * Auto generated sort type
 */
export enum _WebPageSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * File upload to s3
 */
export interface FileInput {
  upload: any;
  tags?: GqlTagInput[] | null;
}

export interface GqlTagInput {
  key: string;
  value: string;
}

export interface OffsetPagingInput {
  pageIndex: number;
  pageItemCount: number;
}

export interface SignUpInput {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  company?: string | null;
}

export interface UserUpdateInput {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  company?: string | null;
  pageLimit?: number | null;
}

export interface WebPageCreateInput {
  description: string;
  title: string;
  keyWards: string[];
  type: WebPageType;
  templateKey: string;
  supportLanguage?: Langs[] | null;
  value: any;
}

export interface WebPageUpdateInput {
  description?: string | null;
  title?: string | null;
  keyWards?: string[] | null;
  type?: WebPageType | null;
  templateKey?: string | null;
  supportLanguage?: Langs[] | null;
  value?: any | null;
}

export interface _UserFilter {
  AND?: _UserFilter[] | null;
  OR?: _UserFilter[] | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_in?: string[] | null;
  name_contains?: string | null;
  email_eq?: string | null;
  email_not_eq?: string | null;
  email_in?: string[] | null;
  email_contains?: string | null;
}

export interface _WebPageFilter {
  AND?: _WebPageFilter[] | null;
  OR?: _WebPageFilter[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  title_contains?: string | null;
  domain_eq?: string | null;
  domain_not_eq?: string | null;
  domain_in?: string[] | null;
  domain_not_in?: string[] | null;
  domain_contains?: string | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_not_in?: string[] | null;
  keyWards_contains?: string | null;
  owner_eq?: string | null;
  owner_not_eq?: string | null;
  owner_in?: string[] | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

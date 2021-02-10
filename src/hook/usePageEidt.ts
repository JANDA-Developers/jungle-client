import { isEmpty } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import { useEffect, useState } from "react";
import { TEMPLATES } from "../template/templates";
import { Langs } from "../type/api";
import { cloneObject } from "../utils/deepCopy";
import {  mergeDeepOnlyExsistProperty } from "../utils/merge";
import { getEditUtils, IGetEditUtilsResult } from "../utils/pageEdit";
import { useWebPageFindByKey } from "./useWebSite";

export interface IUsePageEdit<Page> extends IGetEditUtilsResult<Page> {
    setPage: ISet<Page>
    page: Page
    l: {
        [aa in keyof Page]: string
    } 
}

export const usePageEdit = <Page>(code?:string,ln?:Langs) => {


    // Original const { item, loading, error,data } = useWebPageFindByKey(code);

    const findKey = code ? code : location.host;
    const { item, loading, error,data } = useWebPageFindByKey(findKey);

    
    const pageFindFail = data?.WebPageFindByKey.ok && isEmpty(data.WebPageFindByKey.data);
    const target = TEMPLATES.find(t => t.key === item?.templateKey)!
    const [lang, setLang] = useState(ln);
    const [editMode, setEditMode] = useState(false);
    const [page, setPage] = useState({} as any);
    const editUtils = getEditUtils<Page>(editMode, page, setPage,lang);
    
    useEffect(() => {
        if (!item) return;
        const combined = cloneObject(mergeDeepOnlyExsistProperty(cloneObject(target.value), item.value));
        setPage(combined);
    }, [item]);


    const languageHandler = {
        get: function(target:any, prop:any, receiver:any) {
            if(!page[prop]) return;
            return page.get(prop, lang)
        }
      };
      
      let l:any
     
      if(!isEmpty(target)) {
        l =new Proxy(target, languageHandler);    
      }

      
    //페이지에서 LANG을 꺼내서 바인드 해줘야지 
    //하지만 문제는 page가 바뀔때마다 해줘야해서 
    // 퍼포먼스 문제가 발생할 우려가 큰데?
    // 역시 함수로 해야하나...

    return {...editUtils,page,editMode,setPage,setEditMode, setLang, loading, target, item, l,error,pageFindFail}
}
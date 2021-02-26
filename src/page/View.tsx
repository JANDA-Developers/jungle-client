import { getFromUrl, isEmpty } from '@janda-com/front';
import React, { useEffect } from 'react';
import { PageLoading } from '../component/PageLoading';
import { ViewModeLayout } from '../component/ViewModeLayout';
import { IUsePageEdit, usePageEdit } from '../hook/usePageEidt';
import { FwebPage } from '../type/api';
import { ISet } from '@janda-com/front/dist/types/interface';
import "../utils/pageEdit";
import { TWebPageInfo } from '../utils/pageEdit';
import { localManager } from '../utils/Storage';
import { Page404 } from './Page404';
import { Centerlize } from '../utils/authChecker';
import { useParams } from 'react-router-dom';
import { Loading } from '../component/Loading';

export interface IViewContext<Page = TWebPageInfo> extends IUsePageEdit<Page> {
    setLang: any;
    editMode: boolean;
    setEditMode: ISet<boolean>;
    originPage?: FwebPage;
    pageKey?:string;
}

export const ViewContext = React.createContext<IViewContext | null>(null);

// @ts-ignore
const browserLn = window.navigator.userLanguage || window.navigator.language;

export const View: React.FC = () => {
    const { code: paramCode } = useParams<{ code?: string }>();

    const code = paramCode || getFromUrl("code") || localManager.get("lastAccessCode");

    const ln = getFromUrl("ln") || "KR" || browserLn;

    const editTools = usePageEdit(code, ln);
    const context = { ...editTools, originPage: editTools.item };

    const Noview: React.FC = () => <Centerlize><Page404 /></Centerlize>
    const View = editTools.target?.View || Noview;

    useEffect(() => {
        if (code && View)
            localManager.save("lastAccessCode", code);
    }, [code])


    if (editTools.loading) return <PageLoading />
    if (editTools.pageFindFail) return <Page404 />
    if (isEmpty(editTools.page)) return <PageLoading />

    return <ViewContext.Provider value={context as any}>
        <Loading />
        <ViewModeLayout >

            <View {...context} template={editTools.target} pageKey={paramCode} />

        </ViewModeLayout>
    </ViewContext.Provider>
};


export default View

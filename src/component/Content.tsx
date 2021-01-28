import React, { useContext } from 'react';
import { ViewContext } from '../page/View';
import Editor from './editor/Editor';
import { EditorView } from './editor/EditorView';

interface IProp {
    infoKey: string;
}

export const Content: React.FC<IProp> = ({ infoKey }) => {
    const { editMode, page, setPage, lang } = useContext(ViewContext)!;


    if (!page[infoKey]) return null;
    const model = page.get(infoKey, lang) || ""

    const setModel: any = (model: string) => {
        if (page[infoKey])
            page.set(infoKey, lang, model);
        setPage({ ...page });
    }

    return editMode ? <Editor setModel={setModel} model={model} /> : <EditorView model={model} />;
};

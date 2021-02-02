import { JDalign, JDbutton, JDmodal, useInput, useModal } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React, { useState } from 'react';
import { JDicon } from './icons/Icons';

interface ILinkEditorProp {
    onSubmit: (link: string) => void;
    link: string
}

export const LinkEditor: React.FC<ILinkEditorProp> = ({ link: defaultLink, onSubmit }) => {

    const linkHook = useInput(defaultLink)
    const modalHook = useModal();

    const handleEdit = () => {
        modalHook.openModal();
    }


    return <span style={{ position: "absolute", top: "-4px", right: "-4px" }}>
        <JDicon size="tiny" tooltip="링크설정" hover mode="circleBorder" icon="link" onClick={handleEdit} />

        {modalHook.openModal &&
            <JDmodal foot={
                <JDbutton thema="primary" mode="flat" onClick={() => { onSubmit(linkHook.value); modalHook.closeModal() }}
                >제출하기
            </JDbutton>} {...modalHook} head={{ title: "링크설정" }}>
                <InputText {...linkHook} />
            </JDmodal>
        }
    </span >

};

export interface ILinkEditProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
    link: string;
    editable: boolean;
    editLink: (link: string) => void;
}

export const A: React.FC<ILinkEditProps> = ({ children, link, editLink, editable, ...props }) => {

    return <a style={{ zIndex: 10, position: "relative" }}  {...props} href={editable ? undefined : link} >{children}
    {editable ? <LinkEditor link={link} onSubmit={editLink} /> : ""}
    </a>;
};

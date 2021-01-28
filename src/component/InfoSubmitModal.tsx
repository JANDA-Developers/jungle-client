import { IUseModal, JDmodal, JDsingleUploader, useInput, useFilesManager, JDbutton, JDphotoFrame } from '@janda-com/front';
import React, { useState } from 'react';
import { metaToObject } from '../utils/metaToObj';
import { IMetaData, ObjectInputRender } from './inputRender/ObjectInputRender';

export interface IPortfolioModalInfo {
    META: IMetaData;
    origin?: any;
    index?: number;
}

interface IProp {
    modalHook: IUseModal<IPortfolioModalInfo>;
    onSubmit: (data: any, index?: number) => void;
    onDelete: (index: number) => void;
}


export const InfoSubmitModal: React.FC<IProp> = ({ modalHook, onSubmit, onDelete }) => {
    const { META, origin, index } = modalHook.info || {};
    const [_data, setData] = useState(origin || metaToObject(META));


    const handleSubmit = () => {
        onSubmit({ ..._data }, index);
        modalHook.closeModal();
    }

    const handleDelete = () => {
        onDelete(index!)
        modalHook.closeModal();
    }


    return <JDmodal className="editMode" head={{ title: "포트폴리오 수정" }} {...modalHook} foot={
        <div>
            <JDbutton mr mode="flat" thema="primary" onClick={handleSubmit}>변경하기</JDbutton>
            {index !== undefined && <JDbutton mode="flat" thema="error" onClick={handleDelete}>삭제하기</JDbutton>}
        </div>
    }>
        <ObjectInputRender META={META} value={_data} onChange={(data) => {
            setData({ ...data })
        }} />
    </JDmodal>;
};

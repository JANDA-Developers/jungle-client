import { IUseModal, JDmodal, JDsingleUploader, useInput, useFilesManager, JDbutton, JDphotoFrame } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React, { useState } from 'react';
import { PhotoUpdater } from '../../../component/PhotoUpdater';
import { Upload } from '../../../component/Upload';


type TPorfolio = { img: string, title: string, link: string }


export interface IPortfolioModalInfo extends TPorfolio {
    index?: number;
}

interface IProp {
    modalHook: IUseModal<IPortfolioModalInfo>;
    onSubmit: (data: IPortfolioModalInfo) => void;
    onDelete: (index: number) => void;
}

export const PortfolioModal: React.FC<IProp> = ({ modalHook, onSubmit, onDelete }) => {
    const { link, img, title, index } = modalHook.info || {};
    const [fileUrl, setFileUrl] = useState(img || "");
    const titleHook = useInput(title || "");
    const linkHook = useInput(link || "");

    const handleSubmit = () => {
        onSubmit({
            index: index,
            link: linkHook.value,
            img: fileUrl,
            title: titleHook.value
        });
    }

    const handleDelete = () => {
        onDelete(index!)
    }

    return <JDmodal head={{ title: "포트폴리오 수정" }} {...modalHook} foot={
        <div>
            <JDbutton mode="flat" thema="primary" onClick={handleSubmit}>변경하기</JDbutton>
            {index !== undefined && <JDbutton mode="flat" thema="error" onClick={handleDelete}>삭제하기</JDbutton>}
        </div>
    }>
        <PhotoUpdater src={fileUrl} setSrc={setFileUrl} />
        <InputText label="타이틀" mb {...titleHook} />
        <InputText label="링크" mb {...linkHook} />
    </JDmodal>;
};

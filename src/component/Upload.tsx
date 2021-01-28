import React, { useRef } from 'react';
import { useUpload } from '../hook/useUpload';

export interface IUploadProps {
    onUpload: (url: string) => void;
}

export const Upload: React.FC<IUploadProps> = ({ onUpload }) => {
    const { signleUpload } = useUpload();
    const hiddenImgInput = useRef<HTMLInputElement>(null);
    const handleUpload = () => {
        const file = hiddenImgInput.current?.files?.item(0);
        if (!file) return;
        signleUpload({ upload: file }, (url, data) => {
            onUpload(url);
        })
    }


    return <div className="imgEdit" onClick={() => {
        hiddenImgInput.current?.click()
    }}>
        이미지교체+
        <input ref={hiddenImgInput} onChange={handleUpload} hidden type="file" />
    </div>;
};

import { JDphotoFrame, JDlabel } from '@janda-com/front';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { Upload } from './Upload';

interface IProp extends IDiv {
    label?: string;
    src: string;
    setSrc: (src: string) => void;
    height?: string;
}

export const PhotoUpdater: React.FC<IProp> = ({ src, height = "200px", setSrc, label, ...props }) => {
    return <div {...props}>
        {label && <JDlabel txt={label} />}
        <div data-edit="img" style={{ position: "relative" }}>
            <JDphotoFrame style={{ height }} mb isBgImg src={src} />
            <Upload onUpload={(src) => { setSrc(src) }} />
        </div>
    </div>;
};

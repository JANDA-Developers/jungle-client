import { IDiv } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { Upload } from './Upload';

export interface IEditKit<Page = any> {
    upload: (url: string) => void;
    bg: {
        backgroundImage: string;
    } | undefined;
    src: {
        src: any;
        "data-imgkey": keyof Page;
        "data-img": string;
    } | undefined;
}

interface IProp extends IDiv, IEditKit {
    posx?:string
}

export const Img: React.FC<IProp> = ({ children, src, upload, ...props }) => {
    return <div {...props}>
        <img {...src} alt="image" />
        <Upload onUpload={upload} />
    </div>;
};

export const BG: React.FC<IProp> = ({ children, bg, upload, ...props }) => {
    
    const { backgroundImage, ...bgpp } = bg || {};
    const bgPosition = props.posx === undefined ? "50% 50%" : `${props.posx}% 50%`;

    return <div {...bgpp} style={{
        backgroundImage: bg?.backgroundImage,
        backgroundPosition:bgPosition,
    }} {...props}>
        {children}
        <Upload onUpload={upload} />
    </div>

}
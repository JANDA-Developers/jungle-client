import React from 'react';
import { JDicon } from './icons/Icons';

interface IProp {
    handleDelete?: () => void;
    editable: boolean;
    onLinkEdit?: () => void;
    onHide?: () => void;
}

// UI제공을 목적으로 하는 엘리먼트
export const EditWrap: React.FC<IProp> = ({ children, onLinkEdit, handleDelete, editable, onHide }) => {
    if (!editable) return <span>{children}</span>
    return <span>
        {children}
        {handleDelete && <JDicon edit size="tiny" hover onClick={handleDelete} icon="close" />}
        {onLinkEdit && <JDicon edit size="tiny" hover onClick={handleDelete} icon="link" />}
        {onHide && <JDicon edit size="tiny" hover onClick={onHide} icon="plus" />}
    </span>;
};

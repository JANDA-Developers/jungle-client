import { JDcard } from '@janda-com/front';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React, { useContext } from 'react';
import { ViewContext } from '../page/View';

interface IProp extends IDiv {
}

export const Add: React.FC<IProp> = ({ ...props }) => {
    const { editMode } = useContext(ViewContext)!
    if (!editMode) return null;
    return <JDcard hover flex={{ center: true, vCenter: true }} mode="border"  {...props}>
        +추가하기
        </JDcard>;
};

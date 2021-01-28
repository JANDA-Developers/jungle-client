import { JDicon, Flex, JDcard } from '@janda-com/front';
import { CardProps } from '@janda-com/front/dist/components/cards/Card';
import { JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paths } from '../App';

interface IProp extends CardProps, JDatomExtentionSet {
    label: string;
    go?: string;
}

export const BackStepBar: React.FC<IProp> = ({ label, go, ...props }) => {
    const history = useHistory();

    const handleBack = () => {
        history.push(go || Paths.VIEW)
    }

    return <JDcard hover onClick={handleBack} {...props} >
        <Flex between vCenter>
            {label}
            <JDicon icon="arrowBack" />
        </Flex>
    </JDcard>;
};

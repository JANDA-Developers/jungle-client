import { JDcontainer, JDexceptionPage } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paths } from '../App';
import { Centerlize } from '../utils/authChecker';

interface IProp { }

export const Page404: React.FC<IProp> = () => {

    const history = useHistory();

    return <Centerlize  >
        <JDexceptionPage button={{
            onClick: () => {
                history.push(Paths.LOGIN)
            }
        }} type="404" />
    </Centerlize>;
};

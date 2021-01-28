import { JDbutton, JDexceptionPage, JDtypho } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { APPconetxt, Paths } from '../App';
import { Centerlize } from '../utils/authChecker';
interface IProp { }

export const Intro: React.FC<IProp> = () => {
    const history = useHistory();
    const { me } = useContext(APPconetxt);


    const goToLogin = () => {
        me ? history.push(Paths.ADMIN) : history.push(Paths.LOGIN)

    }

    return <Centerlize >
        <div className="jungleWeb">
            <JDexceptionPage button={{ label: "빌드하기", thema: "primary", onClick: goToLogin }} img={"/assets/img/jungle.jpg"} title="JUNGLE WEB" text="정글웹은 간단한 웹페이지를 아주 빠르고 쉽게 생성할 수 있도록 도와줍니다." />
        </div>
    </Centerlize>;
};

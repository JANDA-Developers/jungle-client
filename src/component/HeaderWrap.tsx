import { JDlogo, toast } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { APPconetxt, Paths } from 'src/App';
import Header from './Header';
interface IProp {
}

export const HeaderWrap: React.FC<IProp> = () => {
    const { me } = useContext(APPconetxt);
    const history = useHistory();

    const handleLogin = () => {
        history.push(Paths.LOGIN)
    }

    const handleLogOut = () => {
        toast("로그아웃");
        localStorage.removeItem("jwt");
        history.push(Paths.LOGIN);
    }

    return <Header
        rightChilds={me?.name || ""}
        leftChilds={<JDlogo />}
        middleChilds={"hool"}
    />
};

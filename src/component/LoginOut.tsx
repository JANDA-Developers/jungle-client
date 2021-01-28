import { JDtypho } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { APPconetxt, Paths } from '../App';

interface IProp { }

export const LogInOut: React.FC<IProp> = () => {
    const { me } = useContext(APPconetxt);
    const history = useHistory();
    const handleLogin = history.push.bind(null, Paths.LOGIN)

    const handleLogout = () => {
        localStorage.removeItem("jwt")
        location.href = location.protocol + '//' + location.host
    }
    
    return <JDtypho hover color="white" onClick={me ? handleLogout : handleLogin}>{me ? "Logout" : "Login"}</JDtypho>
};

import React, { useState } from 'react';
import { JDcard, JDcontainer, JDlogin } from '@janda-com/front';
import { useHistory } from 'react-router-dom';
import { completeMsg } from '../utils/completeMsg';
import { useSignIn } from '../hook/useUser';
import { Paths } from '../App';
import { BackStepBar } from '../component/BackStepBar';
import client from '../apollo/apolloClient';
import { PageLoading } from '../component/PageLoading';

interface IProp {
}

export const Login: React.FC<IProp> = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [loginMu] = useSignIn({
        onCompleted: ({ SignIn }) => {
            if (completeMsg(SignIn, "로그인완료", "로그인실패")) {
                setLoading(true);
                localStorage.setItem("jwt", SignIn.data?.token || "");
                window.history.replaceState({}, "환영합니다", window.origin + "/#/admin/")
                location.reload(true);
            }
        }
    })

    const handleSignInClick = (email: string, pw: string) => {
        loginMu({
            variables: {
                email,
                password: pw
            }
        })
    }

    const handleSignUpClick = () => {
        history.push("/signUp")
    }

    return <JDcontainer verticalPadding>
        {loading && <PageLoading />}
        <BackStepBar mb label="뒤로가기" />
        <JDcard>
            <JDlogin onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
        </JDcard>
    </JDcontainer>;
};


export default Login;
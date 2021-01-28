import React from 'react';
import { SignUpInput } from 'src/type/api';
import { JDcard, JDcontainer, JDsignUpUI } from "@janda-com/front"
import { useHistory } from 'react-router-dom';
import { Paths } from '../App';
import { useSignUp } from '../hook/useUser';
import { BackStepBar } from '../component/BackStepBar';

interface IProp { }

export const SignUp: React.FC<IProp> = () => {
    const history = useHistory();
    const [signUpMu] = useSignUp({
        onCompleted: ({ SignUp }) => {
            if (SignUp.ok) {
                history.push(Paths.LOGIN);
            }
        }
    });

    const handleSignUp = (input: SignUpInput) => {
        signUpMu({
            variables: {
                input
            }
        })
    }

    return <JDcontainer verticalPadding>
        <BackStepBar mb go={Paths.LOGIN} label="로그인 으로" />
        <JDcard>
            <JDsignUpUI onSignUpClick={(info, validate) => {
                const { email, name, num, password } = info;
                if (!validate) return;
                handleSignUp({
                    email,
                    name,
                    phoneNumber: num,
                    password: password
                })
            }} />
        </JDcard>
    </JDcontainer>;
};

export default SignUp;
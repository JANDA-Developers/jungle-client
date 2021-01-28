import { Flex, IUseModal, JDbutton, JDcounter, JDmodal, JDselectCounter, useInput, useModal, useSelect } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React, { useState } from 'react';
import { useUserUpdate } from '../hook/useUser';
import { Fuser } from '../type/api';
import { completeMsg } from '../utils/completeMsg';


export interface IUserModalInfo {
    user: Fuser
}

interface IProp {
    modalHook: IUseModal<IUserModalInfo>
}


export const UserModal: React.FC<IProp> = ({ modalHook }) => {
    const { user } = modalHook.info || {};
    const [update] = useUserUpdate({
        onCompleted: ({ UserUpdate }) => {
            if (completeMsg(UserUpdate, "유저업데이트", "업데이트실패"))
                modalHook.closeModal();
        }
    })
    const emailHook = useInput(user?.email || "");
    const phoneNumberHook = useInput(user?.phoneNumber || "");
    const nameHook = useInput(user?.name || "");
    const [count, setCount] = useState(user?.pageLimit || 0);

    const handleUpdate = () => {
        if (!user) throw Error("USER IS NOT EXSIT");
        update({
            variables: {
                id: user?._id,
                input: {
                    email: emailHook.value,
                    name: nameHook.value,
                    phoneNumber: phoneNumberHook.value,
                    pageLimit: count
                }
            }
        })
    }

    return <JDmodal foot={
        <Flex>
            <JDbutton mr thema="black" mode="flat" onClick={modalHook.closeModal}>
                취소하기
            </JDbutton>
            <JDbutton thema="primary" mode="flat" onClick={handleUpdate}>
                수정하기
            </JDbutton>
        </Flex>
    } head={{ title: `유저${user?.name}의 정보수정` }} {...modalHook}>
        <InputText mb {...emailHook} label="이메일" />
        <InputText mb {...phoneNumberHook} hyphen label="연락처" />
        <InputText mb  {...nameHook} label="성함" />
        <JDcounter label="페이지 제한" maxCount={9} onCount={(flag: boolean) => {
            setCount(count + (flag ? 1 : -1))
        }} count={count} />
    </JDmodal>;
};

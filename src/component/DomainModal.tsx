import { Flex, IUseModal, JDbutton, JDmodal, JDswitch, JDtypho, Small, Tiny, toast, useInput } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React from 'react';
import { useAddDomain } from '../hook/useWebSite';
import { FwebPage } from '../type/api';
import { isDomain } from '../utils/isDomain';

interface IModalInfo {
    page: FwebPage;
}

interface IProp {
    modalHook: IUseModal<IModalInfo>;
}

export const DomainModal: React.FC<IProp> = ({ modalHook }) => {
    const [addDomain, { loading }] = useAddDomain()
    const domainHook = useInput("");
    const page = modalHook.info?.page;
    const handleAddDomain = () => {
        const nextDomain = domainHook.value + ".stayjanda.cloud";
        if (!isDomain(nextDomain)) {
            toast.error("올바른 도메인이 아닙니다.");
        } else {
            addDomain({
                variables: {
                    domain: nextDomain,
                    id: page?._id
                }
            })
        }
    }

    return <JDmodal loading={loading} head={{
        element: <div>
            <JDtypho size="h6">도메인설정하기</JDtypho>
            <Small>주소창에 표시될 값을 지정하세요. (생략해도 좋습니다.)</Small>
        </div>
    }} {...modalHook} >
        <div>
            <JDswitch tooltip="유료도메인은 서비스 개발중 입니다." mb="large" checked={false} ltxt="무료도메인" rtxt="유료도메인" />
            <Flex vCenter>
                <InputText mb="small" {...domainHook} Size="big" placeholder="도메인을 입력해주세요." />
                <JDtypho mb="small" size="h6">.stayjanda.cloud</JDtypho>
            </Flex>
            <Tiny mb="large" color="warn">뛰워쓰기 특수문자 금지 영문만 입력</Tiny>
            <JDbutton onClick={handleAddDomain} mode="flat" thema="primary" size="long" label="완료" />
        </div>
    </JDmodal>;
};

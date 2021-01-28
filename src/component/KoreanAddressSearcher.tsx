import { JDalign, IJDalignProp, JDmodal, useModal } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React, { useState } from 'react';
import DaumPostcode, { AddressData, DaumPostcodeProps } from 'react-daum-postcode';


interface ICompleteData extends AddressData {
    fullAddress: string
}
interface IProps extends DaumPostcodeProps {
    align?: IJDalignProp;
    address: string;
    onComplete: (data: ICompleteData) => void;
}
const KoreanAdressSearcher: React.FC<IProps> = ({ address, align, onComplete, ...props }) => {

    const modalHook = useModal();
    const handleComplete = (data: AddressData) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        onComplete({ ...data, fullAddress })

        fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${data.address}`, {
            headers: {
                Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`
            }
        });
    }

    return (
        <JDalign {...align} className="koreanAddressSearcher">
            <InputText onFocus={modalHook.openModal} value={address} readOnly />
            <JDmodal head={{ title: "도로명 주소 검색" }} {...modalHook}>
                {/* @ts-ignore */}
                <DaumPostcode onComplete={handleComplete} {...props} />
            </JDmodal>
        </JDalign>
    );
}
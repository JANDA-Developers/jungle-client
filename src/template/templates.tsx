import React from "react";
import { TWebPageInfo } from "../utils/pageEdit"
import profileInfo from "./info/profile";
import housemanualInfo from "./info/housemanual";
import itsGuideInfo from "./info/itsGuide";
import sampleInfo from "./info/sampleInfo";
import testInfo from "./info/test";
import hotelInfo from "./info/hotel";
import cafeInfo from "./info/cafe";
import SampleTemplate from "../template/source/SampleTemplate";
import TestTemplate from "../template/source/test/test";
import HotelTemplate from "../template/source/hotel/Hotel";
import CafeTemplate from "../template/source/cafe/Cafe";

import HouseManual from "./source/housemanual/HouseManual";
import Profile from "./source/profile/Profile";
import { TElements } from "@janda-com/front/dist/types/interface";
import { Flex, JDbadge, JDtypho } from "@janda-com/front";
import { JDicon } from "../component/icons/Icons";
import ItsGuide from "./source/itsGuid/ItsGuide";


export enum TemplateKey {
    "Hotel" = "Hotel",
    "Cafe" = "Cafe",
    "test" = "test",
    "Its" = "Its",
    "Profile" = "Profile",
    "HM" = "HM",
    "Foo" = "Foo",
    "Foo2" = "Foo2",
}

export interface ITempalte {
    title: string;
    describe: TElements;
    img: string
    key: TemplateKey;
    value: TWebPageInfo
    View: React.FC<any>
}

export const TEMPLATES: ITempalte[] = [
    {
        title: "숙박",
        describe: <div>
            <JDbadge mb thema="grey4">숙박업</JDbadge>
            숙소 이용에 대한 가이드를 하고 싶을때 숙소 위치와 정보, 긴 설명보다 링크 한번으로 해결 가능
        </div>,
        img: "/assets/img/main_hotel.png",
        key: TemplateKey.Hotel,
        value: hotelInfo,
        View: HotelTemplate
    },
    {
        title: "카페",
        describe: <div>
            <JDbadge mb thema="grey4">카페</JDbadge>
            카페 원페이지 사이트 생성
        </div>,
        img: "/assets/img/main_cafe.png",
        key: TemplateKey.Cafe,
        value: cafeInfo,
        View: CafeTemplate
    },
    {
        title: "잇츠가이더",
        describe: <div>
            <Flex mb>
                <JDbadge mr={"tiny"} mb={"tiny"} thema="black">잇츠가이드</JDbadge>
                <JDbadge mb={"tiny"} thema="error">
                    <JDtypho mr="tiny">연동</JDtypho>
                    <JDicon icon="link" />
                </JDbadge>
            </Flex>
            <div style={{ lineHeight: 1.5 }}>
                잇츠가이더는 잇츠가이드 홈페이지와 연동하여 가이드 상품리뷰를 하고 가이더의 프로필을 소개해주는 서비스 입니다.
            </div>
        </div>,
        img: "/assets/img/itsguide_thumb.jpg",
        key: TemplateKey.Its,
        value: itsGuideInfo,
        View: ItsGuide
    },
    {
        title: "마이프로파일",
        describe: <div><JDbadge mb thema="grey4">포트폴리오</JDbadge>
            나의 소개와 함께, 포트폴리오를 웹에서 전시하고 싶을경우, 포트폴리오 링크를 한곳에 모으고 싶을때
        </div>,
        img: "/assets/img/profile_thumb.jpg",
        key: TemplateKey.Profile,
        value: profileInfo,
        View: Profile
    },
    {
        title: "하우스메뉴얼",
        describe: <div>
            <JDbadge mb thema="grey4">숙박업</JDbadge>
            숙소 이용에 대한 가이드를 하고 싶을때 숙소 위치와 정보, 긴 설명보다 링크 한번으로 해결 가능
        </div>,
        img: "/assets/img/housemanual_thumb.jpg",
        key: TemplateKey.HM,
        value: housemanualInfo,
        View: HouseManual
    },
    // {
    //     title: "갤러리",
    //     describe: <div>
    //         <JDbadge mb thema="grey4">갤러리</JDbadge>
    //         갤러리 형태의 페이지 사진 위주의 페이지를 생성 및 전시 가능
    //     </div>,
    //     img: "/assets/img/gall_thumb.jpg",
    //     key: TemplateKey.Foo,
    //     value: sampleInfo,
    //     View: SampleTemplate
    // },
    
]



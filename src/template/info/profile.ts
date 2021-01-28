

//작성가이드

import { JDinputType } from "../../component/inputRender/InputComponent"
import { SHARED_INFO } from "./shared"


// type 과 description은 필수 값이 아닙니다. 안 적으셔도 되요 
export const PROFILE_INFO =  {
    ...SHARED_INFO,
    profile: {
        description: "프로필 이미지",
        type: JDinputType.img,
        KR: "/template/profile/img/man01.jpg",
        GB: "/template/profile/img/man01.jpg"
    },
    profileName: {
        description: "성함",
        KR: "김행자",
        GB: "Ms kim"
    },
    linkToGuid: {
        description: "프로필 페이지 링크",
        KR: "/",
        GB: "/"
    },
    topBg: {
        description: "최상단 이미지",
        type: JDinputType.img, 
        KR: "별나라호텔",
        GB: "Star Hotel"
    },
    channelTalk: {
        description: "채널톡",
        type: JDinputType.channelTak,
        publickKey: ""
    },
    share: {
        description: "공유하기",
        type: JDinputType.share,
    },    
    tags: {
        description: "태그",
        type: JDinputType.tag,
        KR: ["부산가이드","여성가이드","뚜벅이여행","꽃놀이","버스투어","운전가능","일본어","영어","중국어"],
        GB: ["BusanGuid","WomanGuid","WalkTravel","Flower","Bus","DrivingAble","Japaneses","Chinese"]
    },
    contentTitle: {
        description: "소개글 라벨",
        KR: "소개글",
        GB: "slef introduce"
    },
    content: {
        description: "소개글 내용",
        type: JDinputType.editor,
        KR: `자신의 이력이나 경력 또는 실력 등을 알아볼 수 있도록 자신이 과거에 만든 작품이나 관련 내용 등을 모아 놓은 자료철 또는 자료 묶음, 작품집으로, 실기와 관련된 경력증명서이다. 예술 분야에서 자신의 작업물을 타인에게 증명하기 위해 필수적이다. 대학을 졸업 후 취직을 위해, 이직 시 등등 필요하다. 예전에는 바인더, 클리어파일, 스크랩북 등을 이용하여 어느 정도 손재주가 요구되었으나, 정보통신 기술의 발달로 디스켓이나 CD-ROM·비디오 등을 이용하게 되었고, 블로그 혹은 개인 홈페이지를 이용하여 만드는 경우도 있다. 온라인 포트폴리오의 경우 전송이 쉽고 게시가 간단하다는 장점이 있다. 그러나 보통 회사에 지원할 때 면접시 포트폴리오 지참의 경우도 있기 때문에 
        인쇄물로 완성본을 만든 후에 내용을 추려 온라인 포트폴리오를 구성하는 것이 가장 좋은 방법이다.`,
        GB: ""
    },
    title_guid: {
        KR: "샘플라벨",
        GB: "Sample Label"
    },
    guid_info1_label: {
        KR: "샘플라벨",
        GB: "Sample Label"
    },
    guid_info1_value: {
        KR: "0",
        GB: "0"
    },
    guid_info2_label: {
        KR: "샘플라벨",
        GB: "Sample Label"
    },
    guid_info2_value: {
        KR: "0",
        GB: "0"
    },
    guid_info3_label: {
        KR: "샘플라벨",
        GB: "Sample Label"
    },
    guid_info3_value: {
        KR: "0",
        GB: "0"
    },
    guid_info4_label: {
        KR: "샘플라벨",
        GB: "Sample Label"
    },
    guid_info4_value: {
        KR: "0",
        GB: "0"
    },
    portfolio_label: {
        KR: "포트폴리오",
        GB: "Guid Product"
    },
    portfolio_link_label: {
        KR: "바로가기",
        GB: "portfolios",
        hide: false
    },
    portfolio_link: {
        KR: "/",
        GB: "/",
        hide: false
    },
    alphabet: {
        KR: "G",
        GB: "G"
    },
    portfolioViews:  {
        description: "포트폴리오 목록",
        type: JDinputType.array,
        META: {
            img: {
                description: "포트폴리오 이미지",
                type: JDinputType.img,
                default: "template/profile/img/tem_bg_03.jpg"
            },
            title: {
                description: "타이틀",
                default: ""
            }, 
            link: {
                description: "링크",
                type: JDinputType.link,
                default: ""
            }
        },
        KR: [
            {
                img:"template/profile/img/tem_bg_03.jpg",
                title:"떠나요~ 제주도~ 푸른바다로~", 
                link:""
            },
            {
                img:"template/profile/img/tem_bg_03.jpg",
                title:"떠나요~ 제주도~ 푸른바다로~", 
                link:""
            },
            {
                img:"template/profile/img/tem_bg_03.jpg",
                title:"떠나요~ 제주도~ 푸른바다로~", 
                link:""
            },
            {
                img:"template/profile/img/tem_bg_03.jpg",
                title:"떠나요~ 제주도~ 푸른바다로~", 
                link:""
            },
            {
                img:"template/profile/img/tem_bg_03.jpg",
                title:"떠나요~ 제주도~ 푸른바다로~", 
                link:""
            },
            {img:"template/profile/img/tem_bg_03.jpg", title:"떠나요~ 제주도~ 푸른바다로~", link:""},
        ],
        GB: [
            {img:"template/profile/img/tem_bg_03.jpg", title:"떠나요~ 제주도~ 푸른바다로~", link:""},
            {img:"template/profile/img/tem_bg_03.jpg", title:"떠나요~ 제주도~ 푸른바다로~", link:""},
        ]
    },
    // productView:  {
    //     description: "등록된 상품",
    //     type: JDinputType.share,
    //     KR: [
    //         {img:"", title:"", link:""}
    //     ],
    //     GB: [
    //         {img:"", title:"", link:""}
    //     ]
    // }
}

export default PROFILE_INFO
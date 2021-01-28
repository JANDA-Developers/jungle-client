import { JDinputType } from "../../component/inputRender/InputComponent"
import { SHARED_INFO } from "./shared"

export const HOUSE_MANUAL_INFO = {
    ...SHARED_INFO,
    map_link: {
        description: "지도링크",
        type: JDinputType.link,
        KR: "",
        GB: ""
    },
    check_map: {
        KR: "지도보기",
        GB: "map"
    },
    call: {
        KR: "전화하기",
        GB: "call"
    },
    houseName: {
        description: "숙소명",
        KR: "별나라호텔",
        GB: "Star Hotel"
    },
    subTitle: {
        description: "서브타이틀",
        KR: "안녕하세요. 저희 숙소를 방문해 주셔서 감사합니다. \r\n 저희는 설악산을 끼고 자리잡고 있어서 인근에 온천전문 시설도 많이 있으며, 대규모 스키장 2개를 끼고 위치합니다. 전부 차를 타고 10분거리에 위치해 있습니다. 겨울엑티비티를 즐기기엔 최적입니다.",
        GB: "Thank you for visiting our hotel. \r\n We are located along Seoraksan, so there are many hot spring facilities nearby, and we are located between two large ski resorts. All are located 10 minutes away by car. It is perfect for enjoying winter activities."
    },
    header: {
        description: "헤더이미지",
        type: JDinputType.img,
        KR: "/template/housemanual/img/header_img.jpg",
        GB: "/template/housemanual/img/header_img.jpg"
    },
    houseBg: {
        description: "하우스이미지",
        type: JDinputType.img,
        KR: "/template/housemanual/img/home.jpg",
        GB: "/template/housemanual/img/home.jpg"
    },
    content: {
        description: "내용",
        type: JDinputType.editor,
        KR: `<div style='color: rgb(51, 51, 51); font-family: "Noto Sans KR", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'><h1 style="font-size: 24px; letter-spacing: -0.1rem; margin: 0px 0px 0.67em; font-weight: 300; overflow-wrap: break-word;">편의시설</h1><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">야외 수영장/ 바베큐장/ 자전거 무료대여/ 주차장/ 실내 체육관/ 비즈니스 라운지</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;"><br></p></div><div style='color: rgb(51, 51, 51); font-family: "Noto Sans KR", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'><h1 style="font-size: 24px; letter-spacing: -0.1rem; margin: 0px 0px 0.67em; font-weight: 300; overflow-wrap: break-word;">재활용</h1><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">큰 규모의 재활용 쓰레기는 건물 뒷편에 따로 버려주세요.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;"><br></p></div><div style='color: rgb(51, 51, 51); font-family: "Noto Sans KR", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'><h1 style="font-size: 24px; letter-spacing: -0.1rem; margin: 0px 0px 0.67em; font-weight: 300; overflow-wrap: break-word;">안전</h1><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">개인의 안전을 위해서 외출시엔 베란다 창문을 잠그고 외출해 주세요.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">실내에서는 촛불을 키거나 개인 난방기구를 사용을 하지 말아주세요.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">숙소 근처에서 불꽃 놀이는 금지입니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;"><br></p></div><div style='color: rgb(51, 51, 51); font-family: "Noto Sans KR", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'><h1 style="font-size: 24px; letter-spacing: -0.1rem; margin: 0px 0px 0.67em; font-weight: 300; overflow-wrap: break-word;">객실사용 유의사항</h1><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 전 객실 금연입니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 오후 10시 이후의 입실은 사전에 반드시 연락주시기 바랍니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 미성년자 혼숙불가합니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 비즈니스 라운지 노트북 이용가능합니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 객실호수는 현장에서 체크인시 랜덤배정됩니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 집기파손시에는 호텔 프론트에 알려주시기 바랍니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 애완견 동반입실 불가하며 입실 제한, 환불불가합니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 초,폭죽,불꽃놀이 및 풍선은 안전과 소음으로 인해 금지하오니 양해 바랍니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 모든 객실은 개인의 취향을 고려하여 다양한 디자인으로 구성되어 있습니다. 따라서 객실이미지와 배정된 객실은 인테리어가 상이할 수 있습니다.</p></div>`,
        GB: `<div style='color: rgb(51, 51, 51); font-family: "Noto Sans KR", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'><h1 style="font-size: 24px; letter-spacing: -0.1rem; margin: 0px 0px 0.67em; font-weight: 300; overflow-wrap: break-word;">편의시설</h1><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">야외 수영장/ 바베큐장/ 자전거 무료대여/ 주차장/ 실내 체육관/ 비즈니스 라운지</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;"><br></p></div><div style='color: rgb(51, 51, 51); font-family: "Noto Sans KR", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'><h1 style="font-size: 24px; letter-spacing: -0.1rem; margin: 0px 0px 0.67em; font-weight: 300; overflow-wrap: break-word;">재활용</h1><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">큰 규모의 재활용 쓰레기는 건물 뒷편에 따로 버려주세요.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;"><br></p></div><div style='color: rgb(51, 51, 51); font-family: "Noto Sans KR", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'><h1 style="font-size: 24px; letter-spacing: -0.1rem; margin: 0px 0px 0.67em; font-weight: 300; overflow-wrap: break-word;">안전</h1><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">개인의 안전을 위해서 외출시엔 베란다 창문을 잠그고 외출해 주세요.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">실내에서는 촛불을 키거나 개인 난방기구를 사용을 하지 말아주세요.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">숙소 근처에서 불꽃 놀이는 금지입니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;"><br></p></div><div style='color: rgb(51, 51, 51); font-family: "Noto Sans KR", sans-serif; font-size: 20px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'><h1 style="font-size: 24px; letter-spacing: -0.1rem; margin: 0px 0px 0.67em; font-weight: 300; overflow-wrap: break-word;">객실사용 유의사항</h1><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 전 객실 금연입니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 오후 10시 이후의 입실은 사전에 반드시 연락주시기 바랍니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 미성년자 혼숙불가합니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 비즈니스 라운지 노트북 이용가능합니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 객실호수는 현장에서 체크인시 랜덤배정됩니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 집기파손시에는 호텔 프론트에 알려주시기 바랍니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 애완견 동반입실 불가하며 입실 제한, 환불불가합니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 초,폭죽,불꽃놀이 및 풍선은 안전과 소음으로 인해 금지하오니 양해 바랍니다.</p><p style="margin: 0px; line-height: 1.5; padding: 0px 15px;">- 모든 객실은 개인의 취향을 고려하여 다양한 디자인으로 구성되어 있습니다. 따라서 객실이미지와 배정된 객실은 인테리어가 상이할 수 있습니다.</p></div>`
    },
    detail__title: {
        description: "숙소정보 라벨",
        KR: "숙소정보",
        GB: "House Info"
    },
    address_label: {
        KR: "주소",
        GB: "Address"
    },
    contact_label: {
        KR: "연락처",
        GB: "Contact"
    },
    checkIn_label: {
        KR: "체크인",
        GB: "Contact"
    },
    checkOut_label: {
        KR: "체크아웃",
        GB: "Contact"
    },
    wifi_label: {
        KR: "와이파이",
        GB: "Wifi"
    },
    detail_address: {
        description: "주소",
        KR: "강원도 인제군 인제읍 귀둔리 산242",
        GB: "English Address"
    },
    house_contact: {
        description: "체크인 시간",
        KR: "AM 10:00 ",
        GB: "Check in out "
    },
    check_in_time: {
        description: "체크인 시간",
        KR: "AM 10:00 ",
        GB: "Check in time is "
    },
    check_out_time: {
        description: "체크아웃 시간",
        KR: "AM 10:00 ",
        GB: "Check out time is "
    },
    wifi: {
        description: "체크인 시간",
        KR: "별나라호텔 (PW : star000000 )",
        GB: "Start hotel (PW : star000000 )"
    },
    tour__title: {
        description: "주변 관광지 라벨",
        KR: "주변 관광지",
        GB: "Nearby attractions"
    },
    channelTalk: {
        description: "채널톡",
        type: JDinputType.channelTak,
        publickKey: "",
        get KR() { return this.publickKey},
        get GB() { return this.publickKey},
    },
    tourList: {
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
            desc: {
                description: "링크",
                type: JDinputType.link,
                default: ""
            }
        },
        KR: [
            {
                img: "/template/housemanual/img/ski_img.png",
                title: "지리산 스키장",
                desc: "강원도 인제군 인제읍 귀둔리 \r\n 123 000-0000-0000"
            },
            {
                img: "/template/profile/img/tem_bg_03.jpg",
                title: "지리산 온천지국",
                desc: "강원도 인제군 인제읍 귀둔리 2 \r\n 000-0000-0000"
            },
        ],
        GB: [
            {
                img: "/template/housemanual/img/ski_img.png",
                title: "Ski",
                desc: "Address \r\n 000-0000-0000"
            },
            {
                img: "/template/profile/img/tem_bg_03.jpg",
                title: "Spa",
                desc: "Address \r\n 000-0000-0000"
            },
        ]
    },
}

export default HOUSE_MANUAL_INFO
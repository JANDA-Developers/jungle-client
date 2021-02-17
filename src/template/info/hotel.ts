import { JDinputType } from "src/component/inputRender/InputComponent"
import { SHARED_INFO2 } from "./shared"

export const HOTEL_INFO = {
    ...SHARED_INFO2,

    commonInfo_notice : {
        type: JDinputType.notice,
        description: "이미지는 1mb 이하의 이미지를 사용하여 주십시요 용량이 큰 이미지는 페이지 로딩 속도를 저하시킵니다",
    },

    
    /* :::::::::::: Solution Info :::::::::::: */
    
    // bookingKey_use : {
    //     type: JDinputType.switch,
    //     description: "잔다 솔루션 사용 여부 [ 준비중입니다 ]",
    //     value: false
    // },

    bookingKey: {
        description: "잔다 솔루션 링크 [ 준비중인 기능입니다 ]",
        value: "준비중입니다"
    },


    /* :::::::::::: Common :::::::::::: */

    commonInfo_startline : {
        type: JDinputType.line,
        description: "공통 정보",
    },

    commonInfo_colour : {
        type: JDinputType.colour,
        description: "공통 부분 색상 설정",
        value:"#C19B76",
    },

    commonInfo_companyName : {
        description: "업체명",
        value:"홈페이지명",
    },

    commonInfo_companyDesc : {
        description: "업체 설명",
        value:"홈페이지 바로가기",
    },

    commonInfo_img : {
        type: JDinputType.img,
        description: "업체 대표 이미지",
        value:"/assets/img/hotel/section1/mee00685.jpg"
    },

    commonInfo_favicon : {
        type: JDinputType.img,
        description: "파비콘 이미지 [ 일반 이미지가 아닌 파비콘 이미지로 업데이트 하셔야 합니다 ]",
        value:"/favicon.ico"
    },


    /* :::::::::::: Section 1 :::::::::::: */

    section1_startline : {
        type: JDinputType.line,
        description: "섹션 1",
    },

    section1_array: {
        description: "섹션 1 슬라이드 리스트",
        type: JDinputType.array,
        META: {
            img: {
                description: "슬라이드 이미지",
                type: JDinputType.img,
                default: ""
            },
            text1: {
                description: "슬라이드 타이틀",
                default: ""
            },
            text2: {
                description: "슬라이드 내용",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/hotel/section1/living_room.jpg",
                    text1: "편안한 침실",
                    text2: "저희 시설을 이용하시는 고객을 위한 최고급 침실",
                },
                {
                    img: "/assets/img/hotel/section1/mee00685.jpg",
                    text1: "쾌적한 환경",
                    text2: "Janda Leisure는 쾌적한 공간을 만들기 위해 최선을 다합니다",
                },
                {
                    img: "/assets/img/hotel/section1/facility.jpg",
                    text1: "럭셔리한 공간",
                    text2: "저희 시설을 이용하시는 고객을 위한 최고급 침실",
                }
        ],
        GB: [
                {
                    img: "/assets/img/hotel/section1/living_room.jpg",
                    text1: "Eng 편안한 침실",
                    text2: "Eng 저희 시설을 이용하시는 고객을 위한 최고급 침실",
                },
                {
                    img: "/assets/img/hotel/section1/mee00685.jpg",
                    text1: "Eng 쾌적한 환경",
                    text2: "Eng Janda Leisure는 쾌적한 공간을 만들기 위해 최선을 다합니다",
                },
                {
                    img: "/assets/img/hotel/section1/facility.jpg",
                    text1: "Eng 럭셔리한 공간",
                    text2: "Eng 저희 시설을 이용하시는 고객을 위한 최고급 침실",
                },
        ]
    },


    /* :::::::::::: Section 2 :::::::::::: */

    section2_startline : {
        type: JDinputType.line,
        description: "섹션 2",
    },

    section2_text1 : {
        description: "섹션 2 텍스트 1",
        KR: "Janda Spa",
        GB: "Janda Spa"
    },

    section2_text2 : {
        description: "섹션 2 텍스트 2",
        KR: "럭셔리한 공간",
        GB: "Luxurious place"
    },

    section2_text3 : {
        description: "섹션 2 텍스트 3",
        KR: "탁 트인 바다를 바라보며 즐기는 스파는 일상에 지친 몸과 마음을 따뜻하게 녹여줍니다. Janda Stay에서 사랑하는 가족, 연인 그리고 친구들과 함께 여유로운 시간을 가져보세요.",
        GB: "Eng 탁 트인 바다를 바라보며 즐기는 스파는 일상에 지친 몸과 마음을 따뜻하게 녹여줍니다. Janda Stay에서 사랑하는 가족, 연인 그리고 친구들과 함께 여유로운 시간을 가져보세요."
    },

    section2_btn_text : {
        description: "섹션 2 버튼 텍스트",
        KR: "About",
        GB: "About"
    },

    section2_btn_link : {
        description: "섹션 2 버튼 링크",
        value:"https://www.instagram.com/",
    },

    section2_img1 : {
        type: JDinputType.img,
        description: "섹션 2 이미지 1",
        value:"/assets/img/hotel/section2/living_room.jpg"
    },
       
    section2_img2 : {
        type: JDinputType.img,
        description: "섹션 2 이미지 2",
        value:"/assets/img/hotel/section2/pc001010632.jpg"
    },

    /* :::::::::::: Section 3 :::::::::::: */

    section3_startline : {
        type: JDinputType.line,
        description: "섹션 3",
    },

    section3_use : {
        type: JDinputType.switch,
        description: "섹션 3 - 사용여부",
        value: true
    },

    section3_title : {
        description: "섹션 3 타이틀",
        KR: "Janda Stay",
        GB: "Janda Stay"
    },
    
    section3_subtitle : {
        description: "섹션 3 서브 타이틀",
        KR: "Best rooms",
        GB: "Rooms"
    },


    section3_room1_img : {
        type: JDinputType.img,
        description: "섹션 3 방 1 - 이미지",
        value: "/assets/img/hotel/section3/living_room.jpg",
    },

    section3_room1_name : {
        description: "섹션 3 방 1 - 이름",
        KR: "프라이빗 패밀리 룸",
        GB: "Private Family Room"
    },

    section3_room1_desc : {
        description: "섹션 3 방 1 - 설명",
        KR: "자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다.",
        GB: "Eng 자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다."
    },

    // section3_room1_link : {
    //     description: "섹션 3 방 1 - 링크",
    //     value: "/",
    // },

    section3_room2_img : {
        type: JDinputType.img,
        description: "섹션 3 방 2 - 이미지",
        value: "/assets/img/hotel/section3/pc002250323.jpg",
    },
    
    section3_room2_name : {
        description: "섹션 3 방 2 - 이름",
        KR: "프라이빗 패밀리 룸",
        GB: "Private Family Room"
    },
    
    section3_room2_desc : {
        description: "섹션 3 방 2 - 설명",
        KR: "자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다.",
        GB: "Eng 자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다."
    },
    
    // section3_room2_link : {
    //     description: "섹션 3 방 2 - 링크",
    //     value: "/",
    // },
    
    section3_room3_img : {
        type: JDinputType.img,
        description: "섹션 3 방 3 - 이미지",
        value: "/assets/img/hotel/section3/pc003257767.jpg",
    },
    
    section3_room3_name : {
        description: "섹션 3 방 3 - 이름",
        KR: "스탠다드 더블 룸",
        GB: "Stadard Double Room"
    },
    
    section3_room3_desc : {
        description: "섹션 3 방 3 - 설명",
        KR: "자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다.",
        GB: "Eng 자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다."
    },
    
    // section3_room3_link : {
    //     description: "섹션 3 방 3 - 링크",
    //     value: "/",
    // },

    section3_room4_img : {
        type: JDinputType.img,
        description: "섹션 3 방 4 - 이미지",
        value: "/assets/img/hotel/section3/facility.jpg",
    },
    
    section3_room4_name : {
        description: "섹션 3 방 4 - 이름",
        KR: "럭셔리 더블룸 A",
        GB: "Luxury Double Room A"
    },
    
    section3_room4_desc : {
        description: "섹션 3 방 4 - 설명",
        KR: "자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다.",
        GB: "Eng 자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다."
    },
    
    // section3_room4_link : {
    //     description: "섹션 3 방 4 - 링크",
    //     value: "/",
    // },

    
    section3_room5_img : {
        type: JDinputType.img,
        description: "섹션 3 방 5 - 이미지",
        value: "/assets/img/hotel/section3/cb107018752.jpg",
    },
    
    section3_room5_name : {
        description: "섹션 3 방 5 - 이름",
        KR: "럭셔리 더블룸 B",
        GB: "Luxury Double Room B"
    },
    
    section3_room5_desc : {
        description: "섹션 3 방 5 - 설명",
        KR: "자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다.",
        GB: "Eng 자연과 함께하는 공간,프라이빗 패밀리 룸은 프라이빗한 테라스와 큰 창으로 자연 풍경을 만끽하며, 가족들과 함께 편안한 휴식을 즐길 수 있습니다."
    },
    
    // section3_room5_link : {
    //     description: "섹션 3 방 5 - 링크",
    //     value: "/",
    // },


    /* :::::::::::: Section 4 :::::::::::: */

    
    section4_startline : {
        type: JDinputType.line,
        description: "섹션 4",
    },

    section4_use : {
        type: JDinputType.switch,
        description: "섹션 4 - 사용여부",
        value: true
    },

    section4_name : {
        description: "섹션 4 - 숙소명",
        KR: "LUXURY HOTEL & BEST RESORT",
        GB: "Eng LUXURY HOTEL & BEST RESORT"
    },

    section4_btn : {
        description: "섹션 4 - 버튼명",
        KR: "More Details",
        GB: "More Details"
    },

    section4_bookLink : {
        description: "섹션 4 - 버튼 링크",
        KR: "/a",
        GB: "/a"
    },

    section4_array: {
        description: "Section 4 방 목록",
        type: JDinputType.array,
        META: {
            img: {
                description: "방 이미지",
                type: JDinputType.img,
                default: ""
            },
            title: {
                description: "숙소 이름",
                default: ""
            },
            name: {
                description: "숙소 방이름",
                default: ""
            },
            desc: {
                description: "방 설명",
                default: ""
            },
            btn: {
                description: "버튼명",
                default: ""
            },
            link: {
                description: "링크",
                default: ""
            },
          
        },
        KR: [
                {
                    img: "/assets/img/hotel/section3/pc003257767.jpg",
                    title:"LUXURY HOTEL & BEST RESORT",
                    name: "프라이빗 패밀리 룸 1",
                    desc: "1 Janda Stay는 아름다운 오션뷰와 따뜻한 포레스트 뷰를 누릴 수 있는 공간입니다. 자연과 함께하는 여행지에서의 최고의 추억을 위해 언제나 최상의 서비스를 제공합니다.",
                    btn:"More Details",
                    link:"",
                },
                {
                    img: "/assets/img/hotel/section3/cb107018752.jpg",
                    title:"LUXURY HOTEL & BEST RESORT",
                    name: "프라이빗 패밀리 룸 2",
                    desc: "2 Janda Stay는 아름다운 오션뷰와 따뜻한 포레스트 뷰를 누릴 수 있는 공간입니다. 자연과 함께하는 여행지에서의 최고의 추억을 위해 언제나 최상의 서비스를 제공합니다.",
                    btn:"More Details",
                    link:"",
                },
                {
                    img: "/assets/img/hotel/section3/pc003257767.jpg",
                    title:"LUXURY HOTEL & BEST RESORT",
                    name: "프라이빗 패밀리 룸 3",
                    desc: "3 Janda Stay는 아름다운 오션뷰와 따뜻한 포레스트 뷰를 누릴 수 있는 공간입니다. 자연과 함께하는 여행지에서의 최고의 추억을 위해 언제나 최상의 서비스를 제공합니다.",
                    btn:"More Details",
                    link:"",
                }
        ],
        GB: [
                {
                    img: "/assets/img/hotel/section3/pc003257767.jpg",
                    title:"LUXURY HOTEL & BEST RESORT",
                    name: "En 프라이빗 패밀리 룸 1",
                    desc: "1 Janda Stay는 아름다운 오션뷰와 따뜻한 포레스트 뷰를 누릴 수 있는 공간입니다. 자연과 함께하는 여행지에서의 최고의 추억을 위해 언제나 최상의 서비스를 제공합니다.",
                    btn:"More Details",
                    link:"",
                },
                {
                    img: "/assets/img/hotel/section3/cb107018752.jpg",
                    title:"LUXURY HOTEL & BEST RESORT",
                    name: "En 프라이빗 패밀리 룸 2",
                    desc: "2 Janda Stay는 아름다운 오션뷰와 따뜻한 포레스트 뷰를 누릴 수 있는 공간입니다. 자연과 함께하는 여행지에서의 최고의 추억을 위해 언제나 최상의 서비스를 제공합니다.",
                    btn:"More Details",
                    link:"",
                },
                {
                    img: "/assets/img/hotel/section3/pc003257767.jpg",
                    title:"LUXURY HOTEL & BEST RESORT",
                    name: "En 프라이빗 패밀리 룸 3",
                    desc: "3 Janda Stay는 아름다운 오션뷰와 따뜻한 포레스트 뷰를 누릴 수 있는 공간입니다. 자연과 함께하는 여행지에서의 최고의 추억을 위해 언제나 최상의 서비스를 제공합니다.",
                    btn:"More Details",
                    link:"",
                }
        ]
    },

    section4_img : {
        type: JDinputType.img,
        description: "섹션 4 - 이미지",
        value: "/assets/img/hotel/section4/pc003272645.jpg",
    },
    
    section4_text1 : {
        description: "섹션 4 - 텍스트 1",
        KR: "LUXURY HOTEL & BEST RESORT",
        GB: "Eng LUXURY HOTEL & BEST RESORT"
    },

    section4_text2 : {
        description: "섹션 4 - 텍스트 2",
        KR: "space with nature",
        GB: "Eng space with nature"
    },

    section4_text3 : {
        description: "섹션 4 - 텍스트 3",
        KR: "Janda Stay는 아름다운 오션뷰와 따뜻한 포레스트 뷰를 누릴 수 있는 공간입니다. 자연과 함께하는 여행지에서의 최고의 추억을 위해 언제나 최상의 서비스를 제공합니다.",
        GB: "Eng Janda Stay는 아름다운 오션뷰와 따뜻한 포레스트 뷰를 누릴 수 있는 공간입니다. 자연과 함께하는 여행지에서의 최고의 추억을 위해 언제나 최상의 서비스를 제공합니다."
    },

    section4_btnLink : {
        description: "섹션 4 - 버튼 링크",
        value: "/",
    },

    section4_btnText : {
        description: "섹션 4 - 버튼 텍스트",
        KR: "More Details",
        GB: "More Details"
    },


    /* :::::::::::: Section 5 :::::::::::: */

    section5_startline : {
        type: JDinputType.line,
        description: "섹션 5",
    },

    section5_use : {
        type: JDinputType.switch,
        description: "섹션 5 - 사용여부",
        value: true
    },

    section5_title : {
        description: "섹션 5 - 타이틀",
        KR: "소중한 사람과 함께 할 수 있는 곳 <br> 자연이 살아 숨쉬는 공간, Janda Stay로 여러분을 초대합니다",
        GB: "Eng 소중한 사람과 함께 할 수 있는 곳 <br> 자연이 살아 숨쉬는 공간, Janda Stay로 여러분을 초대합니다"
    },

    section5_btnText : {
        description: "섹션 5 - 버튼 텍스트",
        KR: "Detail",
        GB: "Detail",
    },

    section5_block1_img : {
        type: JDinputType.img,
        description: "섹션 5 - 블록1 - 이미지",
        value: "/assets/img/hotel/pc001010632.jpg",
    },

    section5_block1_text1 : {
        description: "섹션 5 - 블록1 - 텍스트 1",
        KR: "JANDA STAY",
        GB: "Eng JANDA STAY",
    },

    section5_block1_text2 : {
        description: "섹션 5 - 블록1 - 텍스트 2",
        KR: "럭셔리한 풀빌라",
        GB: "Eng 럭셔리한 풀빌라",
    },

    section5_block1_text3 : {
        description: "섹션 5 - 블록1 - 텍스트 3",
        KR: "바다와 맞닿아 있는 풀빌라는, 외국에 있는듯한 여유로운 시간을 선사합니다. 풀 사이드에 준비된 베드에서 낮잠을 즐겨보세요.",
        GB: "Eng 바다와 맞닿아 있는 풀빌라는, 외국에 있는듯한 여유로운 시간을 선사합니다. 풀 사이드에 준비된 베드에서 낮잠을 즐겨보세요.",
    },

    section5_block1_link : {
        description: "섹션 5 - 블록1 - 링크",
        value: "/",
    },

    section5_block2_img : {
        type: JDinputType.img,
        description: "섹션 5 - 블록2 - 이미지",
        value: "/assets/img/hotel/cm26009851.jpg",
    },
    
    section5_block2_text1 : {
        description: "섹션 5 - 블록2 - 텍스트 1",
        KR: "JANDA STAY",
        GB: "Eng JANDA STAY",
    },
    
    section5_block2_text2 : {
        description: "섹션 5 - 블록2 - 텍스트 2",
        KR: "탁 트인 전망",
        GB: "Eng 탁 트인 전망",
    },
    
    section5_block2_text3 : {
        description: "섹션 5 - 블록2 - 텍스트 3",
        KR: "Janda Stay 최상층에는 탁 트인 전망을 볼 수 있는 라운지가 위치하고 있습니다. 바다를 내려다보며 여행지의 설렘과 여유로움을 만끽해보세요.",
        GB: "Eng Janda Stay 최상층에는 탁 트인 전망을 볼 수 있는 라운지가 위치하고 있습니다. 바다를 내려다보며 여행지의 설렘과 여유로움을 만끽해보세요.",
    },
    
    section5_block2_link : {
        description: "섹션 5 - 블록2 - 링크",
        value: "/",
    },

    

    /* :::::::::::: Section 6 :::::::::::: */

    section6_startline : {
        type: JDinputType.line,
        description: "섹션 6",
    },


    section6_img : {
        type: JDinputType.img,
        description: "섹션 6 - 이미지",
        value: "/assets/img/hotel/section2/living_room.jpg",
    },

    section6_text1 : {
        description: "섹션 6 - 텍스트 1",
        KR: "소중한 사람들과 함께 하는곳<br>JANDA STAY",
        GB: "Eng 소중한 사람들과 함께 하는곳<br>JANDA STAY",
    },

    section6_text2 : {
        description: "섹션 6 - 텍스트 2",
        KR: "LUXURY HOTEL & BEST RESORT",
        GB: "LUXURY HOTEL & BEST RESORT",
    },


    /* :::::::::::: Footer top :::::::::::: */

    footerTop_startline : {
        type: JDinputType.line,
        description: "푸터 상단 섹션",
    },

    footerTop_block1_text1 : {
        description: "푸터 상단 - 블록 1 - Text 1",
        KR: "AM 00:00 ~ PM 24:00",
        GB: "Eng AM 00:00 ~ PM 24:00",
    },

    footerTop_block1_text2 : {
        description: "푸터 상단 - 블록 1 - Text 2",
        KR: "상담시간",
        GB: "Eng 상담시간",
    },

    footerTop_block2_text1 : {
        description: "푸터 상단 - 블록 2 - Text 1",
        KR: "서울시 강남구 신사동 000",
        GB: "Eng 서울시 강남구 신사동 000",
    },

    footerTop_block2_text2 : {
        description: "푸터 상단 - 블록 2 - Text 2",
        KR: "주소",
        GB: "Eng 주소",
    },

    footerTop_block3_text1 : {
        description: "푸터 상단 - 블록 3 - Text 1",
        KR: "011-111-2222",
        GB: "Eng 011-111-2222",
    },

    footerTop_block3_text2 : {
        description: "푸터 상단 - 블록 3 - Text 2",
        KR: "예약 전화",
        GB: "Eng 예약 전화",
    },
    
    footerTop_block4_text2 : {
        description: "푸터 상단 - 소셜미디어 텍스트",
        KR: "소셜미디어",
        GB: "Eng 소셜미디어",
    },

    footerTop_block4_icon1 : {
        type: JDinputType.img,
        description: "푸터 상단 - 아이콘 1",
        value: "/assets/img/common/instagram.png",
    },

    footerTop_block4_icon1_link : {
        description: "푸터 상단 - 아이콘 1 링크",
        value: "https://www.instagram.com/",
    },

    footerTop_block4_icon2_use : {
        type: JDinputType.switch,
        description: "푸터 상단 - 아이콘 2 - 사용여부",
        value: true
    },

    footerTop_block4_icon2 : {
        type: JDinputType.img,
        description: "푸터 상단 - 아이콘 2",
        value: "/assets/img/common/facebook.png"
    },

    footerTop_block4_icon2_link : {
        description: "푸터 상단 - 아이콘 2 링크",
        value: "https://www.facebook.com/"
    },

    footerTop_block4_icon3_use : {
        type: JDinputType.switch,
        description: "푸터 상단 - 아이콘 3 - 사용여부",
        value: true
    },

    footerTop_block4_icon3 : {
        type: JDinputType.img,
        description: "푸터 상단 - 아이콘 3",
        value: "/assets/img/common/naver.png"
    },

    footerTop_block4_icon3_link : {
        description: "푸터 상단 - 아이콘 3 링크",
        value: "https://www.naver.com/"
    },





    /* :::::::::::: Footer :::::::::::: */

    footer_startline : {
        type: JDinputType.line,
        description: "푸터 섹션",
    },

    footer_logo : {
        description: "푸터 - 업체명",
        KR: "JANDA",
        GB: "Eng JANDA",
    },

    footer_copyright : {
        description: "푸터 - Copyrights",
        KR: "Copyrights © stayjanda.com All Rights Reserved",
        GB: "Eng Copyrights © stayjanda.com All Rights Reserved",
    },


}

export default HOTEL_INFO


// 첫번재
// 서브 도메인(공짜) 
// abb. error.message = 중복이다.

// try {

// } catch (e) {
//     e.message == 주복이다.
//     alert("중복입니다.")
// }


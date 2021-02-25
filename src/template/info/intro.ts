import { JDinputType } from "src/component/inputRender/InputComponent"
import { SHARED_INFO2 } from "./shared"

export const INTRO_INFO = {
    ...SHARED_INFO2,

    commonInfo_warning : {
        type: JDinputType.warning,
        description: "기본적으로 템플릿에 설정된 이미지들은 상업용으로 사용하실 수 없습니다. 반드시 다른 이미지로 변경하여 사용하여 주십시요",
    },

    commonInfo_notice : {
        type: JDinputType.notice,
        description: "이미지는 1mb 이하의 이미지를 사용하여 주십시요. 용량이 큰 이미지는 페이지 로딩 속도를 저하시킵니다",
    },

    /* :::::::::::: Solution Info :::::::::::: */
    
    // bookingKey_use : {
    //     type: JDinputType.switch,
    //     description: "잔다 솔루션 사용 여부",
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
        value:"#338f3f",
    },

    commonInfo_companyName : {
        description: "업체명",
        value:"홈페이지",
    },

    commonInfo_companyDesc : {
        description: "업체 설명",
        value:"홈페이지 바로가기",
    },

    commonInfo_img : {
        type: JDinputType.img,
        description: "업체 대표 이미지",
        value:"/assets/img/cafe/pc002276763.jpg"
    },
    
    commonInfo_favicon : {
        type: JDinputType.img,
        description: "파비콘 이미지 [ 일반 이미지가 아닌 파비콘 이미지로 업데이트 하셔야 합니다 ]",
        value:"/favicon.ico"
    },


    /* :::::::::::: Header :::::::::::: */

    header_logo : {
        description: "헤더 로고 이미지",
        type: JDinputType.img,
        value: "/assets/img/intro/logo.png",
    },

    header_logo_text1 : {
        description: "헤더 로고 텍스트 1",
        KR: "Janda Space",
        GB: "Eng Janda Space"
    },

    header_logo_text2 : {
        description: "헤더 로고 텍스트 2",
        KR: "THE BEST SHARED OFFFICE SPACE",
        GB: "Eng THE BEST SHARED OFFFICE SPACE"
    },

    header_contact : {
        description: "헤더 컨텍트",
        KR: "Contact US : 000-1111-2222",
        GB: "Eng Contact US : 000-1111-2222"
    },

    social_1_img : {
        description: "소셜 미디어 1 이미지",
        type: JDinputType.img,
        value: "/assets/img/intro/facebook.png",
    },

    social_1_link : {
        description: "소셜 미디어 1 링크",
        value:"/",
    },

    social_2_img : {
        description: "소셜 미디어 2 이미지",
        type: JDinputType.img,
        value: "/assets/img/intro/instagram.png",
    },
    
    social_2_link : {
        description: "/",
        value:"/",
    },

    social_3_img : {
        description: "소셜 미디어 3 이미지",
        type: JDinputType.img,
        value: "/assets/img/intro/naver.png",
    },

    social_3_link : {
        description: "소셜 미디어 3 링크",
        value:"/",
    },



    /* :::::::::::: Section 1 :::::::::::: */

    section1_startline : {
        type: JDinputType.line,
        description: "섹션 1",
    },

    section1_array: {
        description: "섹션1 슬라이드 리스트",
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
                description: "슬라이드 내용1",
                default: ""
            },
            text3: {
                description: "슬라이드 내용2",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/intro/yaytg109251.jpg",
                    text1: "Best place for creative minds",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                },
                {
                    img: "/assets/img/intro/cm08298050.jpg",
                    text1: "Meet Creatove People",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                },
                {
                    img: "/assets/img/intro/pc001008766.jpg",
                    text1: "The best shared place",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                }
        ],
        GB: [
                {
                    img: "/assets/img/intro/yaytg109251.jpg",
                    text1: "Best place for creative minds",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                },
                {
                    img: "/assets/img/intro/cm08298050.jpg",
                    text1: "Meet Creatove People",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                },
                {
                    img: "/assets/img/intro/pc001008766.jpg",
                    text1: "The best shared place",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                }
        ]
    },


    /* :::::::::::: Section 2 :::::::::::: */

    section2_startline : {
        type: JDinputType.line,
        description: "섹션 2",
    },

    section2_btn_use : {
        type: JDinputType.switch,
        description: "섹션 2 버튼 사용여부 ",
        value: true
    },

    section2_btn_text : {
        description: "섹션 2 - 버튼 텍스트",
        KR: "Reservation",
        GB: "Eng Reservation"
    },

    section2_array: {
        description: "섹션1 슬라이드 리스트",
        type: JDinputType.array,
        META: {
            img: {
                description: "슬라이드 이미지",
                type: JDinputType.img,
                default: ""
            },
            imgPos: {
                description: "슬라이드 이미지 X축 위치",
                default: "50"
            },
            text1: {
                description: "슬라이드 타이틀",
                default: ""
            },
            text2: {
                description: "슬라이드 내용1",
                default: ""
            },
            text3: {
                description: "슬라이드 내용2",
                default: ""
            },
            btnLink: {
                description: "버튼 링크",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/intro/yaytg109251.jpg",
                    imgPos: "20",
                    text1: "OFFICE A_",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    btnLink:"/",
                },
                {
                    img: "/assets/img/intro/cm08298050.jpg",
                    imgPos: "20",
                    text1: "OFFICE B_",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    btnLink:"/",
                },
                {
                    img: "/assets/img/intro/pc001008766.jpg",
                    imgPos: "20",
                    text1: "OFFICE C_",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    btnLink:"/",
                }
        ],
        GB: [
                {
                    img: "/assets/img/intro/yaytg109251.jpg",
                    imgPos: "20",
                    text1: "OFFICE A_",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    btnLink:"/",
                },
                {
                    img: "/assets/img/intro/cm08298050.jpg",
                    imgPos: "20",
                    text1: "OFFICE B_",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    btnLink:"/",
                },
                {
                    img: "/assets/img/intro/pc001008766.jpg",
                    imgPos: "20",
                    text1: "OFFICE C_",
                    text2: "Creative Place for creative minds",
                    text3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    btnLink:"/",
                }
        ]
    },


    /* :::::::::::: Section 3 :::::::::::: */

    section3_startline : {
        type: JDinputType.line,
        description: "섹션 3",
    },

    section3_title : {
        description: "섹션 3 - 타이틀",
        KR: "JANDA OFFICE",
        GB: "Eng JANDA OFFICE"
    },

    section3_subtitle : {
        description: "섹션 3 - 서브 타이틀",
        KR: "The Best Office Facilities",
        GB: "Eng The Best Office Facilities"
    },

    section3_desc : {
        description: "섹션 3 - 내용",
        KR: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
        GB: "Eng Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
    },

    
    section3_array: {
        description: "섹션1 슬라이드 리스트",
        type: JDinputType.array,
        META: {
            img: {
                description: "슬라이드 이미지",
                type: JDinputType.img,
                default: ""
            },
            imgPos: {
                description: "슬라이드 이미지 X축 위치",
                default: "50"
            },
            title: {
                description: "슬라이드 타이틀",
                default: ""
            },
            text: {
                description: "슬라이드 내용",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/intro/yaytg109251.jpg",
                    imgPos: "50",
                    title: "OFFICE A_",
                    text: "Creative Place for creative minds",
                },
                {
                    img: "/assets/img/intro/cm08298050.jpg",
                    imgPos: "50",
                    title: "OFFICE B_",
                    text: "Creative Place for creative minds",
                },
                {
                    img: "/assets/img/intro/pc001008766.jpg",
                    imgPos: "50",
                    title: "OFFICE C_",
                    text: "Creative Place for creative minds",
                },
                {
                    img: "/assets/img/intro/cm08298050.jpg",
                    imgPos: "50",
                    title: "OFFICE A_",
                    text: "Creative Place for creative minds",
                },
                {
                    img: "/assets/img/intro/pc001008766.jpg",
                    imgPos: "50",
                    title: "OFFICE B_",
                    text: "Creative Place for creative minds",
                },
        ],
        GB: [
                {
                    img: "/assets/img/intro/yaytg109251.jpg",
                    imgPos: "50",
                    title: "Eng OFFICE A_",
                    text: "Creative Place for creative minds",
                },
                {
                    img: "/assets/img/intro/cm08298050.jpg",
                    imgPos: "50",
                    title: "Eng OFFICE B_",
                    text: "Creative Place for creative minds",
                },
                {
                    img: "/assets/img/intro/pc001008766.jpg",
                    imgPos: "50",
                    title: "Eng OFFICE C_",
                    text: "Creative Place for creative minds",
                },
                {
                    img: "/assets/img/intro/cm08298050.jpg",
                    imgPos: "50",
                    title: "Eng OFFICE A_",
                    text: "Creative Place for creative minds",
                },
                {
                    img: "/assets/img/intro/pc001008766.jpg",
                    imgPos: "50",
                    title: "Eng OFFICE B_",
                    text: "Creative Place for creative minds",
                },
        ]
    },



    /* :::::::::::: Section 4 :::::::::::: */

    section4_startline : {
        type: JDinputType.line,
        description: "섹션 4",
    },

    section4_img : {
        description: "섹션 4 이미지",
        type: JDinputType.img,
        value: "/assets/img/intro/cm08423293.jpg",
    },

    section4_imgPos : {
        description: "섹션 4 이미지 X 축",
        value: "50",
    },

    section4_title : {
        description: "섹션 4 - 타이틀",
        KR: "JANDA OFFICE",
        GB: "Eng JANDA OFFICE"
    },

    section4_subtitle : {
        description: "섹션 4 - 서브 타이틀",
        KR: "The best Office Environment for creative minds",
        GB: "ENG The best Office Environment for creative minds"
    },

    section4_desc : {
        description: "섹션 4 - 섹션 설명",
        KR: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
        GB: "Eng Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
    },

    section4_btnText : {
        description: "섹션 4 - 버튼 텍스트",
        KR: "Reservation",
        GB: "ENG Reservation"
    },

    section4_btnLink : {
        description: "섹션 4 - 버튼 링크",
        value:"/"
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

    section5_img : {
        description: "섹션 5 이미지",
        type: JDinputType.img,
        value: "/assets/img/intro/cm08423293.jpg",
    },

    section5_title : {
        description: "섹션 5 - 타이틀",
        KR: "Janda Office",
        GB: "Eng Janda Cafe"
    },
   
    section5_subtitle : {
        description: "섹션 5 - 서브 타이틀",
        KR: "메뉴 안내",
        GB: "Eng 메뉴 안내"
    },

    section5_btnText : {
        description: "섹션 5 - 버튼 텍스트",
        KR: "Reservation",
        GB: "ENG Reservation"
    },

    section5_btnLink : {
        description: "섹션 5 - 버튼 링크",
        value:"/"
    },


    /* :::::::::::: Section 6 :::::::::::: */


    section6_startline : {
        type: JDinputType.line,
        description: "섹션 6",
    },

    section6_title : {
        description: "섹션 6 - 타이틀",
        KR: "JANDA OFFICE",
        GB: "Eng JANDA OFFICE",
    },

    section6_subtitle : {
        description: "섹션 6 - 서브 타이틀",
        KR: "Meet our team.",
        GB: "Eng Meet our team.",
    },

    section6_text : {
        description: "섹션 6 - 텍스트 ",
        KR: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
        GB: "Eng Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },

    
    section6_array: {
        description: "섹션1 슬라이드 리스트",
        type: JDinputType.array,
        META: {
            img: {
                description: "슬라이드 이미지",
                type: JDinputType.img,
                default: ""
            },
            title: {
                description: "슬라이드 타이틀",
                default: ""
            },
            text: {
                description: "슬라이드 내용",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/intro/pc001008608_l.jpg",
                    title: "Craig Furgerson",
                    text: "CEO",
                },
                {
                    img: "/assets/img/intro/pc001008620_l.jpg",
                    title: "Jeniffer Rorence",
                    text: "Executive Producer",
                },
                {
                    img: "/assets/img/intro/pc001009865_l.jpg",
                    title: "Anderson Cooper",
                    text: "Show Host",
                },
                {
                    img: "/assets/img/intro/pc001017216_l.jpg",
                    title: "Elon Musk",
                    text: "Engineer",
                },
        ],
        GB: [
                {
                    img: "/assets/img/intro/pc001008608_l.jpg",
                    title: "Craig Furgerson",
                    text: "CEO",
                },
                {
                    img: "/assets/img/intro/pc001008620_l.jpg",
                    title: "Jeniffer Rorence",
                    text: "Executive Producer",
                },
                {
                    img: "/assets/img/intro/pc001009865_l.jpg",
                    title: "Anderson Cooper",
                    text: "Show Host",
                },
                {
                    img: "/assets/img/intro/pc001017216_l.jpg",
                    title: "Elon Musk",
                    text: "Engineer",
                },
        ]
    },

    


    /* :::::::::::: Footer :::::::::::: */


    footer_startline : {
        type: JDinputType.line,
        description: "푸터",
    },

    footer_logo : {
        description: "푸터 - 로고",
        type: JDinputType.img,
        value:"/assets/img/intro/logo_footer.png"
    },

    footer_logo_text1 : {
        description: "푸터 - 로고 텍스트 1",
        KR: "JANDA SPACE",
        GB: "Eng JANDA SPACE",
    },

    footer_logo_text2 : {
        description: "푸터 - 로고 텍스트 2",
        KR: "THE BEST SHARED OFFFICE SPACE",
        GB: "Eng THE BEST SHARED OFFFICE SPACE",
    },

    footer_info1 : {
        description: "푸터 - 정보 1",
        KR: "업체 : Warner Brothers Studio Store",
        GB: "Eng 업체 : Warner Brothers Studio Store",
    },

    footer_info2 : {
        description: "푸터 - 정보 2",
        KR: "대표 : 제니퍼 로렌스",
        GB: "Eng 대표 : 제니퍼 로렌스",
    },

    footer_info3 : {
        description: "푸터 - 정보 3",
        KR: "주소지 : 3815 Clifford Street, Hayward",
        GB: "Eng 주소지 : 3815 Clifford Street, Hayward",
    },

    footer_info4 : {
        description: "푸터 - 정보 4",
        KR: "Contact : 000-111-2222",
        GB: "Eng Contact : 000-111-2222",
    },

    footer_info5 : {
        description: "푸터 - 정보 5",
        KR: "상담 가능 시간 : 09am ~ 11pm.",
        GB: "Eng 상담 가능 시간 : 09am ~ 11pm.",
    },

    footer_copyright : {
        description: "푸터 - Copyrights",
        KR: "Copyrights © stayjanda.com All Rights Reserved",
        GB: "Eng Copyrights © stayjanda.com All Rights Reserved",
    },




}

export default INTRO_INFO
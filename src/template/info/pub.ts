import { JDinputType } from "src/component/inputRender/InputComponent"
import { SHARED_INFO2 } from "./shared"

export const PUB_INFO = {
    ...SHARED_INFO2,

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
                description: "슬라이드 내용",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/pc001010628.jpg",
                    text1: "다양한 주류",
                    text2: "Janda Pub에서 국내는 물론 해외 주류 역시 경험하실 수 있습니다",
                },
                {
                    img: "/assets/img/pub/cm08504426.jpg",
                    text1: "퀄리티 높은 디너",
                    text2: "최고의 쉐프가 만든 디너를 맛보세요",
                },
                {
                    img: "/assets/img/pub/cm08011497.jpg",
                    text1: "특별한 날, 특별한 사람과",
                    text2: "당신의 주말을 특별하게 만들어 줄 곳.",
                }
        ],
        GB: [
                {
                    img: "/assets/img/pub/cm08505238.jpg",
                    text1: "Eng 다양한 주류",
                    text2: "Janda Pub에서 국내는 물론 해외 주류 역시 경험하실 수 있습니다",
                },
                {
                    img: "/assets/img/pub/cm08504426.jpg",
                    text1: "Eng 퀄리티 높은 디너",
                    text2: "최고의 쉐프가 만든 디너를 맛보세요",
                },
                {
                    img: "/assets/img/pub/cm08011497.jpg",
                    text1: "Eng 특별한 날, 특별한 사람과",
                    text2: "당신의 주말을 특별하게 만들어 줄 곳.",
                }
        ]
    },


    /* :::::::::::: Section 2 :::::::::::: */

    section2_startline : {
        type: JDinputType.line,
        description: "섹션 2",
    },

    section2_text1 : {
        description: "섹션 2 - 타이틀",
        KR: "Pub JANDA",
        GB: "Eng Pub JANDA"
    },

    section2_text2 : {
        description: "섹션 2 - 서브 타이틀",
        KR: "베스트 메뉴",
        GB: "Eng 베스트 메뉴"
    },

    section2_array: {
        description: "섹션 2 메뉴 리스트",
        type: JDinputType.array,
        META: {
            img: {
                description: "메뉴 이미지",
                type: JDinputType.img,
                default: ""
            },
            name: {
                description: "메뉴 이름",
                default: ""
            },
            desc: {
                description: "매뉴 설명 설명",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/pc003079179.jpg",
                    name: "밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목넘김",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "보딩턴스 앱",
                    desc: "벌꿀의 달콜함과 부드러운 목넘김",
                },
                {
                    img: "/assets/img/pub/yaytg632946.jpg",
                    name: "크로넨 버그 1664",
                    desc: "풍부한 찬산향이 일품인 맥주",
                },
                {
                    img: "/assets/img/pub/cm08374895.jpg",
                    name: "코리아 복분자",
                    desc: "깊고 진한 한국의 전통주",
                },
                {
                    img: "/assets/img/pub/cm08585378.jpg",
                    name: "스파클링 와인",
                    desc: "프랑스 닐 지방에서 재배한 포도로 만든 스파클링와인",
                },
        ],
        GB: [
                {
                    img: "/assets/img/pub/pc003079179.jpg",
                    name: "Eng 밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목넘김",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 보딩턴스 앱",
                    desc: "벌꿀의 달콜함과 부드러운 목넘김",
                },
                {
                    img: "/assets/img/pub/yaytg632946.jpg",
                    name: "Eng 크로넨 버그 1664",
                    desc: "풍부한 찬산향이 일품인 맥주",
                },
                {
                    img: "/assets/img/pub/cm08374895.jpg",
                    name: "Eng 코리아 복분자",
                    desc: "깊고 진한 한국의 전통주",
                },
                {
                    img: "/assets/img/pub/cm08585378.jpg",
                    name: "Eng 스파클링 와인",
                    desc: "프랑스 닐 지방에서 재배한 포도로 만든 스파클링와인",
                },
        ]
    },


    /* :::::::::::: Section 3 :::::::::::: */

    section3_startline : {
        type: JDinputType.line,
        description: "섹션 3",
    },

    section3_img : {
        description: "섹션 3 - 배경 이미지",
        type: JDinputType.img,
        value: "/assets/img/pub/cm08011497.jpg",
    },

    section3_title : {
        description: "섹션 3 - 타이틀",
        KR: "영국느낌의 펍을 만나보세요",
        GB: "영국 런던의 느낌을 그대로 옮겨 놓은듯한 Janda Pub에서 특별한 하루를 보내보세요."
    },

    section3_desc : {
        description: "섹션 3 - 내용",
        KR: "산미가 느껴지는 시나몬 로스트, 균형 잡힌 미디움 로스트, 강한 풍미와 중후한 맛의 풀시티 로스트로 분류되는 다양한 로스트 스펙트럼으로 여러분의 커피를 찾아보세요.",
        GB: "Eng 산미가 느껴지는 시나몬 로스트, 균형 잡힌 미디움 로스트, 강한 풍미와 중후한 맛의 풀시티 로스트로 분류되는 다양한 로스트 스펙트럼으로 여러분의 커피를 찾아보세요."
    },

    section3_btnText : {
        description: "섹션 3 - 버튼 텍스트",
        KR: "준비중입니다",
        GB: "eng 준비중입니다"
    },



    /* :::::::::::: Section 4 :::::::::::: */

    section4_startline : {
        type: JDinputType.line,
        description: "섹션 4",
    },

    section4_title : {
        description: "섹션 4 - 타이틀",
        KR: "Janda Pub",
        GB: "Eng Janda Pub"
    },

    section4_subtitle : {
        description: "섹션 4 - 서브 타이틀",
        KR: "잔다 펍의 특징",
        GB: "Eng 잔다 커피 특징"
    },

    section4_desc : {
        description: "섹션 4 - 섹션 설명",
        KR: "저희 Janda Pub은 여러분에게 늘 다양하고 뛰어난 술을 선보이기 위해 노력하고있습니다.",
        GB: "Eng 저희 Janda Pub은 여러분에게 늘 다양하고 뛰어난 술을 선보이기 위해 노력하고있습니다."
    },

    section4_list1_img : {
        type: JDinputType.img,
        description: "섹션 4 - 리스트 1 이미지",
        value: "/assets/img/pub/pc001024383.jpg",
    },

    section4_list1_title : {
        description: "섹션 4 - 리스트 1 타이틀",
        KR: "고급스러운 분위기",
        GB: "Eng 고급스러운 분위기"
    },

    section4_list1_desc : {
        description: "섹션 4 - 리스트 1 설명",
        KR: "Janda Pub의 고급스러운 느낌을 만끽하세요",
        GB: "Eng Janda Pub의 고급스러운 느낌을 만끽하세요"
    },

    section4_list2_img : {
        type: JDinputType.img,
        description: "섹션 4 - 리스트 2 이미지",
        value: "/assets/img/pub/cm08366453.jpg",
    },

    section4_list2_title : {
        description: "섹션 4 - 리스트 2 타이틀",
        KR: "홈 브루잉 수제 맥주",
        GB: "Eng 홈 브루잉 수제 맥주"
    },

    section4_list2_desc : {
        description: "섹션 4 - 리스트 2 설명",
        KR: "홈 브루잉한 수제 맥주의 깊은 맛",
        GB: "Eng 홈 브루잉한 수제 맥주의 깊은 맛"
    },

    section4_list3_img : {
        type: JDinputType.img,
        description: "섹션 4 - 리스트 3 이미지",
        value: "/assets/img/pub/cm08505238.jpg",
    },

    section4_list3_title : {
        description: "섹션 4 - 리스트 3 타이틀",
        KR: "최고급 와인 구비",
        GB: "Eng 최고급 와인 구비"
    },

    section4_list3_desc : {
        description: "섹션 4 - 리스트 3 설명",
        KR: "제주녹차의 싱그러움 그대로 가져와 구현하였습니다",
        GB: "Eng 제주녹차의 싱그러움 그대로 가져와 구현하였습니다"
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
        KR: "Janda Pub",
        GB: "Eng Janda Pub"
    },
   
    section5_subtitle : {
        description: "섹션 5 - 서브 타이틀",
        KR: "메뉴 안내",
        GB: "Eng 메뉴 안내"
    },

    section5_menu_tab1 : {
        description: "섹션 5 - 메뉴 탭 1",
        KR: "메뉴 1",
        GB: "Eng 메뉴 1"
    },

    section5_menu_tab2_use : {
        type: JDinputType.switch,
        description: "메뉴 2 사용여부 ",
        value: true
    },

    section5_menu_tab2 : {
        description: "섹션 5 - 메뉴 탭 2",
        KR: "메뉴 2",
        GB: "Eng 메뉴 2"
    },

    section5_menu_tab3_use : {
        type: JDinputType.switch,
        description: "메뉴 3 사용여부 ",
        value: true
    },

    section5_menu_tab3 : {
        description: "섹션 5 - 메뉴 탭 3",
        KR: "메뉴 3",
        GB: "Eng 메뉴 3"
    },

    section5_menu_tab4_use : {
        type: JDinputType.switch,
        description: "메뉴 4 사용여부 ",
        value: false
    },

    section5_menu_tab4 : {
        description: "섹션 5 - 메뉴 탭 4",
        KR: "메뉴 4",
        GB: "Eng 메뉴 4"
    },

    section5_menu_tab5_use : {
        type: JDinputType.switch,
        description: "메뉴 5 사용여부 ",
        value: false
    },

    section5_menu_tab5 : {
        description: "섹션 5 - 메뉴 탭 5",
        KR: "메뉴 5",
        GB: "Eng 메뉴 5"
    },

    section5_menu_tab6_use : {
        type: JDinputType.switch,
        description: "메뉴 6 사용여부 ",
        value: false
    },


    section5_menu_tab6 : {
        description: "섹션 5 - 메뉴 탭 6",
        KR: "메뉴 6",
        GB: "Eng 메뉴 6"
    },

    section5_menu_tab7_use : {
        type: JDinputType.switch,
        description: "메뉴 7 사용여부 ",
        value: false
    },

    section5_menu_tab7 : {
        description: "섹션 5 - 메뉴 탭 7",
        KR: "메뉴 7",
        GB: "Eng 메뉴 7"
    },

    section5_listline_menu1 : {
        type: JDinputType.listLine,
        description: "메뉴 리스트",
    },

    section5_menu1_array: {
        description: "Section 5 메뉴 리스트 1" ,
        type: JDinputType.array,
        META: {
            img: {
                description: "메뉴 이미지",
                type: JDinputType.img,
                default: ""
            },
            name: {
                description: "메뉴 이름",
                default: ""
            },
            desc: {
                description: "매뉴 설명 설명",
                default: ""
            },
            price: {
                description: "매뉴 가격",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ]
    },

    section5_listline_menu2 : {
        type: JDinputType.listLine,
        description: "메뉴 리스트",
    },

    section5_menu2_array: {
        description: "Section 5 메뉴 리스트 2",
        type: JDinputType.array,
        META: {
            img: {
                description: "메뉴 이미지",
                type: JDinputType.img,
                default: ""
            },
            name: {
                description: "메뉴 이름",
                default: ""
            },
            desc: {
                description: "매뉴 설명 설명",
                default: ""
            },
            price: {
                description: "매뉴 가격",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ]
    },

    section5_listline_menu3 : {
        type: JDinputType.listLine,
        description: "메뉴 리스트",
    },

    section5_menu3_array: {
        description: "Section 5 메뉴 리스트 3",
        type: JDinputType.array,
        META: {
            img: {
                description: "메뉴 이미지",
                type: JDinputType.img,
                default: ""
            },
            name: {
                description: "메뉴 이름",
                default: ""
            },
            desc: {
                description: "매뉴 설명 설명",
                default: ""
            },
            price: {
                description: "매뉴 가격",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ]
    },

    section5_listline_menu4 : {
        type: JDinputType.listLine,
        description: "메뉴 리스트",
    },

    section5_menu4_array: {
        description: "Section 5 메뉴 리스트 4",
        type: JDinputType.array,
        META: {
            img: {
                description: "메뉴 이미지",
                type: JDinputType.img,
                default: ""
            },
            name: {
                description: "메뉴 이름",
                default: ""
            },
            desc: {
                description: "매뉴 설명 설명",
                default: ""
            },
            price: {
                description: "매뉴 가격",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ]
    },

    section5_listline_menu5 : {
        type: JDinputType.listLine,
        description: "메뉴 리스트",
    },

    section5_menu5_array: {
        description: "Section 5 메뉴 리스트 5",
        type: JDinputType.array,
        META: {
            img: {
                description: "메뉴 이미지",
                type: JDinputType.img,
                default: ""
            },
            name: {
                description: "메뉴 이름",
                default: ""
            },
            desc: {
                description: "매뉴 설명 설명",
                default: ""
            },
            price: {
                description: "매뉴 가격",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ]
    },

    section5_listline_menu6 : {
        type: JDinputType.listLine,
        description: "메뉴 리스트",
    },

    section5_menu6_array: {
        description: "Section 5 메뉴 리스트 6",
        type: JDinputType.array,
        META: {
            img: {
                description: "메뉴 이미지",
                type: JDinputType.img,
                default: ""
            },
            name: {
                description: "메뉴 이름",
                default: ""
            },
            desc: {
                description: "매뉴 설명 설명",
                default: ""
            },
            price: {
                description: "매뉴 가격",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ]
    },

    section5_listline_menu7 : {
        type: JDinputType.listLine,
        description: "메뉴 리스트",
    },

    section5_menu7_array: {
        description: "Section 5 메뉴 리스트 7",
        type: JDinputType.array,
        META: {
            img: {
                description: "메뉴 이미지",
                type: JDinputType.img,
                default: ""
            },
            name: {
                description: "메뉴 이름",
                default: ""
            },
            desc: {
                description: "매뉴 설명 설명",
                default: ""
            },
            price: {
                description: "매뉴 가격",
                default: ""
            }
        },
        KR: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 밀러 드래프트",
                    desc: "적당한 탄산과 부드러운 목 넘김",
                    price: "7000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 보딩턴스 에일",
                    desc: "벌꿀와 느껴지는 깊은 맛",
                    price: "8000원",
                },
                {
                    img: "/assets/img/pub/cm08272446.jpg",
                    name: "Eng 크로넨버그 1996",
                    desc: "풍부한 거품에서 오는 부드러운 목 넘김",
                    price: "9000원",
                },
        ]
    },


    /* :::::::::::: Section 6 :::::::::::: */

    section6_startline : {
        type: JDinputType.line,
        description: "섹션 6",
    },

    section6_img : {
        type: JDinputType.img,
        description: "섹션 6 - 배경 이미지",
        value:"/assets/img/cafe/pc002276763.jpg"
    },

    section6_title : {
        description: "섹션 6 - 타이틀",
        KR: "영업시간",
        GB: "Eng 영업시간",
    },

    section6_text1 : {
        description: "섹션 6 - 텍스트 1",
        KR: "평일 : 11am ~ 10pm",
        GB: "Eng 평일 : 11am ~ 10pm",
    },

    section6_text2 : {
        description: "섹션 6 - 텍스트 2",
        KR: "주말 / 공휴일 : 11am ~ 9pm",
        GB: "Eng 주말 / 공휴일 : 11am ~ 9pm",
    },

    section6_text3 : {
        description: "섹션 6 - 텍스트 3",
        KR: "정기휴무 : 첫째 주 월요일",
        GB: "Eng 정기휴무 : 첫째 주 월요일",
    },

    section6_text4 : {
        description: "섹션 6 - 텍스트 4",
        KR: "Contact : 01-111-2225",
        GB: "Eng Contact : 01-111-2225",
    },


    
    /* :::::::::::: Footer top :::::::::::: */

    footerTop_startline : {
        type: JDinputType.line,
        description: "푸터 상단",
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
        description: "푸터 상단 - 블록 4 - Text 2",
        KR: "소셜미디어",
        GB: "Eng 소셜미디어",
    },

    footerTop_block4_icon1 : {
        type: JDinputType.img,
        description: "푸터 상단 - 아이콘 1",
        value: "/assets/img/common/instagram.png"
    },

    footerTop_block4_icon1_link : {
        description: "푸터 상단 - 아이콘 1 링크",
        value: "https://www.instagram.com/"
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
        description: "푸터",
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

export default PUB_INFO;
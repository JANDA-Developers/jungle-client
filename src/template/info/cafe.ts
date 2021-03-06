import { JDinputType } from "src/component/inputRender/InputComponent"
import { SHARED_INFO2 } from "./shared"

export const CAFE_INFO = {
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

    // bookingBtnText: {
    //     description: "솔루션" 버튼 텍스트",
    //     KR: "Cafe JANDA",
    //     GB: "Eng Cafe JANDA"
    // },

    // bookingKey: {
    //     description: "잔다 솔루션 링크",
    //     value: ""
    // },


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
                    img: "/assets/img/cafe/pc002276763.jpg",
                    text1: "커피 한잔의 여유",
                    text2: "Janda Coffee에서 특별한 사람과 함께 하세요",
                },
                {
                    img: "/assets/img/cafe/wmtg110415.jpg",
                    text1: "향과 맛에 대한 자부심",
                    text2: "좋은 원두에서 나오는 깊은 맛",
                },
                {
                    img: "/assets/img/cafe/wmtg011290.jpg",
                    text1: "부드러운 케이크",
                    text2: "당일 아침에 만드는 수제 케이크",
                }
        ],
        GB: [
                {
                    img: "/assets/img/cafe/pc002276763.jpg",
                    text1: "Eng 커피 한잔의 여유",
                    text2: "Eng Janda Coffee에서 특별한 사람과 함께 하세요",
                },
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    text1: "Eng 향과 맛에 대한 자부심",
                    text2: "Eng 좋은 원두에서 나오는 깊은 맛",
                },
                {
                    img: "/assets/img/cafe/wmtg011290.jpg",
                    text1: "부드러운 케이크",
                    text2: "당일 아침에 만드는 수제 케이크",
                },
        ]
    },


    /* :::::::::::: Section 2 :::::::::::: */

    section2_startline : {
        type: JDinputType.line,
        description: "섹션 2",
    },

    section2_text1 : {
        description: "섹션 2 - 타이틀",
        KR: "Cafe JANDA",
        GB: "Eng Cafe JANDA"
    },

    section2_text2 : {
        description: "섹션 2 - 서브 타이틀",
        KR: "베스트 메뉴",
        GB: "Eng 베스트 메뉴"
    },

    section2_array: {
        description: "Section 2 메뉴 리스트",
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
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "카페 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "그린티 라떼",
                    desc: "깊고 진한 녹차 맛",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "크로와상",
                    desc: "고소한 풍미가 살아있는 크로와상",
                },
                {
                    img: "/assets/img/cafe/ti325055150.png",
                    name: "모카라떼",
                    desc: "모카시럽과 밀크스팁의 부드러움",
                },
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "바닐라 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                },
        ],
        GB: [
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 카페 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "Eng 그린티 라떼",
                    desc: "Eng 깊고 진한 녹차 맛",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "Eng 크로와상",
                    desc: "Eng 고소한 풍미가 살아있는 크로와상",
                },
                {
                    img: "/assets/img/cafe/ti325055150.png",
                    name: "Eng 모카라떼",
                    desc: "Eng 모카시럽과 밀크스팁의 부드러움",
                },
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 바닐라 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
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
        value: "/assets/img/cafe/yaytg586946.jpg",
    },

    section3_title : {
        description: "섹션 3 - 타이틀",
        KR: "품질 높은 커피를 만나보세요 당신의 커피",
        GB: "Eng 품질 높은 커피를 만나보세요 당신의 커피"
    },

    section3_desc : {
        description: "섹션 3 - 내용",
        KR: "산미가 느껴지는 시나몬 로스트, 균형 잡힌 미디움 로스트, 강한 풍미와 중후한 맛의 풀시티 로스트로 분류되는 다양한 로스트 스펙트럼으로 여러분의 커피를 찾아보세요.",
        GB: "Eng 산미가 느껴지는 시나몬 로스트, 균형 잡힌 미디움 로스트, 강한 풍미와 중후한 맛의 풀시티 로스트로 분류되는 다양한 로스트 스펙트럼으로 여러분의 커피를 찾아보세요."
    },

    section3_btnText : {
        description: "섹션 3 - 버튼텍스트",
        KR: "인스타 투어",
        GB: "eng 인스타 투어"
    },

    section3_btnLink : {
        description: "섹션 3 - 버튼 링크",
        value:"https://www.instagram.com/"
    },


    /* :::::::::::: Section 4 :::::::::::: */

    section4_startline : {
        type: JDinputType.line,
        description: "섹션 4",
    },

    section4_title : {
        description: "섹션 4 - 타이틀",
        KR: "Janda Cafe",
        GB: "Eng Janda Cafe"
    },

    section4_subtitle : {
        description: "섹션 4 - 서브 타이틀",
        KR: "잔다 커피 특징",
        GB: "Eng 잔다 커피 특징"
    },

    section4_desc : {
        description: "섹션 4 - 섹션 설명",
        KR: "카페 잔다는 커피를 사랑하는 여러분에게 항상 더 좋은 커피를 내려드릴 수 있도록 끊임없는 연구를 하고 있습니다.",
        GB: "Eng 카페 잔다는 커피를 사랑하는 여러분에게 항상 더 좋은 커피를 내려드릴 수 있도록 끊임없는 연구를 하고 있습니다."
    },

    section4_list1_img : {
        type: JDinputType.img,
        description: "섹션 4 - 리스트 1 이미지",
        value: "/assets/img/cafe/wmtg110415.jpg",
    },

    section4_list1_title : {
        description: "섹션 4 - 리스트 1 타이틀",
        KR: "최고급 원두를 사용합니다",
        GB: "Eng 최고급 원두를 사용합니다 "
    },

    section4_list1_desc : {
        description: "섹션 4 - 리스트 1 설명",
        KR: "최고급 원두를 사용하여 깊은 맛의 커피를 즐길 수 있습니다",
        GB: "Eng 최고급 원두를 사용하여 깊은 맛의 커피를 즐길 수 있습니다"
    },

    section4_list2_img : {
        type: JDinputType.img,
        description: "섹션 4 - 리스트 2 이미지",
        value: "/assets/img/cafe/cb114000054.jpg",
    },

    section4_list2_title : {
        description: "섹션 4 - 리스트 2 타이틀",
        KR: "크로와상과 아보카도의 조합",
        GB: "Eng 크로와상과 아보카도의 조합"
    },

    section4_list2_desc : {
        description: "섹션 4 - 리스트 2 설명",
        KR: "크로와상과 아보카도의 만남 일요일의 스페셜 메뉴 입니다.",
        GB: "Eng 크로와상과 아보카도의 만남 일요일의 스페셜 메뉴 입니다."
    },

    section4_list3_img : {
        type: JDinputType.img,
        description: "섹션 4 - 리스트 3 이미지",
        value: "/assets/img/cafe/ti302a17009.jpg",
    },

    section4_list3_title : {
        description: "섹션 4 - 리스트 3 타이틀",
        KR: "제주녹차의 싱그러움",
        GB: "Eng 제주녹차의 싱그러움 "
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
        KR: "Janda Cafe",
        GB: "Eng Janda Cafe"
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
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "카페 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "그린티 라떼",
                    desc: "깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "크로와상",
                    desc: "고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 카페 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "Eng 그린티 라떼",
                    desc: "Eng 깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "Eng 크로와상",
                    desc: "Eng 고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
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
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "카페 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "그린티 라떼",
                    desc: "깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "크로와상",
                    desc: "고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 카페 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "Eng 그린티 라떼",
                    desc: "Eng 깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "Eng 크로와상",
                    desc: "Eng 고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
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
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "카페 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "그린티 라떼",
                    desc: "깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "크로와상",
                    desc: "고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 카페 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "Eng 그린티 라떼",
                    desc: "Eng 깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "Eng 크로와상",
                    desc: "Eng 고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
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
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "카페 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "그린티 라떼",
                    desc: "깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "크로와상",
                    desc: "고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 카페 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "Eng 그린티 라떼",
                    desc: "Eng 깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "Eng 크로와상",
                    desc: "Eng 고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
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
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "카페 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "그린티 라떼",
                    desc: "깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "크로와상",
                    desc: "고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 카페 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "Eng 그린티 라떼",
                    desc: "Eng 깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "Eng 크로와상",
                    desc: "Eng 고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
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
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "카페 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "그린티 라떼",
                    desc: "깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "크로와상",
                    desc: "고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 카페 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "Eng 그린티 라떼",
                    desc: "Eng 깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "Eng 크로와상",
                    desc: "Eng 고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
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
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "카페 라떼",
                    desc: "에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "그린티 라떼",
                    desc: "깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "크로와상",
                    desc: "고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
                },
        ],
        GB: [
                {
                    img: "/assets/img/cafe/cb036008565.png",
                    name: "Eng 카페 라떼",
                    desc: "Eng 에스프레소와 따뜻한 우유의 조합",
                    price: "7000원",
                },
                {
                    img: "/assets/img/cafe/cb036188916.png",
                    name: "Eng 그린티 라떼",
                    desc: "Eng 깊고 진한 녹차 맛",
                    price: "9000원",
                },
                {
                    img: "/assets/img/cafe/ti325059808.png",
                    name: "Eng 크로와상",
                    desc: "Eng 고소한 풍미가 살아있는 크로와상",
                    price: "8000원",
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
        description: "섹션 6 - 텍스트 3",
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

export default CAFE_INFO
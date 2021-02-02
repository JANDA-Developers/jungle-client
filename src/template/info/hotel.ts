import { JDinputType } from "src/component/inputRender/InputComponent"
import { SHARED_INFO } from "./shared"

export const HOTEL_INFO = {
    ...SHARED_INFO,
    titleasdasdas: {
        description: "hello world",
        KR: "제목",
        GB: ""
    },
    timeSpace: {
        description: "타임스페이스 링크",
        KR: "",
        GB: ""
    },
    sampleImg: {
        KR: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        GB: ""
    },
    editorContnet: {
        KR: "안녕",
        GB: ""
    },
    sampleLink: {
        value: "http://naver.com"
    },
    tags: {
        description: "태그",
        type: JDinputType.tag,
        KR: ["부산가이드","여성가이드","뚜벅이여행","꽃놀이","버스투어","운전가능","일본어","영어","중국어"],
        GB: ["BusanGuid","WomanGuid","WalkTravel","Flower","Bus","DrivingAble","Japaneses","Chinese"]
    },
    sampleArray: {
        description: "갤러리 목록",
        type: JDinputType.array,
        META: {
            title: {
                description: "갤러리 타이틀",
                default: ""
            },
            img: {
                description: "갤러리 이미지",
                type: JDinputType.img,
                default: ""
            }
        },
        KR: [{
            title: "asdasdasdzczxc",
            img: "https://www.google.com/?&hl=ko",
        },
        {
            title: "asdasdasd3",
            img: "https://www.google.com/?&hl=ko"
        },
        {
            title: "asdasdasd",
            img: "https://www.google.com/?&hl=ko"
        }],
        GB: [
            {
                img: "https://www.google.com/?&hl=ko",
                title: "asdasdasd"
            }
        ]
    }
}

export default HOTEL_INFO
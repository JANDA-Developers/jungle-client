import { JDinputType } from "../../component/inputRender/InputComponent"
import { SHARED_INFO } from "./shared"

 const GALLERY_INFO =  {
    ...SHARED_INFO,
    timespace_key: {
        type: JDinputType.timespace,
        KR: "",
        GB: ""
    },
    top_img: { 
        description: "최상단 배경 이미지",
        type: JDinputType.img,
        KR: "template/sample/images/pic02.jpg",
        GB: "template/sample/images/pic02.jpg"
    },
    title: { 
        description: "타이틀",
        KR: "갤러리",
        GB: "Gallery"
    },
    title1: { 
        description: "섹션1 타이틀",
        KR: "섹션1 타이틀",
        GB: "Section1 title"
    },
    title1_desc: {
        description: "섹션1 서브 타이틀",
        KR:  "섹션1 서브타이틀",
        GB: "Section2 sub title"
    },
    title2: { 
        description: "섹션2 타이틀",
        KR: "샘플텍스트 샘플",
        GB: "Fringilla Fermentum Tellus"
    },
    title2_desc: {
        description: "섹션2 서브 타이틀",
        KR:  "섹션2 타이틀",
        GB: "Section2 title"
    },
    section2_img1: {
        description: "섹션2 이미지1",
        type: JDinputType.img,
        KR:  "/template/sample/images/pic01.jpg",
        GB: "/template/sample/images/pic01.jpg"
    },
    section2_img2: {
        description: "섹션2 이미지2",
        type: JDinputType.img,

        KR:  "/template/sample/images/pic02.jpg",
        GB: "/template/sample/images/pic02.jpg"
    },
    section2_img3: {
        description: "섹션2 이미지3",

        type: JDinputType.img,
        KR:  "/template/sample/images/pic03.jpg",
        GB: "/template/sample/images/pic03.jpg"    
    },
    section2_img4: {
        description: "섹션2 이미지4",

        type: JDinputType.img,
        KR:  "/template/sample/images/pic04.jpg",
        GB: "/template/sample/images/pic04.jpg"
    },
    section3: {
            description: "갤러리 목록",
            type: JDinputType.array,
            META: {
                img: {
                    description: "갤러리 이미지",
                    type: JDinputType.img,
                    default: ""
                },
                title: {
                    description: "갤러리 타이틀",
                    default: ""
                },
                desc: {
                    description: "갤러리 내용",
                    type: JDinputType.link,
                    default: ""
                }
            },
            KR: [
                {
                    img: "/template/sample/images/pic06.jpg",
                    title: "3-1 타이틀",
                    desc: "대법원과 각급법원의 조직은 법률로 정한다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다."
                },
                {
                    img: "/template/sample/images/pic07.jpg",
                    title: "3-2 타이틀",
                    desc: "대법원과 각급법원의 조직은 법률로 정한다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다."
                },
                {
                    img: "/template/sample/images/pic08.jpg",
                    title: "3-3 타이틀",
                    desc: "대법원과 각급법원의 조직은 법률로 정한다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다."
                }
            ],
            GB: [
                {
                    img: "/template/sample/images/pic06.jpg",
                    title: "Curabitur Eget",
                    desc: "urabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel."
                },
                {
                    img: "/template/sample/images/pic07.jpg",
                    title: "Viverra Hendrerit",
                    desc: "Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel."
                },
                {
                    img: "/template/sample/images/pic08.jpg",
                    title: "Curabitur Eget",
                    desc: "Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel."
                },
            ]
    },
    content: {
        KR: "<p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel. Vestibulum et efficitur urna. Duis velit nulla, interdum sed felis sit amet, facilisis auctor nunc. Cras luctus urna at risus feugiat scelerisque nec sed diam. </p><p>Nunc fringilla metus odio, at rutrum augue tristique vel. Nulla ac tellus a neque ullamcorper porta a vitae ipsum. Morbi est sapien, hendrerit quis mi in, aliquam bibendum orci. Vestibulum imperdiet nibh vitae maximus posuere. Aenean sit amet nibh feugiat, condimentum tellus eu, malesuada nunc. Mauris ac pulvinar turpis, sit amet pharetra est. Ut bibendum justo condimentum, vehicula ex vel, venenatis libero. Etiam vehicula urna sed justo bibendum, ac lacinia nunc pulvinar. Integer nec velit orci. Vestibulum pellentesque varius dapibus. Morbi ullamcorper augue est, sed luctus orci fermentum dictum. Nunc tincidunt, nisl consequat convallis viverra, metus nisl ultricies dui, vitae dapibus ligula urna sit amet nibh. Duis ut venenatis enim.</p>",
        GB: "<p>Curabitur eget semper ante. Morbi eleifend ultricies est, a blandit diam vehicula vel. Vestibulum porttitor nisi quis viverra hendrerit. Suspendisse vel volutpat nibh, vel elementum lacus. Maecenas commodo pulvinar dui, at cursus metus imperdiet vel. Vestibulum et efficitur urna. Duis velit nulla, interdum sed felis sit amet, facilisis auctor nunc. Cras luctus urna at risus feugiat scelerisque nec sed diam. </p><p>Nunc fringilla metus odio, at rutrum augue tristique vel. Nulla ac tellus a neque ullamcorper porta a vitae ipsum. Morbi est sapien, hendrerit quis mi in, aliquam bibendum orci. Vestibulum imperdiet nibh vitae maximus posuere. Aenean sit amet nibh feugiat, condimentum tellus eu, malesuada nunc. Mauris ac pulvinar turpis, sit amet pharetra est. Ut bibendum justo condimentum, vehicula ex vel, venenatis libero. Etiam vehicula urna sed justo bibendum, ac lacinia nunc pulvinar. Integer nec velit orci. Vestibulum pellentesque varius dapibus. Morbi ullamcorper augue est, sed luctus orci fermentum dictum. Nunc tincidunt, nisl consequat convallis viverra, metus nisl ultricies dui, vitae dapibus ligula urna sit amet nibh. Duis ut venenatis enim.</p>"
    },

}

export default GALLERY_INFO
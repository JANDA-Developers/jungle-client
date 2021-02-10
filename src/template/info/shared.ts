//deprecated version 1.0.0 이하 때 생성한 템플릿들 공유중 
export const SHARED_INFO = {
    shareLabel: {
        description: "공유하기 라벨",
        KR: "공유하기",
        GB: "SNS share"
    },
    langLabel: {
        description: "언어변경 텍스트",
        KR: "Language",
        GB: "Language"
    },
    link_twitter: {
        value: ""
    },
    link_facebook: {
        value: ""
    },
    link_insta: {
        value: ""
    },
    link_email: {
        value: ""
    },
    channelTalkLabel: {
        description: "채널톡 버튼 라벨",
        KR: "채널톡",
        GB: "Open Channel Talk "
    },
    twitter: {
        KR: "https://facebook.com",
        GB: "https://facebook.com"
    },
    facebook: {
        KR: "https://facebook.com",
        GB: "https://facebook.com"
    },
    instaGram: {
        KR: "https://facebook.com",
        GB: "https://facebook.com"
    },
    email: {
        KR: "janda@stayjanda.com",
        GB: "janda@stayjanda.com"
    },
    goto: {
        KR: "바로가기",
        GB: "go to",
    },
    currency_kr: {
        KR: "원",
        GB: "KRW"
    },
    get: function(key: string, lang:string, index?:number):any {

        if(index !== undefined) {
            // @ts-ignore
            if(this[key].value) {
                // @ts-ignore
                return this[key].value[index]
            } else {
                // @ts-ignore
                return this[key][lang][index];
            }            
        }

        // @ts-ignore
        if(this[key].value) {
            // @ts-ignore
            return this[key].value
        } else {
            // @ts-ignore
            return this[key][lang];
        }
    },
    set: function(key:string,lang:string,value:any, index?:number):any {

        if(index !== undefined) {
            // @ts-ignore
            if(this[key].value !== undefined) {
                // @ts-ignore
                this[key].value[index] = value
            } else {
                // @ts-ignore
                return this[key][lang][index] = value;
            }            
        }
        
 
        if(index === undefined) { 
            // @ts-ignore
            if(this[key].value !== undefined) {
                // @ts-ignore
                this[key].value = value
            } else {
                // @ts-ignore
                this[key][lang] = value;
            }
        }
    }
}



// tourList: {
//     description: "포트폴리오 목록",
//     type: JDinputType.array,
//     META: {
//         img: {
//             description: "포트폴리오 이미지",
//             type: JDinputType.img,
//             default: "template/profile/img/tem_bg_03.jpg"
//         },
//         title: {
//             description: "타이틀",
//             default: ""
//         }, 
//         link: {
//             description: "링크",
//             type: JDinputType.link,
//             default: ""
//         }
//     },
//     KR: [
//         {
//             img:"/template/housemanual/img/ski_img.png",
//             title:"지리산 스키장", 
//             text: "강원도 인제군 인제읍 귀둔리 123<br />000-0000-0000"
//         },
//         {
//             img:"/template/housemanual/img/spa_img.png",
//             title:"지리산 온천지국", 
//             text:"강원도 인제군 인제읍 귀둔리 2<br />000-0000-0000"
//         },
//     ],
//     GB: [
//         {
//             img:"template/profile/img/tem_bg_03.jpg",
//             title:"떠나요~ 제주도~ 푸른바다로~",
//             text:""
//         },
//         {
//             img:"template/profile/img/tem_bg_03.jpg",
//             title:"떠나요~ 제주도~ 푸른바다로~", 
//             text:""
//         },
//     ]
// }



// version 1.0.0 이후에 템플릿들 공유중
export const SHARED_INFO2 = {
    get: function(key: string, lang:string, index?:number):any {

        if(index !== undefined) {
            // @ts-ignore
            if(this[key].value) {
                // @ts-ignore
                return this[key].value[index]
            } else {
                // @ts-ignore
                return this[key][lang][index];
            }            
        }

        // @ts-ignore
        if(this[key].value) {
            // @ts-ignore
            return this[key].value
        } else {
            // @ts-ignore
            return this[key][lang];
        }
    },
    set: function(key:string,lang:string,value:any, index?:number):any {

        if(index !== undefined) {
            // @ts-ignore
            if(this[key].value !== undefined) {
                // @ts-ignore
                this[key].value[index] = value
            } else {
                // @ts-ignore
                return this[key][lang][index] = value;
            }            
        }
        
 
        if(index === undefined) { 
            // @ts-ignore
            if(this[key].value !== undefined) {
                // @ts-ignore
                this[key].value = value
            } else {
                // @ts-ignore
                this[key][lang] = value;
            }
        }
    }
}


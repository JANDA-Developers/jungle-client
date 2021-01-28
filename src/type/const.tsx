import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { Langs, UserRole, WebPageType } from "./api";

export const PAGE_SELECT_OPS = [{
    label: "20개보기",
    value: 20,
},
{
    label: "50개보기",
    value: 50,
},
{
    label: "100개보기",
    value: 100,
}];



export default "-"

export const LANG_SELECT_OPS: IselectedOption<Langs>[] = [
    {
        label: "한국어",
        value: Langs.KR
    },
    {
        label: "영어",
        value: Langs.GB
    },
]

export const PAGE_TYPE_OPS: IselectedOption<WebPageType>[] = [
    {
        label: "개인",
        value: WebPageType.PERSONAL
    },
    {
        label: "비지니스",
        value: WebPageType.BUSI
    },
]

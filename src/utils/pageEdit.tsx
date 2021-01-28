import { CSSProperties } from "react";
import $ from "jquery"
import { IEditKit } from "../component/Img";
import { ISet } from "@janda-com/front/dist/types/interface";
import { ILinkEditProps } from "../component/A";
import sanitizeHtml from 'sanitize-html';
import { Langs } from "../type/api";
import { IUseModal } from "@janda-com/front";

interface Style {
    style?: CSSProperties,
}
interface TInfoCell extends Style {
    [key: string]: any
}
export type TWebPageInfo = {
    [key: string]: any
}

const keyDownUlManage = (e: any,) => {
    const $this = $(e.currentTarget);
    if (!$this.html()) {
        const $li = $('<li></li>');

        const sel = window.getSelection()!;

        let range = sel.getRangeAt(0);

        range.collapse(false);
        range.insertNode($li.get(0));
        range = range.cloneRange();
        range.selectNodeContents($li.get(0));
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);

    } else {
        //are there any tags that AREN'T LIs?
        //this should only occur on a paste
        const $nonLI = $this.find(':not(li, br)');

        if ($nonLI.length) {
            $this.contents().replaceWith(function () {
                //we create a fake div, add the text, then get the html in order to strip out html code. we then clean up a bit by replacing nbsp's with real spaces
                return '<li>' + $('<div />').text($(this).text()).html().replace(/&nbsp;/g, ' ') + '</li>';
            });
            //we could make this better by putting the caret at the end of the last LI, or something similar
        }
    }
}




type TCommand = "bold"

export const effectDoc = (command: TCommand) => {
    document.execCommand(command)
}


export interface IGetEditUtilsResult<Page> {
    page: Page;
    setPage: React.Dispatch<any>;
    lang: Langs;
    edit: (key: keyof Page, index?: number) => any;
    ulEdit: (key: keyof Page) => any;
    imgEdit: (key: keyof Page) => (url: string) => void;
    editArray: (key: keyof Page, index: number, value: any) => void;
    addArray: (key: keyof Page, value: any) => void;
    removeArray: (key: keyof Page, index: number) => void
    arrAddKit: (key: keyof Page, modalHook: IUseModal) => {
        onClick: () => void;
    },
    bg: (key: keyof Page) => {
        backgroundImage: string;
    } | undefined;
    src: (key: keyof Page) => {
        src: any;
        "data-imgkey": keyof Page;
        "data-img": string;
    } | undefined;
    imgKit: (key: keyof Page) => IEditKit
    get: (key: keyof Page) => any
    linkEdit: (key: keyof Page) => ILinkEditProps
    arrayEditModalKit: (key: keyof Page, modalHook: IUseModal) => {
        onSubmit: (data: any) => void;
        onDelete: (index: number) => void;
        key: string;
        modalHook: IUseModal
    },
    editObjArr: (key: keyof Page, index: number, modalHook: IUseModal) => {
        onClick: () => void;
        "data-edit": string;
        key: string
    } | {
        key: string
    }
}


export const getEditUtils = <T extends { [key: string]: any }>(editMode: boolean, page: T, setPage: ISet<any>, lang = "kr") => {
    const validateKey = (key: string | keyof T, array?: number | true) => {
        if (!page[key]) throw Error(`키값 ${key}은 존재하지 않습니다.`);
        if (page[key].value === undefined)
            if (page[key][lang] === undefined) throw Error(`언어 ${lang}은 ${key}에 없으며 value 또한 없습니다..`);

        if (array !== undefined) {
            if (!Array.isArray(page[key][lang])) throw Error(`the ${key} object is not array!!`);
            if (array !== true) {
                if (page[key][lang][array] === undefined) throw Error(`the object key ${key} dose not  have index ${array}!!`)
            }
        }
    }


    const onSingleBlur = (e: React.FocusEvent<HTMLElement>, key: string, index?: number) => {
        const text = e.currentTarget.innerHTML;
        validateKey(key, index)

        set(key, text || "", index)
        setPage({ ...page })
    }

    const editable: "true" | undefined = editMode === true ? "true" : undefined;

    const singleBlur = onSingleBlur.bind(onSingleBlur);

    const arrayEditModalKit = (key: keyof T, tourModalHook: IUseModal) => {
        return {
            onSubmit: (data: any, index?: number) => {
                if (index !== undefined) {
                    editArray(key, index, data)
                } else {
                    addArray(key, data)
                }
            },
            onDelete: (index: number) => {
                removeArray(key, index)
            },
            modalHook: tourModalHook,
            key: key + tourModalHook.info?.index + tourModalHook.info?.key
        }
    }

    const editArray = (key: keyof T, index: number, value: any) => {
        validateKey(key, index)
        if (index === undefined) throw Error("didn't provided index edit Array");
        set(key, value, index)
        setPage({ ...page });
    }

    const addArray = (key: keyof T, value: any) => {
        validateKey(key, true)
        get(key).push(value);
        setPage({ ...page });
    }

    const removeArray = (key: keyof T, index: number) => {
        validateKey(key, index)
        get(key).splice(index, 1)
        setPage({ ...page });
    }

    type Data = {
        dangerouslySetInnerHTML: {
            __html: T[keyof T];
        };
    }

    const data = (key: keyof T, index?: number) => {
        validateKey(key, index);
        const html = index === undefined ? get(key) : get(key)[index];
        return {
            dangerouslySetInnerHTML: {
                __html: sanitizeHtml(html)
            }
        }
    }

    const edit = (key: keyof T, index?: number): any => {

        const editObj = {
            onBlur: (e: any) => {
                if (typeof key === "string")
                    singleBlur(e, key, index)
            },
            contentEditable: editable,
            suppressContentEditableWarning: true,
            onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                if (editMode)
                    e.preventDefault();
            },
            ...data(key, index) as Data
        }

        return editObj

    }

    const ulEdit = (key: keyof T) => ({
        onKeyDown: keyDownUlManage,
        onKeyUp: keyDownUlManage,
        ...edit(key)
    })

    const onImgUpload = (key: keyof T, url: string) => {
        validateKey(key)
        set(key, url)
        setPage({ ...page })
    }

    const imgEdit = (key: keyof T) => onImgUpload.bind(onImgUpload, key);
    const bg = (key: keyof T) => {
        validateKey(key)
        return ({ backgroundImage: `url(${get(key)})`, "data-edit": editable ? "bg" : "" })
    }
    const src = (key: keyof T) => {
        validateKey(key)
        return ({ src: get(key), "data-imgkey": key, "data-img": "img" })
    }

    const imgKit = (key: string) => {
        validateKey(key)
        const upload = imgEdit.bind(imgEdit, key)();
        const _bg = bg.bind(bg, key)();
        const _src = src.bind(src, key)();

        return {
            upload,
            bg: _bg,
            src: _src
        }
    }

    const get = (key: keyof T, index?: number) => {
        validateKey(key)

        if (index !== undefined) {
            // @ts-ignore
            if (page[key].value) {
                // @ts-ignore
                return page[key].value[index]
            } else {
                // @ts-ignore
                return page[key][lang][index];
            }
        }

        // @ts-ignore
        if (page[key].value) {
            // @ts-ignore
            return page[key].value
        } else {
            // @ts-ignore
            return page[key][lang];
        }
    }

    const set = (key: keyof T, value: any, index?: number) => {
        validateKey(key, index)


        if (index !== undefined) {
            // @ts-ignore
            if (page[key].value) {
                // @ts-ignore
                page[key].value[index] = value
                return
            } else {
                // @ts-ignore
                page[key][lang][index] = value;
                return
            }
        }


        if (index === undefined) {
            // @ts-ignore
            if (page[key].value) {
                // @ts-ignore
                page[key].value = value
                return
            } else {
                // @ts-ignore
                page[key][lang] = value;
                return
            }
        }
    }

    const linkEdit = (key: keyof T): ILinkEditProps => {
        validateKey(key);
        const link = get(key);

        return {
            link,
            editable: !!editable,
            editLink: (link: string) => {
                set(key, link)
            }
        }
    }

    const editObjArr = (key: keyof T, index: number, modalHook: IUseModal) => {
        validateKey(key, index);
        if (!page[key].META) throw Error(`${key} on page META dose not exsit`);

        const _key = `${key}${index}EditArr`;

        if (editMode) {
            return {
                onClick: (e: React.MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    modalHook.openModal(
                        { META: page[key].META, origin: get(key)[index], index }
                    )
                },
                "data-edit": "array",
                key: _key,
            }
        }

        return {
            key: _key
        }
    }

    const arrAddKit = (key: keyof T, modalHook: IUseModal) => {
        validateKey(key);
        if (!page[key].META) throw Error(`${key} on page META dose not exsit`);

        return {
            onClick: () => {
                modalHook.openModal({ META: page[key].META, key: "create" })
            }
        }
    }

    // 에디터 모드이거나 값이 있으면 출력함
    const view = (key: keyof T) => editMode || get(key)

    return {
        get,
        page,
        setPage,
        lang,
        edit,
        ulEdit,
        imgEdit,
        editArray,
        addArray,
        removeArray,
        arrayEditModalKit,
        arrAddKit,
        editObjArr,
        bg,
        src,
        view,
        imgKit,
        linkEdit
    }
}



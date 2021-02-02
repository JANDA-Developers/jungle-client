import { InputText, isEmpty, isLast, JDbadge, JDbutton, JDcard, JDcontainer, JDpageHeader, onCompletedMessage, WindowSize } from '@janda-com/front';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paths } from '../../App';
import { BackStepBar } from '../../component/BackStepBar';
import { codeToName, LangChange } from '../../component/LanguageChnager';
import { JDpageInputRender } from '../../component/pageInputRender.tsx/PageInputRender';
import { usePageEdit } from '../../hook/usePageEidt';
import { useWebPageFindByKey, useWebPageUpdate } from '../../hook/useWebSite';
import { FwebPage, Langs } from '../../type/api';
import { completeMsg } from '../../utils/completeMsg';
import { cloneObject } from '../../utils/deepCopy';
import { mergeDeepOnlyExsistProperty } from '../../utils/merge';
import { omits } from '../../utils/omits';

interface IProp {
}

export const DetailWebPage: React.FC<IProp> = ({ }) => {
    const { key } = useParams<{ key: string }>()
    const [lang, setLang] = useState<Langs>(Langs.KR)
    const { page, item } = usePageEdit(key, lang)

    const [updateMu] = useWebPageUpdate({
        onCompleted: ({ WebPageUpdate }) => {
            completeMsg(WebPageUpdate, "페이지 업데이트 완료", "페이지 업데이트 실패");
        }
    });
    const handlePageUpdate = (page: any) => {
        if (!item) return;
        const cloneOrigin = cloneObject(item);
        cloneOrigin.value = page;
        updateMu({
            variables: {
                id: item?._id,
                input: omits(cloneOrigin, "owner", "keyWards", "key") as any
            }
        })
    }

    if (!item) return <div />
    if (isEmpty(page)) return <div />
    return <div className="editMode">
        <JDpageHeader title="디테일 페이지 수정" desc="페이지에 필요한 정보 입력하기 (페이지로 이동하여 수정도 가능합니다.)" />
        <JDcontainer size={WindowSize.sm} verticalPadding >
            <h1>{item.title}</h1>
            <BackStepBar mb go={Paths.ADMIN} label="리스트로 돌아가기" />
            <LangChange supports={item?.supportLanguage} onChange={setLang} lang={lang} >
                <JDbutton mb mode="border">언어선택하기</JDbutton>
            </LangChange>
            <JDcard>
                <JDbadge thema="primary" mb>{codeToName(lang)}</JDbadge>
                <JDpageInputRender onSubmit={handlePageUpdate} lang={lang} data={page} />
            </JDcard>

            asdasdasdasd
        </JDcontainer>
    </div>;
};

export default DetailWebPage;

const a = 1;
const b = "";
export const [c, d] = [a, b]
import { Col, Flex, Grid, IUseModal, JDalign, JDbutton, JDcard, JDlabel, JDmodal, JDselect, JDswitch, JDtagInput, JDtypho, Tiny, toast, useInput, useSelect } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import { domain } from 'process';
import React, { useState } from 'react';
import { useMultiSelect } from '../hook/useMultiSelect';
import { useAddDomain, useWebPageCreate, useWebPageUpdate, webpageCreate } from '../hook/useWebSite';
import { TemplateKey, TEMPLATES } from '../template/templates';
import { FwebPage, Langs } from '../type/api';
import { LANG_SELECT_OPS, PAGE_TYPE_OPS } from '../type/const';
import { completeMsg } from '../utils/completeMsg';
import { isDomain } from '../utils/isDomain';
import { omits } from '../utils/omits';
import { opFilter, opFind } from '../utils/utils';
import { Validater } from '../utils/validater';
import { Tempalte } from './Template';

export interface TModalInfo {
    page: FwebPage
}

interface IProp {
    onCreate: (page: FwebPage) => void;
    modalHook: IUseModal<TModalInfo>;
}

export const WebPageModal: React.FC<IProp> = ({ modalHook, onCreate }) => {
    const page = modalHook.info?.page
    const titleHook = useInput(page?.title || "")
    const describHook = useInput(page?.description || "")
    const tagsHook = useState<string[]>(page?.keyWards || [])

    const { createPage, loading: createLoading } = webpageCreate();
    const [pageUpdate, { loading: updateLoading }] = useWebPageUpdate(
        {
            onCompleted: ({ WebPageUpdate }) => {
                if (completeMsg(WebPageUpdate, "페이지 업데이트", "페이지 업데이트 실패"))
                    modalHook.closeModal()
            }
        }
    );
    const [templateKey, setTemplateKey] = useState<TemplateKey>((page?.templateKey as TemplateKey) || TemplateKey.Foo);
    const isCreate = !page?._id;
    const selectedLangsOps = opFilter(page?.supportLanguage || [Langs.KR], LANG_SELECT_OPS)
    const supportLagnsHook = useMultiSelect(selectedLangsOps, LANG_SELECT_OPS)
    const pageTypeHook = useSelect(opFind(page?.type, PAGE_TYPE_OPS), PAGE_TYPE_OPS)
    const handleTemplateClick = (key: TemplateKey) => () => {
        setTemplateKey(key);
    }

    const { validate } = new Validater([{
        value: templateKey,
        failMsg: "템플릿을 선택 해주세요"
    }, {
        value: titleHook.value,
        failMsg: "타이틀을 입력 해주세요"
    },
    {
        value: pageTypeHook.selectedOption?.value,
        failMsg: "페이지 타입을 입력 해주세요"
    }])

    const totalLoading = createLoading || updateLoading;

    const selectedTemplate = TEMPLATES.find(T => T.key === templateKey);

    const nextData = {
        supportLanguage: supportLagnsHook.selectedOptions?.map(op => op.value as Langs),
        description: describHook.value,
        keyWards: tagsHook[0],
        title: titleHook.value,
        value: selectedTemplate?.value || "",
        templateKey,
        type: pageTypeHook.selectedOption?.value
    }

    const handleCreate = () => {
        if (!validate) return;
        createPage(nextData, (data) => {
            if (data.data) {
                onCreate(data.data)
            }
        })
    }

    const handleUpdate = () => {
        if (!validate) return;
        omits(nextData, "value")

        pageUpdate({
            variables: {
                id: page?._id,
                input: nextData
            }
        })
    }


    return <JDmodal
        className="WebPageModal"
        fullInMobile
        loading={totalLoading}
        foot={
            <Flex>
                <JDbutton onClick={isCreate ? handleCreate : handleUpdate} thema="primary">{isCreate ? "만들기" : "수정하기"}</JDbutton>
            </Flex>
        }
        head={{
            title: `페이지 ${isCreate ? "만들기" : "수정하기"}`
        }} {...modalHook} >
        <InputText mb {...titleHook} label="페이지 제목" />
        <InputText mb {...describHook} label="페이지 설명" textarea />
        <JDselect mb {...pageTypeHook} label="페이지 용도" />
        <JDselect mb isMulti {...supportLagnsHook} label="지원 언어 선택" />
        <JDlabel txt="키워드" />
        <JDtagInput mb tags={tagsHook[0]} setTags={tagsHook[1]} />
        <JDlabel txt="템플릿 선택하기" />
        <Grid className="templateListWrap">
            {TEMPLATES.map(temp =>
                <>
                    { temp.key != 'Its' &&
                        <Col key={temp.key} md={6} sm={12} full={3}>
                            <Tempalte mb style={{ minWidth: "200px", height: "420px" }} mr selected={temp.key === templateKey} onClick={handleTemplateClick(temp.key)} title={temp.title} describe={temp.describe} img={temp.img} />
                        </Col>
                    }
                </>
            )}
        </Grid>
    </JDmodal>;
};

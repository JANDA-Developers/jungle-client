import React from 'react';
import { Bold, Col, copytoClipboard, Flex, Grid, JDbutton, JDcard, JDphotoFrame, JDshareBtn, JDtypho, Small, Tiny, toast, updateURLParameter, useModal } from '@janda-com/front';
import { JDicon, JDsocialHead } from '@janda-com/front';
import dayjs from 'dayjs';
import QrCode from "qrcode.react";
import { FwebPage } from '../../type/api';
import { CardProps } from '@janda-com/front/dist/components/cards/Card';
import { TEMPLATES } from '../../template/templates';
import { JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import { useHistory } from 'react-router-dom';
import { Paths } from '../../App';
import { InputText } from '@janda-com/front';

interface IProp extends CardProps, JDatomExtentionSet {
    webPage: FwebPage;
    onDetailEdit?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    onDomainChange?: () => void;
}

export const WebPageCard: React.FC<IProp> = ({ webPage, onEdit: handleEdit, onDetailEdit: handleAdditionInfo, onDomainChange: handleDomainChange, onDelete: handleDelete, ...props }) => {
    const url = location.protocol + "//" + location.host + "/#/" + webPage.key;
    const history = useHistory();

    const handleCopy = () => {
        copytoClipboard(url);
        toast("클립보드에 복사 되었습니다.")
    }

    const shareProp = {
        text: webPage.description,
        title: webPage.title,
        url: url
    }

    const handleQrcode = () => {
        const canvas = document.getElementById(`canvas${webPage._id}`);
        if (!canvas) return;

        const img = (canvas as HTMLCanvasElement).toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = img
        link.click();
    }

    const toPage = () => {
        history.push(Paths.VIEW.replace(":code", webPage.key))
    }


    const template = TEMPLATES.find(temp => temp.key === webPage.templateKey)
    if (!template) return <JDcard mb>지원이 종료된 페이지 템플릿 입니다.</JDcard>;
    return <JDcard foot={{
        mode: "fit",
        element: <div>
            <JDbutton br="no" mr onClick={handleDelete} thema="error">삭제하기</JDbutton>
            {/* Original <JDbutton br="no" mr onClick={handleEdit} thema="primary">수정하기</JDbutton> */}
            <JDbutton br="no" thema="grey1" onClick={handleAdditionInfo}>상세편집</JDbutton>
            <JDbutton br="no" thema="grey1" onClick={toPage}>바로가기</JDbutton>
        </div>
    }} className="webpageCard" {...props}>
        <Grid  >
            <Col mb full={4} md={12}>
                <JDtypho mb="small" weight={600} size="h4">
                    {webPage.title}
                    <Small weight={400}>
                        {dayjs(webPage.createdAt).format("YYYY.MM.DD")}
                    </Small>
                </JDtypho>
                <JDtypho mb>
                    {webPage.description}
                </JDtypho>
                <JDtypho mb flex={{ vCenter: true }} size="small">
                    <InputText mr iconOnClick={handleCopy} iconProps={{ size: "small", hover: true, tooltip: "복사하기" }} icon="copy" value={webPage.domain || url} Size="small" />
                    <JDicon size="small" tooltip="도메인수정" hover onClick={handleDomainChange} icon="edit" />
                </JDtypho>
            </Col>
            <Col mb full={4} md={6}>
                <Bold mb>템플릿: {template.title}</Bold>
                <JDphotoFrame unStyle={false} isBgImg style={{ height: "80px", width: "80px" }} src={template.img} />
            </Col>
            <Col mb full={4} md={6}>
                {/* Original <Bold mb>QR코드</Bold>
                <div className="qrcode">
                    <JDicon className="qrcode__downloadIcon" hover icon="camera" onClick={handleQrcode} />
                    <QrCode id={`canvas${webPage._id}`} className="webpageCard__qrcode" value={url} />
                </div> */}
            </Col>
        </Grid>
        <JDsocialHead siteName="asdas" content="asdas" imgUrl="" title="aa" url={url} />
        {/* <PCshareBtns /> */}
        <JDshareBtn shareProp={shareProp}>공유하기</JDshareBtn>
    </JDcard>;
};

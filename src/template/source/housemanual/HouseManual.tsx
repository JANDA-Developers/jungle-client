import { JDcard, JDsocialHead, useModal } from '@janda-com/front';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Content } from '../../../component/Content';
import { BG } from '../../../component/Img';
import { Loading } from '../../../component/Loading';
import { ShareMaster } from '../../../component/ShareBtn';
import { IViewContext, ViewContext } from '../../../page/View';
import { HOUSE_MANUAL_INFO } from '../../info/housemanual';
import { ITempalte } from '../../templates';
import { InfoSubmitModal, IPortfolioModalInfo } from '../../../component/InfoSubmitModal';
import { Add } from '../../../component/Add';
import { openChannel } from '../../../utils/channel';
import { A } from '../../../component/A';
import { LangChange } from '../../../component/LanguageChnager';

type INFO = typeof HOUSE_MANUAL_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}


export const HouseManual: React.FC<IProp> = ({ setLang, edit, linkEdit, template, arrAddKit, page, arrayEditModalKit, editObjArr, addArray, editArray, removeArray, editMode, bg, imgKit, src, originPage, lang, l }) => {

    const { title, description } = originPage!;
    const tourModalHook = useModal<IPortfolioModalInfo>();



    useEffect(openChannel.bind(openChannel, page?.channelTalk?.publickKey), [])


    return <div>
        <Helmet>
            <link rel="stylesheet" href="/template/housemanual/css/style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
            <link rel="stylesheet" href="/template/housemanual/css/normalize.8.0.1.css" />
            {/* <script type="text/javascript" src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT}`} /> */}
            {/* <script type="text/javascript" src={"/template/housemanual/js/map-control.js"} /> */}
            <script type="text/javascript" src={"/assets/js/channelTalkLoad.js"} />
            <script type="text/javascript" src={"/assets/loadcheck.js"} />
            <title>{title}</title>
            <JDsocialHead url={location.href} imgUrl={template.img} title={title} content={description} siteName={""} />
        </Helmet>
        
        <div className="aiWrap">
            <BG {...imgKit("header")} className="aiHeader">
                <A {...linkEdit("channelTalk")} className="aiHeader__btn aiHeader__talk">{l.channelTalkLabel}</A>
                <div style={{ display: "flex" }}>
                    <LangChange lang={lang} onChange={setLang} supports={originPage?.supportLanguage} >
                        <a className="aiHeader__btn aiHeader__lang">{l.langLabel}</a>
                    </LangChange>
                    <ShareMaster shareProp={{ text: description, title, url: location.href }}>
                        <a className="aiHeader__btn aiHeader__share">{l.shareLabel}</a>
                    </ShareMaster>
                </div>
            </BG>
            <div className="aiName">
                <BG {...imgKit("houseBg")} className="aiName__img" />
                <div className="aiName__info">
                    <h1 className="aiName__title"><i className="fa fa-home" aria-hidden="true" /><span {...edit("houseName")} /></h1>
                    <p className="aiName__sub" {...edit("subTitle")}></p>
                </div>
            </div>
            <div className="aiSection">
                <div className="detail">
                    <h1 className="detail__title">{page.detail__title[lang]}</h1>
                    <ul className="detail__listWrap">
                        {/* TODO 늘리는건 가능 줄이는건 안됨 */}
                        <li className="detail__list"><strong >{l.address_label}</strong><span {...edit("detail_address")} /><A {...linkEdit("map_link")} className="detail__link">{l.check_map}</A></li>
                        <li className="detail__list"><strong>{l.contact_label}</strong><span {...edit("house_contact")} /><a href={`tel:${l.call}`} className="detail__link">{l.call}</a></li>
                        <li className="detail__list"><strong>{l.checkIn_label}</strong><span {...edit("check_in_time")}></span><strong>{l.checkOut_label}</strong> <span {...edit("check_out_time")} /></li>
                        <li className="detail__list"><strong>{l.wifi_label}</strong> <span {...edit("wifi")} /></li>
                    </ul>
                </div>
                {/* <div className="detail">
                    <h1 className="detail__title">편의시설</h1>
                    <div className="detail__txtWrap">
                        <p className="detail__txt">야외 수영장/ 바베큐장/ 자전거 무료대여/ 주차장/ 실내 체육관/ 비즈니스 라운지</p>
                    </div>
                </div>
                <div className="detail">
                    <h1 className="detail__title">재활용</h1>
                    <div className="detail__txtWrap">
                        <p className="detail__txt">큰 규모의 재활용 쓰레기는 건물 뒷편에 따로 버려주세요.</p>
                    </div>
                </div>
                <div className="detail">
                    <h1 className="detail__title">안전</h1>
                    <div className="detail__txtWrap">
                        <p className="detail__txt">개인의 안전을 위해서 외출시엔 베란다 창문을 잠그고 외출해 주세요.</p>
                        <p className="detail__txt">실내에서는 촛불을 키거나 개인 난방기구를 사용을 하지 말아주세요.</p>
                        <p className="detail__txt">숙소 근처에서 불꽃 놀이는 금지입니다.</p>
                    </div>
                </div>
                <div className="detail">
                    <h1 className="detail__title">객실사용 유의사항</h1>
                    <div className="detail__txtWrap">
                        <p className="detail__txt">전 객실 금연입니다.</p>
                        <p className="detail__txt">오후 10시 이후의 입실은 사전에 반드시 연락주시기 바랍니다.</p>
                        <p className="detail__txt">미성년자 혼숙불가합니다.</p>
                        <p className="detail__txt">비즈니스 라운지 노트북 이용가능합니다.</p>
                        <p className="detail__txt">객실호수는 현장에서 체크인시 랜덤배정됩니다.</p>
                        <p className="detail__txt">집기파손시에는 호텔 프론트에 알려주시기 바랍니다.</p>
                        <p className="detail__txt">애완견 동반입실 불가하며 입실 제한, 환불불가합니다.</p>
                        <p className="detail__txt">초,폭죽,불꽃놀이 및 풍선은 안전과 소음으로 인해 금지하오니 양해 바랍니다.</p>
                        <p className="detail__txt">모든 객실은 개인의 취향을 고려하여 다양한 디자인으로 구성되어 있습니다. 따라서 객실이미지와 배정된 객실은 인테리어가 상이할 수 있습니다.</p>
                    </div>
                </div> */}
                <div className="content">
                    <Content infoKey={"content"} />
                </div>
                <div className="detail tour">
                    <h1 className="detail__title" {...edit("tour__title")} />
                    <ul className="detail__listWrap tour__listWrap">
                        {page.tourList[lang].map((tour, index) =>
                            <li {...editObjArr("tourList", index, tourModalHook)} className="detail__list tour__list">
                                <img src={tour.img} className="tour__img" />
                                <h2 className="tour__title">{tour.title}</h2>
                                <p className="tour__txt">{tour.desc}</p>
                            </li>
                        )}
                        <Add {...arrAddKit("tourList", tourModalHook)} />
                        <InfoSubmitModal {...arrayEditModalKit("tourList", tourModalHook)} modalHook={tourModalHook} />
                    </ul>
                </div>
                {/* <TimeSpace infoKey="timespace_key" /> */}
            </div>
            <div className="aiFooter">
                <img src="https://stayjanda.com/img/common/logo.png" className="aiFooter__img" />
                <p className="aiFooter__txt">대한민국 1등 예약솔루션 JANDA 온라인 예약은 JANDA</p>
            </div>
        </div>
    </div>
};

export default HouseManual;
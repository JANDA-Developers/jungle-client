import { InputText, isEmpty, JDbutton, JDmodal, JDsocialHead, useInput, useModal } from '@janda-com/front';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { A } from '../../../component/A';
import { Add } from '../../../component/Add';
import { Content } from '../../../component/Content';
import { EditWrap } from '../../../component/EditElement';
import { BG } from '../../../component/Img';
import { InfoSubmitModal } from '../../../component/InfoSubmitModal';
import { LangChange } from '../../../component/LanguageChnager';
import { ShareMaster } from '../../../component/ShareBtn';
import { IViewContext } from '../../../page/View';
import { openChannel } from '../../../utils/channel';
import { PROFILE_INFO } from '../../info/profile';
import { ITempalte } from '../../templates';
import { IPortfolioModalInfo } from './PortfolioModal';

type INFO = typeof PROFILE_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}

export const Profile: React.FC<IProp> = ({ edit, template, l, editObjArr, setLang, addArray, arrAddKit, arrayEditModalKit, removeArray, editMode, editArray, setPage, page, get, bg, lang, imgKit, linkEdit, src, originPage }) => {
    const { title, description } = originPage!;
    const modalHook = useModal();
    const portfolioModal = useModal<IPortfolioModalInfo>();
    const tagValues = useInput("")
    const channel = page?.channelTalk?.publickKey;
    const isLink = channel.includes("https://");

    useEffect(openChannel.bind(openChannel, page?.channelTalk?.publickKey), [])

    if (isEmpty(page)) {
        return null
    };

    return <div className="mypage_in"><div className="in profile_box">
        <Helmet>
            <link rel="stylesheet" href="/template/profile/css/main.css" />
            <link rel="stylesheet" href="/template/profile/css/board.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
            <script type="text/javascript" src={"/assets/js/channelTalkLoad.js"} />
            <script type="text/javascript" src={"/assets/loadcheck.js"} />
            <JDsocialHead url={location.href} imgUrl={template.img} title={title} content={description} siteName={""} />
        </Helmet>

        <JDmodal foot={
            <JDbutton mode="flat" thema="primary" onClick={() => {
                addArray("tags", tagValues.value)
            }}>추가하기</JDbutton>
        } {...modalHook}>
            <InputText {...tagValues} label="태그추가" />
        </JDmodal>

        <div className="member_details_in w100">
            <BG className="top_bg" {...imgKit("topBg")}>
                <div className="w1200 toolbuttons">
                    {channel && <div className="left_btn">
                        <a href={isLink ? channel : undefined} {...edit("channelTalkLabel")} target="_blank" />
                    </div>}
                    <div className="toolbuttons__right">
                        <div className="right_btn">
                            <ShareMaster shareProp={{ text: title, title: description, url: location.href }}>
                                <a {...edit("shareLabel")} />
                            </ShareMaster>
                        </div>
                        <div className="right_btn">
                            <LangChange lang={lang} onChange={setLang} supports={originPage?.supportLanguage} >
                                <a {...edit("langLabel")} />
                            </LangChange>
                        </div>
                    </div>
                </div>
            </BG>
            <div className="member_box">
                <div className="w1200">
                    <div className="profile">
                        <div className="photo"><BG className="photo__bg" {...imgKit("profile")} /> </div>
                        <div className="name"><i><span {...edit("alphabet")} /></i><span {...edit("profileName")} /></div>
                        <div className="tag">
                            {page.tags[lang].map((t, i) =>
                                <EditWrap editable={editMode} handleDelete={() => { removeArray("tags", i) }} key={i + "tags"}><a {...edit("tags", i)} /></EditWrap>
                            )}
                            {editMode && <a onClick={modalHook.openModal}>+ 추가하기</a>}
                        </div>
                    </div>
                    <div className="profile_txt">
                        <div className="con01">
                            <h3 className="title" ><span {...edit("contentTitle")} /></h3>
                            <div className="txt">
                                <Content infoKey={"content"} />
                            </div>
                        </div>
                        <div className="con02 mt50">
                            <h3 className="title"> <span  {...edit("title_guid")} /></h3>
                            <div className="txt">
                                <ul className="ul_info">
                                    <li>
                                        <strong {...edit("guid_info1_label")} />
                                        <span {...edit("guid_info1_value")} />
                                    </li>
                                    <li>
                                        <strong {...edit("guid_info2_label")} />
                                        <span {...edit("guid_info2_value")} />
                                    </li>
                                    <li>
                                        <strong {...edit("guid_info3_label")} />
                                        <span {...edit("guid_info3_value")} />
                                    </li>
                                    <li>
                                        <strong {...edit("guid_info4_label")} />
                                        <span {...edit("guid_info4_value")} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="review_board mt50">
                            <div className="alignment">
                                <div className="left_div"><h3><span {...edit("portfolio_label")} /></h3></div>
                                <div className="right_div">
                                    <span className="goto_page">
                                        <A {...linkEdit("linkToGuid")}>
                                            <span {...edit("portfolio_link_label")} />
                                            <i className="flaticon-menu-1"></i>
                                        </A>
                                    </span>
                                </div>
                            </div>
                            <div className="board_view">
                                {page.portfolioViews[lang].map((view, index) =>
                                    <div style={{ backgroundImage: `url(${view.img})` }} onClick={() => { window.location.href = view.link }} className="thumbnail" {...editObjArr("portfolioViews", index, portfolioModal)} >
                                        <div className="in_black">
                                            <h4>{view.title}</h4>
                                        </div>
                                    </div>
                                )}
                                <Add {...arrAddKit("portfolioViews", portfolioModal)} />
                                <InfoSubmitModal {...arrayEditModalKit("portfolioViews", portfolioModal)} />
                            </div>
                        </div>

                        {/* API only */}
                        {/* <div className="mt50">
                            <div className="alignment">
                                <div className="left_div"><h3>등록된 상품 <strong>23</strong></h3></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href="/">바로가기<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            <ul className="list_ul line4">
                                <li className="list_in">
                                    <div className="img" style={{ backgroundImage: "url(/its/tem_bg_02.jpg)" }}>상품이미지</div>
                                    <div className="box">
                                        <div className="category"><span>당일여행</span></div>
                                        <div className="title">꽃길만 걸으실 분들을 모집합니다.</div>
                                        <div className="bottom_txt">
                                            <div className="tag2">
                                                <span>#당일여행</span>
                                                <span>#버스투어</span>
                                                <span>#부산근교</span>
                                            </div>
                                            <div className="cash"><strong>70,000</strong>원</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="boardNavigation">
                                <div className="float_left">
                                    <div className="pagenate_mini">
                                        <div className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                        <div className="count"><strong>1</strong> / 10</div>
                                        <div className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>

        </div>
    </div>
    </div>
};

export default Profile;
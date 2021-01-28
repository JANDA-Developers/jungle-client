import { autoComma, Flex, InputText, isEmail, isEmpty, JDbutton, JDtypho, toast, useInput, useModal } from '@janda-com/front';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Content } from '../../../component/Content';
import { EditWrap } from '../../../component/EditElement';
import { BG } from '../../../component/Img';
import { LangChange } from '../../../component/LanguageChnager';
import { ShareMaster } from '../../../component/ShareBtn';
import { IViewContext } from '../../../page/View';
import { openChannel } from '../../../utils/channel';
import { useGuideInfo } from '../../../hook/useItsGuide';
import { ITS_GUIDE_INFO } from '../../info/itsGuide';
import { Centerlize } from '../../../utils/authChecker';
import { useWebPageUpdate } from '../../../hook/useWebSite';
import { completeMsg } from '../../../utils/completeMsg';
import { PageLoading } from '../../../component/PageLoading';
import { useClinetPaging } from '../../../hook/useClinetPaging';
import { Loading } from '../../../component/Loading';

type INFO = typeof ITS_GUIDE_INFO;
interface IProp extends IViewContext<INFO> {
    guideData: any;
}


//URL 링크
//guideTag=
//seller=
//리팩토링
// 1 Wrap 패턴으로 예외상황 처리 분리하기
// 2. l edit setLng 등 문서정리
const itsguide = process.env.REACT_APP_ITS_GUIDE_CLIENT_URI;
export const ItsGuide: React.FC<IProp> = ({ l, edit, setLang, addArray, removeArray, editMode, editArray, setPage, page, get, bg, lang, imgKit, linkEdit, src, originPage, guideData }) => {
    const { title, description } = originPage!;
    const email = l.itsGuideEmail;
    const modalHook = useModal();
    const channel = page?.channelTalk?.publickKey;
    const isLink = channel.includes("https://");
    const { paging, setPage: setPaging, slice, goNext, goPrev } = useClinetPaging(guideData.products, 10);


    useEffect(openChannel.bind(openChannel, page?.channelTalk?.publickKey), [])

    if (isEmpty(page)) {
        return null
    };

    return <div className="mypage_in"><div className="in profile_box">
        <div className="member_details_in w100">
            <BG className="top_bg" {...imgKit("topBg")}>
                <div className="w1200 toolbuttons">
                    {channel && <div className="left_btn">
                        <a href={isLink ? channel : undefined} {...edit("channelTalkLabel")} target="_blank" />
                    </div>}
                    <div className="toolbuttons__right">
                        <div className="right_btn">
                            <ShareMaster shareProp={{ text: title, title: description, url: location.href }}>
                                <a>{l.shareLabel}</a>
                            </ShareMaster>
                        </div>
                        <div className="right_btn">
                            <LangChange lang={lang} onChange={setLang} supports={originPage?.supportLanguage} >
                                <a>{l.langLabel}</a>
                            </LangChange>
                        </div>
                    </div>
                </div>
            </BG>
            <div className="member_box">
                <div className="w1200">
                    <div className="profile">
                        <div className="photo"><BG className="photo__bg" {...imgKit("profile")} /> </div>
                        <div className="name"><i>G</i><span >{guideData.nickName}</span></div>
                        <div className="tag">
                            {page.get("tags", lang).map((t: string, i: number) =>
                                <EditWrap editable={editMode} handleDelete={() => { removeArray("tags", i) }} key={i + "tags"}>
                                    <a {...edit("tags", i)} href={process.env.REACT_APP_ITS_GUIDE_CLIENT_URI + `/service/search&guideTag=${t}`} />
                                </EditWrap>
                            )}
                            {editMode && <a onClick={modalHook.openModal}>+ 추가하기</a>}

                        </div>
                    </div>
                    <div className="profile_txt">
                        <div className="con01">
                            <h3 className="title" >{l.contentTitle}</h3>
                            <div className="txt">
                                <Content infoKey={"content"} />
                            </div>
                        </div>
                        <div className="con02 mt50">
                            <h3 className="title" >{l.title_guid}</h3>
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
                                <div className="left_div"><h3><span>{l.portfolio_label}</span></h3></div>
                                <div className="right_div">
                                    <span className="goto_page">
                                        <a href={itsguide + "/review"}>
                                            <span>{l.portfolio_label}</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="board_view">
                                {/* {guideData.products.map((product: any) =>
                                    <div key={product._id} className="thumbnail" style={{ backgroundImage: `url(${product.thumb.uri})` }} >
                                        <div className="in_black">
                                            <h4>{product.name}</h4>
                                        </div>
                                    </div>
                                )} */}
                                {true && <h4>{l.noReviewData}</h4>}
                            </div>
                        </div>

                        {/* API only */}
                        <div className="mt50">
                            <div className="alignment">
                                <div className="left_div"><h4>{l.productView}<strong className="review_board__label">{guideData.products.length}</strong></h4></div>
                                <div className="right_div">
                                    <span className="goto_page"><a href={itsguide + `/service/search&seller=${guideData.nickName}`}>{l.goto}<i className="flaticon-menu-1"></i></a></span>
                                </div>
                            </div>
                            {guideData.products.map((product: any) =>
                                <ul key={product._id} className="list_ul line4">
                                    <li className="list_in">
                                        <div className="img" style={{ backgroundImage: `url(${product.thubm.uri})` }}>상품이미지</div>
                                        <div className="box">
                                            <div className="category"><span>{product.category.label}</span></div>
                                            <div className="title">{product.title}</div>
                                            <div className="bottom_txt">
                                                <div className="tag2">
                                                    {product.keyWards.map((key: string, index: number) => (
                                                        <span key={product._id + index}>#{key}</span>
                                                    ))}
                                                </div>
                                                <div className="cash"><strong>{autoComma(product.adult_price)}</strong>{l.currency_kr}</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            )}
                            {isEmpty(guideData.products) && <h4>{l.noProductData}</h4>}
                            <div className="boardNavigation">
                                <div className="float_left">
                                    <div className="pagenate_mini">
                                        <div onClick={goPrev} className="page_btn first"><i className="jandaicon-arr4-left"></i></div>
                                        <div className="count"><strong>{paging.page}</strong> / {paging.totalPageSize}</div>
                                        <div onClick={goNext} className="page_btn end"><i className="jandaicon-arr4-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div >
};


interface IWrapProps extends IViewContext<INFO> {

}


interface IEmailConnectProp {
    getData: any
    updateEmail: (email: string) => void;
    defaultEmail: string;
}

const EmailConnect: React.FC<IEmailConnectProp> = ({ getData, updateEmail, defaultEmail }) => {



    const emailInputHook = useInput("")


    const handleStart = () => {

        const email = emailInputHook.value
        if (!isEmail(email)) {
            toast.error("올바른 이메일이 아닙니다.");
        }
        updateEmail(email);
    }

    return <Centerlize>

        <JDtypho size="h3" mb="large" weight={900}>잇츠가이드 계정 이메일을 입력 해주세요.</JDtypho>
        <InputText placeholder="example@google.com" mb="large" Size="big" {...emailInputHook} />
        <Flex mb="huge" center>
            <JDbutton thema="primary" onClick={handleStart}>시작하기</JDbutton>
        </Flex>
        {defaultEmail && <JDtypho text="center" color="error">{defaultEmail} 해당 계정에 연결할 수 없습니다.</JDtypho>}
    </Centerlize>

}

export const ItsGuideWrap: React.FC<IWrapProps> = (props) => {
    const { l, page, originPage, lang } = props;
    const email = l.itsGuideEmail;
    const { guide: guideData, getData } = useGuideInfo(email);
    const [updateWebPageMu, { loading }] = useWebPageUpdate()

    if (loading) return <Loading />

    const updateEmail = (email: string) => {
        page.set("itsGuideEmail", lang, email)
        updateWebPageMu({
            variables: {
                id: originPage?._id,
                input: {
                    value: page
                }
            }
        }).then(({ data }) => {
            if (data?.WebPageUpdate.ok) {
                getData({ variables: { email } })
            } else {
                toast.error("이메일 업데이트 실패")
            }
        })
    }

    return <div>
        <Helmet>
            <script type="text/javascript" src={"/assets/loadcheck.js"} />
            <link rel="stylesheet" href="/template/profile/css/main.css" />
            <link rel="stylesheet" href="/template/profile/css/board.css" />
            <script type="text/javascript" src={"/assets/js/channelTalkLoad.js"} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        </Helmet>
        {guideData ? <ItsGuide guideData={guideData} {...props} /> : <EmailConnect defaultEmail={email} updateEmail={updateEmail} getData={getData} {...props} />}
    </div>

}
export default ItsGuideWrap;

// 연동모드는 <-잇츠가이드 부터 프로필 정보를 가져옴 단 1번만 
// 그다음 페이지 업데이트를 진행함
// 다음 Default로 지정된 값에서의 수정절차를 가능하게함
// 잘분리해야함 
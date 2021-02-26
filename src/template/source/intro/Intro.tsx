import React, {useState} from 'react'
import { useModal } from '@janda-com/front';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IViewContext } from '../../../page/View';
import { INTRO_INFO } from '../../info/intro';
import { Helmet } from 'react-helmet'
import { ITempalte } from 'src/template/templates';
import { BG, Img } from 'src/component/Img';
import { Add } from 'src/component/Add';
import { A } from 'src/component/A';
import { LangChange } from 'src/component/LanguageChnager';
import { Content } from 'src/component/Content';
import { TimeSpace } from 'src/component/TimeSpace';
import { InfoSubmitModal } from 'src/component/InfoSubmitModal';
import BookingIframe from 'src/component/BookingIframe';
import { rootChkList, rootPathTransform } from 'src/utils/templates';
import './scss/intro.scss';


type INFO = typeof INTRO_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}

SwiperCore.use([Autoplay]);

const Intro: React.FC<IProp> = ({
    get, pageKey,
    setLang, edit, linkEdit, template, arrAddKit, page, arrayEditModalKit, editObjArr, addArray, editArray, removeArray, editMode, bg, imgKit, src, originPage, lang, l
}) => {

    const [bgFilter, setBgFilter] = useState(false);
    const [reserBtn, setReserBtn] = useState(false); // 이후 get('bookingKey_use') 값으로 설정
    const [reservationOn, setReservationOn] = useState(false);
    const handelReservation = (state:boolean) => {
        setBgFilter(state);
        setReservationOn(state);
    };

    const editModal_section1 = useModal();
    const editModal_section2 = useModal();
    const editModal_section3 = useModal();
    const editModal_section6 = useModal();


    const rootPathChk = (url:string, option?:any) => {

        const chkurl = url.trim();

        if(rootChkList.includes(chkurl)) {
            return rootPathTransform(pageKey);
        }else{
            return chkurl;
        }
       
    }
  
    return (
        <>
            <Helmet>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content={`${get('commonInfo_companyDesc')}`} />
                <title>{get('commonInfo_companyName')}</title>
                <link rel="shortcut icon" href={get('commonInfo_favicon')} />
                <meta property="og:title" content={`${get('commonInfo_companyName')}`} />
                <meta property="og:description" content={`${get('commonInfo_companyDesc')}`} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={`${get('commonInfo_img')}`} />
                <link rel="stylesheet" href={"/assets/css/normalize.css"} />
                <link rel="stylesheet" href={"/assets/css/swiper.css"} />
                <script type="text/javascript" src={"/assets/loadcheck.js"} />
            </Helmet>
            <div id="office1_main">
                <header className="introhead">
                    <div className="introhead__inner">
                        <div className="introhead__logo">
                            <div className="relative">
                                <img src={`${get("header_logo")}`} alt="logo" className="introhead__logoimg" />
                            </div>
                            <div className="introhead__titlewrap">
                            <h1 className="introhead__title">
                                <span {...edit("header_logo_text1")}></span>
                            </h1>
                            <p className="introhead__subtitle">
                                <span {...edit("header_logo_text2")}></span>
                            </p>
                            </div>
                        </div>
                        <div className="introhead__infoWrap">
                            <div className="introhead__contact">
                                <span {...edit("header_contact")}></span>
                            </div>
                            <div className="introhead__deco" />
                            <div className="introhead">
                                <a href={`${rootPathChk(`${get("social_1_link")}`)}`} className="introhead__socialLink" target="_blank">
                                    <img src={`${get("social_1_img")}`} alt="social media" className="introhead__socialImg" />
                                </a>
                                <a href={`${rootPathChk(`${get("social_2_link")}`)}`}className="introhead__socialLink" target="_blank">
                                    <img src={`${get("social_2_img")}`} alt="social media" className="introhead__socialImg" />
                                </a>
                                <a href={`${rootPathChk(`${get("social_3_link")}`)}`}className="introhead__socialLink" target="_blank">
                                    <img src={`${get("social_3_img")}`} alt="social media" className="introhead__socialImg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="section1">
                    <div className="section1__inner">
                        <Swiper className="section1_slide"
                                spaceBetween={0}
                                speed={700}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}>
                            {page.section1_array[lang].map((item,index) => 
                                <SwiperSlide 
                                    {...editObjArr("section1_array", index, editModal_section1)}
                                >
                                    <div className="section1__slidelist">
                                        <div className="section1__bg" style={{backgroundImage: `url(${item.img})`}} />
                                        <div className="section1__filter" style={{opacity: '0.2'}} />
                                        <div className="section1__textWrap">
                                            <div className="section1__textInner">
                                                <h2 className="section1__title">
                                                    {item.text1}
                                                </h2>
                                                <p className="section1__subTitle">
                                                    {item.text2}
                                                </p>
                                                <p className="section1__desc">
                                                    {item.text3}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <InfoSubmitModal {...arrayEditModalKit("section1_array", editModal_section1)} />
                    <Add {...arrAddKit("section1_array", editModal_section1)} />
                </section>
                <section className="section2">
                    <div className="section2__inner">
                        <Swiper className="section2__slide"
                                spaceBetween={50}
                                speed={700}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}>
                            {page.section2_array[lang].map((item,index) => 
                                <SwiperSlide 
                                    {...editObjArr("section2_array", index, editModal_section2)}
                                >
                                    <div className="section2__listWrap">
                                        <div className="section2__textWrap">
                                            <p className="section2__title"
                                               style={{color: get('commonInfo_colour')}}>
                                                {item.text1}
                                            </p>
                                            <p className="section2__subtitle">
                                                {item.text2}
                                            </p>
                                            <p className="section2__deco" 
                                            style={{backgroundColor: get('commonInfo_colour')}} />
                                            <p className="section2__desc">
                                                {item.text3}
                                            </p>
                                            <div className="section2__btnWrap" 
                                                 style={{color: get('commonInfo_colour')}}>
                                                 <a href={`${rootPathChk(item.btnLink)}`}     
                                                   className="section2__btn" target="_blank"
                                                   style={{
                                                      backgroundColor: get('commonInfo_colour'),
                                                      border:`2px solid ${get('commonInfo_colour')}`
                                                    }}>
                                                    {get('section2_btn_text')}
                                                 </a>
                                            </div>
                                        </div>
                                        <div className="section2__imgWrap">
                                            <div className="section2__img bbaa" 
                                            style={{backgroundImage: `url(${item.img})`, 
                                                    backgroundPosition: `${item.posx}% 50%`}}>
                                            </div>
                                            <div className="section2__imgDeco" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <InfoSubmitModal {...arrayEditModalKit("section2_array", editModal_section2)} />
                        <Add {...arrAddKit("section2_array", editModal_section2)} />
                    </div>
                </section>
                <section className="section3">
                    <div className="section3__inner">
                        <div className="section3__head">
                            <h2 className="section3__title" 
                                style={{color: get('commonInfo_colour')}}>
                                <span {...edit("section3_title")}></span>
                            </h2>
                            <p className="section3__subtitle">
                                <span {...edit("section3_subtitle")}></span>
                            </p>
                            <p className="section3__desc">
                                <span {...edit("section3_desc")}></span>
                            </p>
                            <p className="section3__deco" 
                               style={{backgroundColor: get('commonInfo_colour')}} />
                        </div>
                        <div className="section3__content">
                            <Swiper className="section3__slide"
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    speed={700}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false
                                    }}
                                    breakpoints={{
                                        300: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}>
                                {page.section3_array[lang].map((item,index) => 
                                    <SwiperSlide 
                                        {...editObjArr("section3_array", index, editModal_section3)}>
                                        <div className="section3__list">
                                            <div className="section3__listimg" 
                                                 style={{backgroundImage: `url(${item.img})`, 
                                                        backgroundPosition: `${item.posx}% 50%`}} />
                                            <div className="section3__listfilter" />
                                            <div className="section3__listinfo">
                                                <p className="section3__listtitle">
                                                    {item.title}
                                                </p>
                                                <p className="section3__listdesc">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                            <InfoSubmitModal {...arrayEditModalKit("section3_array", editModal_section3)} />
                            <Add {...arrAddKit("section3_array", editModal_section3)} />
                        </div>
                    </div>
                </section>
                <section className="section4">
                    <div className="section4__inner">
                    <div className="section4__listWrap">
                        <div className="section4__imgWrap">
                            <BG className="section4__img" {...imgKit("section4_img")} 
                                posx={`${get("section4_posx")}`} > 
                            </BG>
                            <div className="section4__imgDeco" />
                        </div>
                        <div className="section4__textWrap">
                            <p className="section4__title" 
                               style={{color: get('commonInfo_colour')}}>
                                <span {...edit("section4_title")}></span>
                            </p>
                            <p className="section4__subtitle">
                                <span {...edit("section4_subtitle")}></span>
                            </p>
                            <p className="section4__deco" 
                               style={{backgroundColor: get('commonInfo_colour')}} />
                            <p className="section4__desc">
                                <span {...edit("section4_desc")}></span>
                            </p>

                            <div className="section4__btnWrap" style={{color: get('commonInfo_colour')}}>
                                 <a href={`${rootPathChk(`${get("section4_btnLink")}`, 'section4')}`}
                                    className="section4__btn" target="_blank"
                                    style={{
                                        backgroundColor: get('commonInfo_colour'),
                                        border:`2px solid ${get('commonInfo_colour')}`
                                    }}>
                                    <span {...edit("section4_btnText")}></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="section5">
                    <div className="section5__imgwrap">
                        <BG className="section5__img" {...imgKit("section5_img")}></BG>
                        <div className="section5__filter" />
                        <div className="section5__textWrap">
                            <h2 className="section5__title">
                                <span {...edit("section5_title")}></span>
                            </h2>
                            <p className="section5__desc">
                                <span {...edit("section5_subtitle")}></span>
                            </p> 
                            <a href={`${rootPathChk(`${get("section5_btnLink")}`)}`} 
                               className="section5__btn" target="_blank">
                                <span {...edit("section5_btnText")}></span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="section6">
                    <div className="section6__inner">
                        <div className="section6__head">
                            <h2 className="section6__title" 
                                style={{color: get('commonInfo_colour')}}>
                                <span {...edit("section6_title")}></span>
                            </h2>
                            <p className="section6__subtitle">
                                <span {...edit("section6_subtitle")}></span>
                            </p>
                            <p className="section6__desc">
                                <span {...edit("section6_text")}></span>
                            </p>
                            <p className="section6__deco" 
                               style={{backgroundColor: get('commonInfo_colour')}} />
                        </div>
                        <div className="section6__content">
                            <Swiper className="section6__slide"
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    speed={700}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false
                                    }}
                                    breakpoints={{
                                        300: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}>
                                    {page.section6_array[lang].map((item,index) => 
                                        <SwiperSlide 
                                            {...editObjArr("section6_array", index, editModal_section6)}>
                                            <div className="section6__list">
                                                <div className="section6__listimg" 
                                                     style={{backgroundImage: `url(${item.img})`}} />
                                                <div className="section6__listinfo">
                                                    <p className="section6__listtitle">
                                                        {item.title}
                                                    </p>
                                                    <p className="section6__listdesc"
                                                       style={{backgroundColor: get('commonInfo_colour')}}>
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )}
                            </Swiper>
                            <InfoSubmitModal {...arrayEditModalKit("section6_array", editModal_section6)} />
                            <Add {...arrAddKit("section6_array", editModal_section6)} />
                        </div>
                    </div>
                </section>
                <section className="footersocial">
                    <div className="footersocial__inner">
                        <a href={`${rootPathChk(`${get("social_1_link")}`)}`}
                           className="footersocial__socialLink" target="_blank">
                            <img src={`${get("social_1_img")}`} alt="social media" className="footersocial__socialImg" />
                        </a>
                        <a href={`${rootPathChk(`${get("social_2_link")}`)}`}
                           className="footersocial__socialLink" target="_blank">
                            <img src={`${get("social_2_img")}`} alt="social media" className="footersocial__socialImg" />
                        </a>
                        <a href={`${rootPathChk(`${get("social_3_link")}`)}`}
                           className="footersocial__socialLink" target="_blank">
                            <img src={`${get("social_3_img")}`} alt="social media" className="footersocial__socialImg" />
                        </a>
                    </div>
                </section>
                <footer className="footer">
                    <div className="footer__inner">
                    <div className="footer__logo">
                        <img src={`${get("footer_logo")}`} alt="logo" className="footer__logoimg" />
                        <div className="footer__logotext">
                            <p className="footer__logotitle">
                                <span {...edit("footer_logo_text1")}></span>
                            </p>
                            <p className="footer__logosubtitle">
                                <span {...edit("footer_logo_text2")}></span>
                            </p>
                        </div>
                    </div>
                    <div className="footer__infowrap">
                        <section className="footer__infoblock">
                            <div className="footer__infolist">
                                <span {...edit("footer_info1")}></span>
                            </div>
                            <div className="footer__infolist">
                                <span {...edit("footer_info2")}></span>
                            </div>
                            <div className="footer__infolist">
                                <span {...edit("footer_info3")}></span>
                            </div>
                            <div className="footer__infolist copyright">
                                <span {...edit("footer_copyright")}></span>
                            </div>
                        </section>
                        <section className="footer__contactblock">
                            <div className="footer__contact">
                                <span {...edit("footer_info4")}></span>
                            </div>
                            <div className="footer__contactdesc">
                                <span {...edit("footer_info5")}></span>
                            </div>
                        </section>
                    </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Intro

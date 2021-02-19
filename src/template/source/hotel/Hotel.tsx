import React, {useState} from 'react'
import { useModal } from '@janda-com/front';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IViewContext } from '../../../page/View';
import { HOTEL_INFO } from '../../info/hotel';
import { Helmet } from 'react-helmet';
import { ITempalte } from 'src/template/templates';
import { BG, Img } from 'src/component/Img';
import { Add } from 'src/component/Add';
import { A } from 'src/component/A';
import { LangChange } from 'src/component/LanguageChnager';
import { Content } from 'src/component/Content';
import { TimeSpace } from 'src/component/TimeSpace';
import { InfoSubmitModal } from 'src/component/InfoSubmitModal';
import BookingIframe from 'src/component/BookingIframe';
import './scss/hotel.scss';


type INFO = typeof HOTEL_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}

SwiperCore.use([Autoplay]);


const Hotel: React.FC<IProp> = ({ 
    get, setLang, edit, linkEdit, template, arrAddKit, page, arrayEditModalKit, editObjArr, addArray, editArray, removeArray, editMode, bg, imgKit, src, originPage, lang, l
}) => {

    const [bgFilter, setBgFilter] = useState(false);
    const [reserBtn, setReserBtn] = useState(false); // 이후 get('bookingKey_use') 값으로 설정
    const [reservationOn, setReservationOn] = useState(false);
    const handelReservation = (state:boolean) => {
        setBgFilter(state);
        setReservationOn(state);
    };
    const editModalHook_1 = useModal();
    const editModalHook_2 = useModal();
    return (
        <>
            <Helmet>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content={get('commonInfo_companyDesc')}></meta>
                <title>{get('commonInfo_companyName')}</title>
                <link rel="icon" href={get('commonInfo_favicon')}></link>
                <meta property="og:title" content={get('commonInfo_companyName')}></meta>
                <meta property="og:description" content={get('commonInfo_companyDesc')}></meta>
                <meta property="og:url" content={window.location.href}></meta>
                <meta property="og:image" content={get('commonInfo_img')}></meta>
                <link rel="stylesheet" href={"/assets/css/normalize.css"} />
                <link rel="stylesheet" href={"/assets/css/swiper.css"} />
                <script type="text/javascript" src={"/assets/loadcheck.js"} />
                <script type="text/javascript" src={"/assets/js/hotel/hotel.js"} defer />
            </Helmet>
            <div id="hotel_1" className="page_main">

                {/* ::::::::::: Section 1 ::::::::::: */}

                <div className="mainSe1">
                    <Swiper className="mainSe1__slide"
                            spaceBetween={0}
                            speed={700}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}>
                         {page.section1_array[lang].map((item,index) => 
                            <SwiperSlide 
                                {...editObjArr("section1_array", index, editModalHook_1)}
                            >
                                <div className="mainSe1__slideImage" style={{backgroundImage: `url(${item.img})`}}>
                                    <div className="mainSe1__slideFilter" style={{opacity: '0.3'}} />
                                </div>
                                
                                <div className="mainSe1__slideText">
                                    <p className="text_1">{item.text1}</p>
                                    <p className="text_2">{item.text2}</p>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className="mainSe1__scroll">
                        <div className="relative">
                            <div className="scrollWrap" />
                            <div className="scrollBar" />
                        </div>
                    </div>
                    <p className="mainSe1__scrollText">Scroll Down</p>
                </div>
                <InfoSubmitModal {...arrayEditModalKit("section1_array", editModalHook_1)} />
                <Add {...arrAddKit("section1_array", editModalHook_1)} />
                
                {/* ::::::::::: Section 2 ::::::::::: */}

                <div className="mainSe2">
                    <div className="mainSe2__wrap">
                        <section className="mainSe2__textWrap">
                            <h2 className="mainSe2__title" {...edit("section2_text1")}></h2>
                            <p className="mainSe2__subTitle" {...edit("section2_text2")}></p>
                            <p className="mainSe2__text" {...edit("section2_text3")}></p>
                            <A {...linkEdit("section2_btn_link")} 
                                className="mainSe2__btn" 
                                style={{background: get('commonInfo_colour')}} >
                                <span {...edit("section2_btn_text")}></span>
                            </A>
                        </section>
                        <section className="mainSe2__imageWrap">
                            <BG  className="mainSe2__image1" {...imgKit("section2_img1")}> </BG>
                            <BG  className="mainSe2__image2" {...imgKit("section2_img2")}> </BG>
                        </section>
                    </div>
                </div>

                {/* ::::::::::: Section 3 ::::::::::: */}
                        
                {
                    get("section3_use") &&
                    <div className="mainSe3">
                        <div className="mainSection mainSe3__wrapPC">
                            <section className="mainSe3__entry">
                                <h2 className="mainSe3__title" {...edit("section3_title")}></h2>
                                <p className="mainSe3__subtitle" {...edit("section3_subtitle")}></p>
                            </section>
                            <section className="mainSe3__roomWrap">
                                <div className="roomSpecial">
                                    <BG className="roomSpecial__img" {...imgKit("section3_room1_img")}></BG>
                                    <h3 className="roomSpecial__title" {...edit("section3_room1_name")}></h3>
                                    <p className="roomSpecial__text" {...edit("section3_room1_desc")}></p>
        
                                </div>
                                <div className="mainSe3__roomListWrap">
                                    <div className="mainSe3__roomBlock">
                                        <BG className="mainSe3__roomList" {...imgKit("section3_room2_img")}>
                                            <div className="roomText">
                                                <div className="roomText__name" {...edit("section3_room2_name")}></div>
                    
                                            </div>
                                        </BG>
                                        <BG className="mainSe3__roomList" {...imgKit("section3_room3_img")}>
                                            <div className="roomText">
                                                <div className="roomText__name" {...edit("section3_room3_name")}></div>
                        
                                            </div>
                                        </BG>
                                    </div>
                                    <div className="mainSe3__roomBlock mt">
                                        <BG className="mainSe3__roomList" {...imgKit("section3_room4_img")}>
                                            <div className="roomText">
                                                <div className="roomText__name" {...edit("section3_room4_name")}></div>
                            
                                            </div>
                                        </BG>
                                        <BG className="mainSe3__roomList" {...imgKit("section3_room5_img")}>
                                            <div className="roomText">
                                                <div className="roomText__name" {...edit("section3_room5_name")}></div>
                                
                                            </div>
                                        </BG>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                }
               

                {/* ::::::::::: Section 4 ::::::::::: */}

                {
                    get("section4_use") &&
                    <div className="main_section4">
                        <Swiper className="mainSe4__slide"
                            spaceBetween={0}
                            speed={700}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}>
                            {page.section4_array[lang].map((item,index) => 
                                <SwiperSlide 
                                    {...editObjArr("section4_array", index, editModalHook_2)}>
                                    <div className="mainSe4">
                                        <div className="mainSe4__imgWrap">
                                            <div className="mainSe4__img" 
                                            style={{backgroundImage: `url(${item.img})`}}
                                            ></div>
                                        </div>
                                        <div className="mainSe4__textWrap">
                                            <div className="mainSe4__innerWrap">
                                                <h2 className="mainSe4__title">
                                                    {item.title}
                                                </h2>
                                                <h3 className="mainSe4__subtitle" style={{color: get('commonInfo_colour')}}>
                                                    {item.name}
                                                </h3>
                                                <p className="mainSe4__content">
                                                    {item.desc}
                                                </p>
                                                {
                                                    reserBtn && 
                                                    <a href={item.link} className="mainSe4__btn"
                                                        onClick={(e)=>{
                                                            e.preventDefault();
                                                            handelReservation(true)}
                                                        }
                                                    >
                                                        <span>{item.btn}</span>
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <InfoSubmitModal {...arrayEditModalKit("section4_array", editModalHook_2)}/>
                        <Add {...arrAddKit("section4_array", editModalHook_2)} />
                    </div>

                }

                

                {/* ::::::::::: Section 5 ::::::::::: */}

                {
                    get("section5_use") &&
                    <div className="mainSe5">
                        <div className="mainSection">
                            <section className="mainSe5__entry">
                            <h2 className="mainSe5__title" {...edit("section5_title")}></h2>
                            </section>
                            <section className="mainSe5__facility">
                                <div className="mainSe5__facilityBlock">
                                    <BG className="mainSe5__facilityImg" 
                                        {...imgKit("section5_block1_img")}>
                                    </BG>
                                    <div className="mainSe5__facilityText facility">
                                        <h3 className="facility__title" 
                                            {...edit("section5_block1_text1")}>
                                        </h3>
                                        <p className="facility__subTitle"
                                            {...edit("section5_block1_text2")}>
                                        </p>
                                        <p className="facility__text"
                                            {...edit("section5_block1_text3")}>
                                        </p>
                                        <A {...linkEdit("section5_block1_link")} 
                                            className="facility__btn"
                                            style={{border: `2px solid ${get('commonInfo_colour')}`, color: get('commonInfo_colour')}}
                                        >
                                            <span {...edit("section5_btnText")}></span>
                                        </A>
                                    </div>
                                </div>
                                <div className="mainSe5__facilityBlock">
                                    <div className="mainSe5__facilityText facility">
                                        <h3 className="facility__title" 
                                            {...edit("section5_block2_text1")}>
                                        </h3>
                                        <p className="facility__subTitle"
                                            {...edit("section5_block2_text2")}>
                                        </p>
                                        <p className="facility__text"
                                            {...edit("section5_block2_text3")}>
                                        </p>
                                        <A {...linkEdit("section5_block2_link")} 
                                            className="facility__btn"
                                            style={{border: `2px solid ${get('commonInfo_colour')}`, color: get('commonInfo_colour')}}
                                        >
                                            <span {...edit("section5_btnText")}></span>
                                        </A>
                                    </div>
                                    <BG className="mainSe5__facilityImg" 
                                        {...imgKit("section5_block2_img")}>
                                    </BG>
                                </div>
                            </section>
                        </div>
                    </div>

                }

              

                {/* ::::::::::: Section 6 ::::::::::: */}

                <div className="mainSe6">
                    <div className="mainSe6__container">
                        <BG className="mainSe6__img" 
                            {...imgKit("section6_img")}>
                        </BG>
                        <section className="mainSe6__textWrap">
                            <h2 className="mainSe6__title"
                                {...edit("section6_text1")}>
                            </h2>
                            <p className="mainSe6__desc"
                                 {...edit("section6_text2")}>
                            </p>
                        </section>
                    </div>
                </div>

                {/* ::::::::::: footer top ::::::::::: */}

                <div className="footerTop">
                    <div className="footerTop__container">
                        <div className="footerTop__block">
                            <p className="footerTop__text1">
                                <span {...edit("footerTop_block1_text1")}></span>
                            </p>
                            <p className="footerTop__text2">
                                <span {...edit("footerTop_block1_text2")}></span>
                            </p>
                        </div>
                        <div className="footerTop__block">
                            <p className="footerTop__text1">
                                <span {...edit("footerTop_block2_text1")}></span>
                            </p>
                            <p className="footerTop__text2">
                                <span {...edit("footerTop_block2_text2")}></span>
                            </p>
                        </div>
                        <div className="footerTop__block">
                            <p className="footerTop__text1">
                                <span {...edit("footerTop_block3_text1")}></span>
                            </p>
                            <p className="footerTop__text2">
                                <span {...edit("footerTop_block3_text2")}></span>
                            </p>
                        </div>
                        <div className="footerTop__block socialBlock">
                            <div className="footerTop__text1 social">
                                <a href={get('footerTop_block4_icon1_link')} className="footerTop__icon" target="_blink">
                                    <img src={get('footerTop_block4_icon1')}       
                                         alt="social media" />
                                </a>
                                {
                                get("footerTop_block4_icon2_use") &&
                                <a href={get('footerTop_block4_icon2_link')} className="footerTop__icon" target="_blink">
                                    <img src={get('footerTop_block4_icon2')}       
                                         alt="social media" />
                                </a>
                                }
                                {
                                get("footerTop_block4_icon3_use") &&
                                <a href={get('footerTop_block4_icon3_link')} className="footerTop__icon" target="_blink">
                                    <img src={get('footerTop_block4_icon3')}       
                                        alt="social media" />
                                </a>
                                }
                            </div>
                            <p className="footerTop__text2">
                                <span {...edit("footerTop_block4_text2")}></span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* ::::::::::: Footer ::::::::::: */}

                <footer className="footer">
                    <div className="footer__inner">
                        <h2 className="footer__logo">
                            <span {...edit("footer_logo")}></span>
                        </h2>
                        <p className="footer__copyright" {...edit("footer_copyright")}>
                        </p>
                    </div>
                </footer>


                {/* ::::::::::: Booking System  ::::::::::: */}

                <div className={`reservation ${reservationOn && 'on'}`}>
                    <div className="reservation__inner">
                        <div className="reservation__cancelWrap">
                            <img src={"/assets/img/common/cancel.png"} alt="팝업 닫기" 
                                 className="reservation__cancel"
                                 onClick={()=>{handelReservation(false)}}
                            />
                        </div>
                        {/* <TimeSpace infoKey="bookingKey" /> */}
                        <BookingIframe url={get('bookingKey')} />
                    </div>
                </div>


                    

                {/* ::::::::::: Background Fitler ::::::::::: */}

                <div className={`bgFilter ${bgFilter && 'on'}`}></div>

            </div>
        
        </>
       
    )
}

export default Hotel

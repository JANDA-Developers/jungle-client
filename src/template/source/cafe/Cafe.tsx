import React, {useState} from 'react'
import { useModal } from '@janda-com/front';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IViewContext } from '../../../page/View';
import { CAFE_INFO } from '../../info/cafe';
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
import './scss/cafe.scss';



type INFO = typeof CAFE_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}

SwiperCore.use([Autoplay]);

const Cafe: React.FC<IProp> = ({
    get, 
    setLang, edit, linkEdit, template, arrAddKit, page, arrayEditModalKit, editObjArr, addArray, editArray, removeArray, editMode, bg, imgKit, src, originPage, lang, l
}) => {

    const [bgFilter, setBgFilter] = useState(false);
    const [reserBtn, setReserBtn] = useState(false); // 이후 get('bookingKey_use') 값으로 설정
    const [reservationOn, setReservationOn] = useState(false);
    const handelReservation = (state:boolean) => {
        setBgFilter(state);
        setReservationOn(state);
    };
    const [menuState, setMenuState] = useState('main_menuTap1');
    const editModalHook_1 = useModal();
    const editModalHook_2 = useModal();

    const section5_menu1_arrayHook = useModal();
    const section5_menu2_arrayHook = useModal();
    const section5_menu3_arrayHook = useModal();
    const section5_menu4_arrayHook = useModal();
    const section5_menu5_arrayHook = useModal();
    const section5_menu6_arrayHook = useModal();
    const section5_menu7_arrayHook = useModal();

    const handleMenuState = (menu:string) => {
        setMenuState(menu);
    }


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
                <script type="text/javascript" src={"/assets/js/cafe/cafe.js"} defer />
            </Helmet>
            <div id="cafe_1" className="page_main">

                {/* ::::::::::: Section 1 ::::::::::: */}

                <div className="mainSe1">
                    <Swiper className="mainSe1__slide"
                            spaceBetween={0}
                            speed={700}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                    >
                        {page.section1_array[lang].map((item,index) => 
                            <SwiperSlide 
                                {...editObjArr("section1_array", index, editModalHook_1)}
                            >
                                <div className="mainSe1__slideImage" style={{backgroundImage: `url(${item.img})`}}>
                                    <div className="mainSe1__slideFilter" style={{opacity: '0.3'}} />
                                </div>
                                <div className="mainSe1__slideContent">
                                    <p className="text_1">{item.text1}</p>
                                    <div className="mainSe1__deco" />
                                    <p className="text_2">{item.text2}</p>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <InfoSubmitModal {...arrayEditModalKit("section1_array", editModalHook_1)}/>
                    <Add {...arrAddKit("section1_array", editModalHook_1)} />
                </div>
                
                {/* ::::::::::: Section 2 ::::::::::: */}

                <div className="mainSe2">
                    <div className="mainSe2__container" data-aos="fade-up">
                        <section className="mainSeHead">
                            <h2 className="mainSeHead__title" style={{color: get('commonInfo_colour')}}>
                                <span {...edit("section2_text1")}></span>
                            </h2>
                            <p className="mainSeHead__subtitle">
                                <span {...edit("section2_text2")}></span>
                            </p>
                        </section>
                        <Swiper 
                            className="mainSe2__slide"
                            spaceBetween={10}
                            slidesPerView={4}
                            speed={700}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                }
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                        }}>
                            {page.section2_array[lang].map((item,index) => 
                                <SwiperSlide className="mainSe2__slideList"
                                    {...editObjArr("section2_array", index, editModalHook_2)}
                                >
                                    <div className="mainSe2__imageWrap">
                                        <img src={`${item.img}`} alt="Popular Menu" className="mainSe2__slideImage" />
                                    </div>
                                    <div className="mainSe2__textWrap">
                                        <p className="text_1">
                                            { item.name }
                                        </p>
                                        <p className="text_2">
                                            { item.desc }
                                        </p>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <InfoSubmitModal {...arrayEditModalKit("section2_array", editModalHook_2)} />
                        <Add {...arrAddKit("section2_array", editModalHook_2)} />
                    </div>
                </div>

                {/* ::::::::::: Section 3 ::::::::::: */}

                <div className="mainSe3">
                    <section className="mainSe3__imgWrap">
                        <BG className="mainSe3__bgImg ie_chk" {...imgKit("section3_img")} ></BG>
                        <div className="mainSe3__bgFilter" style={{opacity: '0.3'}} />
                        <section className="mainSe3__textWrap" data-aos="fade-up">
                            <h2 className="mainSe3__title">
                                <span {...edit("section3_title")}></span>
                            </h2>
                            <p className="mainSe3__desc">
                                <span {...edit("section3_desc")}></span>
                            </p>
                            <div className="mainSe3__btnWrap">
                                {
                                    reserBtn && 
                                    <a href="#" className="mainSe3__btn"
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            handelReservation(true);
                                    }}>
                                        <span className="mainSe3__btnText">
                                            {get('section3_btnText')}
                                        </span>
                                        <span className="mainSe3__btnBg"></span>
                                    </a>
                                }
                            </div>
                        </section>
                    </section>
                </div>

                {/* ::::::::::: Section 4 ::::::::::: */}

                <div className="mainSe4">
                    <section className="mainSeHead" data-aos="fade-up">
                        <h2 className="mainSeHead__title" style={{color: get('commonInfo_colour')}}>
                            <span {...edit("section4_title")}></span>
                        </h2>
                        <p className="mainSeHead__subtitle deco">
                            <span {...edit("section4_subtitle")}></span>
                        </p>
                        <p className="mainSeHead__desc">
                            <span {...edit("section4_desc")}></span>
                        </p>
                    </section>
                    <div className="mainSe4__container">
                        <section className="mainSe4__block">
                            <BG className="mainSe4__blockImg" {...imgKit("section4_list1_img")} ></BG>
                            <div className="mainSe4__textWrap">
                                <h2 className="mainSe4__blockTtile">
                                    <span {...edit("section4_list1_title")}></span>
                                </h2>
                                <p className="mainSe4__blockDesc">
                                    <span {...edit("section4_list1_desc")}></span>
                                </p>
                            </div>
                        </section>
                        <section className="mainSe4__block">
                            <BG className="mainSe4__blockImg" {...imgKit("section4_list2_img")} ></BG>
                            <div className="mainSe4__textWrap">
                                <h2 className="mainSe4__blockTtile">
                                    <span {...edit("section4_list2_title")}></span>
                                </h2>
                                <p className="mainSe4__blockDesc">
                                    <span {...edit("section4_list2_desc")}></span>
                                </p>
                            </div>
                        </section>
                        <section className="mainSe4__block">
                            <BG className="mainSe4__blockImg" {...imgKit("section4_list3_img")} ></BG>
                            <div className="mainSe4__textWrap">
                                <h2 className="mainSe4__blockTtile">
                                    <span {...edit("section4_list3_title")}></span>
                                </h2>
                                <p className="mainSe4__blockDesc">
                                    <span {...edit("section4_list3_desc")}></span>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* ::::::::::: Section 5 ::::::::::: */}

                {
                    get("section5_use") &&
                    <>
                        <div className="mainSe5">
                            <section className="mainSeHead" data-aos="fade-up">
                                <h2 className="mainSeHead__title" style={{color: get('commonInfo_colour')}}>
                                    <span {...edit("section5_title")}></span>
                                </h2>
                                <p className="mainSeHead__subtitle">
                                    <span {...edit("section5_subtitle")}></span>
                                </p>
                            </section>
                            <section className="mainSe5__menuWrap" data-aos="fade-up">
                                <div className="mainSe5__menuTapWrap">
                                    {
                       
                                            <button id="main_menuTap1" className={`mainSe5__menuTap 
                                                ${menuState == 'main_menuTap1' && 'on'}`} 
                                                onClick={()=>{handleMenuState('main_menuTap1')}}>
                                                <span {...edit("section5_menu_tab1")}></span>
                                            </button>
                                    }
                                    {
                                        get("section5_menu_tab2_use") && 
                                            <button id="main_menuTap2" className={`mainSe5__menuTap 
                                                ${menuState == 'main_menuTap2' && 'on'}`} 
                                                onClick={()=>{handleMenuState('main_menuTap2')}}>
                                                <span {...edit("section5_menu_tab2")}></span>
                                            </button>
                                    }
                                    {
                                        get("section5_menu_tab3_use") && 
                                            <button id="main_menuTap3" className={`mainSe5__menuTap 
                                                ${menuState == 'main_menuTap3' && 'on'}`} 
                                                onClick={()=>{handleMenuState('main_menuTap3')}}>
                                                <span {...edit("section5_menu_tab3")}></span>
                                            </button>
                                    }
                                    {
                                        get("section5_menu_tab4_use") && 
                                            <button id="main_menuTap4" className={`mainSe5__menuTap 
                                                ${menuState == 'main_menuTap4' && 'on'}`} 
                                                onClick={()=>{handleMenuState('main_menuTap4')}}>
                                                <span {...edit("section5_menu_tab4")}></span>
                                            </button>
                                    }
                                    {
                                        get("section5_menu_tab5_use") && 
                                            <button id="main_menuTap5" className={`mainSe5__menuTap 
                                                ${menuState == 'main_menuTap5' && 'on'}`} 
                                                onClick={()=>{handleMenuState('main_menuTap5')}}>
                                                <span {...edit("section5_menu_tab5")}></span>
                                            </button>
                                    }
                                    {
                                        get("section5_menu_tab6_use") && 
                                            <button id="main_menuTap6" className={`mainSe5__menuTap 
                                                ${menuState == 'main_menuTap6' && 'on'}`}
                                                onClick={()=>{handleMenuState('main_menuTap6')}}>
                                                <span {...edit("section5_menu_tab6")}></span>
                                            </button>
                                    }
                                    {
                                        get("section5_menu_tab7_use") && 
                                            <button id="main_menuTap7" className={`mainSe5__menuTap 
                                                ${menuState == 'main_menuTap7' && 'on'}`}
                                                onClick={()=>{handleMenuState('main_menuTap7')}}>
                                                <span {...edit("section5_menu_tab7")}></span>
                                            </button>
                                    }
                                </div>

                                {  /* :::::::: Menu 1 List  ::::::::*/  }
                                <div className={`mainSe5__menuListWWrap main_menuTap1 ${menuState == 'main_menuTap1' && 'on'}`}>
                                    {page.section5_menu1_array[lang].map((item,index) =>  
                                        <div className="mainSe5__menuList first">
                                            <div className="mainSe5__menuInfo">
                                            <div className="mainSe5__menuImgWrap">
                                                <img src={item.img} alt="popular menus" className="mainSe5__menuImg" />
                                            </div>
                                            <div className="mainSe5__menuDetail">
                                                <strong className="mainSe5__menuName">
                                                    {item.name}
                                                </strong>
                                                <p className="mainSe5__menuDesc">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            </div>
                                            <div className="mainSe5__menuPrice">
                                                {item.price}
                                            </div>
                                        </div>
                                    )}
                                    <InfoSubmitModal {...arrayEditModalKit("section5_menu1_array", section5_menu1_arrayHook)}/>
                                    <Add {...arrAddKit("section5_menu1_array", section5_menu1_arrayHook)} />
                                </div>

                                {  /* :::::::: Menu 2 List  ::::::::*/  }
                                <div className={`mainSe5__menuListWWrap main_menuTap2 ${menuState == 'main_menuTap2' && 'on'}`}>
                                    {page.section5_menu2_array[lang].map((item,index) =>  
                                        <div className="mainSe5__menuList first">
                                            <div className="mainSe5__menuInfo">
                                            <div className="mainSe5__menuImgWrap">
                                                <img src={item.img} alt="popular menus" className="mainSe5__menuImg" />
                                            </div>
                                            <div className="mainSe5__menuDetail">
                                                <strong className="mainSe5__menuName">
                                                    {item.name}
                                                </strong>
                                                <p className="mainSe5__menuDesc">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            </div>
                                            <div className="mainSe5__menuPrice">
                                                {item.price}
                                            </div>
                                        </div>
                                    )}
                                    <InfoSubmitModal {...arrayEditModalKit("section5_menu2_array", section5_menu2_arrayHook)}/>
                                    <Add {...arrAddKit("section5_menu2_array", section5_menu2_arrayHook)} />
                                </div>

                                {  /* :::::::: Menu 3 List  ::::::::*/  }
                                <div className={`mainSe5__menuListWWrap main_menuTap3 ${menuState == 'main_menuTap3' && 'on'}`}>
                                    {page.section5_menu3_array[lang].map((item,index) =>  
                                        <div className="mainSe5__menuList first">
                                            <div className="mainSe5__menuInfo">
                                            <div className="mainSe5__menuImgWrap">
                                                <img src={item.img} alt="popular menus" className="mainSe5__menuImg" />
                                            </div>
                                            <div className="mainSe5__menuDetail">
                                                <strong className="mainSe5__menuName">
                                                    {item.name}
                                                </strong>
                                                <p className="mainSe5__menuDesc">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            </div>
                                            <div className="mainSe5__menuPrice">
                                                {item.price}
                                            </div>
                                        </div>
                                    )}
                                    <InfoSubmitModal {...arrayEditModalKit("section5_menu3_array", section5_menu3_arrayHook)}/>
                                    <Add {...arrAddKit("section5_menu3_array", section5_menu3_arrayHook)} />
                                </div>

                                {  /* :::::::: Menu 4 List  ::::::::*/  }
                                <div className={`mainSe5__menuListWWrap main_menuTap4 ${menuState == 'main_menuTap4' && 'on'}`}>
                                    {page.section5_menu4_array[lang].map((item,index) =>  
                                        <div className="mainSe5__menuList first">
                                            <div className="mainSe5__menuInfo">
                                            <div className="mainSe5__menuImgWrap">
                                                <img src={item.img} alt="popular menus" className="mainSe5__menuImg" />
                                            </div>
                                            <div className="mainSe5__menuDetail">
                                                <strong className="mainSe5__menuName">
                                                    {item.name}
                                                </strong>
                                                <p className="mainSe5__menuDesc">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            </div>
                                            <div className="mainSe5__menuPrice">
                                                {item.price}
                                            </div>
                                        </div>
                                    )}
                                    <InfoSubmitModal {...arrayEditModalKit("section5_menu4_array", section5_menu4_arrayHook)}/>
                                    <Add {...arrAddKit("section5_menu4_array", section5_menu4_arrayHook)} />
                                </div>

                                {  /* :::::::: Menu 5 List  ::::::::*/  }
                                <div className={`mainSe5__menuListWWrap main_menuTap5 ${menuState == 'main_menuTap5' && 'on'}`}>
                                    {page.section5_menu5_array[lang].map((item,index) =>  
                                        <div className="mainSe5__menuList first">
                                            <div className="mainSe5__menuInfo">
                                            <div className="mainSe5__menuImgWrap">
                                                <img src={item.img} alt="popular menus" className="mainSe5__menuImg" />
                                            </div>
                                            <div className="mainSe5__menuDetail">
                                                <strong className="mainSe5__menuName">
                                                    {item.name}
                                                </strong>
                                                <p className="mainSe5__menuDesc">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            </div>
                                            <div className="mainSe5__menuPrice">
                                                {item.price}
                                            </div>
                                        </div>
                                    )}
                                    <InfoSubmitModal {...arrayEditModalKit("section5_menu5_array", section5_menu5_arrayHook)}/>
                                    <Add {...arrAddKit("section5_menu5_array", section5_menu5_arrayHook)} />
                                </div>

                                {  /* :::::::: Menu 6 List  ::::::::*/  }
                                <div className={`mainSe5__menuListWWrap main_menuTap6 ${menuState == 'main_menuTap6' && 'on'}`}>
                                    {page.section5_menu6_array[lang].map((item,index) =>  
                                        <div className="mainSe5__menuList first">
                                            <div className="mainSe5__menuInfo">
                                            <div className="mainSe5__menuImgWrap">
                                                <img src={item.img} alt="popular menus" className="mainSe5__menuImg" />
                                            </div>
                                            <div className="mainSe5__menuDetail">
                                                <strong className="mainSe5__menuName">
                                                    {item.name}
                                                </strong>
                                                <p className="mainSe5__menuDesc">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            </div>
                                            <div className="mainSe5__menuPrice">
                                                {item.price}
                                            </div>
                                        </div>
                                    )}
                                    <InfoSubmitModal {...arrayEditModalKit("section5_menu6_array", section5_menu6_arrayHook)}/>
                                    <Add {...arrAddKit("section5_menu6_array", section5_menu6_arrayHook)} />
                                </div>

                                {  /* :::::::: Menu 7 List  ::::::::*/  }
                                <div className={`mainSe5__menuListWWrap main_menuTap7 ${menuState == 'main_menuTap7' && 'on'}`}>
                                    {page.section5_menu7_array[lang].map((item,index) =>  
                                        <div className="mainSe5__menuList first">
                                            <div className="mainSe5__menuInfo">
                                            <div className="mainSe5__menuImgWrap">
                                                <img src={item.img} alt="popular menus" className="mainSe5__menuImg" />
                                            </div>
                                            <div className="mainSe5__menuDetail">
                                                <strong className="mainSe5__menuName">
                                                    {item.name}
                                                </strong>
                                                <p className="mainSe5__menuDesc">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            </div>
                                            <div className="mainSe5__menuPrice">
                                                {item.price}
                                            </div>
                                        </div>
                                    )}
                                    <InfoSubmitModal {...arrayEditModalKit("section5_menu7_array", section5_menu7_arrayHook)}/>
                                    <Add {...arrAddKit("section5_menu7_array", section5_menu7_arrayHook)} />
                                </div>
                                
                            </section>
                        </div>
                    </>
                }

                {/* ::::::::::: Section 6 ::::::::::: */}

                <div className="mainSe6">
                    <section className="mainSe6__imgWrap">
                        <BG className="mainSe6__bgImg" {...imgKit("section6_img")} ></BG>
                        <div className="mainSe6__filter" style={{opacity: '0.2'}} />
                    </section>
                    <section className="mainSe6__infoWrap">
                        <div className="mainSe6__filter" />
                        <div className="mainSe6__info" data-aos="fade-up">
                            <h2 className="mainSe6__infoTitle">
                                <span {...edit("section6_title")}></span>
                            </h2>
                            <div className="mainSe6__infoHours">
                            <ul className="hours">
                                <li className="hours__list first">
                                    <span className="hours__date" {...edit("section6_text1")}></span>
                                </li>
                                <li className="hours__list">
                                    <span className="hours__date" {...edit("section6_text2")}></span>
                                </li>
                                <li className="hours__list">
                                    <span className="hours__date" {...edit("section6_text3")}></span>
                                </li>
                                <li className="hours__list contact">
                                    <span className="hours__date" {...edit("section6_text4")}></span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </section>
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

                {/* ::::::::::: Booking System ::::::::::: */}

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

export default Cafe

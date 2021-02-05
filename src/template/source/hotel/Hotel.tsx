import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IViewContext } from '../../../page/View';
import { HOTEL_INFO } from '../../info/hotel';
import { Helmet } from 'react-helmet'
import { ITempalte } from 'src/template/templates';
import { BG, Img } from 'src/component/Img';
import { Add } from 'src/component/Add';
import { A } from 'src/component/A';
import { LangChange } from 'src/component/LanguageChnager';
import { Content } from 'src/component/Content';
import { TimeSpace } from 'src/component/TimeSpace';
import './scss/hotel.scss';


type INFO = typeof HOTEL_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}

const Hotel: React.FC<IProp> = ({ 
    setLang, edit, linkEdit, template, arrAddKit, page, arrayEditModalKit, editObjArr, addArray, editArray, removeArray, editMode, bg, imgKit, src, originPage, lang, l
}) => {
    return (
        <>
            <Helmet>
                <title>JANDA | 숙박 템플릿</title>
                <link rel="stylesheet" href={"/assets/css/normalize.css"} />
                <link rel="stylesheet" href={"/assets/css/swiper.css"} />
                <link rel="stylesheet" href={"/assets/css/main_hotel.css"} />
                <script type="text/javascript" src={"/assets/loadcheck.js"} />
                <script type="text/javascript" src={"/assets/js/swiper.js"} />
                <script type="text/javascript" src={"/assets/js/hotel/hotel.js"} defer />
            </Helmet>
            <div id="hotel_1" className="page_main">

                {/* ::::::::::: Section 1 ::::::::::: */}
                <div className="mainSe1">
                    <Swiper className="mainSe1__slide"
                            spaceBetween={0}
                            speed={700}
                    >
                        <SwiperSlide>
                            <BG className="mainSe1__slideImage" {...imgKit("section1_img1")} > 
                                <div className="mainSe1__slideFilter" style={{opacity: '0.3'}}></div>
                            </BG>
                            <div className="mainSe1__slideText">
                                <p className="text_1" {...edit("section1_text1")}></p>
                                <p className="text_2" {...edit("section1_text1_2")}></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BG className="mainSe1__slideImage" {...imgKit("section1_img2")} > 
                                <div className="mainSe1__slideFilter" style={{opacity: '0.3'}}></div>
                            </BG>
                            <div className="mainSe1__slideText">
                                <p className="text_1" {...edit("section1_text2")}></p>
                                <p className="text_2" {...edit("section1_text2_2")}></p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BG className="mainSe1__slideImage" {...imgKit("section1_img3")} > 
                                <div className="mainSe1__slideFilter" style={{opacity: '0.3'}}></div>
                            </BG>
                            <div className="mainSe1__slideText">
                                <p className="text_1" {...edit("section1_text3")}></p>
                                <p className="text_2" {...edit("section1_text3_2")}></p>
                            </div>
                            <div className="mainSe1__slideImage" 
                                 style={{backgroundImage: 'url(/assets/img/hotel/section1/living_room.jpg)'}}>
                                <div className="mainSe1__slideFilter" style={{opacity: '0.3'}}></div>
                            </div>
                            <div className="mainSe1__slideText">
                                <p className="text_1">편안한 침실</p>
                                <p className="text_2">저희 시설을 이용하시는 고객을 위한 최고급 침실</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="mainSe1__scroll">
                        <div className="relative">
                            <div className="scrollWrap" />
                            <div className="scrollBar" />
                        </div>
                    </div>
                    <p className="mainSe1__scrollText">Scroll Down</p>
                </div>
                
                {/* ::::::::::: Section 2 ::::::::::: */}
                <div className="mainSe2">
                    <div className="mainSe2__wrap">
                        <section className="mainSe2__textWrap">
                            <h2 className="mainSe2__title" {...edit("section2_text1")}></h2>
                            <p className="mainSe2__subTitle" {...edit("section2_text2")}></p>
                            <p className="mainSe2__text" {...edit("section2_text3")}></p>
                            <A {...linkEdit("sampleLink")} className="mainSe2__btn" style={{background: '#C19B76'}} >
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
                <div className="mainSe3">
                    <div className="mainSection mainSe3__wrapPC">
                        <section className="mainSe3__entry">
                            <h2 className="mainSe3__title" {...edit("section3_title")}></h2>
                            <p className="mainSe3__subtitle" {...edit("section3_subtitle")}></p>
                        </section>
                        <section className="mainSe3__roomWrap">
                            {/* <div className="roomSpecial">
                                <BG  className="roomSpecial__img" {...imgKit("section3_room1_img")}></BG>
                                <h3 className="roomSpecial__title" {...edit("section3_room1_name")}></h3>
                                <p className="roomSpecial__text" {...edit("section3_room1_desc")}></p>
                                <A {...linkEdit("section3_room1_link")} 
                                    className="roomSpecial__btn" 
                                    style={{background: '#C19B76'}} >
                                    <span {...edit("section3_btnName")}></span>
                                </A>
                            </div>
                            <div className="mainSe3__roomListWrap">
                                <div className="mainSe3__roomBlock">
                                    <BG  className="roomSpecial__img" {...imgKit("section3_room2_img")}>
                                        <div className="roomText">
                                            <div className="roomText__name" {...edit("section3_room2_name")}></div>
                                            <a className="roomText__btn" {...edit("section3_btnName")}></a>
                                        </div>
                                    </BG>
                                    <div className="mainSe3__roomList" style={{backgroundImage: 'url(./img/living_room.jpg)'}}>
                                        <div className="roomText">
                                        <div className="roomText__name">Standard Double A</div>
                                        <a className="roomText__btn">More Detail</a>
                                        </div>
                                    </div>
                                    <div className="mainSe3__roomList" style={{backgroundImage: 'url(./img/mee00685.jpg)'}}>
                                        <div className="roomText">
                                        <div className="roomText__name">Standard Double A</div>
                                        <a className="roomText__btn">More Detail</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainSe3__roomBlock mt">
                                <div className="mainSe3__roomList" style={{backgroundImage: 'url(./img/pc002250323.jpg)'}}>
                                    <div className="roomText">
                                    <div className="roomText__name">Standard Double A</div>
                                    <a className="roomText__btn">More Detail</a>
                                    </div>
                                </div>
                                <div className="mainSe3__roomList" style={{backgroundImage: 'url(./img/pc003257767.jpg)'}}>
                                    <div className="roomText">
                                    <div className="roomText__name">Standard Double A</div>
                                    <a className="roomText__btn">More Detail</a>
                                    </div>
                                </div>
                                </div>
                            </div> */}
                        </section>
                    </div>
                </div>


            </div>
        
        </>
       
    )
}

export default Hotel

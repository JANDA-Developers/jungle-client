import React from 'react'
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

const Hotel = () => {
    return (
        <>
            <Helmet>
                <script type="text/javascript" src={"/assets/loadcheck.js"} />
            </Helmet>
            <div id="hotel_1" className="page_main">
                <div className="mainSe1">
                    <div className="swiper-container mainSe1__slide">
                        <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="mainSe1__slideImage" style={{backgroundImage: 'url(./img/yay0329298.jpg)'}}>
                            <div className="mainSe1__slideFilter" style={{opacity: '0.3'}} />
                            </div>
                            <div className="mainSe1__slideText">
                            <p className="text_1">쾌적한 환경</p>
                            <p className="text_2">Janda Leisure는 쾌적한 공간을 만들기 위해 최선을 다합니다</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="mainSe1__slideImage" style={{backgroundImage: 'url(./img/living_room.jpg)'}}>
                            <div className="mainSe1__slideFilter" style={{opacity: '0.3'}} />
                            </div>
                            <div className="mainSe1__slideText">
                            <p className="text_1">럭셔리한 공간</p>
                            <p className="text_2">Janda Leisure에서 특별한 사람과 함께하세요</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="mainSe1__slideImage" style={{backgroundImage: 'url(./img/cm26009851.jpg)'}}>
                            <div className="mainSe1__slideFilter" style={{opacity: '0.3'}} />
                            </div>
                            <div className="mainSe1__slideText">
                            <p className="text_1">편안한 침실</p>
                            <p className="text_2">저희 시설을 이용하시는 고객을 위한 최고급 침실</p>
                            </div>
                        </div>
                        </div>
                        <div className="swiper_nav mainSe1__navLeft">
                        <img src="./img/left.png" alt="slide left" />
                        </div>
                        <div className="swiper_nav mainSe1__navRight">
                        <img src="./img/right.png" alt="slide right" />
                        </div>
                    </div>
                    <div className="mainSe1__scroll">
                        <div className="relative">
                        <div className="scrollWrap" />
                        <div className="scrollBar" />
                        </div>
                    </div>
                    <p className="mainSe1__scrollText">Scroll Down</p>
                </div>
            </div>
        
        </>
       
    )
}

export default Hotel

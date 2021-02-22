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
import './scss/intro.scss';



type INFO = typeof CAFE_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}

SwiperCore.use([Autoplay]);

const Intro: React.FC<IProp> = ({
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

    const editModalHook_1 = useModal();
    const editModalHook_2 = useModal();

    return (
        <div id="office1_main">
            <header className="header">
                <div className="header__inner">
                <div className="header__logo">
                    <img src="./img/logo.png" alt="logo" className="header__logoimg" />
                    <div className="header__titlewrap">
                    <h1 className="header__title">JANDA SPACE</h1>
                    <p className="header__subtitle">THE BEST SHARED OFFFICE SPACE</p>
                    </div>
                </div>
                <div className="header__infoWrap">
                    <div className="header__contact">
                    Contact US : 000-1111-2222
                    </div>
                    <div className="header__deco" />
                    <div className="header">
                    <a  className="header__socialLink">
                        <img src="./img/facebook.png" alt="social media" className="header__socialImg" />
                    </a>
                    <a  className="header__socialLink">
                        <img src="./img/instagram.png" alt="social media" className="header__socialImg" />
                    </a>
                    <a  className="header__socialLink">
                        <img src="./img/naver.png" alt="social media" className="header__socialImg" />
                    </a>
                    </div>
                </div>
                </div>
            </header>
            <section className="section1">
                <div className="section1__inner">
                <div className="swiper-container section1_slide">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="section1__slidelist">
                        <div className="section1__bg" style={{backgroundImage: 'url(./img/yaytg109251.jpg)'}} />
                        <div className="section1__filter" />
                        <div className="section1__textWrap">
                            <div className="section1__textInner">
                            <h2 className="section1__title">
                                Janda Space
                            </h2>
                            <p className="section1__subTitle">
                                The best shared place
                            </p>
                            <p className="section1__desc">
                                Unlimited access to faciliteis free coffee
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="section1__slidelist">
                        <div className="section1__bg" style={{backgroundImage: 'url(./img/cm08281961.jpg)'}} />
                        <div className="section1__filter" />
                        <div className="section1__textWrap">
                            <div className="section1__textInner">
                            <h1 className="section1__title">
                                Janda Space 2
                            </h1>
                            <p className="section1__subTitle">
                                The best shared<br /> place
                            </p>
                            <p className="section1__desc">
                                Unlimited access to faciliteis free coffee
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="section1__slidelist">
                        <div className="section1__bg" style={{backgroundImage: 'url(./img/pc001008766.jpg)'}} />
                        <div className="section1__filter" />
                        <div className="section1__textWrap">
                            <div className="section1__textInner">
                            <h1 className="section1__title">
                                Janda Space 3
                            </h1>
                            <p className="section1__subTitle">
                                The best shared<br /> place
                            </p>
                            <p className="section1__desc">
                                Unlimited access to faciliteis free coffee
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section2">
                <div className="section2__inner">
                <div className="swiper-container section2__slide">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="section2__listWrap">
                        <div className="section2__textWrap">
                            <p className="section2__title">
                            OFFICE A
                            </p>
                            <p className="section2__subtitle">
                            The best Office Environment<br />
                            for creative minds
                            </p>
                            <p className="section2__deco" style={{backgroundColor: 'rgb(37, 37, 253)'}} />
                            <p className="section2__desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            </p>
                            <div className="section2__btnWrap">
                            <a  className="section2__btn">Reservation</a>
                            </div>
                        </div>
                        <div className="section2__imgWrap">
                            <div className="section2__img" style={{backgroundImage: 'url(./img/cm08423293.jpg)', backgroundPosition: '20% 50%'}}>
                            </div>
                            <div className="section2__imgDeco" />
                        </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="section2__listWrap">
                        <div className="section2__textWrap">
                            <p className="section2__title">
                            OFFICE B
                            </p>
                            <p className="section2__subtitle">
                            The best Office Environment<br />
                            for creative minds
                            </p>
                            <p className="section2__deco" />
                            <p className="section2__desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            </p>
                            <div className="section2__btnWrap">
                            <a  className="section2__btn">Reservation</a>
                            </div>
                        </div>
                        <div className="section2__imgWrap">
                            <div className="section2__img" style={{backgroundImage: 'url(./img/yaytg109251.jpg)', backgroundPosition: '20% 50%'}}>
                            </div>
                            <div className="section2__imgDeco" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section3">
                <div className="section3__inner">
                <div className="section3__head">
                    <h2 className="section3__title">
                    OFFICE B
                    </h2>
                    <p className="section3__subtitle">
                    The Best Office Facilities<br />
                    </p>
                    <p className="section3__desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    </p>
                    <p className="section3__deco" style={{backgroundColor: 'rgb(37, 37, 253)'}} />
                </div>
                <div className="section3__content">
                    <div className="swiper-container section3__slide">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                        <div className="section3__list">
                            <div className="section3__listimg" style={{backgroundImage: 'url(./img/yaytg109251.jpg)'}} />
                            <div className="section3__listfilter" />
                            <div className="section3__listinfo">
                            <p className="section3__listtitle">
                                Ocean View <br />
                                Office Team A 2
                            </p>
                            <p className="section3__listdesc">
                                3 rooms, free coffee, wifi
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="section3__list">
                            <div className="section3__listimg" style={{backgroundImage: 'url(./img/pc001008766.jpg)'}} />
                            <div className="section3__listfilter" />
                            <div className="section3__listinfo">
                            <p className="section3__listtitle">
                                Ocean View <br />
                                Office Team A 2
                            </p>
                            <p className="section3__listdesc">
                                3 rooms, free coffee, wifi
                            </p>
                            </div>
                            <p className="section3__listinfo" />
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="section3__list">
                            <div className="section3__listimg" style={{backgroundImage: 'url(./img/cm08423293.jpg)'}} />
                            <div className="section3__listfilter" />
                            <div className="section3__listinfo">
                            <p className="section3__listtitle">
                                Ocean View <br />
                                Office Team A 2
                            </p>
                            <p className="section3__listdesc">
                                3 rooms, free coffee, wifi
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="section3__list">
                            <div className="section3__listimg" style={{backgroundImage: 'url(./img/yaytg109251.jpg)'}} />
                            <div className="section3__listfilter" />
                            <div className="section3__listinfo">
                            <p className="section3__listtitle">
                                Ocean View <br />
                                Office Team A 2
                            </p>
                            <p className="section3__listdesc">
                                3 rooms, free coffee, wifi
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="section3__list">
                            <div className="section3__listimg" style={{backgroundImage: 'url(./img/cm08281961.jpg)'}} />
                            <div className="section3__listfilter" />
                            <div className="section3__listinfo">
                            <p className="section3__listtitle">
                                Ocean View <br />
                                Office Team A 2
                            </p>
                            <p className="section3__listdesc">
                                3 rooms, free coffee, wifi
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section4">
                <div className="section4__inner">
                <div className="section4__listWrap">
                    <div className="section4__imgWrap">
                    <div className="section4__img" style={{backgroundImage: 'url(./img/cm08423293.jpg)', backgroundPosition: '20% 50%'}}>
                    </div>
                    <div className="section4__imgDeco" />
                    </div>
                    <div className="section4__textWrap">
                    <p className="section4__title">
                        OFFICE A
                    </p>
                    <p className="section4__subtitle">
                        The best Office Environment<br />
                        for creative minds
                    </p>
                    <p className="section4__deco" style={{backgroundColor: 'rgb(37, 37, 253)'}} />
                    <p className="section4__desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    </p>
                    <div className="section4__btnWrap">
                        <a  className="section4__btn">Reservation</a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="section5">
                <div className="section5__imgwrap">
                <div className="section5__img" style={{backgroundImage: 'url(./img/yaytg109251.jpg)'}} />
                <div className="section5__filter" />
                <div className="section5__textWrap">
                    <h2 className="section5__title">
                    The Best place to work
                    </h2>
                    <p className="section5__desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p> 
                    <a  className="section5__btn">Check More</a>
                </div>
                </div>
            </section>
            <section className="section6">
                <div className="section6__inner">
                <div className="section6__head">
                    <h2 className="section6__title">
                    OFFICE B
                    </h2>
                    <p className="section6__subtitle">
                    Meet our team.
                    </p>
                    <p className="section6__desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    </p>
                    <p className="section6__deco" style={{backgroundColor: 'rgb(37, 37, 253)'}} />
                </div>
                <div className="section6__content">
                    <div className="swiper-container section6__slide">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                        <div className="section6__list">
                            <div className="section6__listimg" style={{backgroundImage: 'url(./img/pc001008608_l.jpg)'}} />
                            <div className="section6__listinfo">
                            <p className="section6__listtitle">
                                Team Janda
                            </p>
                            <p className="section6__listdesc">
                                Our team
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="section6__list">
                            <div className="section6__listimg" style={{backgroundImage: 'url(./img/pc001008620_l.jpg)'}} />
                            <div className="section6__listinfo">
                            <p className="section6__listtitle">
                                Jeniffer Rofez
                            </p>
                            <p className="section6__listdesc">
                                CEO 
                            </p>
                            </div>
                            <p className="section6__listinfo" />
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="section6__list">
                            <div className="section6__listimg" style={{backgroundImage: 'url(./img/pc001009865_l.jpg)'}} />
                            <div className="section6__listinfo">
                            <p className="section6__listtitle">
                                Carig Furgerson
                            </p>
                            <p className="section6__listdesc">
                                Executive producer
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="section6__list">
                            <div className="section6__listimg" style={{backgroundImage: 'url(./img/pc001019476_l.jpg)'}} />
                            <div className="section6__listinfo">
                            <p className="section6__listtitle">
                                Jim Moriaty
                            </p>
                            <p className="section6__listdesc">
                                Enginners
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="section6__list">
                            <div className="section6__listimg" style={{backgroundImage: 'url(./img/pc001017216_l.jpg)'}} />
                            <div className="section6__listfilter" />
                            <div className="section6__listinfo">
                            <p className="section6__listtitle">
                                Benedict Cumberbatch
                            </p>
                            <p className="section6__listdesc">
                                Analyst
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="footersocial">
                <div className="footersocial__inner">
                <a  className="footersocial__socialLink">
                    <img src="./img/facebook.png" alt="social media" className="footersocial__socialImg" />
                </a>
                <a  className="footersocial__socialLink">
                    <img src="./img/instagram.png" alt="social media" className="footersocial__socialImg" />
                </a>
                <a  className="footersocial__socialLink">
                    <img src="./img/naver.png" alt="social media" className="footersocial__socialImg" />
                </a>
                </div>
            </section>
            <footer className="footer">
                <div className="footer__inner">
                <div className="footer__logo">
                    <img src="./img/logo_footer.png" alt="logo" />
                    <div className="footer__logotext">
                    <p className="footer__logotitle">JANDA SPACE</p>
                    <p className="footer__logosubtitle">THE BEST SHARED OFFFICE SPACE</p>
                    </div>
                </div>
                <div className="footer__infowrap">
                    <section className="footer__infoblock">
                    <div className="footer__infolist">
                        업체 : Warner Brothers Studio Store
                    </div>
                    <div className="footer__infolist">
                        대표 : 제니퍼 로렌스
                    </div>
                    <div className="footer__infolist">
                        주소지 : 3815  Clifford Street, Hayward
                    </div>
                    <div className="footer__infolist copyright">
                        Copyrights © stayjanda.com All Rights Reserved
                    </div>
                    </section>
                    <section className="footer__contactblock">
                    <div className="footer__contact">Contact : 000-111-2222</div>
                    <div className="footer__contactdesc">상담 가능 시간 : 09am ~ 11pm.</div>
                    </section>
                </div>
                </div>
            </footer>
            </div>

    )
}

export default Intro

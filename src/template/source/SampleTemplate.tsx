import React from 'react';
import { IViewContext } from '../../page/View';
import { Helmet } from "react-helmet";
import { Img } from '../../component/Img';
import { Content } from '../../component/Content';
import { TimeSpace } from '../../component/TimeSpace';
import GALLERY_INFO from '../info/sampleInfo';
import { InfoSubmitModal } from '../../component/InfoSubmitModal';
import { useModal } from '@janda-com/front';
import { Add } from '../../component/Add';
import { LangChange } from '../../component/LanguageChnager';
import { A } from '../../component/A';


type INFO = typeof GALLERY_INFO;
interface IProp extends IViewContext<INFO> {
}

export const SampleTemplate: React.FC<IProp> = ({ arrAddKit, linkEdit, setLang, originPage, edit, arrayEditModalKit, editObjArr, lang, imgEdit, page, imgKit, src }) => {
    const editModalHook = useModal();
    return <div className="body">
        <Helmet>
            <script src="template/sample/assets/js/jquery.min.js"></script>
            <script src="template/sample/assets/js/jquery.poptrox.min.js"></script>
            <script src="template/sample/assets/js/skel.min.js"></script>
            <script src="template/sample/assets/js/util.js"></script>
            <script src="template/sample/assets/js/main.js"></script>
            <link rel="stylesheet" href="template/sample/assets/css/main.css" />
            <script type="text/javascript" src={"/assets/loadcheck.js"} />
        </Helmet>
        <header id="header">
            <div className="logo"><a ><b style={{ color: 'white' }} {...edit("title")} /> <span>by TEMPLATED</span></a></div>
            <LangChange lang={lang} onChange={setLang} supports={originPage?.supportLanguage} >
                <a {...edit("langLabel")} />
            </LangChange>
        </header>
        {/* Main */}
        <section id="main">
            <div className="inner">
                {/* One */}
                <section id="one" className="wrapper style1">
                    <div className="image fit flush">
                        <Img {...imgKit("top_img")} />
                    </div>
                    <header className="special">
                        <h2 ><span {...edit("title1")} /></h2>
                        <p {...edit("title1_desc")} />
                    </header>
                    <div className="content">
                        <Content infoKey={"content"} />
                    </div>

                    <TimeSpace infoKey="timespace_key" />
                </section>
                {/* Two */}
                <section id="two" className="wrapper style2">
                    <header>
                        <h2 ><span {...edit("title2")} /></h2>
                        <p {...edit("title2_desc")} />
                    </header>
                    <div className="content">
                        <div className="gallery">
                            <div>
                                <div className="image fit flush">
                                    <a ><Img {...imgKit("section2_img1")} /></a>
                                </div>
                            </div>
                            <div>
                                <div className="image fit flush">
                                    <a ><Img {...imgKit("section2_img2")} /></a>
                                </div>
                            </div>
                            <div>
                                <div className="image fit flush">
                                    <a ><Img {...imgKit("section2_img3")} /></a>
                                </div>
                            </div>
                            <div>
                                <div className="image fit flush">
                                    <a ><Img {...imgKit("section2_img4")} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Three */}
                <section id="three" className="wrapper">
                    {page.section3[lang].map((sec3, index) =>
                        <div {...editObjArr("section3", index, editModalHook)} className="spotlight">
                            <div className="image flush"><img src={sec3.img} /></div>
                            <div className="inner">
                                <h3 >{sec3.title}</h3>
                                <p>{sec3.desc}</p>
                            </div>
                        </div>
                    )}
                    <Add {...arrAddKit("section3", editModalHook)} />
                    <InfoSubmitModal {...arrayEditModalKit("section3", editModalHook)}></InfoSubmitModal>
                </section>
            </div>
        </section>
        {/* Footer */}
        <footer id="footer">
            <div className="container">
                <ul className="icons">
                    <li><A {...linkEdit("link_twitter")} className="icon fa-twitter"><span className="label">Twitter</span></A></li>
                    <li><A {...linkEdit("link_facebook")} className="icon fa-facebook"><span className="label">Facebook</span></A></li>
                    <li><A {...linkEdit("link_insta")} className="icon fa-instagram"><span className="label">Instagram</span></A></li>
                    <li><A {...linkEdit("link_email")} className="icon fa-envelope-o"><span className="label">Email</span></A></li>
                </ul>
            </div>
            <div className="copyright">
                © Untitled. All rights reserved. Images <a href="https://unsplash.com">Unsplash</a> Design <a href="https://templated.co">TEMPLATED</a>
            </div>
        </footer>;
    </div>
};

export default SampleTemplate;
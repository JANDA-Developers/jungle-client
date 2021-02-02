import React, { useEffect } from 'react';
import { IViewContext } from '../../../page/View';
import { TEST_INFO } from '../../info/test';
import { ITempalte } from '../../templates';
import { openChannel } from '../../../utils/channel';
import { Helmet } from 'react-helmet';
import { BG, Img } from 'src/component/Img';
import { InfoSubmitModal } from 'src/component/InfoSubmitModal';
import { useModal } from '@janda-com/front';
import { Add } from 'src/component/Add';
import { A } from 'src/component/A';
import { LangChange } from 'src/component/LanguageChnager';
import { Content } from 'src/component/Content';
import { TimeSpace } from 'src/component/TimeSpace';

type INFO = typeof TEST_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}


export const TestTemplate: React.FC<IProp> = ({ 
    setLang, edit, linkEdit, template, arrAddKit, page, arrayEditModalKit, editObjArr, addArray, editArray, removeArray, editMode, bg, imgKit, src, originPage, lang, l
}) => {
    const editModalHook = useModal();
    return <div>
           <LangChange lang={lang} onChange={setLang} supports={originPage?.supportLanguage} >
               <div>asdasdasdasdasdasdas!!!!!</div>
            </LangChange>
        <Helmet>
            <script type="text/javascript" src={"/assets/loadcheck.js"} />
        </Helmet>
        {/* BG처리 */}
        <BG  className="asdasd" {...imgKit("sampleImg")} > 
        asdasdasd
        asasdasd
        </BG>
               {/* 오브젝트 어레이 처리 */}
        {page.sampleArray[lang].map((item,index) => 
            <div 
            {...editObjArr("sampleArray", index, editModalHook)}
            >
                <img src={item.img}/>
                {item.title}
            </div>
        )}
        {/* 오브젝트 어레이 처리 [팝업] */}
        <InfoSubmitModal {...arrayEditModalKit("sampleArray", editModalHook)}/>
        {/* 오브젝트 어레이 처리 [추가버튼] */}
        <Add {...arrAddKit("sampleArray", editModalHook)} />
        {/* 링크 처리 */}
        <A {...linkEdit("sampleLink")} className="icon fa-twitter"><span className="label">Twitter</span></A>
        {/* 이미지 처리 */}
        <Img {...imgKit("sampleImg")} />
        {/* 텍스트 처리 */}
        <div {...edit("titleasdasdas")} />
        {/* 스트링 어레이 처리 */}
        <div className="tag">








            
        {page.tags[lang].map((t, i) => <div>
            <span {...edit("tags", i)} />
            {editMode && 
            <span onClick={()=>{removeArray("tags", i) }}>삭제</span>
            }
            </div>
        )}

        <span onClick={()=>{addArray("tags", "zxczxczxc") }}>추가</span>
        </div>
        {/* 에디터 처리 */}
        <Content infoKey="editorContnet" />
        {/* 타임스페이스 처리 */}
        <TimeSpace  infoKey="timeSpace" />
        
    </div>
};

export default TestTemplate;
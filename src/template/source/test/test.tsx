import React, { useEffect } from 'react';
import { IViewContext } from '../../../page/View';
import { TEST_INFO } from '../../info/test';
import { ITempalte } from '../../templates';
import { openChannel } from '../../../utils/channel';
import { Helmet } from 'react-helmet';
import { BG, Img } from 'src/component/Img';

type INFO = typeof TEST_INFO;
interface IProp extends IViewContext<INFO> {
    template: ITempalte
}


export const HouseManual: React.FC<IProp> = ({ 
    setLang, edit, linkEdit, template, arrAddKit, page, arrayEditModalKit, editObjArr, addArray, editArray, removeArray, editMode, bg, imgKit, src, originPage, lang, l 
}) => {

    return <div>
        <Helmet>

            <script type="text/javascript" src={"/assets/loadcheck.js"} />
        </Helmet>
        <BG  className="asdasd" {...imgKit("sampleImg")} > 
        asdasdasd
        asasdasd
        </BG>
        <Img {...imgKit("sampleImg")} />
        <div {...edit("titleasdasdas")} />
    </div>
};

export default HouseManual;
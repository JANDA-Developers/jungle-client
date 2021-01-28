import { Bold, JDcard, JDphotoFrame, JDtypho, Small } from '@janda-com/front';
import { CardProps } from '@janda-com/front/dist/components/cards/Card';
import { JDatomExtentionSet, TElements } from '@janda-com/front/dist/types/interface';
import React from 'react';

interface IProp extends CardProps, JDatomExtentionSet {
    title: string;
    describe: TElements;
    img: string
}

export const Tempalte: React.FC<IProp> = ({ describe, img, title, ...props }) => {
    return <JDcard hover mode="border" {...props} >
        <div>
            <Bold size="h6" mb>{title}</Bold>
            <JDphotoFrame mb isBgImg style={{
                height: "200px",
            }} src={img} />
            <Small >{describe}</Small>
        </div>
    </JDcard>;
};


//퍼블릭 데코레이션을 만들어서
//타입 graphql이 지나가는 필드에 
// 노노 public 데코레이터는 generateClass를 할때 통과된다.

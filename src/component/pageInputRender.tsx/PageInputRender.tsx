import React from "react";
import { JDbutton } from "@janda-com/front";
import { useState } from "react";
import { Langs } from "../../type/api";
import { InputComponent, JDinputType } from "../inputRender/InputComponent";

interface IProp<D> {
    data: D
    onSubmit: (data: D) => void;
    lang: Langs
}

//목적: 다이나믹 인풋 서브밋
// 오브젝트가 들어오면 해당 오브젝트를 분석해서 처리함이 목적
// 값이 array형태인 오브젝트가 들어온다면???
// VS name ? name도 나쁘지 않지만, 하던패턴 사용할예정
export const JDpageInputRender: React.FC<IProp<any>> = ({ children, onSubmit: handleSubmit, data: originData, lang, ...props }) => {
    //주어진 객체를 복사해서 저장해둠
    const [data, setCoptData] = useState(originData);

    return <div {...props} >
        {Object.keys(data).map((key, index) => {
            let _value = data.get(key, lang);

            const value = data[key];

            const { description, type, META } = value;

            if (type === JDinputType.channelTak) {
                _value = value.publickKey;
            }

            if (description) {
                return <InputComponent
                    KEY={key}
                    onChange={(v, index) => {

                        if (type === JDinputType.channelTak) {
                            data[key]["publickKey"] = v
                        } else if (index === undefined) {
                            data.set(key, lang, v);
                        } else {
                            data.set(key, lang, v, index);
                        }

                        setCoptData({ ...data })
                    }}
                    onDeleteArray={(index) => {
                        data.get(key, lang).splice(index, 1)
                        setCoptData({ ...data });
                    }}
                    onAddArray={(newData) => {
                        data.get(key, lang).push(newData);
                        setCoptData({ ...data });
                    }}
                    arrayMeta={META}
                    value={_value} type={type}
                    label={description}
                    key={key}
                />
            } else {
                return <div key={key} />
            }
        })}
        {children}
        <JDbutton className="adminEdit_btn" size="long" thema="primary" onClick={() => {
            handleSubmit(data)}} label="수정하기" />
    </div>;
};


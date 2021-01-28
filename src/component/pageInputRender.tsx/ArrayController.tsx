import React, { useState } from "react";
import { JDbutton, JDcard } from "@janda-com/front";
import { CardProps } from "@janda-com/front/dist/components/cards/Card";
import { JDatomExtentionSet } from "@janda-com/front/dist/types/interface";
import { InputComponent } from "../inputRender/InputComponent";
import { ObjectInputRender } from "../inputRender/ObjectInputRender";


interface IArrayControllerProps extends CardProps {
    onDelete: () => void;
    onChange: (data: any) => void;
    value: any;
    isLast: boolean;
}

export const ArrayController: React.FC<IArrayControllerProps> = ({ onChange, value, onDelete, isLast }) => {
    return <JDcard mode="border" mr={isLast ? "no" : true} mb >
        <ObjectInputRender onChange={onChange} value={value} />
        <JDbutton onClick={onDelete} thema="error" label="삭제하기" />
    </JDcard>
}

interface IAddArrayControllerProps extends CardProps, JDatomExtentionSet {
    onSubmit: (data: any) => void;
    value: any;
}

export const ArrayControllerAdd: React.FC<IAddArrayControllerProps> = ({ value, onSubmit, ...props }) => {
    const [data, setData] = useState(value);

    return <JDcard mode="border" mb {...props} >
        <div>
            {Object.keys(data).map((key, index) => {
                const value = data[key];
                let _value = data[key].default;
                const { description, type, META } = value;

                if (description) {
                    return <InputComponent
                        key={key}
                        onChange={(v, index) => {
                            if (index === undefined) {
                                data[key]["default"] = v;
                            } else {
                                data[key]["default"][index] = v;
                            }
                            setData({ ...data })
                        }} arrayMeta={META} value={_value} type={type} label={description} />
                } else {
                    return <div />
                }
            })}
        </div>
        <JDbutton onClick={() => {
            onSubmit(data);
            for (const [key] of Object.entries(data)) {
                data[key]["default"] = ""
            }
            setData(data);
        }} thema="positive" label="추가하기" />
    </JDcard>
}


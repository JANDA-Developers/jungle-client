import React from "react";
import { InputComponent, JDinputType } from "./InputComponent";

export type IMetaData<T = any> = {
    [as in keyof T]: {
        description: string,
        type?: JDinputType,
        default: string
    }
}

interface IObjectInputRender<T = any> {
    value: T
    onChange: (data: T) => void;
    META?: IMetaData<T>
}

export const ObjectInputRender: React.FC<IObjectInputRender> = ({ value, onChange, META }) => {
    return <div>{Object.keys(value).map((key, index) => {
        if (key === "index") return null;
        const _value = value[key];
        let type: JDinputType = JDinputType.text;
        let label: string = key

        if (key.includes("img")) {
            type = JDinputType.img
        }
        const handleOnChnage = (data: any = "") => {
            value[key] = data
            onChange(value);
        }

        if (META) {
            if (!META[key]) throw Error(`META 오브젝트에 ${key} 값은 존재하지 않습니다`)
            type = META[key].type || JDinputType.text
            label = META[key].description
        }

        return <InputComponent key={key + "ObjectInputRender"} onChange={handleOnChnage} value={_value} type={type} label={label} />
    })}
    </div>
}

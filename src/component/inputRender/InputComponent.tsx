import React from "react";
import { Col, Flex, Grid, InputText, isLast, JDlabel, JDswitch, JDtagInput } from "@janda-com/front"
import { ArrayController, ArrayControllerAdd } from "../pageInputRender.tsx/ArrayController"
import { PhotoUpdater } from "../PhotoUpdater"
import JDEditor from "../editor/Editor";
import InputColor from "src/atom/InputColor";

export enum JDinputType {
    text = "text",
    map = "map",
    line = "line",
    switch = "switch",
    colour = 'colour',
    img = "img",
    timespace = "timespace",
    channelTak = "channelTalk",
    share = "share",
    api = "api",
    editor = "editor",
    link = "link",
    array = "array",
    tag = "tag"
}

interface IInputComponentProps {
    KEY?: string;
    label?: string;
    type?: JDinputType,
    arrayMeta?: any
    onChange: (data: any, index?: number) => void
    onDeleteArray?: (index: number) => void;
    onAddArray?: (data: any) => void;
    value: any,
}

export const InputComponent: React.FC<IInputComponentProps> = ({ onAddArray, KEY, label, type = JDinputType.text, value, onChange, onDeleteArray, arrayMeta }) => {

    switch (type) {
        case JDinputType.line:
            return <div className="adminEdit__newSection">
                {label}
            </div>

        case JDinputType.colour:
            return <div className="adminEdit__colour">
                <JDlabel txt={label} className="mr" />
                <InputColor value={value} onChange={onChange} />
            </div>
            
        case JDinputType.switch:
            return <div className="adminEdit__switch">
                <JDlabel txt={label} className="mr" />
                <JDswitch checked={value} onChange={()=> {
                onChange(!value);
            }} />
            </div>
        case JDinputType.text:
            return <InputText mb label={label} value={value} onChange={onChange} />
        case JDinputType.editor:
            return <JDEditor model={value} setModel={onChange} onChange={onChange} />
        case JDinputType.link:
            return <InputText mb placeholder="링크 주소를 입력 해주세요." label={label} value={value} onChange={onChange} />
        case JDinputType.timespace:
            return <InputText mb placeholder="타임스페이스 주소입력" label={label} value={value} onChange={onChange} />
        case JDinputType.timespace:
            return <InputText mb placeholder="타임스페이스 주소입력" label={label} value={value} onChange={onChange} />
        case JDinputType.tag:
            return <div>
                <JDlabel txt={label} />
                <JDtagInput mb tags={value} setTags={onChange} />
            </div>
        case JDinputType.channelTak:
            return <InputText label="채널톡 연동하기" iconOnClick={() => { alert("/") }} iconProps={{ tooltip: "채널톡 연동 가이드 보기", hover: true }} icon="info" placeholder="채널톡 연동키" mb value={value} onChange={onChange} />
        case JDinputType.img:
            return <PhotoUpdater label={label} src={value} setSrc={onChange} />
        case JDinputType.array:
            return <div>
                <JDlabel txt={label} />
                <Grid>
                    {value.map((value: any, index: number) =>
                        <Col
                            key={index + "ArrayElement" + KEY}
                            md={12} full={6} >
                            <ArrayController
                                isLast={isLast(index, value)}
                                onDelete={() => { onDeleteArray?.(index) }}
                                onChange={(data) => { onChange(data, index) }}
                                value={value}
                            />
                        </Col>)
                    }
                    <Col md={12} full={6} >
                        {arrayMeta && <ArrayControllerAdd onSubmit={(data) => {
                            {
                                const newData: any = {}
                                Object.keys(data).forEach((key) => {
                                    const value = data[key].default;
                                    newData[key] = value
                                })
                                onAddArray?.(newData);
                            }
                        }} value={arrayMeta} key={"AddArrayElement" + KEY} />}
                    </Col>
                </Grid>
            </div>
        default: return <div />
    }
}
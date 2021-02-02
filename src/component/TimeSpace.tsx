import { InputText } from '@janda-com/front';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../hook/useWindowResize';
import { ViewContext } from '../page/View';

interface IProp {
    infoKey: string
}

export const TimeSpace: React.FC<IProp> = ({ infoKey }) => {
    const { editMode, page, setPage, lang } = useContext(ViewContext)!;
    const [height, setHeight] = useState(0);
    const size = useWindowSize()

    useEffect(() => {
        ref.current?.contentWindow?.postMessage("resizeHeight", "*");
    }, [size.width, size.height])

    const ref = useRef<HTMLIFrameElement>(null);
    // const sampleSrc = "http://localhost:3001/?sgc=L6MPRO&sc=PKT0QF&mode=mini/#/예시 상품1."

    useEffect(() => {
        window.onmessage = (e: MessageEvent) => {
            if (e.data.hasOwnProperty("frameHeight")) {
                setHeight(e.data.frameHeight)
                // document.getElementById("TIME_SPACE")?.style.height = `${e.data.frameHeight + 30}px`;
            }
        };
    }, [])

    if (!page[infoKey]) return null;
    const link = page[infoKey][lang];
    
    return <iframe style={{
        width: "100%",
        height
    }} ref={ref} src={link} />
};

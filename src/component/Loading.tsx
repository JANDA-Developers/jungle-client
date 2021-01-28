import { isEmpty, JDcard, s4 } from '@janda-com/front';
import React from 'react';
import { useLoadScript } from '../utils/checkLoaded';
import { CardProps } from '@janda-com/front/dist/components/cards/Card';
import { JDpreloader } from "@janda-com/front"
import { JDatomExtentionSet } from "@janda-com/front/dist/types/interface"

interface IProp { }

export const Loading: React.FC<IProp> = () => {
    const l = useLoadScript(() =>         // @ts-ignore
        !!window.customload);

    return !l ? <div className="pageloading" /> : <div></div>
};


interface IProps extends CardProps, JDatomExtentionSet {
    height?: string;
    count?: number;
    loading: boolean | any;
    loadingSize?: "small" | "large" | "tiny" | "medium"
}

export const LoadingCard: React.FC<IProps> = ({ count = 1, loading, height, loadingSize = "medium", ...props }) => {
    const empty = typeof loading === "boolean" ? loading : isEmpty(loading)

    const Loading = () => <JDcard style={{ height }} flex={{ center: true }} {...props}>
        <JDpreloader size={loadingSize} loading={empty} />
    </JDcard>;

    if (!empty) return null;
    if (count === 1) return <Loading />
    const loads = Array(count).fill("").map(() => s4())
    return <div>{loads.map((key) => <Loading key={key} />)}</div>
}
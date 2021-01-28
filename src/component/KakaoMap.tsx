import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useKakaoMap } from '../utils/channel';

interface IProp {
    kakaoRestApiKey: string
    height?: string;
}

export const KAKAOmap: React.FC<IProp> = ({ kakaoRestApiKey, height = "100%" }) => {
    const { map } = useKakaoMap(kakaoRestApiKey);

    return <div>
        <div id="map" style={{ width: "100%", height: height }} />
    </div>;
};

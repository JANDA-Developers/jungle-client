import { useEffect, useState } from "react";

export const openChannel = (key:string, isAdmin?:boolean) => {
  // @ts-ignore
  if(!window.ChannelIO) {
    if(!key.includes("https://"))
      setTimeout(()=>{openChannel(key)},100)
    return;
  }


  if(!key.includes("https://"))
    // @ts-ignore
    ChannelIO('boot', {
      "pluginKey": key
    });
}


export const useLoadScript = (src:string,scriptId:string) => {
  const [loaded, setLoaded] = useState(false);
    const existingScript = document.getElementById('googleMaps');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = src;
      script.id = scriptId;
      document.body.appendChild(script);
      script.onload = () => {
        setLoaded(true);
      };
    }
    if (existingScript) setLoaded(true);

    return {loaded}
}


interface IKakaoOptions {
  lat: number,
  lng: number

}

export const useKakaoMap = (kakaoRestApiKey:string, options?: IKakaoOptions) => {
  const [map,setMap] = useState<any>();
  const { loaded } = useLoadScript(`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoRestApiKey}&autoload=false`, "kakaoMap");

  useEffect(() => {
      if (!loaded) return;
      // @ts-ignore
      const kakao = window.kakao;

      const {lat,lng} = options || {};

      kakao.maps.load(function() {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            // @ts-ignore
            center: new kakao.maps.LatLng(lat || 33.450701,lng || 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        // @ts-ignore
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        setMap(map);
      });
  }, [loaded])

  return {map};
}
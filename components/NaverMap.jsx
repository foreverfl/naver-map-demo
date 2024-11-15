import Script from "next/script";
import { useEffect } from "react";

export default function NaverMap() {
  useEffect(() => {
    const initializeMap = () => {
      const { naver } = window;

      const mapOptions = {
        center: new naver.maps.LatLng(37.5665, 126.978),
        zoom: 10,
      };

      const map = new naver.maps.Map("map", mapOptions);

      new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5665, 126.978),
        map,
        title: "서울 시청",
      });
    };

    if (typeof window.naver !== "undefined") {
      initializeMap();
    } else {
      const interval = setInterval(() => {
        if (typeof window.naver !== "undefined") {
          clearInterval(interval);
          initializeMap();
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
      />
      <div id="map" style={{ width: "100%", height: "800px" }}></div>
    </>
  );
}

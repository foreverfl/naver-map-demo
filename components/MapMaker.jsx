import React, { useEffect } from "react";

const MapMaker = ({ map, serviceKey }) => {
  // 1. API 데이터 가져오기
  const fetchData = async () => {
    const today = new Date()
    .toISOString()
    .split("T")[0]
    .replace(/-/g, "");

    // 한 번에 가져올 최대 데이터 수
    const url = `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getPblPvtRentLttotPblancDetail?page=1&perPage=100&cond%5BRCRIT_PBLANC_DE_START%3A%3ALTE%5D=${today}&cond%5BRCRIT_PBLANC_DE_END%3A%3AGTE%5D=${today}&serviceKey=${process.env.NEXT_PUBLIC_HOUSE_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        return data.data; // 데이터 반환
      } else {
        console.log("데이터가 없습니다.");
        return [];
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      return [];
    }
  };
  
  // 2. Geocoding: 주소를 위도/경도로 변환 할수 있는거
  const geocodeAddress = async (address) => {
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID; // 네이버 지도 Client ID
    const clientSecret = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET; // 네이버 지도 Client Secret
    const url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(address)}`;

    try {
      const response = await fetch(url, {
        headers: {
          "X-NCP-APIGW-API-KEY-ID":process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID,
          "X-NCP-APIGW-API-KEY":process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_SECRET,
        },
      });
      const data = await response.json();
      if (data.addresses && data.addresses.length > 0) {
        const { x, y } = data.addresses[0]; // 경도(x), 위도(y)
        const result = { lat: parseFloat(y), lng: parseFloat(x) };
        console.log("Geocoding 결과:", result);
        return result;
      }else {
        console.log("주소못찾음");
      }
    } catch (error) {
      console.error("Geocoding 실패:", error);
    }
    return null;
  };

  // 3. 지도에 마커 추가
  const addMarkersToMap = async () => {
    if (!map) {
      console.error("네이버 지도 객체가 없습니다.");
      return;
    }

    const data = await fetchData();

    for (const item of data) {
      const { HOUSE_MANAGE_NO, HOUSE_NM, HSSPLY_ADRES } = item;

      // 주소를 위도/경도로 변환
      const coordinates = await geocodeAddress(HSSPLY_ADRES);
      if (coordinates) {
        // 마커 생성
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(coordinates.lat, coordinates.lng),
          map: map,
          title: HOUSE_NM, // 마커 제목
        });

        // 마커 클릭 이벤트
        naver.maps.Event.addListener(marker, "click", () => {
          alert(`주택관리번호: ${HOUSE_MANAGE_NO}\n주택명: ${HOUSE_NM}`);
        });
      }
    }
  };

  useEffect(() => {
    addMarkersToMap();
  }, [map]);

  return null; // 이 컴포넌트 자체는 UI를 렌더링하지 않음*/
};

export default MapMaker;

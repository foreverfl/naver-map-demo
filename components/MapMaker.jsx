import React, { useEffect } from "react";

const MapMaker = ({ map, serviceKey }) => {
  // 1. API 데이터 가져오기
  const fetchData = async () => {
    /*
    const today = new Date()
    .toISOString()
    .split("T")[0]
    .replace(/-/g, "");

    // 한 번에 가져올 최대 데이터 수
    const url = `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getPblPvtRentLttotPblancDetail?page=1&perPage=100&cond%5BRCRIT_PBLANC_DE_START%3A%3ALTE%5D=${today}&cond%5BRCRIT_PBLANC_DE_END%3A%3AGTE%5D=${today}&serviceKey=${process.env.NEXT_PUBLIC_HOUSE_API_KEY}`;
*/
    const url = `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getPblPvtRentLttotPblancDetail?page=1&perPage=100&serviceKey=${process.env.NEXT_PUBLIC_HOUSE_API_KEY}`;

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
    const url = `/api/geocode?address=${encodeURIComponent(address)}`;

    try {
      const response = await fetch(url);
      //실패 확인
      if (!response.ok) {
        throw new Error(`Geocoding 요청 실패: ${response.status}`);
      }


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

    const data = await fetchData();//api 데이터 가져오고


    for (const item of data) {// for of 문
      const { HOUSE_MANAGE_NO, HOUSE_NM, HSSPLY_ADRES } = item;


      // 주소를 위도/경도로 변환
      const coordinates = await geocodeAddress(HSSPLY_ADRES); //주소를 위도경도로 바꾸고
      if (coordinates) {
        // 마커 생성
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(coordinates.lat, coordinates.lng),
          map: map,
          title: HOUSE_NM, // 마커 제목
        });

        // 마커 클릭 이벤트
        naver.maps.Event.addListener(marker, "click", () => {
          onMarkerClick({
            houseManageNo: HOUSE_MANAGE_NO,
            houseName: HOUSE_NM,
            address: HSSPLY_ADRES,
          });
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

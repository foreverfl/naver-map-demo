import React, { useCallback, useEffect } from "react";

const MapMaker = ({ map ,onMarkerClick }) => {
  // API 데이터 가져오기
  const fetchData = useCallback(async () => {
    const url = `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getPblPvtRentLttotPblancDetail?page=1&perPage=10&serviceKey=${process.env.NEXT_PUBLIC_HOUSE_API_KEY}`;

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
  }, []);

  // Geocoding: 주소를 위도/경도로 변환 할수 있는거
  const geocodeAddress = useCallback(async (address) => {
    const url = `/api/geocode?address=${encodeURIComponent(address)}`;

    try {
      const response = await fetch(url);

      // 실패 확인
      if (!response.ok) {
        throw new Error(`Geocoding 요청 실패: ${response.status}`);
      }

      const data = await response.json();
      if (data.addresses && data.addresses.length > 0) {
        const { x, y } = data.addresses[0]; // 경도(x), 위도(y)
        const result = { lat: parseFloat(y), lng: parseFloat(x) };
        console.log("Geocoding 결과:", result);
        return result;
      } else {
        console.log("주소를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("Geocoding 실패:", error);
    }
    return null;
  }, []);

  // 지도에 마커 추가
  const addMarkersToMap = useCallback(async () => {
    if (!map) {
      console.error("네이버 지도 객체가 없습니다.");
      return;
    }

    const data = await fetchData(); // API 데이터 가져오기

    if (data.length > 0) {
      //for (let i = 0; i < data.length; i++) {
      const { HOUSE_MANAGE_NO, HOUSE_NM, HSSPLY_ADRES,SUBSCRPT_RCEPT_BGNDE,RCRIT_PBLANC_DE,
        SUBSCRPT_RCEPT_ENDDE,
        PRZWNER_PRESNATN_DE,
        CNTRCT_CNCLS_BGNDE,
        CNTRCT_CNCLS_ENDDE,
        MVN_PREARNGE_YM,
        MDHS_TELNO,
        PBLANC_URL, } = data[0];

      // 주소를 위도/경도로 변환
      const coordinates = await geocodeAddress(HSSPLY_ADRES);
      if (coordinates) {
        // 마커 생성
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(coordinates.lat, coordinates.lng),
          map: map,
          title: HOUSE_NM,
        });

        // 마커 클릭 이벤트
        marker.addListener("click", () => {
          console.log("마커 클릭됨!",{
            houseManageNo: HOUSE_MANAGE_NO,
    houseName: HOUSE_NM,
    address: HSSPLY_ADRES,
          });
          
          onMarkerClick({
            houseManageNo: HOUSE_MANAGE_NO,
            houseName: HOUSE_NM,
            address: HSSPLY_ADRES,
            houseManageNo: HOUSE_MANAGE_NO,
            houseName: HOUSE_NM,
            address: HSSPLY_ADRES,
            rcritpblancde :RCRIT_PBLANC_DE,
            subscrptRceptBgnde: SUBSCRPT_RCEPT_BGNDE,
            subscrptRceptEndde: SUBSCRPT_RCEPT_ENDDE,
            przwnerPresnatnDe: PRZWNER_PRESNATN_DE,
            cntrctCnclsBgnde: CNTRCT_CNCLS_BGNDE,
            cntrctCnclsEndde: CNTRCT_CNCLS_ENDDE,
            mvnPrearngeYm: MVN_PREARNGE_YM,
            mdhstelno : MDHS_TELNO,
            pblancurl: PBLANC_URL
          });
        });

        console.log("marker:", marker);
      }
    //}
    } else {
      console.log("no data");
    }
    
  }, [map, fetchData, geocodeAddress]);

  useEffect(() => {
    addMarkersToMap();
  }, [addMarkersToMap]);

  return null; // 이 컴포넌트 자체는 UI를 렌더링하지 않음*/
};

export default MapMaker;

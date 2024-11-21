import React, { useContext } from "react";
import { NaverMapContext } from "../components/NaverMap";

/**
 * 지도 중심을 원하는 좌표로 부드럽게 이동하는 훅
 *
 * @param {Object} position - 이동하려는 위치의 좌표 객체
 * @param {number} position.lat - 위도(latitude)
 * @param {number} position.lng - 경도(longitude)
 */
function useMapCenter() {
  // NaverMapContext에서 네이버 지도 객체를 가져옴
  const naverMap = useContext(NaverMapContext);

  if (!naverMap) {
    throw new Error(
      "useMapCenter는 NaverMap 컴포넌트 내부에서 사용되어야 합니다!"
    );
  }

  /**
   * 지도의 중심을 특정 좌표로 이동하는 함수
   *
   * @param {Object} position - 이동할 좌표 객체
   * @param {number} position.lat - 위도
   * @param {number} position.lng - 경도
   */
  const setMapCenter = ({ lat, lng }) => {
    if (typeof window === "undefined") return; // 서버에서 실행될 경우 함수 종료

    // 이동할 좌표 영역을 설정
    const bounds = new naver.maps.LatLngBounds(
      new naver.maps.LatLng(Number(lat) - 0.03, Number(lng) - 0.01),
      new naver.maps.LatLng(Number(lat) + 0.03, Number(lng) + 0.01)
    );

    // 지도 영역을 설정한 범위로 부드럽게 이동
    naverMap.panToBounds(bounds);
  };

  return { setMapCenter };
}

export default useMapCenter;

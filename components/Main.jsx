"use client";

import React, { useState, useCallback } from "react";
import NaverMap from "@/components/NaverMap";
import MapMarker from "@/components/MapMaker";
import Sidebar from "@/components/Siderbar";


export default function Main() {
  const [map, setMap] = useState(null); // 지도 객체를 저장하는 상태
  const [selectedMarker, setSelectedMarker] = useState(null); // 선택된 마커 데이터
  const [isSidebarOpen, setSidebarOpen] = useState(false); // 사이드바 열림 상태
  
  
  
  
  const handleMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

 // 마커 클릭 핸들러
 const handleMarkerClick = (data) => {
  setSelectedMarker(data); // 클릭된 마커 데이터 저장
  setSidebarOpen(true); // 사이드바 열기
};

// 사이드바 닫기 핸들러
const closeSidebar = () => {
  setSidebarOpen(false); // 사이드바 닫기
  setSelectedMarker(null); // 선택된 마커 데이터 초기화
}

  return (
    <div>
      {/* NaverMap에서 map 객체를 생성하고 onMapLoad로 전달 */}
      <NaverMap onMapLoad={handleMapLoad} />
      {/* map 객체가 있을 경우에만 MapMarker를 렌더링 */}
      {map && <MapMarker map={map}onMarkerClick={handleMarkerClick} />}
      {/* 사이드바 렌더링 */}
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          details={selectedMarker}
          onClose={closeSidebar}
        />
      )}
     

    </div>
  );
}

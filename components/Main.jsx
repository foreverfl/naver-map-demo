"use client";

import React, { useState, useCallback } from "react";
import NaverMap from "@/components/NaverMap";
import MapMarker from "@/components/MapMaker";

export default function Main() {
  const [map, setMap] = useState(null); // 지도 객체를 저장하는 상태

  const handleMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  return (
    <div>
      {/* NaverMap에서 map 객체를 생성하고 onMapLoad로 전달 */}
      <NaverMap onMapLoad={handleMapLoad} />
      {/* map 객체가 있을 경우에만 MapMarker를 렌더링 */}
      {map && <MapMarker map={map} />}
    </div>
  );
}

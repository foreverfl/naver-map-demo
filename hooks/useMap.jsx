import { useContext } from "react";
import { NaverMapContext } from "../components/NaverMap";

/**
 * useMap 훅
 * 네이버 지도 객체(naverMap)를 NaverMapContext에서 가져옵니다.
 * 해당 훅은 반드시 NaverMapContext.Provider 내부에서 호출되어야 합니다.
 *
 * @param {string} [componentName] - 호출한 컴포넌트의 이름(에러 메시지에 사용)
 * @returns {object} naverMap - 네이버 지도 객체
 */

function useMap(componentName = "useMap") {
  // NaverMapContext에서 네이버 지도 객체를 가져옵니다.
  const naverMap = useContext(NaverMapContext);

  // 만약 naverMap이 없으면, 즉 NaverMapContext.Provider 내부가 아니면 에러를 발생시킵니다.
  if (!naverMap) {
    throw new Error(`${componentName} must be used within a Map Component!`);
  }

  return naverMap; // 네이버 지도 객체를 반환
}

export default useMap;

import { useEffect } from "react";

/**
 * useScript 훅
 * 외부 스크립트를 URL을 통해 동적으로 로드하고, 로드 완료 시 또는 에러 발생 시 콜백 함수를 실행
 *
 * @param {string} url - 로드할 스크립트의 URL
 * @param {function} onLoadCallback - 스크립트 로드 성공 시 실행할 콜백 함수
 * @param {function} onErrorCallback - 스크립트 로드 실패 시 실행할 콜백 함수
 */
const useScript = (url, onLoadCallback, onErrorCallback) => {
  useEffect(() => {
    // 동일한 URL의 스크립트가 이미 로드되었는지 확인
    if (document.querySelector(`script[src="${url}"]`)) {
      if (onLoadCallback) onLoadCallback(); // 이미 로드된 경우 바로 콜백 실행
      return;
    }

    const script = document.createElement("script"); // 스크립트 태그를 동적으로 생성
    script.src = url; // 스크립트 URL 설정
    script.async = true; // 비동기 로드 설정

    // 스크립트 로드 성공 시 콜백 함수 실행
    script.onload = () => {
      if (onLoadCallback) onLoadCallback();
    };

    // 스크립트 로드 실패 시 에러 콜백 함수 실행
    script.onerror = () => {
      if (onErrorCallback)
        onErrorCallback(new Error(`Failed to load script: ${url}`));
    };

    document.body.appendChild(script); // 스크립트를 body에 추가하여 로드 시작

    return () => {
      // 컴포넌트가 언마운트될 때 스크립트를 제거
      document.body.removeChild(script);
    };
  }, [url, onLoadCallback, onErrorCallback]); // url 또는 콜백 함수가 변경될 때마다 실행
};

export default useScript;

// style.jsx
// TailwindCSS 스타일 객체 정의: 각 컴포넌트의 스타일을 재사용 가능하도록 설정
export const styles = {
  // 전체 컨테이너 스타일
  container: "max-w-5xl mx-auto p-4",
  // max-w-5xl: 최대 너비를 설정 (1280px)
  // mx-auto: 수평 중앙 정렬
  // p-4: 모든 방향에 1rem(16px) 패딩 적용

  // 헤더 스타일
  header:
    "bg-blue-100 text-blue-700 p-6 text-lg font-bold rounded-lg shadow-md",
  // bg-blue-100: 밝은 파란색 배경
  // text-blue-700: 진한 파란색 텍스트
  // p-6: 1.5rem(24px) 패딩
  // text-lg: 글자 크기를 기본 크기보다 약간 크게 설정
  // font-bold: 글자 두께를 굵게 설정
  // rounded-lg: 둥근 모서리 적용
  // shadow-md: 중간 정도의 그림자 효과

  // 섹션 제목 스타일
  sectionTitle: "text-lg font-semibold mt-8 mb-4",
  // text-lg: 글자 크기를 기본 크기보다 약간 크게 설정
  // font-semibold: 중간 두께의 글자
  // mt-8: 상단 마진 2rem(32px)
  // mb-4: 하단 마진 1rem(16px)

  // 테이블 스타일
  table: "w-full border-collapse border border-gray-200 rounded-md shadow-md",
  // w-full: 테이블이 부모 컨테이너의 너비를 모두 차지하도록 설정
  // border-collapse: 테이블의 테두리 선을 하나로 결합
  // border: 테이블 외곽에 기본 테두리 적용
  // border-gray-200: 연한 회색 테두리 색상
  // rounded-md: 약간 둥근 모서리
  // shadow-md: 중간 정도의 그림자 효과

  // 테이블 헤더 스타일
  tableHeader:
    "bg-blue-200 text-left px-4 py-2 font-semibold border border-gray-300",
  // bg-blue-200: 연한 파란색 배경
  // text-left: 텍스트를 왼쪽 정렬
  // px-4: 양쪽에 1rem(16px) 패딩
  // py-2: 위아래에 0.5rem(8px) 패딩
  // font-semibold: 중간 두께의 글자
  // border: 헤더 셀의 테두리 추가
  // border-gray-300: 테두리를 연한 회색으로 설정

  // 테이블 행 스타일
  tableRow: "border-t border-gray-200 hover:bg-gray-50",
  // border-t: 테이블 행 위쪽에만 테두리 추가
  // border-gray-200: 연한 회색 테두리
  // hover:bg-gray-50: 마우스를 올렸을 때 연한 회색 배경으로 변경

  // 테이블 데이터 셀 스타일
  tableData: "px-4 py-2 border-l border-gray-200",
  // px-4: 양쪽에 1rem(16px) 패딩
  // py-2: 위아래에 0.5rem(8px) 패딩
  // border-l: 셀의 왼쪽 테두리 추가
  // border-gray-200: 연한 회색 테두리

  // 버튼 스타일
  button:
    "bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600",
  // bg-blue-500: 기본 파란색 배경
  // text-white: 흰색 텍스트
  // px-4: 양쪽에 1rem(16px) 패딩
  // py-2: 위아래에 0.5rem(8px) 패딩
  // rounded-lg: 둥근 모서리
  // shadow: 그림자 효과
  // hover:bg-blue-600: 마우스를 올렸을 때 더 진한 파란색으로 배경 변경
};

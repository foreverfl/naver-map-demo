import React from "react";

function Navigator() {
  return (
    <Container>
      <Top />
      <Router>
        <li className="mb-4 hover:text-gray-700 cursor-pointer">메인 페이지</li>
        <li className="mb-4 hover:text-gray-700 cursor-pointer">설정</li>
        <li className="mb-4 hover:text-gray-700 cursor-pointer">내 프로필</li>
        <li className="hover:text-gray-700 cursor-pointer">로그아웃</li>
      </Router>
      <Bottom />
    </Container>
  );
}

// 전체 내비게이션 컨테이너
function Container({ children }) {
  return (
    <header className="z-[100000] bg-white fixed w-[370px] h-full left-0 top-0 flex flex-col p-3 shadow-lg border-r border-gray-200">
      {children}
    </header>
  );
}

// 사이드바의 상단 공간
function Top() {
  return <div className="flex-1" />;
}

// 내비게이션 메뉴 항목을 표시하는 영역
function Router({ children }) {
  return (
    <ul className="flex flex-col space-y-4 font-sans font-medium text-sm text-gray-500">
      {children}
    </ul>
  );
}

// 사이드바의 하단 공간
function Bottom() {
  return <div className="flex-1" />;
}

export default Navigator;

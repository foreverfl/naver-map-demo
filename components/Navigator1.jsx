import React from "react";
import logo from "@/public/images/home.png";
import Image from "next/image"; // 추가된 import

const Navigator1 = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-md z-10">
      {/* 로고 섹션 */}
      <div className="flex items-center space-x-3">
        {/* 로고 아이콘 */}
        <Image
          src={logo} // 동적으로 import한 logo 사용
          alt="분양모음집 로고"
          width={32} // 이미지의 고정된 너비
          height={32} // 이미지의 고정된 높이
          className="h-8 w-8" // TailwindCSS 스타일도 병행 가능
        />
        {/* 로고 텍스트 */}
        <span className="text-xl font-bold text-black">Home Bridge</span>
      </div>

      {/* 검색바 */}
      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="지역, 분양형태, 주택명을 검색해보세요."
          className="flex-grow px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 18l6-6m0 0l-6-6m6 6H4"
            />
          </svg>
        </button>
      </div>

      {/* 메뉴 섹션 */}
      <div className="flex items-center space-x-6">
        <a
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-black"
        >
          로그인
        </a>
      </div>
    </nav>
  );
};

export default Navigator1;

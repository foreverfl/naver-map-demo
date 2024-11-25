"use client";

import React from "react";

const Sidebar1 = ({ isOpen, details, onClose }) => {
  console.log("Sidebar 데이터:", details);

  return (
    <div
      className={`fixed top-[69px] right-0 w-full md:w-[400px] h-full bg-gray-100 shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-[500]`}
      tyle={{
        top: "64px", // 네비게이션 높이에 맞게 설정 (64px는 예시, 네비게이션의 실제 높이로 변경)
        height: "calc(100vh - 64px)", // 네비게이션을 제외한 높이
      }}
    >
      {/* 닫기 버튼 */}
      <button className="absolute top-3 left-2 " onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 hover:text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="p-6">
        {details ? (
          <>
            {/* 헤더 섹션 */}
            <div className="bg-blue-100 text-center p-6 rounded-md mb-6 mt-2 ">
              <h1 className="text-xl font-bold text-blue-800">
                {details.houseName}
              </h1>
              <p className="text-sm text-blue-600">{details.address}</p>
            </div>

            {/* 주요 정보 섹션 */}
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                모집공고 주요정보
              </h2>
              <div className="bg-white shadow-md rounded-lg">
                {/* 정보 테이블 */}
                <table className="w-full border-collapse table-fixed">
                  <tbody>
                    {/* 공급위치 */}
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium text-gray-600 w-1/4 whitespace-nowrap">
                        공급위치
                      </td>
                      <td className="px-4 py-3 text-gray-800">
                        {details.address}
                      </td>
                    </tr>
                    {/* 공급번호 */}
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium text-gray-600 w-1/4 whitespace-nowrap">
                        공급번호
                      </td>
                      <td className="px-4 py-3 text-gray-800">
                        {details.houseManageNo}
                      </td>
                    </tr>
                    {/* 문의처 */}
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-600 w-1/4 whitespace-nowrap">
                        문의처
                      </td>
                      <td className="px-4 py-3 text-gray-800">
                        {/*{details.mdhstelno}*/}
                        {formatPhoneNumber(details.mdhstelno)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 공고문 보기 버튼 */}
                <div className="p-4 border-t border-gray-200 text-center">
                  <a
                    href={details.pblancurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition"
                  >
                    공고문 보기
                  </a>
                </div>
              </div>
            </section>

            {/* 공급 및 계약일정 일정 섹션 */}
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-4">공급 및 계약 일정</h2>
              <table className="w-full bg-white shadow-md rounded-lg text-left">
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">모집공고일</td>
                    <td className="px-4 py-2">
                      {formatDate(details.rcritpblancde)}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">청약접수시작일</td>
                    <td className="px-4 py-2">
                      {formatDate(details.subscrptRceptBgnde)}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">청약접수종료일</td>
                    <td className="px-4 py-2">
                      {formatDate(details.subscrptRceptEndde)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">당첨자 발표일</td>
                    <td className="px-4 py-2">
                      {formatDate(details.przwnerPresnatnDe)}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium">계약 시작일</td>
                    <td className="px-4 py-2">
                      {formatDate(details.cntrctCnclsBgnde)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">계약 종료일</td>
                    <td className="px-4 py-2">
                      {formatDate(details.cntrctCnclsEndde)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 유의사항 섹션 */}
            <section>
              <h2 className="text-lg font-semibold mb-4">유의사항</h2>
              <div className="bg-gray-50 p-4 rounded-md shadow">
                <p>자세한 내용은 공고문을 참고하세요.</p>
              </div>
            </section>
          </>
        ) : (
          <p className="text-gray-500">로딩 중...</p>
        )}
      </div>
    </div>
  );
};

const formatPhoneNumber = (phoneNumber) => {
  // 전화번호가 없는 경우 처리
  if (!phoneNumber) return "정보 없음";

  // 숫자만 남기기 (공백, 하이픈 제거)
  const cleaned = phoneNumber.toString().replace(/\D/g, "");

  // 10자리 또는 11자리로 처리
  if (cleaned.length === 10) {
    // 예: 031-123-4567
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  } else if (cleaned.length === 11) {
    // 예: 010-1234-5678
    return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  }

  // 기본적으로 원본 반환 (유효하지 않은 경우)
  return phoneNumber;
};
const formatDate = (dateString) => {
  if (!dateString) return "정보 없음"; // 날짜가 없을 경우 처리

  // 날짜 문자열을 배열로 분해
  const year = dateString.substring(0, 4); // 연도 추출
  const month = dateString.substring(4, 6); // 월 추출
  const day = dateString.substring(6, 8); // 일 추출

  // 포맷팅된 날짜 반환
  return `${year}-${month}-${day}`;
};

export default Sidebar1;

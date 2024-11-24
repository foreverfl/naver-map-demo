"use client";

import React from "react";

const Sidebar = ({isOpen, details, onClose}) => {
  console.log("Sidebar 데이터:", details);

    return(
        <div
        //사이드바를 화면 오른쪽에 고정.너비는 화면의 1/3, 높이는 전체 화면에 맞춤.
        //bg-white: 흰색 배경.
        //shadow-lg: 그림자 효과
        className={`fixed top-0 right-0 w-300px h-full bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50`}
          >
            <button
            //버튼 오른쪽 상단
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
            >
                닫기
            </button>

            <div className="p-4">
            {details?(
                <>
             <h2 className="text-lg font-bold mb-2">{details.houseName}</h2>
            <p><strong>공급위치:</strong> {details.address}</p>
            <p><strong>주택관리번호:</strong> {details.houseManageNo}</p>
            <p><strong>청약접수시작일:</strong> {details.subscrptRceptBgnde}</p>
            <p><strong>청약접수종료일:</strong> {details.subscrptRceptEndde}</p>
            <p><strong>당첨자 발표일:</strong> {details.przwnerPresnatnDe}</p>
            <p><strong>계약 시작일:</strong> {details.cntrctCnclsBgnde}</p>
            <p><strong>계약 종료일:</strong> {details.cntrctCnclsEndde}</p>
            <p><strong>입주 예정월:</strong> {details.mvnPrearngeYm}</p>
            {/*
            <p>
                <strong>예시</strong>{details.SUBSCRPT_RCEPT_ENDDE}
            </p>
           */}
           {details.pblanc_url && (
            <div className="mt-4">
                <a
                href={details.pblanc_url}
                target="_blank"
                rel="noopener noreferrer"
                 className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                 >
                    공고문 웹페이지
                 </a>
            </div>
           )}
          </>
            ):(
                <p className="text-gray-500"> 로로딩딩....</p>
            )}
            </div>
          </div>
        );
      };

export default Sidebar;
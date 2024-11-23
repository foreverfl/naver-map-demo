"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Siderbar";
console.log(Sidebar);

const SidebarTestPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const testDetails = {
    HOUSE_NM: "성산 그린코아",
    HSSPLY_ADRES: "서울시 마포구 성산동",
    HOUSE_MANAGE_NO: "2024850001",
    SUBSCRPT_RCEPT_BGNDE: "2024-01-01",
    SUBSCRPT_RCEPT_ENDDE: "2024-01-15",
    PUBLIC_URL:
      "https://www.applyhome.co.kr/ai/aia/selectPRMOLttotPblancDetailView.do?houseManageNo=2024850001&pblancNo=2024850001&houseSecd=03",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
      >
        사이드바 열기/닫기
      </button>
      <Sidebar
        isOpen={isOpen}
        details={testDetails}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default SidebarTestPage;

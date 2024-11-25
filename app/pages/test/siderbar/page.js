"use client";
import Siderbar1 from "@/components/Siderbar1";
import React, { useState } from "react";

const Page = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar에 표시될 테스트 데이터
  const details = {
    houseName: "성남판교 산운마을13단지",
    address: "경기도 성남시 분당구 판교원로82번길 30 (산운마을)",
    houseManageNo: "2024850001",
    subscrptRceptBgnde: "2024-01-01",
    subscrptRceptEndde: "2024-01-15",
    przwnerPresnatnDe: "2024-02-01",
    cntrctCnclsBgnde: "2024-02-10",
    cntrctCnclsEndde: "2024-02-28",
    mvnPrearngeYm: "2025-05",
    mdhs_telno: "031-7384-534",
    pblanc_url:
      "https://www.applyhome.co.kr/ai/aia/selectPRMOLttotPblancDetailView.do?houseManageNo=2024850001&pblancNo=2024850001&houseSecd=03",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Sidebar Demo</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        onClick={() => setSidebarOpen(true)}
      >
        사이드바 열기
      </button>

      {/* Sidebar 컴포넌트 */}
      <Siderbar1
        isOpen={isSidebarOpen}
        details={details}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
};

export default Page;

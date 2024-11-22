import React, {useState} from "react";
import MapMaker from "@/components/MapMaker";
import Sidebar from "@/components/Sidebar";

const MapWithSidebar = ({map}) => {
    //사이드바 열기
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    //상태 데이터확인
    const [details, setDetails] = useState(null);

    //마크 클릭 이벤트
    const handledMarkerClick = (data) => {
        setDetails(data);// 전달받은 데이터 저장
        setSidebarOpen(true);// 사이드바 열기
    };


    //사이드바 닫기
    const closeSiderbar = () => {
        setSidebaropen(false); //닫고
        setDetails(null);; 초기화
    };

    return(
        <div clsassName="relative w-full h-screen bg-gray-100">
            {/* 마커 컴포턴트 */}
            <MapMaker map={map} onMarkerClick={handledMarkerClick}/>

            {/*사이드 컴포턴트 */}
            <Sidebar
            isOpen={isSidebarOpen}
            details={details}
            onclick={closeSiderbar}
            clsassName="transition-transform duration-30"
            />

        </div>
    );
};

export default MapWithSidebar;

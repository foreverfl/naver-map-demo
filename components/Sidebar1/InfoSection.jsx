// InfoSection.jsx
import React from "react";
import { styles } from "@/components/Sidebar1/styles"; // 스타일 객체를 가져와 TailwindCSS 스타일을 재활용

// InfoSection 컴포넌트: 헤더, 카드, 테이블, 그리고 푸터(유의사항)를 포함한 섹션을 구성
const InfoSection = ({ header, cards, table, footer }) => {
  return (
    <div className={styles.container}> {/* 전체 컴포넌트를 감싸는 컨테이너 */}
      
      {/* 헤더 섹션 */}
      <div className={styles.header}>
        {/* 페이지 제목 */}
        <h1 className="text-2xl">{header.title}</h1> 
        {/* 페이지 서브타이틀 */}
        <p className="text-sm">{header.subtitle}</p>
      </div>

      {/* 정보 카드 섹션 */}
      <section className="mt-8"> {/* 상단 마진 추가로 다른 섹션과의 간격 확보 */}
        <h2 className={styles.sectionTitle}>입주자 모집공고 주요정보</h2> {/* 섹션 제목 */}
        
        {/* 카드 배열을 grid 레이아웃으로 출력 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => ( // cards 배열을 순회하며 각 카드 렌더링
            <div key={index} className="mb-4"> {/* 개별 카드 */}
              <h3 className="font-bold mb-2">{card.title}</h3> {/* 카드 제목 */}
              <p>{card.data}</p> {/* 카드 내용 */}
            </div>
          ))}
        </div>
      </section>

      {/* 정보 테이블 섹션 */}
      <section className="mt-8"> {/* 다른 섹션과의 간격 확보 */}
        <h2 className={styles.sectionTitle}>공급일정</h2> {/* 섹션 제목 */}
        
        {/* 테이블 레이아웃 */}
        <table className={styles.table}> {/* 테이블 스타일 적용 */}
          <thead>
            <tr>
              {/* 테이블의 첫 번째 행(헤더 행)을 렌더링 */}
              {table[0].map((header, index) => (
                <th key={index} className={styles.tableHeader}> {/* 테이블 헤더 셀 */}
                  {header} {/* 헤더 내용 */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* 테이블 데이터 렌더링: 첫 번째 행을 제외하고 순회 */}
            {table.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className={styles.tableRow}> {/* 테이블 데이터 행 */}
                {row.map((data, colIndex) => (
                  <td key={colIndex} className={styles.tableData}> {/* 테이블 데이터 셀 */}
                    {data} {/* 데이터 내용 */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 유의사항 섹션 */}
      <section className="mt-8"> {/* 상단 마진으로 다른 섹션과 분리 */}
        <h2 className={styles.sectionTitle}>유의사항</h2> {/* 섹션 제목 */}
        {/* 유의사항 내용 */}
        <p className="bg-gray-100 p-4 rounded-lg shadow"> {/* 배경색, 패딩, 모서리 둥글기 적용 */}
          {footer} {/* 유의사항 텍스트 */}
        </p>
      </section>
    </div>
  );
};

export default InfoSection; // InfoSection 컴포넌트 내보내기

// components/InfoTable.jsx
import React from "react";
import { styles } from "@/components/Sidebar1/styles"

const InfoTable = ({ rows }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {rows[0].map((header, index) => (
            <th key={index} className={styles.tableHeader}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex} className={styles.tableRow}>
            {row.map((data, colIndex) => (
              <td key={colIndex} className={styles.tableData}>
                {data}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InfoTable;

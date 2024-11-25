// components/InfoCard.jsx
import React from "react";
import { styles } from "@/components/Sidebar1/styles"

const InfoCard = ({ title, data }) => {
  return (
    <div className="mb-4">
      <h2 className="font-bold mb-2">{title}</h2>
      <p>{data}</p>
    </div>
  );
};

export default InfoCard;

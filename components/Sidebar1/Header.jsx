// components/Header.jsx
import React from "react";
import { styles } from "@/components/Sidebar1/styles";

const Header = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default Header;

import React from "react";
import MainContent from "./MainContent";
import { useTodo } from "../Contexts/TodoApp";

function Footer() {
  const { isDarkMode } = useTodo();
  return (
    <div className={`${isDarkMode ? "bg-[#181824]" : "bg-[#fff]"}`}>
      <MainContent />
    </div>
  );
}

export default Footer;

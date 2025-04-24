import React from "react";
import { useTodo } from "../Contexts/TodoApp";

function Input() {
  const { isDarkMode } = useTodo();
  return (
    <div className="font-Josefin text-white">
      <input
        type="text"
        className={`${
          isDarkMode
            ? "bg-[#25273c] outline-none w-[100%] h-[2.9rem] rounded-sm px-14 relative text-white"
            : "bg-[#fff] outline-none w-[100%] h-[2.9rem] rounded-sm px-14 relative text-gray-600"
        }`}
        placeholder="Create a new todo..."
      />
      <div className="rounded-full w-[23px] h-[23px] bg-[#79aafa] flex items-center justify-center relative bottom-[2.2rem] left-3 ">
        <img src="/images/icon-check.svg" className=" " />
      </div>
    </div>
  );
}

export default Input;

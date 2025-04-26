import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoApp";

function Input() {
  const { isDarkMode, dispatch, data } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newTodo) return;
    const newData = {
      id: data.length + 1,
      isCompleted: false,
      todo: newTodo,
    };
    dispatch({ type: "NewData", payload: newData });
    setNewTodo("");
  }
  return (
    <form className="font-Josefin text-white" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        className={`${
          isDarkMode
            ? "bg-[#25273c] outline-none w-[100%] h-[2.9rem] rounded-sm px-14 relative text-white"
            : "bg-[#fff]  outline-none w-[100%] h-[2.9rem] rounded-sm px-14 relative text-gray-600"
        }`}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        placeholder="Create a new todo..."
      />
      <div
        className={`${
          isDarkMode
            ? "rounded-full w-[23px] h-[23px] border-[1px] border-[#2c2e43] flex items-center justify-center relative bottom-[2.2rem] left-3 "
            : "rounded-full w-[23px] h-[23px] border-[1px] border-gray-200 flex items-center justify-center relative bottom-[2.2rem] left-3 "
        }`}
      ></div>
    </form>
  );
}

//
export default Input;

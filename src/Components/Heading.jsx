import React from "react";
import { useTodo } from "../Contexts/TodoApp";

function Heading() {
  const { isDarkMode, dispatch } = useTodo();
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-white font-bold font-Josefin text-3xl">TODO</h1>
      <button
        onClick={() => {
          dispatch({ type: "ThemeMode" });
        }}
      >
        {isDarkMode ? (
          <img src="/images/icon-sun.svg" />
        ) : (
          <img src="/images/icon-moon.svg" />
        )}
      </button>
    </div>
  );
}

export default Heading;

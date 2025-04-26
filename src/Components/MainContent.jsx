import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoApp";

function MainContent() {
  const { isDarkMode, data, options, listFilter, dispatch } = useTodo();
  const ItemsLeft = data.filter((s) => !s.isCompleted).length;

  const [Id, setID] = useState();

  return (
    <section>
      <div
        className={`${
          isDarkMode
            ? "bg-[#25273c]  m-auto max-w-[80%] lg:max-w-[30%] relative bottom-[2em] rounded-sm md:bottom-10 "
            : "bg-[#fff]  m-auto max-w-[80%] lg:max-w-[30%] relative bottom-[2em] rounded-sm shadow-2xl md:bottom-10 "
        }`}
      >
        <section
          className={`${
            isDarkMode
              ? "flex flex-col justify-center  gap-2 divide-y divide-[#2c2e43]  font-Josefin text-white"
              : "flex flex-col justify-center  gap-2 divide-y divide-gray-200  font-Josefin text-[#5f606e]"
          }`}
        >
          {data.map((s) => {
            const { todo, id, isCompleted } = s;
            return (
              <section
                key={id}
                className="flex items-center justify-between  font-Josefin px-3 py-[10px] cursor-pointer"
                onMouseEnter={() => setID(id)}
                onMouseLeave={() => setID()}
              >
                <div className="flex items-center gap-3 cursor-pointer    ">
                  <button
                    className={`${
                      isCompleted && isDarkMode
                        ? "rounded-full w-[23px] h-[23px] bg-[#79aafa] outline-none  border-1 border-[#2c2e43] flex items-center justify-center cursor-pointer "
                        : isCompleted && !isDarkMode
                        ? "rounded-full w-[23px] h-[23px] bg-[#79aafa] outline-none border-1  border-gray-100   flex items-center justify-center cursor-pointer hover:border-y-[#7b96b9] hover:border-x-[#695d92] "
                        : !isCompleted && isDarkMode
                        ? "rounded-full w-[23px] h-[23px]  border-[1px] outline-none  border-[#2c2e43]  flex items-center justify-center cursor-pointer hover:border-y-[#7b96b9] hover:border-x-[#695d92]"
                        : "rounded-full w-[23px] h-[23px]  border-[1px] outline-none  border-gray-200 flex items-center justify-center cursor-pointer hover:border-y-[#7b96b9] hover:border-x-[#695d92] "
                    }`}
                    onClick={() => {
                      dispatch({ type: "checked", payload: id });
                    }}
                  >
                    {isCompleted && (
                      <img src="/images/icon-check.svg" className=" " />
                    )}
                  </button>
                  <p
                    className={`${
                      isCompleted && isDarkMode
                        ? "line-through text-[13px] md:text-[17px] text-[#44465b] "
                        : isCompleted && !isDarkMode
                        ? "text-[13px] md:text-[17px] line-through text-[#c1c2c7]"
                        : "text-[13px] md:text-[17px]"
                    }`}
                  >
                    {todo}
                  </p>
                </div>
                {Id === id && (
                  <button
                    className=" cursor-pointer"
                    onClick={() => {
                      dispatch({ type: "delete", payload: id });
                    }}
                  >
                    <img src="/images/icon-cross.svg" className="h-3" />
                  </button>
                )}
              </section>
            );
          })}
          <div className="flex items-center justify-between px-3 py-2 text-center text-[13px]">
            <h4>{ItemsLeft} items left</h4>
            <div className="hidden md:flex items-center gap-2 text-center text-[13px]">
              {listFilter.map((s, index) => {
                return (
                  <button
                    className={`${
                      options === s
                        ? "cursor-pointer text-[#4d7ada]"
                        : "cursor-pointer"
                    }`}
                    key={index}
                    onClick={() => {
                      dispatch({ type: "filter", payload: s });
                    }}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            <button
              className=" cursor-pointer"
              onClick={() => dispatch({ type: "clear" })}
            >
              Clear Completed
            </button>
          </div>
        </section>
      </div>
      <div
        className={`${
          isDarkMode
            ? "bg-[#25273c] font-Josefin text-white m-auto max-w-[80%] lg:max-w-[30%]  rounded-md md:hidden"
            : "bg-[#fff] font-Josefin text-[#5f606e] m-auto max-w-[80%] lg:max-w-[30%]  rounded-md md:hidden shadow-2xl"
        }`}
      >
        <div className="flex items-center justify-center gap-6 py-3  ">
          {listFilter.map((s, index) => {
            return (
              <button
                className={`${
                  options === s
                    ? "cursor-pointer text-[#4d7ada]"
                    : "cursor-pointer"
                }`}
                key={index}
                onClick={() => {
                  dispatch({ type: "filter", payload: s });
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MainContent;
//

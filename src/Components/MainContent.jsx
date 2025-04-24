import React from "react";
import { useTodo } from "../Contexts/TodoApp";

function MainContent() {
  const { isDarkMode, data, dispatch } = useTodo();
  const ItemsLeft = data.filter((s) => !s.isCompleted).length;

  return (
    <section>
      <div
        className={`${
          isDarkMode
            ? "bg-[#25273c]  m-auto max-w-[80%] lg:max-w-[30%] relative bottom-[2em] rounded-sm md:bottom-10 "
            : "bg-[#fff]  m-auto max-w-[80%] lg:max-w-[30%] relative bottom-[2em] rounded-sm shadow-2xl md:bottom-10 "
        }`}
      >
        <section className="flex flex-col justify-center  gap-2 divide-y divide-[#2c2e43]  font-Josefin text-white">
          {data.map((s) => {
            const { todo, id, isCompleted } = s;
            return (
              <section
                key={id}
                className="flex items-center justify-between  font-Josefin text-white px-3 py-[10px]"
              >
                <div className="flex items-center gap-3 cursor-pointer    ">
                  <button
                    className={`${
                      isCompleted
                        ? "rounded-full w-[23px] h-[23px] bg-[#79aafa]  flex items-center justify-center cursor-pointer "
                        : "rounded-full w-[23px] h-[23px]  border-[1px] border-[#2c2e43] flex items-center justify-center cursor-pointer hover:border-y-[#7b96b9] hover:border-x-[#695d92] "
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
                      isCompleted
                        ? "line-through text-[13px] md:text-[17px] "
                        : "text-[13px] md:text-[17px]"
                    }`}
                  >
                    {todo}
                  </p>
                </div>
                <button className=" ">
                  <img src="/images/icon-cross.svg" className="h-3" />
                </button>
              </section>
            );
          })}
          <div className="flex items-center justify-between px-3 py-2 text-center text-[13px]">
            <h4>{ItemsLeft} items left</h4>
            <div className="hidden md:flex items-center gap-2 text-center text-[13px]">
              <button className=" cursor-pointer">All</button>
              <button className=" cursor-pointer">Active</button>
              <button className=" cursor-pointer">Completed</button>
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
      <div className="bg-[#25273c] font-Josefin text-white m-auto max-w-[80%] lg:max-w-[30%]  rounded-md md:hidden">
        <div className="flex items-center justify-center gap-6 py-3  ">
          <button className=" cursor-pointer">All</button>
          <button className=" cursor-pointer">Active</button>
          <button className=" cursor-pointer">Completed</button>
        </div>
      </div>
    </section>
  );
}

export default MainContent;

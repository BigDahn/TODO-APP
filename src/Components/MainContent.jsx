import React from "react";
import { useTodo } from "../Contexts/TodoApp";

function MainContent() {
  const { isDarkMode, data } = useTodo();

  console.log(data);
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-[#25273c]  m-auto max-w-[80%] lg:max-w-[30%] relative bottom-10 rounded-sm"
          : "bg-[#fff]  m-auto max-w-[80%] lg:max-w-[30%] relative bottom-10 rounded-sm shadow-2xl"
      }`}
    >
      <section className="flex flex-col justify-center  gap-2   font-Josefin text-white">
        {data.map((s) => {
          const { todo, id, isCompleted } = s;
          return (
            <section
              key={id}
              className="flex items-center justify-between  font-Josefin text-white px-3 py-[10px]"
            >
              <div className="flex items-center gap-3 ">
                <div className="rounded-full w-[23px] h-[23px] bg-[#79aafa] flex items-center justify-center  ">
                  <img src="/images/icon-check.svg" className=" " />
                </div>
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
              <button>
                <img src="/images/icon-cross.svg" className="h-5" />
              </button>
            </section>
          );
        })}
        <
      </section>
    </div>
  );
}

export default MainContent;

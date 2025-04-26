import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoApp";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function ItemList({ todo, id, isCompleted }) {
  const { isDarkMode, dispatch } = useTodo();

  const [Id, setID] = useState();

  const { attributes, setNodeRef, listeners, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <section
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      key={id}
      className="flex items-center justify-between  font-Josefin px-3 py-[10px] cursor-pointer touch-none"
      onMouseEnter={() => setID(id)}
      onMouseLeave={() => setID()}
      style={style}
    >
      <div className="flex items-center gap-3 cursor-pointer    ">
        <button
          className={`${
            isCompleted && isDarkMode
              ? "rounded-full w-[23px] h-[23px] bg-[linear-gradient(to_right_bottom,#79aafa,#734ed1)] outline-none  border-1 border-[#2c2e43] flex items-center justify-center cursor-pointer "
              : isCompleted && !isDarkMode
              ? "rounded-full w-[23px] h-[23px] bg-[linear-gradient(to_right_bottom,#79aafa,#734ed1)] outline-none border-1  border-gray-100   flex items-center justify-center cursor-pointer hover:border-y-[#7b96b9] hover:border-x-[#695d92] "
              : !isCompleted && isDarkMode
              ? "rounded-full w-[23px] h-[23px]  border-[1px] outline-none  border-[#2c2e43]  flex items-center justify-center cursor-pointer hover:border-y-[#7b96b9] hover:border-x-[#695d92]"
              : "rounded-full w-[23px] h-[23px]  border-[1px] outline-none  border-gray-200 flex items-center justify-center cursor-pointer hover:border-y-[#7b96b9] hover:border-x-[#695d92] "
          }`}
          onClick={() => {
            dispatch({ type: "checked", payload: id });
          }}
        >
          {isCompleted && <img src="/images/icon-check.svg" className=" " />}
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
}

export default ItemList;

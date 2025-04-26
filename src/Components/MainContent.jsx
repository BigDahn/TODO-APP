import { useTodo } from "../Contexts/TodoApp";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ItemList from "./ItemList";

function MainContent() {
  const { isDarkMode, data, options, listFilter, dispatch } = useTodo();
  const ItemsLeft = data.filter((s) => !s.isCompleted).length;

  return (
    <section>
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
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
            {data.length < 1 && options === "All" ? (
              <h4
                className={`${
                  isDarkMode
                    ? "text-[16px] font-Josefin text-center py-2 text-white px-3"
                    : "text-[16px] font-Josefin text-center py-2 text-[#5f606e] px-3"
                }`}
              >
                Sorry your todo list is currently empty.. pls add more todo's
              </h4>
            ) : data.length < 1 && options === "Active" ? (
              <h4
                className={`${
                  isDarkMode
                    ? "text-[16px] font-Josefin text-center py-2 text-white px-3"
                    : "text-[16px] font-Josefin text-center py-2 text-[#5f606e] px-3"
                }`}
              >
                Sorry no active list on your todo..
              </h4>
            ) : data.length < 1 && options === "Completed" ? (
              <h4
                className={`${
                  isDarkMode
                    ? "text-[16px] font-Josefin text-center py-2 text-white px-3"
                    : "text-[16px] font-Josefin text-center py-2 text-[#5f606e] px-3"
                }`}
              >
                Please try to complete more todo's
              </h4>
            ) : (
              data.map((s) => {
                const { todo, id, isCompleted } = s;
                return (
                  <ItemList
                    id={id}
                    key={id}
                    todo={todo}
                    isCompleted={isCompleted}
                  />
                );
              })
            )}
            <div className="flex items-center justify-between px-3 py-2 text-center text-[13px]">
              <h4>{ItemsLeft} items left</h4>
              <div className="hidden md:flex font-bold items-center gap-2 text-center text-[13px]">
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
              ? "bg-[#25273c] font-Josefin font-bold text-white m-auto max-w-[80%] lg:max-w-[30%]  rounded-md md:hidden"
              : "bg-[#fff] font-Josefin text-[#5f606e] font-bold m-auto max-w-[80%] lg:max-w-[30%]  rounded-md md:hidden shadow-2xl"
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
      </SortableContext>
    </section>
  );
}

export default MainContent;
//

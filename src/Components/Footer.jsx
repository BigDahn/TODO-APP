import React from "react";
import MainContent from "./MainContent";
import { useTodo } from "../Contexts/TodoApp";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

function Footer() {
  const { isDarkMode, data, dispatch } = useTodo();

  function getID(id) {
    return data.findIndex((s) => s.id === id);
  }

  function handleDragEnd(e) {
    const { active, over } = e;

    if (active.id === over.id) return;

    const originalPos = getID(active.id);
    const newPos = getID(over.id);

    const newArray = arrayMove(data, originalPos, newPos);

    return dispatch({ type: "dnd", payload: newArray });
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );
  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className={`${isDarkMode ? "bg-[#181824]" : "bg-[#fff]"}`}>
        <MainContent />
        <h3
          className={`${
            isDarkMode
              ? "text-center font-Josefin text-[#44465b] font-bold pt-3 md:pt-0 "
              : "text-center font-Josefin text-[#c1c2c7] font-bold pt-3 md:pt-0"
          }`}
        >
          Drag and drop to reorder list
        </h3>
      </div>
    </DndContext>
  );
}

export default Footer;

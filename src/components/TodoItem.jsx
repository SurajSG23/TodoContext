import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <div className="relative rounded-full">
        <label
          htmlFor={`checkbox-${todo.id}`} 
          className="relative flex size-8 items-center cursor-pointer justify-center overflow-hidden rounded-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70] p-1.5 duration-100 hover:p-2"
        >
          <input
            type="checkbox"
            className="group peer hidden"
            id={`checkbox-${todo.id}`}
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <label
            htmlFor={`checkbox-${todo.id}`}
            className="size-full rounded-full bg-#ccbed7 peer-checked:size-0 cursor-pointer"
          ></label>
          <div className="absolute left-[0.75rem] h-[2px] w-[18px] -translate-y-10 translate-x-10 rotate-[-41deg] rounded-sm bg-white duration-300 peer-checked:translate-x-0 peer-checked:translate-y-0"></div>
          <div className="absolute left-0.5 top-4 h-[2px] w-[14px] -translate-x-10 -translate-y-10 rotate-[45deg] rounded-sm bg-white duration-300 peer-checked:translate-x-0 peer-checked:translate-y-0"></div>
        </label>
      </div>

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? <IoIosSave className="bg-transparent text-2xl " /> : <FaPencilAlt className="bg-transparent text-xl " />}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

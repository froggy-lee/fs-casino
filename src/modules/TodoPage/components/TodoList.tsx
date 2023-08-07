"use client";
import React, { useState } from "react";
import { useGetTodoList } from "@/api/todoList/queries";
import { ITodo } from "@/api/todoList/types";

function TodoList() {
  const [page, setPage] = useState<number>(1);
  const limit: Number = 5;
  const { data, isLoading } = useGetTodoList(page, limit);

  const handlePagination = (index: number) => {
    if (page === 1 && index < 0) return;
    setPage(page + index);
  };

  const handleClick = () => console.log(1);

  return (
    <>
      {isLoading && <div className="my-5">Loading...</div>}
      {data?.map((item: ITodo) => {
        return (
          <article key={item.id as number} className="row">
            <div className="col-2">{item.id}</div>
            <div className="col">{item.title}</div>
            <div className="col-3">
              {item.completed ? "Completed" : "Not Completed"}
            </div>
          </article>
        );
      })}
      <div>
        <button className="py-1 px-3" onClick={() => handlePagination(-1)}>
          Prev
        </button>
        <span className="m-5">{page}</span>
        <button className="py-1 px-3" onClick={() => handlePagination(1)}>
          Next
        </button>
      </div>
    </>
  );
}

export default TodoList;

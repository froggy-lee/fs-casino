import Link from "next/link";
import TodoList from "@/modules/TodoPage/components/TodoList";

function TodoPage() {
  return (
    <section className="container text-center">
      <h1>Todo List Page</h1>
      <div>
        <TodoList />
      </div>
      <div>
        <Link href="/">Back to Home</Link>
      </div>
    </section>
  );
}

export default TodoPage;

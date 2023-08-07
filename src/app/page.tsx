import Link from "next/link";

function Home() {
  return (
    <div>
      <h1 className="text-center">This is Home Page</h1>
      <div>
        <Link href="/todos">Todo List Page</Link>
      </div>
    </div>
  );
}

export default Home;

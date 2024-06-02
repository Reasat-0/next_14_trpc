import Image from "next/image";
import { TodosList } from "./components/TodosList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TodosList />
    </main>
  );
}

"use client";
import { trpc } from "../_trpc/client";

export const TodosList = () => {
  const getTodos = trpc.getTodos.useQuery();
  return <>{JSON.stringify(getTodos?.data)}</>;
};

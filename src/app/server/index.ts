import { myProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: myProcedure.query(async () => {
    return ["A", "B"];
  }),
});
export type AppRouter = typeof appRouter;

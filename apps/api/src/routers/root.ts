import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import type { IEPContext } from '../context';

const t = initTRPC.context<IEPContext>().create();

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      const who = input?.name ?? 'IEPFlow';
      return { greeting: `Hello ${who}` };
    }),
});

export type AppRouter = typeof appRouter;

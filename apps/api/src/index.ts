import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './routers/root';
import { createContext } from './context';
import type { FastifyRequest, FastifyReply } from 'fastify';

const PORT = Number(process.env.API_PORT ?? 4000);

async function main() {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: true });
  await app.register(helmet, { contentSecurityPolicy: false });

  app.get('/health', async () => ({ status: 'ok' }));

  await app.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: {
      router: appRouter,
      createContext: ({ req, res }: { req: FastifyRequest; res: FastifyReply }) => createContext({ req, reply: res }),
    },
  });

  try {
    await app.listen({ port: PORT, host: '0.0.0.0' });
    app.log.info(`API listening on http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();

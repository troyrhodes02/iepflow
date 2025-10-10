import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../routers/root';

async function main() {
  const client = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({ url: 'http://localhost:4000/trpc' })],
  });

  const res = await client.hello.query({ name: 'IEPFlow' });
  console.log(res); // { greeting: "Hello IEPFlow" }
}
main();

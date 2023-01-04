import { HandlerContext } from "$fresh/server.ts";
import Surreal, { Result } from "surrealdb/mod.ts"

const db = new Surreal('http://surreal:8000/rpc');

interface Joke {
  joke: string
}

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  try {
    await db.signin({
			user: 'fresh',
			pass: 'fresh',
		});

    await db.use('fresh', 'fresh');

    const response = await db.query<Result<Joke[]>[]>('SELECT joke FROM jokes ORDER BY RAND() LIMIT 1;');

    return new Response(JSON.stringify(response.at(0)?.result?.at(0)?.joke));
  } catch (e) {
    console.error('ERROR', e);
  }

  return new Response("Database defunct - jokes foobar");
};

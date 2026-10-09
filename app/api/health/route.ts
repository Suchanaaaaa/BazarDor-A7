
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import { MongoClient } from "mongodb";

export async function GET() {
  const out: Record<string, unknown> = {
    MONGODB_URI_set: !!process.env.MONGODB_URI,
    BETTER_AUTH_SECRET_set: !!process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL ?? null,
  };

  let client: MongoClient | undefined;

  try {
    client = new MongoClient(
      process.env.MONGODB_URI ?? "mongodb://localhost:27017",
      {
        serverSelectionTimeoutMS: 10000,
      }
    );

    await client.connect();
    await client.db(process.env.MONGODB_DB ?? "bazardor")
      .command({ ping: 1 });

    out.mongo = "ok";
  } catch (e) {
    out.mongo = String(e);
  } finally {
    if (client) {
      await client.close().catch(() => {});
    }
  }

  return Response.json(out);
}
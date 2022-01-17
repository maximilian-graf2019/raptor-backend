import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
import { serve } from "https://deno.land/std@0.57.0/http/server.ts";
import { parse } from 'https://deno.land/std/flags/mod.ts';

const { args } = Deno;
const PORT = 4000;
const argPort = parse(args).port;

const s = serve({ port: argPort ? Number(argPort) : PORT });

for await (const req of s) {
    req.respond({ body: "raptor trails rocks\n" });
}

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server started on Port: http:/localhost:${PORT} 🚀`);

await app.listen({ port: PORT });

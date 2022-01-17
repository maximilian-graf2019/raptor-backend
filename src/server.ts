import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
const PORT = 4000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server started on Port: http:/localhost:${PORT} 🚀`);

await app.listen({ port: PORT });

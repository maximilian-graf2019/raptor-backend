import { MongoClient } from "https://deno.land/x/mongo@v0.29.0/mod.ts";
import { Trail } from "./interfaces.ts";

const URI = "mongodb://127.0.0.1:27017";

// Mongo Connection Init
const client = new MongoClient();
try {
    await client.connect(URI);
    console.log("Database successfully connected");
} catch (err) {
    console.log(err);
}

const db = client.database("raptor");
const trails = db.collection<Trail>("trails");

export default trails;
import { MongoClient } from "https://deno.land/x/mongo@v0.29.0/mod.ts";
import { Trail } from "./interfaces.ts";

//local database
// const URI = "mongodb://127.0.0.1:27017";

//hosted free database
// const url = 'mongodb+srv://cluster0.yxbrm.mongodb.net/Cluster0" --username maxg';
const url2 = 'mongodb+srv://fallstudie_test:qhyv3ArShjyCP5t6@cluster0.yxbrm.mongodb.net/Cluster0?authMechanism=SCRAM-SHA-1';

//mongo atlas servers
// const url_1 = "cluster0-shard-00-00.yxbrm.mongodb.net:27017";
// const url_2 = "cluster0-shard-00-01.yxbrm.mongodb.net:27017";
// const url_3 = "cluster0-shard-00-02.yxbrm.mongodb.net:27017";

// Mongo Connection Init
const client = new MongoClient();
try {
    await client.connect(url2);
    console.log("Database successfully connected");
} catch (err) {
    console.log(err);
}

const db = client.database("raptor");
const trails = db.collection<Trail>("trails");

export default trails;

// {
//     db: "Cluster0",
//         tls: true,
//             servers: [
//                 {
//                     host: url_1,
//                     port: 27017,
//                 },
//                 {
//                     host: url_2,
//                     port: 27017,
//                 },
//                 {
//                     host: url_3,
//                     port: 27017,
//                 }
//             ],
//                 credential: {
//         username: "fallstudie_test",
//             password: "qhyv3ArShjyCP5t6",
//                 db: "Cluster0",
//                     mechanism: "SCRAM-SHA-1",
//         },
// }
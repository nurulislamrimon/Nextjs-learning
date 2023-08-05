const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nextjs:Nurul123@cluster0.x0mwk7s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    if (req.method === "GET") {
      const data = await client
        .db("nextjs")
        .collection("news")
        .find({})
        .toArray();
      res.send({ status: "success", data });
    }
    console.log("Database connection successfull");
  } catch (e) {
    console.log(e);
  }
}

export default run;

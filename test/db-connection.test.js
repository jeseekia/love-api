require("dotenv").config();
const {MongoClient} = require("mongodb");

describe("Connection", () => {
    let db;
    const client = new MongoClient(global.__MONGO_URI__);

    beforeAll(async () => {
        // client = new MongoClient(global.__MONGO_URI__);
        await client.connect();
        db = client.db("loveapi");
    });

    afterAll(async () => {
        await client.close();
    });

    it('should insert hug from collection', async () => {
        //seed some data to the mock db
        const hugs = db.collection("hugs");
        const mockHug = {_id: "001", mediaType: "GIF"};
        await hugs.insertOne(mockHug);
        // assert that hugs contains the mock db colletion data
        const insertedHug = await hugs.findOne({_id: '001'});
        expect(insertedHug).toEqual(mockHug);
    });
});
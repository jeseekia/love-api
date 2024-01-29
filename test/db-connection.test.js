require("dotenv").config();
const mongoose = require("mongoose");
const Hugs = require("../api/v1/hug.js");

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async done => {
        mongoose.disconnect();
        done();
    });
});
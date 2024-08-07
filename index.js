const express = require("express");

const urlRoute = require("./Routes/url");

require("dotenv").config();

const app = express();

const PORT = 8001;

const url = process.env.MONGO_URI;

const { connectToMongoDB } = require("./connect");

connectToMongoDB(url).then(() => console.log("MongoDb connected"));

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});

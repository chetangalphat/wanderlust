const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust2";

main()
  .then(() => {
    console.log("Connted to db"); // connect hua h
  })
  .catch((err) => {
    console.log(err); // agar nhi hua to error batayenga ye catch
  });

async function main() {
  //mongo se connect krti h
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({}); //database ke under pahle se jo data h use delete kr rhe h
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "652d0081ae547c5d37e56b5f",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();

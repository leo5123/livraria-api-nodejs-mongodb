import mongoose from "mongoose"

mongoose.connect("mongodb+srv://<username>:<password>0@cluster0.hljkfzm.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;

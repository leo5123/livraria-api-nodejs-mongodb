import mongoose from "mongoose"

mongoose.connect("mongodb+srv://buutxd:Likeaboss.10@cluster0.hljkfzm.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
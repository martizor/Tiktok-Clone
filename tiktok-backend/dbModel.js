import mongoose from "mongoose";

//Tells our database what types of data to expect!!
const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

// Collection inside the database
//Mongoose.model takes into two parameters the collection name and the schema
// Collection is basically a table in SQL

export default mongoose.model("tiktokVideos", tiktokSchema);

//importing server framework and database
import express from "express";
import mongoose from "mongoose";
import Data from "/Users/Martin/Code/Tiktok-Clone/tiktok-backend/data.js";
import Videos from "./dbModel.js";

//Instance of app
//app configuration
const app = express();
const port = 9000;

//Creating a "GET" request at the route "/"
//Eg. if you go into postman and perform a get request to localhost:9000/ it should  return hello world
//Creating a REST api ---> A REST api simply allows for the frontend to communicate with the backend

//middlewares
//Parse the object as a JSON OBJECT
app.use(express.json());

//db config
const connection_url =
  "mongodb+srv://admin:zuhkD0xgTiQLp97v@cluster0.pqlal.mongodb.net/tiktok?retryWrites=true&w=majority";
//Connects our backend to our mongoose database
mongoose.connect(connection_url, {
  //Needed to ensure the terminal doesn't freak out
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoints

app.get("/", (req, res) => res.status(200).send("Hello World"));

//Creating a new api endpoint to fetch the dummy data from from the data.js
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  //Retrieve Data from the database
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  //Post request Adding data to the database
  // It will add video DOCUMENT to the vidoes COLLECTION
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listener
app.listen(port, () => console.log(`listening on localhost:${port}`));

const router = require("express").Router();
const express = require("express");
const mongoDbConnect = require("./utils/db.js");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set EJS as templating engine
app.set("view engine", "ejs");

const categsRouter = require("./routes/Categori.route");
const subcategsRouter = require("./routes/Subcategs.route");
const avisRouter = require("./routes/Avis.route");
const cityRouter = require("./routes/City.route");
app.use("/categorie", categsRouter);
app.use("/subcategs", subcategsRouter);
app.use("/avis", avisRouter);
app.use("/city", cityRouter);

const main = async () => {
  try {
    // learn Async Await => promises => callback
    // mongodb => promise  => mongoDbConnect => promise
    const connection = await mongoDbConnect();
    if (connection) {
      console.log("db connecté");
      app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
      });
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

main();

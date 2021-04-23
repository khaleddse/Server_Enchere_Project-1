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
 
const AnnonceRouter=require('./routes/AnnouceRoutes/AnnounceRoute')
const EnchereRouter= require('./routes/AnnouceRoutes/EncehreRoute')
const DrawRouter =require('./routes/AnnouceRoutes/DrawRoute')
const NormalAnnounceRouter =require('./routes/AnnouceRoutes/NormalAnnounceRoute')


const categsRouter = require("./routes/Categori.route");
const subcategsRouter = require("./routes/Subcategs.route");
const avisRouter = require("./routes/Avis.route");
const cityRouter = require("./routes/City.route");

const AdminRouter = require("./routes/Admin");
const UserRouter = require("./routes/User");
const PackSoldeRouter=require("./routes/PackSolde");
const LoginRouter=require("./routes/Login");
const StripeRouter=require("./routes/Stripe");

app.use("/categorie", categsRouter);
app.use("/subcategs", subcategsRouter);
app.use("/avis", avisRouter);
app.use("/city", cityRouter);

app.use('/announce',AnnonceRouter)
app.use('/enchere',EnchereRouter)
app.use('/draw',DrawRouter)
app.use('/normalAnnounce',NormalAnnounceRouter)


app.use("/uploads",express.static('uploads'))
app.use("/admin", AdminRouter);
app.use("/user", UserRouter);
app.use("/packsolde",PackSoldeRouter);
app.use("/auth",LoginRouter);
app.use("/stripe",StripeRouter);

const main = async () => {
  try {
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
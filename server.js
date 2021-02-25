const router = require("express").Router();
const express = require("express");
const mongoDbConnect = require("./utils/db.js");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
require("dotenv").config();
const stripe = require("stripe")("sk_test_51IO6fDH5zvaLv3PtKcrnUWUesmzWae2tHV71KA6WYetWfS6wb7UBzdH8YnIWs4z3jHhPeoqgd2YjybrbegA4qdXL00HUDp5MY0");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set EJS as templating engine
app.set("view engine", "ejs");

const AnnonceRouter = require("./routes/AnnouceRoutes/AnnounceRoute");
const EnchereRouter = require("./routes/AnnouceRoutes/EncehreRoute");
const DrawRouter = require("./routes/AnnouceRoutes/DrawRoute");
const NormalAnnounceRouter = require("./routes/AnnouceRoutes/NormalAnnounceRoute");
const AdminRouter = require("./routes/Admin");
const UserRouter = require("./routes/User");
const PackSoldeRouter = require("./routes/PackSolde");
const LoginRouter = require("./routes/Login");

app.use("/announce", AnnonceRouter);
app.use("/enchere", EnchereRouter);
app.use("/draw", DrawRouter);
app.use("/normalAnnounce", NormalAnnounceRouter);

app.use("/admin", AdminRouter);
app.use("/user", UserRouter);
app.use("/packsolde", PackSoldeRouter);
app.use("/auth", LoginRouter);


app.post("/stripe/charge", cors(), async (req, res) => {
  console.log("stripe-routes.js 9 | route reached", req.body);
  let { amount, id } = req.body;
  console.log("stripe-routes.js 10 | amount and id", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Your Company Description",
      payment_method: id,
      confirm: true,
    });
    console.log("stripe-routes.js 19 | payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});



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

const stripe = require("stripe")("sk_test_51IO6fDH5zvaLv3PtKcrnUWUesmzWae2tHV71KA6WYetWfS6wb7UBzdH8YnIWs4z3jHhPeoqgd2YjybrbegA4qdXL00HUDp5MY0");

exports.addpayment=  async (req, res) => {
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
  };
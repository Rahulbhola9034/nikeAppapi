const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51KD6gYSAvpHmv9RUtYsayeqVgxKnjkad3tOh62cX3eb4OrHGgXGXQ5vFaf6krGP0tEzZ0dNT4WDxm3Jiu7A2e1tm00Akxab7g0"
);

router.post("/intent", async (req, res) => {
  try {
    console.log("req rec");
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      description: "rahul pay",
      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log("paymentIntent" + JSON.stringify(paymentIntent));

    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});
module.exports = router;

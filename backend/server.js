const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// This is Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.ENDPOINT_SECRET;

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const cartItems = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: "White Sneakers",
        },
        unit_amount: 12500, // Price in cents
      },
      quantity: item.count,
    })),
    mode: "payment",
    success_url: "http://localhost:5173/",
    cancel_url: "http://localhost:5173/",
  });

  res.json({ sessionId: session.id });
});

// app.post("/webhook", async (req, res) => {
//   let event;

//   try {
//     const sig = req.headers["stripe-signature"];
//     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//   } catch (error) {
//     return res.status(400).send(`Webhook Error: ${error.message}`);
//   }
//   // Handle the event
//   switch (event.type) {
//     case "payment_intent.succeeded":
//       const paymentIntentSucceeded = event.data.object;
//       // Then define and call a function to handle the event payment_intent.succeeded
//       break;
//     // ... handle other event types
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   res.status(200).send();
// });

app.listen(5000, () => console.log("Server is running on port 5000"));

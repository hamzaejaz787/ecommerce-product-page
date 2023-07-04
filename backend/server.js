const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();

const port = process.env.PORT || "3000";

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello Server");
});

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
    success_url: "https://ecomerce-with-stripe.netlify.app/",
    cancel_url: "https://ecomerce-with-stripe.netlify.app/",
  });

  res.json({ sessionId: session.id });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

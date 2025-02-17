const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
const authRouter = require("./routes/auth/auth-routes");
const sellerProductsRouter = require("./routes/seller/seller-routes");

dotenv.config({
  path: "./.env",
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.log("MongoDB Error" , err))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/seller/products", sellerProductsRouter);

app.listen(PORT, () => console.log("Server is now running on port", PORT))
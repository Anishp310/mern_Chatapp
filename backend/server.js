const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes.js"); // Import userRoutes module
const chatRoutes = require("./routes/chatRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.yellow.bold`);
});

const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());
// built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// route level middleware
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/taskRoute", require("./routes/taskRoute"));  

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

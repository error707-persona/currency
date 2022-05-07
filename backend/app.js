const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();
const port = process.env.PORT || 5001;
mongoose
  .connect("mongodb+srv://root:root@cluster0.qo4qm.mongodb.net/Crypton?retryWrites=true&w=majority", { autoCreate: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Couldn't connect to Atlas: ", err.message));

// Middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept"
  );
  res.header(
    "Access-Control-Allow-Mehtods",
    "PUT",
    "POST",
    "GET",
    "DELETE",
    "OPTIONS"
  );
  next();
});

// Logger
app.use(logger("dev"));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Static Pages
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/users", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "Development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("Error");
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});

module.exports = app;
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const indexRouter = require("./routes/index-route");
const employeeRouter = require("./routes/employees-route");
const assetRouter = require("./routes/assets-route");
const categoryRouter = require("./routes/category-route");
const issueRouter = require("./routes/issue-route");
const stockRouter = require("./routes/stock-route");
const returnRouter = require("./routes/return-route");
const historyRouter = require("./routes/history-route");
const scrapRouter = require("./routes/scrap-route");

const db = require("./models/db");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/employees", employeeRouter);
app.use("/assets", assetRouter);
app.use("/categories", categoryRouter);
app.use("/issue", issueRouter);
app.use("/stock", stockRouter);
app.use("/return", returnRouter);
app.use("/history", historyRouter);
app.use("/scrap", scrapRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

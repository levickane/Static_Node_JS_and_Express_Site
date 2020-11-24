const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3000;
const path = require("path");
const projectRouter = require("./routes/project");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use("/project", projectRouter);

app.get("/", (req, res) => {
  res.render("index", { projects: data.projects });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("page-not-found");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.locals.error = err;
  res.status(500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

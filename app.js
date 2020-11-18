const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3000;
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/project/:id", (req, res) => {
  res.render("project", {
    project: data.projects.find((p) => p.id === parseInt(req.params.id)),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/:id", (req, res) => {
  res.render("project", {
    project: data.projects.find((p) => p.id === parseInt(req.params.id)),
  });
});

module.exports = router;

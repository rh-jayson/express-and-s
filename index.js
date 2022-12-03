const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  try {
    console.log("you successfully hit the / route");
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/directors", (req, res) => {
  try {
    console.log("You successfully hit the directors endpoint");
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/films", (req, res) => {
  try {
    console.log("You successfully hit the films endpoint");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

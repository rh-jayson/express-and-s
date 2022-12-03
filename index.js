const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const pgp = require("pg-promise")(/* options */);
const db = pgp(
  "postgres://sights_and_sounds_user:F6MXRPskRjthgJY6rWNvxRxeXkbANwjt@dpg-ce5632g2i3mjq979hhi0-a/sights_and_sounds"
);

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://sounds-and-sights.onrender.com/"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/", (req, res) => {
  try {
    console.log("you successfully hit the / route");
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/directors", async (req, res) => {
  try {
    const directors = await db.any("SELECT * FROM public.director");
    res.status(200).send(directors);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/films", async (req, res) => {
  try {
    const films = await db.any("SELECT * FROM film");
    res.status(200).send(films);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => console.log(`S&S app listening on port ${port}!`));

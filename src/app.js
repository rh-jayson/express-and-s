const express = require("express");
const app = express();

const pgp = require("pg-promise")(/* options */);
const db = pgp(process.env.CONNECTION_STRING);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_URL);
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/directors", async (req, res) => {
  try {
    const directors = await db.any(
      "SELECT * FROM public.director ORDER BY family_name ASC"
    );
    res.status(200).send(directors);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/films", async (req, res) => {
  try {
    const films = await db.any("SELECT * FROM film ORDER BY title ASC");
    res.status(200).send(films);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/countries", async (req, res) => {
  try {
    const films = await db.any("SELECT * FROM country");
    res.status(200).send(films);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;

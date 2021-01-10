require("dotenv");
const express = require("express");
const formidable = require("formidable");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send(`<form action="http://192.168.1.102:3000" method="POST">
        <input id="message" name="search" type="text" />
        <input type="submit" value="search" />
    </form>`);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

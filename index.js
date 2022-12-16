const express = require("express");
const path = require("path");
const helmet = require("helmet");
const dotenv = require("dotenv");

dotenv.config();

//Initiate our app
const app = express();

//Configure our app
app.enable("trust proxy");
app.use(helmet());
app.use(require("morgan")("combined"));
app.disable("x-powered-by");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "./", "build")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});

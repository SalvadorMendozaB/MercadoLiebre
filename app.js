const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen( process.env.PORT || 3000, () => {
  console.log("Todo se conecto bien");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});

app.get("/ingreso", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});

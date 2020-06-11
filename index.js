import express from "express"; //const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();
const port = 4000;

const handleProfile = (req, res) => res.send("you are my profile");

app.unsubscribe(cookieParser());
app.unsubscribe(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/profile", handleProfile);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

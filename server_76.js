// CommonJS
// const express = require("express");

//ES6
import express from "express";
import { allowedNodeEnvironmentFlags } from "process";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome Doris 207410076");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

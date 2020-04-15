const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const router = require('./routes/router')

const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);


app.listen(3001, () => {
  console.log("server listening on 3001");
});

/**
 * POST /createJob
 * POST /Signup
 * POST /login
 * GET /listings
 */

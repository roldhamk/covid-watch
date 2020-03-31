const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const mongoose = require("mongoose");
const userSchema = require("./models/user");

mongoose.connect(
  `mongodb+srv://rachael:${process.env.PASS}@covid-watch-1hmlt.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.static(path.join(__dirname, "public")));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.engine(
  ".hbs",
  hbs({
    defaultLayout: "layout",
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  const user = new userSchema({
    name: name,
    email: email,
    password: password
  });

  user.save();
  res.render("index");
});

app.listen(3002, () => {
  console.log("server listening on 3002");
});

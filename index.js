const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const mongoose = require("mongoose");
const userSchema = require("./models/user");

mongoose.connect(
  `mongodb+srv://katie:Password123abc@covid-watch-1hmlt.mongodb.net/test?retryWrites=true&w=majority`,
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
  let volunteer = req.body.volunteer
  let notvolunteer = req.body.notvolunteer
  let shopping = req.body.shopping
  let medicine = req.body.medicine
  let chat = req.body.chat

  let volunteerbool = volunteer == "on" ? true:false;
  let notvolunteerbool = notvolunteer == "on" ? true:false;
  let shoppingbool = shopping == "on" ? true:false;
  let medicinebool = medicine == "on" ? true:false;
  let chatbool = chat == "on" ? true:false;


  const user = new userSchema({
    name: name,
    email: email,
    password: password,
    volunteer: volunteerbool,
    notvolunteer: notvolunteerbool,
    shopping: shoppingbool,
    medicine: medicinebool,
    chat: chatbool
  });

  user.save();
  res.render("index");
});

app.listen(3002, () => {
  console.log("server listening on 3002");
});

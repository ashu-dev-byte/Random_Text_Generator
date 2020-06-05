const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let temp = [
  " is a good boy.",
  " is a bad boy.",
  " is rich.",
  " is nerdy.",
  " is cautious.",
  " is an asshole.",
];
let prev = -1;
let temp1 = "";
let temp2 = "";
let temp3 = "";

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/show", (req, res) => {
  temp1 = req.body.inputext;
  temp2 = Math.floor(Math.random() * 5.9);
  console.log(temp);

  while (prev == temp2) {
    temp2 = Math.floor(Math.random() * 5.9);
  }
  prev = temp2;
  temp3 = temp1 + temp[temp2];
  console.log(temp3);

  res.render("home.ejs", { temp1: temp1, temp3: temp3 });
});

app.get("*", (req, res) => {
  res.send("This is not a valid route...");
});

app.listen(3000, () => {
  console.log("Server started at port 3000.");
});

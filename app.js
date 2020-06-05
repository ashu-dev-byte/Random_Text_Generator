const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let temp = [
  " is a good",
  " is a bad",
  " is rich",
  " is nerdy",
  " is cautious",
  " is an asshole",
  " is handsome",
  " is arrogant",
  " is fat",
  " is bald",
  " is reliable",
  " is tall",
  " is charming",
  " is aggressive",
  " is helpful",
  " is athletic",
];
let prev1 = -1;
let prev2 = -2;
let prev3 = -3;
let prev4 = -4;
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
  console.log(temp1);

  while (prev1 == temp2 || prev2 == temp2 || prev3 == temp2 || prev4 == temp2) {
    temp2 = Math.floor(Math.random() * 15.95);
  }

  prev4 = prev3;
  prev3 = prev2;
  prev2 = prev1;
  prev1 = temp2;
  temp3 = temp1 + temp[temp2] + ".";
  console.log(temp3);

  let n = temp3.split(" ");
  let m = n[n.length - 1];
  console.log(m);
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

  res.render("home.ejs", { temp1: temp1, temp3: temp3, m: m });
});

app.get("*", (req, res) => {
  res.send("This is not a valid route...");
});

app.listen(3000, () => {
  console.log("Server started at port 3000.");
});

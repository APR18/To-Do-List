express = require("express");
bodyParser = require("body-parser");
//
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//
var items = [];
app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = " ";
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  //
  day = today.toLocaleDateString("en-US", options);
  //

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

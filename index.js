const express = require("express");
const app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.raw({ type: "*/*" }));



// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
    let parsedBody = JSON.parse(request.body);
  response.send("popoo"+parsedBody);
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
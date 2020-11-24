const express = require("express");
const app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.raw({ type: "*/*" }));



// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("Its working");
});

// send the default array of dreams to the webpage
app.get("/test", (request, response) => {
    let parsedBody = JSON.parse(request.body);
  response.send("popoo"+parsedBody);
});

app.get("/yes", (request, response) => {
    let parsedBody = JSON.parse(request.body);
  response.send("yes");
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

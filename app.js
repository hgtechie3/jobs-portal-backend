const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
var cors = require('cors')

const http = require("http");

const app = express();

app.use(logger("dev"));
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;
const dbHandler = require("./services/db");
dbHandler.connect()
require("./routes/jobs")(app);

const server = http.createServer(app);
server.listen(port, () => {
  console.log("listening on port "+port);
});

module.exports = app;

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

let server = express();
server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(express.static(path.join(__dirname, "../client/dist")));

server.get("/symptoms", (req, res) => {
  // Get all symptoms from the symptoms table
  // send an array of all the symptoms to user
  res.send(["Sore Throat", "Itchy Rash", "Runny Nose"]);
});

server.get("/diagnoses/:symptom", (req, res) => {
  let symptom = req.params.symptom;
  // get all associated diagnoses for the selected symptom
  // sort all diagnoses in order of frequency
  // send sorted list of diagnoses to user
  res.send(["one", "2", "3", "4"]);
});

let port = 3000;

server.listen(port, () => {
  console.log(`Server listening on http://localhost:3000`);
});

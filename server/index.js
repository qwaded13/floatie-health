require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const { getSymptoms, getDiagnoses, incrementFrequency } = require("./models");

let server = express();
server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(express.static(path.join(__dirname, "../client/dist")));

server.get("/symptoms", (req, res) => {
  // Get all symptoms from the symptoms table
  // send an array of all the symptoms to user
  getSymptoms().then(response => {
    let symptomsList = response.map(({ name, id }) => {
      return {
        name,
        symptomId: id
      };
    });
    res.send(symptomsList);
  });
});

server.get("/diagnoses/:symptomId", (req, res) => {
  // get all associated diagnoses for the selected symptomId
  // sort all diagnoses in order of frequency
  // send sorted list of diagnoses to user
  let symptomId = req.params.symptomId;
  getDiagnoses(symptomId).then(response => {
    let diagnosesList = response.map(({ name, frequency, id }) => {
      return {
        name,
        frequency,
        diagnosisId: id
      };
    });
    res.send(diagnosesList);
  });
});

server.post("/diagnoses/:diagnosisId", (req, res) => {
  // Increment diagnosis frequency
  let diagnosisId = req.params.diagnosisId;
  incrementFrequency(diagnosisId).then(response => {
    res.sendStatus(201);
  });
});

let port = 3000;

server.listen(port, () => {
  console.log(`Server listening on http://localhost:3000`);
});

const { Symptom, Diagnosis } = require("./db/dbConnection");

module.exports = {
  getSymptoms: function() {
    return Symptom.findAll({
      attributes: ["name"]
    });
  },

  getDiagnoses: function(symptom) {},

  incrementFrequency: function(diagnosis) {}
};

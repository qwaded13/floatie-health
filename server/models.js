const { sequelize, Symptom, Diagnosis } = require("./db/dbConnection");

module.exports = {
  getSymptoms: function() {
    return Symptom.findAll({
      attributes: ["name", "id"]
    });
  },

  getDiagnoses: function(symptomId) {
    console.log("symptomId", symptomId);
    return Diagnosis.findAll({
      attributes: ["name", "frequency", "id"],
      where: {
        symptomId: symptomId
      },
      order: [["frequency", "DESC"]]
    });
  },

  incrementFrequency: function(diagnosisId) {
    return Diagnosis.findOne({
      where: {
        id: diagnosisId
      }
    }).then(response => {
      response.increment("frequency");
    });
  }
};

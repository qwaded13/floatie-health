require("dotenv").config();
const Sequelize = require("sequelize");
const path = require("path");
const csvtojson = require("csvtojson");
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const sequelize = new Sequelize(
  `mysql://${user}:${pass}@localhost/floatieHealth`
);

const Model = Sequelize.Model;

class Symptom extends Model {}
Symptom.init(
  {
    name: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: "symptom"
  }
);

class Diagnosis extends Model {}
Diagnosis.init(
  {
    name: {
      type: Sequelize.STRING
    },
    frequency: {
      type: Sequelize.INTEGER
    },
    symptomId: {
      type: Sequelize.INTEGER,
      references: {
        model: "symptoms",
        key: "id"
      }
    }
  },
  {
    sequelize,
    modelName: "diagnosis"
  }
);

// DB Loading Code
let csvFilePath = path.join(__dirname, "./symptoms.csv");

// sequelize.sync({ force: true }).then(() => {
//   csvtojson({
//     noheader: true,
//     headers: ["symptom"]
//   })
//     .fromFile(csvFilePath)
//     .then(objArr => {
//       console.log(objArr);
//       let promiseArr = [];
//       objArr.forEach((obj, i) => {
//         for (let key in obj) {
//           if (key === "symptom") {
//             promiseArr.push(Symptom.create({ name: obj.symptom }));
//           } else {
//             promiseArr.push(
//               Diagnosis.create({
//                 name: obj[key],
//                 frequency: 0,
//                 symptomId: i + 1
//               })
//             );
//           }
//         }
//       });
//       Promise.all(promiseArr).then(() => console.log("Inserted all data"));
//     });
// });

module.exports = {
  sequelize,
  Symptom,
  Diagnosis
};

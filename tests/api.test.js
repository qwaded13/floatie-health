const server = require("../server/server");
const request = require("supertest");

describe("Test /symptoms route", () => {
  test("It should respond to the GET method with an array of objects", done => {
    request(server)
      .get("/symptoms")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(3);
        done();
      });
  });
});

describe("Test /diagnoses route", () => {
  test("It should respond to the GET method with an array of objects", done => {
    request(server)
      .get("/diagnoses/3")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        done();
      });
  });

  test("The response should be sorted in order of frequency", done => {
    request(server)
      .get("/diagnoses/3")
      .then(response => {
        let diagnosesArr = response.body;
        let sorted = true;
        for (let i = 0; i < diagnosesArr.length - 1; i++) {
          if (diagnosesArr[i].frequency < diagnosesArr[i + 1].frequency)
            sorted = false;
        }
        expect(sorted).toBe(true);
        done();
      });
  });

  test("It should respond to the POST method", done => {
    request(server)
      .post("/diagnoses/13")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
});

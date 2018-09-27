let chai = require('chai');
let chaiHttp = require('chai-http');
let mongoose = require("mongoose");
const app=require('../app');
const Student=require('../db/models/student');

let should = chai.should();

chai.use(chaiHttp);

describe('/POST student', () => {
  it('it should POST student', (done) => {
    let student = {
      "FirstName":"akash",
      "Lastname":"Kumar",
      "Email":"testaskahs@gmai.com",
      "MobileNo":"898567453"
    };
    console.log(app);
    chai.request(app)
      .post('/api/student')
      .send(student)
      .end((err, res) => {
        res.should.have.status(200);

        done();
      });
  });

});

describe('/GET student', () => {
  it('it should GET all the students', (done) => {
    chai.request(app)
      .get('/api/student')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');

        done();
      });
  });
});


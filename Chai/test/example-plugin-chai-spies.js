var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
var expect = chai.expect;
var should = chai.should();

describe("PatientController Test", function () {
  var PatientController;
  var initializePatientEventsSpy;
  var patient;

  beforeEach(function () {
    PatientController = function (name, age) {
      this.name = name;
      this.age = age;
      this.initializePatientEvents();
    };

    PatientController.prototype.initializePatientEvents = function () {
      console.log("Do some initialization stuff here");
    };

    initializePatientEventsSpy = sinon.spy(
      PatientController.prototype,
      "initializePatientEvents"
    );
  });

  it("should test initializePatientEvents was called", function () {
    patient = new PatientController("Willson", 30);
    initializePatientEventsSpy.should.have.been.called;
  });
});

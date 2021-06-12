describe("A Mock", function () {
  it("allows use in a single spec", function () {
    var doneFn = jasmine.createSpy("success");
    jasmine.Ajax.withMock(function () {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function (args) {
        if (this.readyState == this.DONE) {
          doneFn(this.responseText);
        }
      };

      xhr.open("GET", "/some/cool/url");
      xhr.send();

      expect(doneFn).not.toHaveBeenCalled();

      jasmine.Ajax.requests.mostRecent().respondWith({
        status: 200,
        responseText: "in spec response",
      });

      expect(doneFn).toHaveBeenCalledWith("in spec response");
    });
  });
});

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(true).toBe(true);
  });
});
describe("A suite is just a function", function () {
  var a;

  it("and so is a spec", function () {
    a = true;

    expect(a).toBe(true);
  });
});

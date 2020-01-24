describe('Testing apiTest', function(){

  beforeEach(function() {
    apiTest = new ApiTest2();
  });

  it("It returns 1 when passed 1", function(){
    expect(apiTest.callAPI()).toEqual("MSwxLEU=,O,O,O,O,O,O,O,O,O,O,OR,O,O,O,O,O,O,O,O,O,O,O,OR");
  });

  // beforeEach(function() {
  //   apiTest = new ApiTest4();
  // });

  // it("It returns 1 when passed 1", function(){
  //   expect(apiTest.mainLine()).toEqual("MSwxLEU=,O,O,O,O,O,O,O,O,O,O,OR,O,O,O,O,O,O,O,O,O,O,O,OR");
  // });
});
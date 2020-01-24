function ApiTest(){
  
}

ApiTest.prototype.callAPI = function(){
  
  var requestOptions = {
    method: 'GET',
    // redirect: 'follow',
    // mode: 'no-cors'
  };
  
  const fetch = require("node-fetch");
  fetch("https://challenge20.appspot.com/", requestOptions)
    .then(response => {
      return response.text();
    })
    .then(json => console.log(json))
    .catch((err) => console.log(err));
}

apiTest = new ApiTest();
apiTest.callAPI();

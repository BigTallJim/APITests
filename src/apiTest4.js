function ApiTest4(){
  
}

ApiTest4.prototype.mainLine = function(){
  const res = this.callAPI();
  console.log(res);
  return res;
}

ApiTest4.prototype.callAPI = function(){
  debugger;
  var requestOptions = {
    method: 'GET',
    // mode: 'no-cors'
  };
  var returnValue = "waiting";
  var callbackCount = 0; 

  fetch("https://challenge20.appspot.com/", requestOptions)
    .then(response => response.text())
    .then(text => {
      console.log(text);
      returnValue = text;
      callbackCount = 1;
    })
    .catch(error => console.log('error', error));

      do {
          console.log("dum dee dum");
      }
      while (callbackCount === 0);

      console.log(returnValue);
      return returnValue;

  }
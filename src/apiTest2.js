function ApiTest2(){
  
}

ApiTest2.prototype.callAPI = function(){
  
  var requestOptions = {
    method: 'GET',
    // mode: 'no-cors'
  };
  var returnValue = "waiting";

  fetch("https://challenge20.appspot.com/", requestOptions)
    .then(response => response.text())
    .then(text => {
      console.log(text);
      returnValue = text;
    })
    .catch(error => console.log('error', error));
   
    console.log(returnValue);
    return returnValue;
    // setTimeout(function(){
    //   return returnValue;
    // }, 1000);
    
  }
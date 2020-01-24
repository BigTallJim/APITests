async function ApiTest3(){
  const resp = await fetch("https://challenge20.appspot.com/")
  const text = await resp.text;
  console.log(text);
  return text;
}
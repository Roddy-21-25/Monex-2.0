// Logic
function convertir() {
  let amount = document.getElementById("form8Example1").value;
  console.log(amount);

  let MainCurrency = document.getElementById("opciones-main").value;
  console.log(MainCurrency);

  let CurrencyToConvert = document.getElementById("opciones-Convert").value;
  console.log(CurrencyToConvert);

  if(amount == '' || amount == ' ' || amount == null){
    toggleElement("block");
    throw new Error(console.log("The amount is Empty..."));
  }else{
    toggleElement("none");
  }

  function toggleElement(stage) {
    var elemento = document.getElementById("elemento");
  
    if (elemento.style.display === "none") {
      elemento.style.display = stage;
    } else {
      elemento.style.display = "none";
    }
  }
  

  // Fetch
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "/1y3Dx96hNtnFSnod6OyRA==HgDfBLgW9xmqOS1d",
    },
  };

  fetch(
    `https://api.api-ninjas.com/v1/convertcurrency?have=${MainCurrency}&want=${CurrencyToConvert}&amount=${amount}`,
    options
  )
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      // Actualizar el resultado en el elemento
      let resultElement = document.getElementById("currency_result");
      resultElement.innerHTML = `The Result of ${amount} ${MainCurrency} is: ${response.new_amount} ${response.new_currency}`;
    });
}

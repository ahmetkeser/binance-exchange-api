// Elementleri Şeçme Alanı
const amountElement = document.getElementById("amount") //adet girişi
const firstSelect = document.getElementById("firstCurrency") // türü
const secondSelect = document.getElementById("secondCurrency") // coin
const currency = new Currency("USDT","TRY")
eventListeners()

function eventListeners(){

    amountElement.addEventListener("input",exchangeCurrency) // input değişimi izlenecek
    firstSelect.onchange = function(){ // ilk selec liste değeri takip edilecek
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
    }
    secondSelect.onchange = function(){ // ikinci selec liste değeri takip edilecek
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
    }
    
}
function exchangeCurrency(){
    currency.chageAmount(amountElement.value)
    currency.exchange()
    .then(result => console.log(result))
    .catch(err => console.log())
}
//https://api.binance.com/api/v3/avgPrice?symbol=USDTTRY
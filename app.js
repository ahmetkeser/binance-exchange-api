// Elementleri Şeçme Alanı
const amountElement = document.getElementById("amount") //adet girişi
const firstSelect = document.getElementById("firstCurrency") // türü
const secondSelect = document.getElementById("secondCurrency") // coin
const currency = new Currency("USDT","DOGE")
const ui= new UI(firstSelect,secondSelect)
eventListeners()

function eventListeners(){

    amountElement.addEventListener("input",exchangeCurrency) // input değişimi izlenecek
    firstSelect.onchange = function(){ // ilk selec liste değeri takip edilecek
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
        ui.changeFirst() 
    }
    secondSelect.onchange = function(){ // ikinci selec liste değeri takip edilecek
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond()
    }
    
}
function exchangeCurrency(){
    setInterval(function () {   // Verileri 1sn ara ile günceller
        currency.chageAmount(amountElement.value)
    currency.exchange()
    .then(result => ui.displayResult(result))
    .catch(err => console.log())
    }, 1000);
    
}
//https://api.binance.com/api/v3/avgPrice?symbol=USDTTRY
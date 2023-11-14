// Elementleri Şeçme Alanı
const amountElement = document.getElementById("amount")
const firstSelect = document.getElementById("firstCurrency")
const secondSelect = document.getElementById("secondCurrency")
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
}
//https://api.binance.com/api/v3/avgPrice?symbol=USDTTRY
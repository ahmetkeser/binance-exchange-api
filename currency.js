class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency
        this.url="https://api.binance.com/api/v3/avgPrice?symbol="
        this.amount = null
    }
    exchange(){
        fetch(this.url + this.firstCurrency + this.secondCurrency)
        .then(response => response.json())
        .then(data => console.log())
        .catch(err => console.log(err))
    }
    chageAmount(amount){
        this.amount = amount
        console.log(amount)
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency
        console.log(this.firstCurrency)
    }
    changeSecondCurrency(newSecontCurrency){
        this.firstCurrency = newSecontCurrency
        console.log(this.secondCurrency)
    }
}
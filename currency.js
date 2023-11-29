class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency
        this.url="https://api.binance.com/api/v3/avgPrice?symbol="
        this.amount = null
    }
    exchange(){
       
        
        return new Promise((resolve,reject) =>{
            fetch(this.url   + this.secondCurrency + this.firstCurrency)
        .then(response => response.json())
        .then(data => resolve(data.price * this.amount))// olumlu sonuçta girilen adetle güncel miktar çarpılarak geri dönüş verilir.
        .catch(err => reject("SEÇİLİ İŞLEM YOK" ,err)) // Olumsuz sonuç için geri dönüş yapılır.
    
    
        })
        
        
    }
    chageAmount(amount){
        this.amount = amount // adet
        console.log("---",amount)
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency
        console.log("üst",this.firstCurrency)
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency
        console.log("alt",this.secondCurrency)
    }
}
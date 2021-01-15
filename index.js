// Instructions:

// 1. Add the functionality to exchange one currency to another 
//(you can use a technology of your choice) 🤖
// 2. Style the app 🎨
const originalCurrency=document.getElementById('original-currency-amount')
const currencyUnit=document.getElementById('original-currency-unit')
const newCurrency=document.getElementById('new-currency-unit')
const exchangeRate=document.getElementById('exchange-rate')
const button=document.getElementById('exchange')

button.addEventListener('click',function(){
    if(originalCurrency.value ==="" || currencyUnit.value ==="" || exchangeRate.value ==="" || exchangeRate.value ===""){
        document.getElementById('output-text').textContent=" please fill all values 💰"
        
    }
    else
   { var exchange=originalCurrency.value * exchangeRate.value
   document.getElementById('output-text').textContent=" your exchange rate of "+originalCurrency.value+ "💰 "+currencyUnit.value+ " will be "+ exchangeRate.value +" " +newCurrency.value+" currency"}
})

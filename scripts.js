const convertButton = document.querySelector(".convert-button")//Botao//
const currencySelect = document.querySelector(".currency-select")//Select//

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //valor digitado no input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em Real//
    const currencyValueConverted = document.querySelector(".currency-value")//Outras moedas//


    const dolarToday = 4.8
    const euroToday = 5.26
    const libraToday = 6.21
    const bitcoinToday = 143.005


    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"

        }).format(inputCurrencyValue / bitcoinToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"


    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.valor == "bitcoin") {
       currencyName.innerHTML = "Bitcoin"
       currencyImage.src = "./assets/bitcoin1.png"
    }


    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
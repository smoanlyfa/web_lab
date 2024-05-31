let fromRuble = document.getElementById('input-from-ruble');
let toEuro = document.getElementById('input-to-euro');
let fromEuro = document.getElementById('input-from-euro');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
    let convertedValue = fx(fromRuble.value).from("RUB").to("EUR");
    toEuro.value = convertedValue.toFixed(2);
});

document.getElementById('button-from').addEventListener('click', function() {
    let convertedValue = fx(fromEuro.value).from("EUR").to("RUB");
    toRuble.value = convertedValue.toFixed(2);
});
document.getElementById("valueForm").addEventListener("submit", function(event) {
    event.preventDefault();


    const values = [
        parseInt(document.getElementById("value1").value, 10),
        parseInt(document.getElementById("value2").value, 10),
        parseInt(document.getElementById("value3").value, 10),
        parseInt(document.getElementById("value4").value4,10),
    ]

    const randomIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];

    document.getElementById("result").textContent = `Valor sorteado: ${randomValue}`;

    })
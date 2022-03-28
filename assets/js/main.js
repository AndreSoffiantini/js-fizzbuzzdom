// Stampare a console i numeri da 1 a 100

const numbersElement = document.querySelector(".numbers");

for (let i = 1; i <= 100; i++) {

    // stampo a console i numeri da 1 a 100
    console.log(i);

    // creo un div per ogni i e associo la classe di stile number
    let numberElement = document.createElement("div");
    numberElement.classList.add("number");

    if (i % 3 == 0 && i % 5 != 0) {

        // se il numero è multiplo di 3 aggiungo "Fizz" come testo e applico un bg-success
        numberElement.innerHTML = "Fizz";
        numberElement.classList.add("bg-success");

    } else if (i % 5 == 0 && i % 3 != 0) {

        // se il numero è multiplo di 5 aggiungo "Buzz" come testo e applico un bg-success
        numberElement.innerHTML = "Buzz";
        numberElement.classList.add("bg-warning");


    } else if (i % 3 == 0 && i % 5 == 0) {

        // se il numero è multiplo di 3 e di 5 aggiungo "FizzBuzz" come testo e applico un bg-danger
        numberElement.innerHTML = "FizzBuzz";
        numberElement.classList.add("bg-danger");


    } else {

        // se il numero non è multiplo di 3 o di 5 aggiungo il numero come testo e applico un bg-primary
        numberElement.innerHTML = `${i}`;
        numberElement.classList.add("bg-primary");

    }

    // inserisco il div creato all'interno del contenitore numbers
    numbersElement.appendChild(numberElement);

}
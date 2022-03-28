// Stampare a console i numeri da 1 a 100

const numbersElement = document.querySelector(".numbers");

for (let i = 1; i <= 100; i++) {
    console.log(i);
    let numberElement = document.createElement("div");
    numberElement.classList.add("number", "bg-primary");

    // MILESTONE 1

    if (i % 3 == 0 && i % 5 != 0) {

        numberElement.innerHTML = "Fizz";

    } else if (i % 5 == 0 && i % 3 != 0) {

        numberElement.innerHTML = "Buzz";

    } else if (i % 3 == 0 && i % 5 == 0) {

        numberElement.innerHTML = "FizzBuzz";

    } else {

        numberElement.innerHTML = `${i}`;

    }

    numbersElement.appendChild(numberElement);

}
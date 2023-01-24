function slicesPerPerson(pizzaSlices, numPeople) {
    let slicesPerPerson = pizzaSlices / numPeople;
    if (Number.isInteger(slicesPerPerson)) {
        return `Each person gets ${slicesPerPerson} slices of pizza from our ${pizzaSlices} slices pizza`;
    } else {
        return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza from our ${pizzaSlices} slices pizza`;
    }
}
console.log(slicesPerPerson(8, 3)); // Each person gets 2.67 slices of pizza from our 8 slices pizza
console.log(slicesPerPerson(8, 4)); // Each person gets 2 slices of pizza from our 8 slices pizza

//This function takes two parameters: pizzaSlices, which is the total number of slices of pizza, and numPeople, which is the number of people who will be sharing the pizza.

//It starts by dividing the total number of slices by the number of people to get the number of slices per person, and assigns it to the variable slicesPerPerson.

//Then it uses the Number.isInteger() method to check if the slicesPerPerson is a whole number or not, if it's a whole number, it returns the string Each person gets ${slicesPerPerson} slices of pizza from our ${pizzaSlices} slices pizza

//Otherwise, it uses the toFixed(2) method to round the decimal to 2 decimal places and return the string Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza from our ${pizzaSlices} slices pizza

//You can call this function by passing in the total number of pizza slices and the number of people who will be sharing it, and it will return a string that tells you how many slices each person gets
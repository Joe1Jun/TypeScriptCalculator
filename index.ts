// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers

"use strict";

const button = document.querySelector('.button') as HTMLButtonElement;
const firstInput = document.querySelector('#first-input') as HTMLInputElement;
const secondInput = document.querySelector('#second-input') as HTMLInputElement;
export const screen = document.querySelector('.screen') as HTMLDivElement // Renamed to displayScreen

function addNumbers(a: number, b: number) {
    
        screen.innerHTML = (a + b).toString();
    
}

button?.addEventListener('click', () => {
    const firstValue = parseInt(firstInput.value) ; // Fallback to 0 if NaN
    const secondValue = parseInt(secondInput.value) ; // Fallback to 0 if NaN
    addNumbers(firstValue, secondValue);
});

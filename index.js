// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.screen = void 0;
var button = document.querySelector('.button');
var firstInput = document.querySelector('#first-input');
var secondInput = document.querySelector('#second-input');
exports.screen = document.querySelector('.screen'); // Renamed to displayScreen
function addNumbers(a, b) {
    exports.screen.innerHTML = (a + b).toString();
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    var firstValue = parseInt(firstInput.value); // Fallback to 0 if NaN
    var secondValue = parseInt(secondInput.value); // Fallback to 0 if NaN
    addNumbers(firstValue, secondValue);
});

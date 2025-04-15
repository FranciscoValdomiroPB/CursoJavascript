var numbers = [];


function addNumber() {
    var input = Number(document.getElementById("numbervalues").value);

    if (input == "") {
        alert("Please enter a number.");
        return;
    } else if (isNaN(input)) {
        alert("Please enter a valid number.");
        return;
    } else if (input < 1 || input > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    } else if (numbers.includes(input)) {
        alert("This number has already been added.");
        return;
    }
    numbers.push(input);

    if (!document.querySelector('#addedvalues')) {
        document.getElementById("select").innerHTML = `
        <select id="addedvalues" multiple size="10"></select>
        <br>
        <input type="button" value="Finish" onclick="finish()" class="finish-btn">
        `;
    }
    document.querySelector('#addedvalues').innerHTML += `<option>Value ${input} added.</option>`;
    var resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.remove();
    }
}
function finish() {
    if (!document.querySelector('#result')) {
        document.querySelector('section').innerHTML += ` <div id="result"></div>`;
    }
    numbers.sort((a, b) => a - b);
    var finish = document.getElementById("result");
    var totalNumbers = numbers.length;
    var biggestNumber = Math.max(...numbers);
    var smallestNumber = Math.min(...numbers);
    var sumAllNumbers = numbers.reduce((a, b) => a + b, 0);
    var mediaNumbers = sumAllNumbers / totalNumbers;

    var result = `These are the Array Numbers: ${numbers}.<br>`;
    result += `Total numbers added: ${totalNumbers}.<br>`;
    result += `The biggest number is ${biggestNumber}.<br>`;
    result += `The smallest number is ${smallestNumber}.<br>`;
    result += `The sum of all numbers is ${sumAllNumbers}.<br>`;
    result += `The average of the numbers is ${mediaNumbers}.`;
    finish.innerHTML = result;

}
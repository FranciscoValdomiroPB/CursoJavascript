
function count() {
    var startNumber = Number(document.getElementById("startnumber").value);
    var endNumber = Number(document.getElementById("finalnumber").value);
    var countNumber = Number(document.getElementById("countnumber").value);
    var result = document.getElementById("res");

    result.innerHTML = ""; // limpa o conteúdo anterior

    if (countNumber <= 0 ) {
        result.innerHTML = "Invalid values!";
        return;
    }
    if(startNumber == "" || endNumber == "" || countNumber == "") {
        result.innerHTML = "Invalid values!";
        return;
    }

    if (startNumber <= endNumber) {
        
        for (var i = startNumber; i <= endNumber; i += countNumber) {
            result.innerHTML += `${i} 👉 `;
        }
    } else {
        
        for (var i = startNumber; i >= endNumber; i -= countNumber) {
            result.innerHTML += `${i} 👉 `;
        }
    }

    result.innerHTML += "🏁";
}


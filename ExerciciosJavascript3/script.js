function generateMultiplicationTables() {
    var multiplier = window.document.getElementById("multiplier").value;
    var res = window.document.getElementById("res");
    res.innerHTML = "";
    if (multiplier == 0) {
        alert("Please enter a number!");
        return;
    }
    
    for (var i = 0; i <= 10; i++) { 
        var result = multiplier * i;
        res.innerHTML += `${multiplier} x ${i} = ${result}<br>`;
        
    }
}
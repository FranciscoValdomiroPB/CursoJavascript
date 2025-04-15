function ageChecked() {
    var date = new Date();
    var year = date.getFullYear();
    var formYear = Number(document.getElementById("txtano").value);
    var res = document.getElementById("res");
    var img = document.createElement("img");
    img.setAttribute("id", "photo");

    if (formYear === 0 || formYear > year || isNaN(formYear)) {
        res.innerHTML = "Please enter a valid year.";
        return;
    }

    var formradsex = document.getElementsByName("radsex");       
    var age = year - formYear;
    var gender = "";

    if (formradsex[0].checked) {
        res.innerHTML = `You are ${age} years old and male.`;
        if (age >= 0 && age <= 12) {
            img.src = 'img/childboy.png';
        } else if (age <= 20) {
            img.src = "img/teenboy.png";
        } else if (age < 50) {
            img.src = "img/adultman.png";
        } else {
            img.src = "img/oldman.png";
        }
    } else if (formradsex[1].checked) {
        res.innerHTML = `You are ${age} years old and female.`;
        if (age >= 0 && age <= 12) {
            img.src = "img/childgirl.png";
        } else if (age <= 20) {
            img.src = "img/teengirl.png";
        } else if (age < 50) {
            img.src = "img/adultwoman.png";
        } else {
            img.src = "img/oldwoman.png";
        }
    } else {
        res.innerHTML = "Please select a gender.";
        return;
    }

   
    res.appendChild(img);
}

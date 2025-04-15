function getHours() {
    var dateTime = new Date();
    var nowTime = dateTime.getHours();
    var nowMinutes = dateTime.getMinutes();
    console.log(nowTime);
    var txt = document.querySelector('#msg')
    var file = document.querySelector('#file')
    var horas = document.querySelector('#horas')

    if (nowTime >= 6 && nowTime < 12) {
        horas.innerHTML = `Agora são ${nowTime}:${nowMinutes} horas.`
        txt.innerHTML = 'Good Morning!';
        file.src = 'img/goodmorning.png';
        document.body.style.background = '#e2cd9f';
        document.getElementById("btn").style.background = "#e2cd9f";


    } else if (nowTime > 12 && nowTime < 18) {
        horas.innerHTML = `Agora são ${nowTime}:${nowMinutes} horas.`
        txt.innerHTML = 'Good Afternoon!';
        file.src = 'img/goodafternoon.png';
        document.body.style.background = '#b9846f';
        document.getElementById("btn").style.background = "#b9846f";

    } else {
        horas.innerHTML = `Agora são ${nowTime}:${nowMinutes} horas.`
        txt.innerHTML = 'Good Night!';
        file.src = 'img/goodevening.png';
        document.body.style.background = '#515154';
        document.getElementById("btn").style.background = "#515154";

    }
}
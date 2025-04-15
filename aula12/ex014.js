var now = new Date(); // Obtém a data e hora atual
var day = now.getDay();
console.log(day)
switch (day) {
    case 0:
        console.log(`Hoje é Domingo`)
        console.log(`In english today is Sunday`)
        break;
    case 1:
        console.log(`Hoje é Segunda-feira`)
        console.log(`In english today is Monday`)
        break;
    case 2:
        console.log(`Hoje é Terça-Feira`)
        console.log(`In english today is Tuesday`)
        break;
    case 3:
        console.log(`Hoje é Quarta-Feira`)
        console.log(`In english today is Wednesday`)
        break;
    case 4:
        console.log(`Hoje é Quinta-Feira`)
        console.log(`In english today is Thursday`)
        break;
    case 5:
        console.log(`Hoje é Sexta-feira`)
        console.log(`In english today is Friday`)
        break;
    case 6:
        console.log(`Hoje é Sabado`)
        console.log(`In english today is Saturday`)
        break;
    default:
        break;
}

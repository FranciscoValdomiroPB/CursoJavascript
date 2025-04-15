var agora = new Date(); // Obtém a data e hora atual
var hora = agora.getHours(); // Pega apenas a hora (0 a 23)
var minutos = agora.getMinutes();
console.log(`Hora atual: ${hora}:${minutos}hrs`);
if (hora >= 6 && hora < 12) {
    console.log(`Ola tenha um Bom dia, são exatamente  ${hora}:${minutos}hrs`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Ola tenha uma Boa Tarde, são exatamente  ${hora}:${minutos}hrs`)
} else if (hora >= 18 && hora < 23) { 
    console.log(`Ola tenha uma Boa Noite, são exatamente  ${hora}:${minutos}hrs`)

}else{
    console.log(`Ola tenha uma Boa Madrugada, são exatamente  ${hora}:${minutos}hrs`)

}
let pessoa = {
    nome: "Lucas",
    sexo: "M", 
    peso: 80, 
    engordar(peso) {
        this.peso += peso;
     }
}
var pesoAtual = pessoa.peso;
console.log(`Meu amigo ${pessoa.nome} pesa ${pessoa.peso}`);
pessoa.engordar(5);
console.log(`Mas o ${pessoa.nome} engordou ${pessoa.peso - pesoAtual} e ta pesado ${pessoa.peso}`);
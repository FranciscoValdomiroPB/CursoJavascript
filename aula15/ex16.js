let num = [10, 2, 9, 1, 8, 6, 7, 5, 3, 4];
console.log(num.sort((a, b) => a - b)); 
console.log(num.indexOf(5));
console.log(num.push(11));
console.log(num.length);
console.log(num.sort((a, b) => a - b));
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
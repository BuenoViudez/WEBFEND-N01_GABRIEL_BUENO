let n = Math.floor(Math.random() * 22)
let p = 0;
let i = 0;

while ( n != 0) {
    if (n % 2 == 0){
        console.log(`o ${n} é um número Par`);
        p++       
    }  else {
        console.log(`o ${n} é um número Impar`);
        i++
    }
    n = Math.floor(Math.random() * 22);
}

console.log(`Pares = ${p}`);
console.log(`Impares = ${i}`);

console.log("THE END !!");
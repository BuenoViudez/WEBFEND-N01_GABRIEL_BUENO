let array = [1, 5, 10, 85];
let maior = 0;
let i = 0;

while (i <=array.length){
    if (array[i] >= maior){
        maior = array[i]
    }
    i++
}

console.log(maior);
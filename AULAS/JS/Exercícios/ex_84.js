let num = [1, 2, 3, 4, 5, 6, 7, 11, 13, 15, 17]
let conta = 0



for (let i = 0; i < num.length; i++) {

    if (num[i] % 2 === 0) {
        conta++
    }
}

console.log(conta);




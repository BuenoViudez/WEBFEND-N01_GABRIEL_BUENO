let array = ["São Paulo", "Real Madrid", "Santos", "PSG"];
let elemento = "Palme";
let presente = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
        presente = true;
        console.log(`O elemento ${array[i]} esta no array`);
    }
    else {
        console.log(`O elemento ${elemento} não esta no array`);
        break;
    }
}

// if (presente) {

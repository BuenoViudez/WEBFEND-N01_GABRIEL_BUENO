 // Salarios até R$ 1.000,00: o aumento de 20%
 // Saraios entre R$ 1.000,00 e R$ 3.000,00: o aumento é de 15%
 // Salarios acima de R$ 3.000,00: aumento de 10%

 let salario = 1000

 if (salario <1000){
    console.log(`O aumento sera de ${(salario * 0.2).toFixed(1)}`);
 }
 else if (salario > 1000 && salario <= 3000){
    console.log(`O aumento sera de ${(salario * 0.15).toFixed(2)}`);
 }
 else {
    console.log(`O aumento sera de ${(salario * 0.1).toFixed(2)}`);
 }
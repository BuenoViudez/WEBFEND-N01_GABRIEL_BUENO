let idade = 13;

if(idade < 8){
    console.log("Categoria Infantil A");
}
else if (idade <= 10){
    console.log("Categoria Infantil B");
}
else{
    if(idade <= 13){
        console.log("Categoria Juvenil A");
    }
    else if (idade <= 17){
        console.log("Categoria Juvenil B");
        
    }
    else{
        console.log("Categoria Adulto");
    }
}

//Se tiver entre 11 e 13 anos, imprima "Categoria Juvenil A". Se tiver entre 14 e 17 anos, imprima "Categoria Juvenil B". Se tiver 18 anos ou mais, imprima "Categoria Adulto".
let codProdut = 5; 
let produto = "";
let preço = "";

switch (codProdut) {
    case 1:
        produto = "PlayStation 4";
        preço = "R$ 2.750,00";
        break;
    case 2:
        produto = "PlayStation 5";
        preço = "R$ 5.990,00";
        break;
    case 3:
        produto = "Nintendo Switch OLED";
        preço = "R$ 4.850,00";
        break;
    case 4:
        produto = "Xbox One X";
        preço = "R$ 3.999,00";
        break;
    case 5:
        produto = "PC Gamer";
        preço = "R$ 8.999,99";
        break;
        
}
console.log(produto + "\n" + preço);
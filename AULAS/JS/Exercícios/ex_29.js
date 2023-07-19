let letra = "    a  "
letra = letra.toLocaleUpperCase().trim()

if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
    console.log(`Se a letra for ${letra}, é uma Vogal `)
    
}
else {
    console.log(`Se a letra for ${letra}, é uma Consoante `)
}
 
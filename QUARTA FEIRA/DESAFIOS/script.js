let botoes = document.querySelector('.botoes');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');

console.log("oi");


// for(let i=0; i < btn.length;i++){
    btn.addEventListener("click", function(){
        
        if(this.innerHTML=="="){
            value.innerHTML = eval(value.innerHTML);
        }else if
        (this.innerHTML=="deletar"){
            value.innerHTML = "";
        }
        else{
                console.log("e1");
                value.innerHTML+= this.innerHTML;
            }
        
    })
// }
// toggleBtn.onclick = function(){
//     body.classList.toggle('dark');
// }
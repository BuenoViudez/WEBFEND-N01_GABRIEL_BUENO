let botoes = document.querySelector('.botoes');
let btn = document.querySelector('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');


for(let i=0; i < btn.length;i++){
    btn[i].addEventListener("click", function(){

        if(this.innerHTML=="="){
            value.innerHTML = eval(value.innerHTML);
        }else if
            (this.innerHTML=="deletar"){
                value.innerHTML = "";
            }
            else{
                value.innerHTML+= this.innerHTML;
            }
        
    })
}
toggleBtn.onclick = function(){
    body.classList.toggle('dark');
}
let has1=document.querySelectorAll(".has1");
let caltext=document.querySelector("#caltext");
// Array.from(has1).forEach((element)=>{element.addEventListener("click",fun)});
// caltext.innerText="keshav"
arr=Array.from(has1);
for(key of arr){
    key.addEventListener("click",fun1);
}
caltext.innerHTML="";

function fun1(){
    // console.log(this.innerHTML)
    if(this.innerHTML==='C'){
        caltext.innerHTML='';
    }
    else{

        caltext.innerHTML += this.innerHTML;
    }
    
}
let has0=document.querySelector(".has0");
has0.addEventListener("click",fun2);
function fun2(){
   caltext.innerHTML=eval(caltext.innerHTML);
}

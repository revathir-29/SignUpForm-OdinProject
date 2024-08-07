const alert=document.querySelector(".password-alert");
const password= document.querySelector("#pass");
const confirm = document.querySelector("#confirm");

password.addEventListener("keyup" , e =>{
    if(pass.value!==confirm.value){
        alert.style.display="inline-block";

    }
})
confirm.addEventListener("keyup" , e =>{
    if(pass.value==confirm.value){
        alert.style.display="none";
        document.querySelector('input[type="password"]:focus').style.outlineColor='green';

    }
})

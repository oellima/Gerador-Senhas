let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizerPassword = document.querySelector("#valor");
let password = document.querySelector("#password"); 

let containerPassword = document.querySelector("#container-password");

let charset = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@";
let novaSenha = "";

sizerPassword.innerHTML = sliderElement.value; 

sliderElement.oninput = function(){
    sizerPassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i <sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso");
    navigator.clipboard.writeText(novaSenha);
}
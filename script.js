let dark = false;
let nomeConta = document.querySelector(".nomeConta");
let valorConta = document.querySelector(".valorConta");
let vencimentoConta = document.querySelector(".vencimentoConta");
let contasContainer = document.querySelector(".contasContainer");

function darkMode(){
    let body = document.body;
    let contasLight = document.querySelectorAll(".contasLight");
    let contasDark = document.querySelectorAll(".contasDark");
    let darkBtn = document.querySelector(".darkMode");

    if(dark == false){
        darkBtn.style.backgroundColor = "#fff";
        darkBtn.style.color = "#000";
        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
        if(contasLight){
            console.log(contasLight);
            contasLight.forEach(conta => {
                conta.classList.remove("contasLight");
                conta.classList.add("contasDark");
            })
        }
        dark = true;
        console.log(dark);
    }else{
        darkBtn.style.backgroundColor = "#000";
        darkBtn.style.color = "#fff";
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
        if(contasDark){
            console.log(contasDark);
            contasDark.forEach(conta => {
                conta.classList.remove("contasDark");
                conta.classList.add("contasLight");
            })
        }
        dark = false;
        console.log(dark);
    }
}

function chamarModal(){
    let modal = document.querySelector(".modal");

    modal.style.opacity = 1;  
    modal.style.zIndex = 1;
    // modalForm.classList.add("modalForm");
    // modal.classList.add("modal");
}

function cancelar(){
    let modal = document.querySelector(".modal");

    modal.style.opacity = 0;  
    modal.style.zIndex = -1;
}

function adicionar(e){
    e.preventDefault();

    let novaConta = document.createElement("div");

    if(nomeConta.value == "" || valorConta.value == "" || vencimentoConta.value == ""){
        alert("Preencha todos os campos.");
        nomeConta.focus();
    }else{
        if(dark == false){
            novaConta.classList.add("contasLight");
            novaConta.innerHTML = `<p><a href="conta-info.html">${nomeConta.value}</a></p>`;
            contasContainer.appendChild(novaConta);
            fieldReset();
            cancelar();
        }else{
            novaConta.classList.add("contasDark");
            novaConta.innerHTML = `<p>${nomeConta.value}</p>`;
            contasContainer.appendChild(novaConta);
            fieldReset();
            cancelar();
        }
    }
}

function fieldReset(){
     nomeConta.value = "";
     valorConta.value = "";
     vencimentoConta.value = "";
     contasContainer.value = "";
}

function mostrarDados(){
    
}

document.querySelector(".botaoMais").addEventListener("click", chamarModal);
document.querySelector(".btnCancelar").addEventListener("click", cancelar);
document.querySelector(".btnAdicionar").addEventListener("click", adicionar);
document.querySelector(".darkMode").addEventListener("click", darkMode);
document.querySelectorAll(".contasLight").addEventListener("click", mostrarDados);
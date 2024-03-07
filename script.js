let dark = false;
let nomeConta = document.querySelector(".nomeConta");
let valorConta = document.querySelector(".valorConta");
let vencimentoConta = document.querySelector(".vencimentoConta");
let contasContainer = document.querySelector(".contasContainer");

function darkMode(){
    let body = document.body;

    if(dark == false){
        body.style.backgroundColor = "#000";
        body.style.color = "#fff";
        dark = true;
    }else{
        body.style.backgroundColor = "#fff";
        body.style.color = "#000";
        dark = false;
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
        novaConta.classList.add("contas");
        novaConta.innerHTML = `<p>${nomeConta.value}</p>`;
        contasContainer.appendChild(novaConta);
        fieldReset();
        cancelar();
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
document.querySelector(".contas").addEventListener("click", mostrardados);
let dark = false;
let nomeConta = document.querySelector(".nomeConta");
let valorConta = document.querySelector(".valorConta");
let vencimentoConta = document.querySelector(".vencimentoConta");
let contasContainer = document.querySelector(".contasContainer");
let situacaoConta = document.querySelector(".situacaoConta");
let modalForm = document.querySelector("#modalForm");
let modal = document.querySelector(".modal");
let contasLight = document.querySelectorAll(".contasLight");
let contasDark = document.querySelectorAll(".contasDark");
let storageContas = [];

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
        modalForm.style.color = "#000";
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
        modalForm.style.color = "#000";
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
    modal.style.opacity = 1;  
    modal.style.zIndex = 1;
    modalForm.style.position = "absolute";
    // modalForm.classList.add("modalForm");
    // modal.classList.add("modal");
}

function cancelar(){
    console.log("Cancelou");
    modal.style.opacity = 0;  
    modal.style.zIndex = -1;
}

function adicionar(e){
    e.preventDefault();

    let novaContaObjeto = {
        nome: "nome",
        valor: "valor",
        vencimento: "vencimento",
        situacao: "situacao"
    };
    let novaContaDiv = document.createElement("div");

    if(nomeConta.value == "" || valorConta.value == "" || vencimentoConta.value == ""){
        alert("Preencha todos os campos.");
        nomeConta.focus();
    }else{
        if(dark == false){
            novaContaDiv.classList.add("contasLight");
            novaContaDiv.innerHTML = `<p><a href="conta-info.html">${nomeConta.value}</a></p>`;
            novaContaObjeto.nome = nomeConta.value;
            novaContaObjeto.valor = Number(nomeConta.valor);
            novaContaObjeto.vencimento = new Date(nomeConta.vencimento); //ano, mês, dia
            novaContaObjeto.situacao = nomeConta.situacao;
            console.log(novaContaObjeto);
            // if(localStorage.getItem("storageContas")){
            //     storageContas = localStorage.getItem("storageContas");
            // }else{
            //     localStorage.setItem("storageContas", );
            // }
            contasContainer.appendChild(novaContaDiv);
            fieldReset();
            cancelar();
        }else{
            novaContaDiv.classList.add("contasDark");
            novaContaDiv.innerHTML = `<p>${nomeConta.value}</p>`;
            contasContainer.appendChild(novaContaDiv);
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
    
    
    
    
    
    
    
    
    
    // infoBody = document.body;

    // infoBody.innerHTML = `<h1>Conta de Luz</h1>
    //                       <p>Descrição: ${nomeConta.value}</p>
    //                       <p>Valor: ${valorConta.value}<p/>
    //                       <p>Data de vencimento: ${vencimentoConta.value}<p/>
    //                       <p>Situação: ${situacaoConta.value}<p/>
    // `
}


document.querySelector(".botaoMais").addEventListener("click", chamarModal);
document.querySelector(".btnCancelar").addEventListener("click", cancelar);
document.querySelector(".btnAdicionar").addEventListener("click", adicionar);
document.querySelector(".darkMode").addEventListener("click", darkMode);
document.querySelectorAll(".contasLight").addEventListener("click", mostrarDados);
document.querySelectorAll(".contasDark").addEventListener("click", mostrarDados);
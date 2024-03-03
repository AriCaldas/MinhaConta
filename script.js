function chamarModal(){
    modal = document.createElement("div");
    modalForm = document.createElement("div");
    novaConta = document.createElement("div");
    contasContainer = document.querySelector("#contasContainer");

    modalForm.classList.add("modalForm");
    modal.classList.add("modal");
    novaConta.classList.add("contas");
    contasContainer.appendChild(novaConta);


}

document.querySelector("#botaoMais").addEventListener("click", chamarModal);
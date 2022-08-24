import { Api } from "./api.js"

export function clientesSelect(arr){
    const selectDrop = document.querySelector("select")
    arr.forEach((element, index )=> {
        let optionSelect = document.createElement("option")
        optionSelect.innerText = element.nome
        optionSelect.value = index
        optionSelect.setAttribute("id", element.id)

        selectDrop.appendChild(optionSelect)
    });
    return selectDrop
}

const selectClientes = await Api.listarClientes()
clientesSelect(selectClientes)

const selectBarra = document.getElementById("buscaClientes")

const formEdit = document.querySelector(".form__edit")

const btnSelect = document.querySelector("form")

btnSelect.addEventListener("submit",async (event) => {
    event.preventDefault()
    
    const idFromSelect = selectBarra.options[selectBarra.selectedIndex].id
    const getClient = await Api.getClienteId(idFromSelect)
    

    formEdit.elements["nome"].value = getClient.nome
    formEdit.elements["email"].value = getClient.email
    formEdit.elements["sexo"].value = getClient.sexo
    formEdit.elements["idade"].valueAsNumber = getClient.idade
    formEdit.elements["cpf"].value = getClient.cpf
    formEdit.elements["cep"].value = getClient.endereco.cep
    formEdit.elements["estado"].value = getClient.endereco.estado
    formEdit.elements["cidade"].value = getClient.endereco.cidade
    formEdit.elements["bairro"].value = getClient.endereco.bairro
    formEdit.elements["numero"].value = getClient.endereco.numero
    formEdit.elements["rua"].value = getClient.endereco.rua
})


formEdit.addEventListener("submit", async (event) =>{
    event.preventDefault()
    const idFromSelect = selectBarra.options[selectBarra.selectedIndex].id
    const newData = {
        "nome": formEdit.elements["nome"].value,
        "email": formEdit.elements["email"].value,
        "sexo": formEdit.elements["sexo"].value,
        "idade": formEdit.elements["idade"].valueAsNumber,
        "cpf": formEdit.elements["cpf"].value,
        "endereco":{
            "estado": formEdit.elements["estado"].value,
            "cidade": formEdit.elements["cidade"].value,
            "bairro": formEdit.elements["bairro"].value,
            "numero": formEdit.elements["numero"].value,
            "rua": formEdit.elements["rua"].value,
            "cep": formEdit.elements["cep"].value
        }
    }

    await Api.editarCliente(idFromSelect, newData)

})


import { Api } from "./api.js";

function deleteSelect(arr){
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
deleteSelect(selectClientes)

const selectDeleteBarra = document.getElementById("delete__clientes")

const btnDelete = document.querySelector("form")
btnDelete.addEventListener("submit", async (event) =>{
    event.preventDefault()

    const idFromSelect = selectDeleteBarra.options[selectDeleteBarra.selectedIndex].id
    console.log(idFromSelect)
    await Api.deletarCliente(idFromSelect)
})
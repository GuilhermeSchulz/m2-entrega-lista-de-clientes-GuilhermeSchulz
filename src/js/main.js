import { Api } from "./api.js"
import { makeCards } from "./cardMaker.js"

const listaClientes = await Api.listarClientes()

const listarClientes = document.getElementById("listar__clientes")

listarClientes.addEventListener("click", () =>{
    makeCards(listaClientes)
})
makeCards(listaClientes)

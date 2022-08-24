
import { Api } from "./api.js"

const form = document.querySelector('form')

form.addEventListener("submit",async (event) =>{
    event.preventDefault()
    const data = {
        "nome": form.elements["nome"].value,
        "email": form.elements["email"].value,
        "sexo": form.elements["sexo"].value,
        "idade": form.elements["idade"].valueAsNumber,
        "cpf": form.elements["cpf"].value,
        "endereco":{
            "estado": form.elements["estado"].value,
            "cidade": form.elements["cidade"].value,
            "bairro": form.elements["bairro"].value,
            "numero": form.elements["numero"].value,
            "rua": form.elements["rua"].value,
            "cep": form.elements["cep"].value
        }
    }
    console.log(JSON.stringify(data))
    await Api.cadastrarCliente(data)
    

})

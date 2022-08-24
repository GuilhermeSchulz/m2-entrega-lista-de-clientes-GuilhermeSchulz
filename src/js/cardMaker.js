export function makeCards(arr){
    let ulMain = document.querySelector(".container")

    arr.forEach(element => {
        let liCard = document.createElement("li")
        let nameCard = document.createElement("h2")

        let divInfoPessoal = document.createElement("div")
        let tituloCard = document.createElement("h3")
        let emailCard = document.createElement("p")
        let idadeCard = document.createElement("p")
        let cpfCard = document.createElement("p")
        let sexoCard = document.createElement("p")

        let divLocal = document.createElement("div")
        let h3Local = document.createElement("h3")
        let cepLocal = document.createElement("p")
        let estadoLocal = document.createElement("p")
        let cidadeLocal = document.createElement("p")
        let bairroLocal = document.createElement("p")
        let ruaLocal = document.createElement("p")
        let numeroLocal = document.createElement("p")

        liCard.classList.add("card")
        liCard.setAttribute("id", element.id)
        
        liCard.append(nameCard, divInfoPessoal, divLocal)
        divInfoPessoal.append(tituloCard, emailCard, idadeCard, cpfCard, sexoCard)
        divLocal.append(h3Local, cepLocal, estadoLocal, cidadeLocal, bairroLocal, ruaLocal, numeroLocal)
        ulMain.appendChild(liCard)

        nameCard.innerText = element.nome

        tituloCard.innerText = "Dados Pessoais"
        emailCard.innerText = `E-mail: ${element.email}`
        idadeCard.innerText = `Idade: ${element.idade}`
        cpfCard.innerText = `CPF: ${element.cpf}`
        sexoCard.innerText = `Sexo ${element.sexo}`

        h3Local.innerText = "Endereço"
        cepLocal.innerText = `CEP: ${element.endereco.cep}`
        estadoLocal.innerText = `Estado: ${element.endereco.estado}`
        cidadeLocal.innerText = `Cidade: ${element.endereco.cidade}`
        bairroLocal.innerText = `Bairro: ${element.endereco.bairro}`
        ruaLocal.innerText = `Rua: ${element.endereco.rua}`
        numeroLocal.innerText = `Numero: ${element.endereco.numero}`

    });
    return ulMain
}
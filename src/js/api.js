class Api {
    static url = "https://atividade-api-clientes.herokuapp.com/clientes"

    static headers = {
        "Content-Type": "application/json"
    }
    static async listarClientes(){
        return await fetch(this.url)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }

    static async cadastrarCliente(data){
        const newUser = await fetch(this.url, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data),
            
        })
        .then(response => response.json())
        .then(response => {
            window.location.assign("../../index.html")
            return response})
        .catch(err => console.log(err))
        console.log(body)
        return newUser
    }
    static async getClienteId(id){
        const clientId = await fetch(`${this.url}/${id}`)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
        return clientId
    }

    static async editarCliente(id, data){
        const editarCliente = await fetch(`${this.url}/${id}`,{
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            window.location.assign("../../index.html")
            return response
        })
        .catch(err => console.log(err))
        return editarCliente
        }

    static async deletarCliente(id){
        const deleteClient = await fetch(`${this.url}/${id}`,{
            method:"DELETE",
            headers:this.headers,
        })
            .then(response => {
            window.location.assign("../../index.html")
            return response
        })
        .catch(err => console.log(err))
        return deleteClient
    }   

}
  
export {Api}


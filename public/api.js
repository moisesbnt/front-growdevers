const api = axios.create({
  baseURL: "https://api-growdevers-moisesbnt.herokuapp.com/"
})

console.log("teste")

api.get("/")
   .then((result) =>{
    console.log(result.data.data)
   
    let array = result.data.data

    for (let growdevers of array){
      document.querySelector("#lista").innerHTML +=`<li>Nome: ${growdevers.nome} - Turma ${growdevers.turma}</li>`
    }

  })

  .catch((err) => {
    console.log("err")
  })
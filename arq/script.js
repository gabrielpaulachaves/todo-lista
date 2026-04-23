const botao = document.getElementById("bTnadd")
const texto = document.getElementById("texto")
const paredetarefas = document.getElementById("tarefas")

botao.addEventListener("click", ()=>{
    if(texto.value.trim() == ""){
        console.log("favor, adicionar texto")
    }else{
    console.log("funcionando")
    let div = document.createElement("div")
    div.classList.add("tarefa")
    let apagar = document.createElement("p")
    apagar.textContent = "X"
    apagar.classList.add("apagar")
    div.append(texto.value)
    div.append(apagar)
    paredetarefas.prepend(div)
    setTimeout(()=>
        div.classList.add("tarefanimado"), 1) 
    apagar.addEventListener("click",(e)=>{
    e.currentTarget.parentElement.remove()
    })
    texto.value = ""
    texto.focus()
} 

})


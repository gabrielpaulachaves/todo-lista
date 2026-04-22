const botao = document.getElementById("bTnadd")
const texto = document.getElementById("texto")
const paredetarefas = document.getElementById("tarefas")
const apagar = createElement("p").classList.add("apagar").value = "X"

botao.addEventListener("click", ()=>{
    if(texto.value = " "){
        console.log("insira um texto")
    }else{
     console.log("funcionando")
    const div = document.createElement("div").classList.add("tarefa")
    div.append(texto.value)
    div.append(apagar)
    paredetarefas.append(div)  
    texto.innerHTML = " "     
    }
})
apagar.addEventListener("click",(e)=>{
    e.relatedtarget.remove()

})

const botao = document.getElementById("bTnadd")
const paredetarefas = document.getElementById("tarefas")

botao.addEventListener("click", ()=>{
    console.log("funcionando")
    const texto = document.getElementById("texto")
    const div = document.createElement("div")
    div.append(texto.value)
    div.style.width = '100px'
    div.style.height = 
    paredetarefas.prepend(div)
})

const botao = document.getElementById("bTnadd")


botao.addEventListener("click", ()=>{
    console.log("funcionando")
    const texto =document.getElementById("texto")
    const div = document.createElement("div")
    div.textContent = texto.value
    div.style.width = '100px'
    document.getElementById("tarefas").append(div)
    




})

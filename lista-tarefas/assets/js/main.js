const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaTarefa(texto) {
    const li = document.createElement('li')
    li.innerText = texto
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}


btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value);
})

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'X'
    botaoApagar.setAttribute('class', 'excluir')
    botaoApagar.setAttribute('title', 'Excluir tarefa')
    li.appendChild(botaoApagar) 
}
document.addEventListener('click', function (e){
    const el = e.target
    if (el.classList.contains('excluir')){
     el.parentElement.remove()
     salvarTarefas()
    }
})
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listadeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace("X", ' ').trim()
        listadeTarefas.push(tarefaTexto)
        
    }
    const tarefaJSON = JSON.stringify(listadeTarefas)
    localStorage.setItem('tarefas', tarefaJSON)
    console.log(tarefaJSON)
}
function adicionaTarefa(){
    const tarefas = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefas)

    for(let tarefa of listadeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefa()
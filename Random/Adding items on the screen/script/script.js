const adicionar = document.querySelector("ul");
const inp = document.querySelector("input");
const button = document.querySelector("button");

const tarefas = JSON.parse(localStorage.getItem('list')) || []

function mostraTarefas() {
    adicionar.innerHTML = ""
    for (item of tarefas) {
        var itemList = document.createElement("li");
        var itemText = document.createTextNode(item);

        const linkElement = document.createElement('a')
        linkElement.setAttribute('class', 'icons')

        /* 
        const linkText = document.createTextNode('Delete')
        linkElement.appendChild(linkText) 
        */

        const pos = tarefas.indexOf(item)
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`)

        itemList.appendChild(itemText)
        itemList.appendChild(linkElement)

        adicionar.appendChild(itemList)

        document.querySelector("small").style.display = "flex"
    }
}

//Para mostrar os itens assim que a tela iniciar
mostraTarefas();

function inicia() {
    const tarefa = inp.value
    if (tarefa) {
        tarefas.push(tarefa)
    } else {
        alert("Por favor insira um itens para poder adicionar")
    }

    inp.value = ''
    inp.focus();
    mostraTarefas()
    salvarNoLocalStorage()
}

button.setAttribute('onclick', 'inicia()')

function removeTarefa(pos) {
    tarefas.splice(pos, 1);
    mostraTarefas();
    salvarNoLocalStorage();
}

function salvarNoLocalStorage() {
    localStorage.setItem('list', JSON.stringify(tarefas))
};
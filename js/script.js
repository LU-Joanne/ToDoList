const addOne = document.querySelector('.btn-add');
const enterAdd = document.querySelector('.addtext');
const listContainer = document.querySelector('.todo-list');
const todoList = document.querySelector('li');

addOne.addEventListener('click', function () {
    addToDos();
});
enterAdd.addEventListener('keypress', function (event) {
    if (event.keycode === 13 || event.key === "Enter") {
        addToDos();
    }
});

function addToDos() {
    if (enterAdd.value === '') {
        alert("You must write something!");
    }
    else {
        let newDo = document.createElement('li');
        let btN = document.createElement('button');
        newDo.innerHTML = enterAdd.value;
        listContainer.appendChild(newDo);
        newDo.appendChild(btN);
    }
    enterAdd.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();
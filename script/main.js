'use strict';

let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let msg = document.getElementById('msg');
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');
const primaryRainbow = `linear-gradient(180deg, rgba(37, 52, 160, 1) 15%, rgba(37, 118, 160, 1) 40%, rgba(37, 153, 160, 1) 65%, rgba(20, 255, 243, 1) 90%);`;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === '') {
    console.log('failure');
    msg.innerHTML = 'Title Cannot be Blank !';
    textInput.placeholder = 'Require Tittle !';
  } else {
    console.log('success');
    msg.innerHTML = '';
    textInput.placeholder = '';
    acceptData();
    add.setAttribute('data-bs-dismiss', 'modal');
    add.click();

    (() => {
      add.setAttribute('data-bs-dismiss', '');
    })();
  }
};

let data = [{}];

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem('data', JSON.stringify(data));

  console.log(data);
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = '';
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <p>${x.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });
  const lastDate = Number(dateInput.value.slice(-2));

  for (let i = 1; i <= 31; i++) {
    if (lastDate === i) {
      document.querySelector(`#t${lastDate}`).style.border = `5px solid rgb(0,0,0)`;
    }
  }
  resetForm();
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem('data', JSON.stringify(data));
  console.log(data);

  for (let i = 1; i <= 31; i++) {
    document.querySelector(`#t${i}`).style.border = 'none';
  }
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};

let resetForm = () => {
  textInput.value = '';
  dateInput.value = '';
  textarea.value = '';
};

(() => {
  data = JSON.parse(localStorage.getItem('data')) || [];
  console.log(data);
  createTasks();
})();

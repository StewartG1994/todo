import { projectCode } from "./project";
import { formatDistanceToNowStrict } from 'date-fns'

const domFeatures = (function (){

const displayProjectCards = () =>{
    
    let content = document.querySelector('.content');
   
    content.textContent = '';

    projectCode.projectArray.forEach(function(item ,index){
        let cardDiv = document.createElement('div');
        let header = document.createElement('h1');
        let priority = document.createElement('p');
        let notes = document.createElement('p');
        let duedate =document.createElement('p');
        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit Project'
        editBtn.className = 'edit';
        cardDiv.className = 'projectDiv'

        header.textContent = item.project;
        priority.textContent = item.priority;
        notes.textContent = item.notes;
        duedate.textContent = item.duedate;

        cardDiv.appendChild(header);
        cardDiv.appendChild(priority)
        cardDiv.appendChild(notes);
        cardDiv.appendChild(duedate);
        cardDiv.appendChild(editBtn)
        content.appendChild(cardDiv);
    
        editBtn.addEventListener('click', () =>  renderProjectOverView(cardDiv, content))
        cardDiv.setAttribute('data-number', index)

    })
}

const renderProjectOverView  = (projectDiv ,content) =>{
content.textContent ='';
let data = projectDiv.getAttribute('data-number');
let indexedData = projectCode.projectArray[data];
displayProject(indexedData)
}

const displayProject = (data) =>{
    
    let content = document.querySelector('.content');
    let headerDiv = document.createElement('div')
    let taskDiv = document.createElement('div');
    let taskButton = document.createElement('button');
    taskButton.className = 'taskButton';
    taskDiv.className ='taskDiv'
    taskButton.textContent = '+ Task'
    let projectViewDiv = document.createElement('div'); 
    projectViewDiv.className = 'headerDiv'
    let header = document.createElement('h1');
    headerDiv.className = 'projectViewHeader'

    let notesDiv = document.createElement('div');
    notesDiv.className = 'notesDiv'
    let notesHeader =document.createElement('h5');
    let notesContent = document.createElement('p');
    notesContent.className ='notesContent'
    let duedate = document.createElement('h1');
    let priority = document.createElement('h1');
    header.textContent = (String(data['project']))
    notesHeader.textContent = 'View Notes';
    notesContent.textContent = String(data['notes']);
    duedate.textContent = String(data['duedate'])
    priority.textContent = 'Prioirty: ' + String(data['priority'])

    taskDiv.appendChild(taskButton)

    headerDiv.appendChild(header);
    headerDiv.appendChild(duedate)
    headerDiv.appendChild(priority);

    projectViewDiv.appendChild(headerDiv)
    projectViewDiv.appendChild(taskDiv)
    content.appendChild(projectViewDiv)




    let projectBtn = document.querySelector('.modalBtn')
    projectBtn.addEventListener('click', () =>{
        content.textContent = '';
    })
}



return {displayProjectCards, renderProjectOverView}
})()

export {domFeatures}


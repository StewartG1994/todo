import { projectCode } from "./project";
import { formatDistanceToNowStrict } from 'date-fns'

const domFeatures = (function (){

    const taskFactory = (task, priority, notes, duedate) =>{   
        return {task, priority, notes, duedate}
    }

    const taskarray =[];

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
taskRender(projectCode.projectArray['task'])


}

const displayProject = (data) =>{
    
    let content = document.querySelector('.content');
    let headerDiv = document.createElement('div')
    let taskDiv = document.createElement('div');
    let taskButton = document.createElement('button');
    taskButton.className = 'taskButton';
    taskDiv.className ='taskDiv';
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
    addTask(taskButton,data)  
}

const addTask = (task,data) =>{
    let taskModal = document.querySelector('.taskModal')
    task.addEventListener('click', () =>{

        taskModal.style.display = 'block';

    })

    let taskclose = document.querySelector('.taskclose');
    taskclose.addEventListener('click', () =>{
    
         console.log('test')
        taskModal.style.display = 'none';

        let taskname = document.querySelector('.taskName');
        let taskpriority = document.querySelector('.priority');
        let taskduedate = document.querySelector('.taskdueDate')
        let tasknotes = document.querySelector('.tasknotes');
        let taskItem = taskFactory(taskname.value,taskpriority.value, tasknotes.value, taskduedate.value)
        taskarray.push(taskItem)
        projectCode.projectArray['tasks'] = taskarray;  

    window.addEventListener('click', taskRender(projectCode.projectArray['tasks']))
    })


    
}

const taskRender = (array) => {
    let taskDivContainer = document.createElement('div');
    let content = document.querySelector('.taskDiv');
    taskDivContainer.className = 'taskDivContainer';
    
   


   console.log(array)
   
    array.forEach(function(item, index){
        taskDivContainer.textContent = '';
  
    
    let taskDivContent = document.createElement('div');
    taskDivContainer.className = 'taskDivContainer';
    taskDivContent.className = 'taskDivContent'
    let taskName = document.createElement('p');
    let dueData = document.createElement('p');
    let priority = document.createElement('p');
    let notes = document.createElement('p');

    taskName.textContent = item.task ;
    dueData.textContent = item.duedate;
    priority.textContent = item.priority;
    notes.textContent = item.notes;
    taskDivContent.appendChild(taskName)
    taskDivContent.appendChild(dueData)
    taskDivContent.appendChild(priority)
    taskDivContainer.appendChild(taskDivContent);
    content.appendChild(taskDivContainer)
    
})
}

return {displayProjectCards, renderProjectOverView}
})()

export {domFeatures}


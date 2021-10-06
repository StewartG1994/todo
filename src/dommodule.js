import { projectCode } from "./project";
import { add, formatDistanceToNowStrict } from 'date-fns'

const domFeatures = (function (){

    let taskButton = document.createElement('button');
    let viewTasks = document.createElement('button');
    let indexedData = null;
    let currentIndex = null;
    let taskArray = [];

    const taskFactory = (task, priority, notes, duedate) =>{   
        return {task, priority, notes, duedate}
    }
    


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
    
        editBtn.addEventListener('click', () =>  {
            renderProjectOverView(cardDiv); 
    })
        cardDiv.setAttribute('data-number', index)
   
       
    })


}

const renderProjectOverView  = (projectDiv) =>{

let data = projectDiv.getAttribute('data-number');
currentIndex = data;
indexedData = projectCode.projectArray[data];
taskArray = [];
displayProject(indexedData)

}


const displayProject = (data) =>{

    console.log(currentIndex)
    let content = document.querySelector('.content');
    content.textContent = '';
    let headerDiv = document.createElement('div')
    let taskDiv = document.createElement('div');

    taskButton.className = 'taskButton';
    viewTasks.className = 'taskButton';
    viewTasks.textContent = 'View Tasks'
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

    let taskDivContainer = document.createElement('div');
    taskDivContainer.className = 'taskDivContainer';
    taskDiv.appendChild(taskButton)
    taskDiv.appendChild(viewTasks)
    headerDiv.appendChild(header);
    headerDiv.appendChild(duedate)
    headerDiv.appendChild(priority);
    projectViewDiv.appendChild(headerDiv)
    projectViewDiv.appendChild(taskDiv) 
    content.appendChild(projectViewDiv)
    content.appendChild(taskDivContainer)
    let projectBtn = document.querySelector('.modalBtn')
    projectBtn.addEventListener('click', () =>{
        content.textContent = '';
    })
}

const addTask = () => {
     let taskModal = document.querySelector('.taskModal');
     let taskclose = document.querySelector('.taskclose');
      
     taskButton.addEventListener('click', () =>{
         taskModal.style.display = 'block';
     })

     taskclose.addEventListener('click', () =>{
        
        taskModal.style.display = 'none';

        let taskname = document.querySelector('.taskName');
        let taskpriority = document.querySelector('.priority');
        let taskduedate = document.querySelector('.taskdueDate')
        let tasknotes = document.querySelector('.tasknotes');
        let taskItem = taskFactory(taskname.value,taskpriority.value, tasknotes.value, taskduedate.value)
        taskArray.push(taskItem);
        
        console.log(projectCode.projectArray[currentIndex])
        let currentArray =  projectCode.projectArray[currentIndex];
        currentArray['tasks'] = taskArray;
        console.log(projectCode.projectArray)
        
    
     })
}



return {displayProjectCards, addTask}
})()

export {domFeatures}


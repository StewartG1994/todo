import { projectCode } from "./project";
import { add, formatDistanceToNowStrict } from 'date-fns'

const domFeatures = (function (){

    let taskButton = document.createElement('button');
    let viewTasks = document.createElement('button');
    let taskDivContainer = document.createElement('div');
    let indexedData = null;
    let currentIndex = null;

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
            let currentArray =projectCode.projectArray[index];
            taskRender(currentArray['tasks'])
            

    })
        cardDiv.setAttribute('data-number', index)
   
       
    })


}

const renderProjectOverView  = (projectDiv) =>{

let data = projectDiv.getAttribute('data-number');
currentIndex = data;
indexedData = projectCode.projectArray[data];
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
  

 
    taskDivContainer.className ='taskDivContainer';
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

     
        let currentArray =  projectCode.projectArray[currentIndex];
        currentArray['tasks'].push(taskItem);
        console.log(currentArray['tasks'])
 
        
        taskRender(currentArray['tasks'])
  
     })
}



const taskRender = (array) => {
    taskDivContainer.textContent = '';
 
    array.forEach(function(item, index){
  
  
    let taskDivContent = document.createElement('div');
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

    
})
}



return {displayProjectCards, addTask}
})()

export {domFeatures}


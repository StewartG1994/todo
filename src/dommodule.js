import { projectCode } from "./project";
import { formatDistanceToNowStrict } from 'date-fns'

const domFeatures = (function (){

const projectDom = (array) => {

    const content = document.querySelector('.content');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'projectDiv';

    const projectTitle = document.createElement('h3');
    const priorityText = document.createElement('h3');
    const notesText = document.createElement('p');
    const dueDateText = document.createElement('p');
    const edit = document.createElement('button');
    edit.textContent = 'Test';
    edit.className = 'test';


    array.forEach(item =>{

    projectTitle.textContent = item.project;
    priorityText.textContent = item.priority;
    notesText.textContent = item.notes;
    dueDateText.textContent = item.duedate
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(priorityText);
    projectDiv.appendChild(notesText);
    projectDiv.appendChild(dueDateText);
    projectDiv.appendChild(edit);
    content.appendChild(projectDiv);

    array.forEach(function(item, index) {
        projectDiv.setAttribute('data-number', index)
    })
})

projectRender (edit, array, projectDiv )
}

const projectRender = ( edit, array, projectDiv) =>{

    const content = document.querySelector('.content')



    edit.addEventListener('click', event =>{
        let data = projectDiv.getAttribute('data-number');
        
        let indexedData = array[data]
        content.textContent = '';
        displayProject(indexedData)
       
 
    })
}

const displayProject = (data) =>{
    
    let content = document.querySelector('.content');
    let headerDiv = document.createElement('div')
    let taskDiv = document.createElement('div');
    content.className ='projectView';
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
    priority.textContent = String(data['priority'])
    headerDiv.appendChild(header)
    headerDiv.appendChild(priority)
    headerDiv.appendChild(duedate)
    content.appendChild(headerDiv);
    notesDiv.appendChild(notesHeader)
    notesDiv.appendChild(notesContent)
    taskDiv.appendChild(notesDiv)
    content.appendChild(taskDiv)
    hideNotes(notesHeader)

    let projectBtn = document.querySelector('.modalBtn')
    projectBtn.addEventListener('click', () =>{
        content.textContent = '';
    })


    let viewAll = document.querySelector('.viewAll');
        viewAll.addEventListener('click', () =>{
      viewAll(projectCode.projectArray)

        })
    

}

const hideNotes = (notesTab) => {

    const notes = document.querySelector('.notesContent')
    notesTab.addEventListener('click', () =>{
        if (notesTab.textContent === 'Hide Notes'){notes.style.display = 'none'; notesTab.textContent ='View Notes'}
        else {
        notes.style.display ='block';
        notesTab.textContent = 'Hide Notes'
        }
    })
}

return {projectDom, projectRender}
})()

export {domFeatures}


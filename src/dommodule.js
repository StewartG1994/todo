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
    dueDateText.textContent = item.dueDate;
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(priorityText);
    projectDiv.appendChild(notesText);
    projectDiv.appendChild(dueDateText);
    projectDiv.appendChild(edit);
    content.appendChild(projectDiv);

    array.forEach(function(item, index) {
        projectDiv.setAttribute('data-number', index)
    })

    projectRender(projectDiv, array)
})

}


const projectRender = (projectDiv, array) =>{
    const content = document.querySelector('.content');

    projectDiv.addEventListener('click', event =>{
        let data = projectDiv.getAttribute('data-number');
        let indexedData = array[data]
        console.log(indexedData)
        console.log(indexedData['project'])
    })
}

return {projectDom, projectRender}
})()

export {domFeatures}


import { projectCode } from "./project";
import { projectRender } from "./projectView";

const domFeatures = (function (){


const projectDom = (project, priority, notes, dueDate) => {
    let content = document.querySelector('.content');
    let projectDiv = document.createElement('div');
    projectDiv.className = 'projectDiv'
    let projectTitle = document.createElement('h3')
    let priorityText = document.createElement('h3')
    let notesText = document.createElement('p')
    let dueDateText = document.createElement('p')

    projectTitle.textContent = project;
    priorityText.textContent = priority;
    notesText.textContent = notes;
    dueDateText.textContent = dueDate;
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(priorityText);
    projectDiv.appendChild(notesText);
    projectDiv.appendChild(dueDateText);
    content.appendChild(projectDiv);

    const array = projectCode.projectArray;

    
    array.forEach(function(item,index){
        projectDiv.setAttribute('data-number', index)
    })

    
}

return {projectDom}
})()

export {domFeatures}

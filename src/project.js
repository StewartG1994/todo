import { domFeatures } from "./dommodule"
import { formatDistanceToNowStrict } from 'date-fns'
import closestIndexTo from "date-fns/closestIndexTo"

const projectCode = (function() {

    const projectArray  = [];

    const project = (project, priority, notes, duedate) =>{   
        return {project, priority, notes, duedate}
    }

    const modal = () =>{

        

        const modalBtn =document.querySelector('.modalBtn');
         const modal = document.querySelector('.modal');
        let close = document.querySelector('.close');
        let projectname =document.querySelector('.projectName');
        let priority = document.querySelector('.priority');
        let notes = document.querySelector('.notes');
        let dueDate = document.querySelector('.dueDate');

        modalBtn.addEventListener('click', () =>{
        modal.style.display = 'block';
        })
        close.addEventListener('click', () =>{
        let projectTopic = projectname.value;
        let priorityTopic = priority.value;
        let notesTopic = notes.value;
        let dueDatesTopic = formatDistanceToNowStrict(new Date (dueDate.value),{unit:'day', addSuffix :true} );
        let projectObject = project(projectname.value, priority.value, notes.value, dueDate.value);
        projectArray.push(projectObject)
        console.log(projectArray)
        projectname.value = '';
        priority.value= '';
        notes.value = '';
        modal.style.display = 'none';
        domFeatures.projectDom(projectTopic, priorityTopic, notesTopic, dueDate.value + ' ' +  dueDatesTopic)



 
        })   
    }
    

                
    
    return {modal, projectArray}
})()

export {projectCode}


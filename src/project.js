import { domFeatures } from "./dommodule"
import { formatDistanceToNowStrict } from 'date-fns'



const projectCode = (function() {

    const projectArray  = [
        []
    ];

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
    
        let dateData = formatDistanceToNowStrict(new Date(dueDate.value));
        let projectObject = project(projectname.value, priority.value, notes.value, 'Due in ' +  dateData + ' on the ' + dueDate.value);
        projectArray.push(projectObject)
        domFeatures.projectDom(projectArray)
        console.log(projectArray)
        projectname.value = '';
        priority.value= '';
        notes.value = '';
        modal.style.display = 'none';
        })         
}



    
    return {modal, projectArray}
})()

export {projectCode}


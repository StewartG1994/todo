import { domFeatures } from "./dommodule"
import { formatDistanceToNowStrict } from 'date-fns'

const projectCode = (function() {

    const projectArray  = [];
    const project = (project, priority, notes, duedate, tasks) =>{   

        tasks = [];
        return {project, priority, notes, duedate, tasks}
    }

    const loadedContent = () => {

        const defaultProject = project('The Odin Project','High', 'Notes', '12/25/2021');
        projectArray.push(defaultProject);
        window.addEventListener('load', () => {
        domFeatures.displayProjectCards()
        
        
   
        })

    }

        const modal = () =>{
            let content = document.querySelector('.content');
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
            let projectObject = project(projectname.value, priority.value, notes.value, 'Due in ' +  dateData + ' on the ' + dueDate.value, []);
            projectArray.push(projectObject)
            console.log(projectArray)
            projectname.value = '';
            priority.value= '';
            notes.value = '';
            modal.style.display = 'none';
          
                console.log(storage)
            domFeatures.displayProjectCards()
       
    
            })         

            let viewAll = document.querySelector('.viewAll');
            viewAll.addEventListener('click', ()=>{
                const modal = document.querySelector('.modal');
                modal.style.display = 'none';
               domFeatures.displayProjectCards();
               console.log('test')
         

    })}

    return {loadedContent, modal, projectArray}
})()



export {projectCode}


import './styles.css'

const core  = (function() {

    const projectArray  =[]

    const project = (project) =>{   
        return {project}
    }

    const taskFactory = (task, description, duedate,priority, notes) =>{
        console.log('test')
        return {task, description,duedate, priority,notes}

    }

    const modal = () =>{
        const modalBtn =document.querySelector('.modalBtn');
         const modal = document.querySelector('.modal');
        const close = document.querySelector('.close');
        const projectname =document.querySelector('.projectName');

        modalBtn.addEventListener('click', () =>{
        modal.style.display = 'block';
        })
        close.addEventListener('click', () =>{
        let projectTopic = project(projectname.value);
        projectArray.push(projectTopic);
        modal.style.display = 'none'
        console.log(projectArray)
        })}

    return {taskFactory, project, modal}
})()

core.modal()


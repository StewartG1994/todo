import './styles.css'
import { projectCode } from './project'
import { domFeatures } from './dommodule'
import { endOfDay } from 'date-fns'


const core  = (function() {

    const taskFactory = (task, description, duedate,priority, notes) =>{
        console.log('test')
        return {task, description,duedate, priority,notes}
    }

    const renderProject = () =>{
        let editButton = document.querySelector('test');
        editButton.addEventListener('click', alert('test'))

}

    return {taskFactory, renderProject}
})()

projectCode.loadedContent();

projectCode.modal();



import './styles.css'
import { projectCode } from './project'
import {projectRender} from './projectView'


const core  = (function() {

    const taskFactory = (task, description, duedate,priority, notes) =>{
        console.log('test')
        return {task, description,duedate, priority,notes}

    }

    return {taskFactory}
})()

projectCode.modal()
projectRender.render()



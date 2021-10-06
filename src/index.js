import './styles.css'
import { projectCode } from './project'
import { domFeatures } from './dommodule'
import { endOfDay } from 'date-fns'


const core  = (function() {


    const renderTask = () =>{
        domFeatures.addTask()

}

    return { renderTask}
})()

projectCode.loadedContent();
core.renderTask()
projectCode.modal();





import './styles.css'
import { projectCode } from './project'
import { domFeatures } from './dommodule'
import { endOfDay } from 'date-fns'


const core  = (function() {


    const renderProject = () =>{
        let editButton = document.querySelector('test');
        editButton.addEventListener('click', alert('test'))

}

    return { renderProject}
})()

projectCode.loadedContent();

projectCode.modal();





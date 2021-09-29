import './styles.css'

console.log('testTwo')

const core  = (() =>{

    const taskFactory = (task, description, duedate,priority, notes) =>{
        return {task, description,duedate, priority,notes}

    }

    return taskFactory
})()




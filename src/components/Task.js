import { useState } from 'react';
import editIcon from '../edit.svg';
import deleteIcon from '../delete.svg';
import checkmark from '../checkmark.svg'
import EditTask from './EditTask';

function Task({task, onDelete, onEdit}) {
    const [showEditTask, setShowEditTask] = useState(task.edit);

    let priorityName;
    switch (task.priority) {
        case 1:
            priorityName = "high";
            break;
        case 2:
            priorityName = "medium";
            break;
        case 3:
            priorityName = "low";
            break;
    }

    return (
        <>
            <div className={`todo-${priorityName}`}>
                <h6 key={task.id} align="left">
                    {task.complete ? (
                        <>
                            <a className="todo-icon">
                                <img 
                                src={checkmark} 
                                width="20" 
                                height="20" 
                                onClick={() => onDelete(task.id)}
                                />
                            </a>
                        </>
                    ) : ('')}
                    {task.name}          
                </h6>

                {showEditTask ? (<EditTask task={task} onEdit={onEdit}/>) : ('')}
                             
                <a className="todo-icon">
                    <img 
                    src={deleteIcon} 
                    width="20" 
                    height="20" 
                    align="right" 
                    onClick={() => onDelete(task.id)}
                    />
                </a>
                <a className="todo-icon">
                    <img 
                    src={editIcon} 
                    width="20" 
                    height="20" 
                    align="right"
                    onClick={() => setShowEditTask(!showEditTask)}
                    />
                </a>
            </div>
        </>
    )
}
export default Task;
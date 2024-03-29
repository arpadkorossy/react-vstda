import Task from './Task';

function Tasks({tasks, onDelete, onEdit}) {

    return (
      <>
        { tasks.map((task) => (
            <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onEdit={onEdit}
            />
        ))}
      </>
    );
  }

export default Tasks;
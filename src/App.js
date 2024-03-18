import { useState, useEffect } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    // {
    //   "todo": [
    //     {
    //       "id": "1",
    //       "name": "Do the thing",
    //       "priority": 1,
    //       "complete": false,
    //       "edit": false
    //     },
    //     {
    //       "id": "2",
    //       "name": "Do the next thing",
    //       "priority": 2,
    //       "complete": false,
    //       "edit": false
    //     },
    //     {
    //       "id": "3",
    //       "name": "Do the last thing",
    //       "priority": 3,
    //       "complete": false,
    //       "edit": false
    //     }
    //   ]
    // }
  ])

  useEffect(() => {
    const getTodo = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTodo();
  }, [])

  // Fetch Todo List from Server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/todo');
    const data = await res.json();
    console.log(data);
    return data;
  }

  // Add Task
  const addTask = async (task) => {
    const edit = false;
    const complete = false;
    const newTask = {...task, complete, edit};
    const res = await fetch('http://localhost:5000/todo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })

    const data = await res.json();
    setTasks([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/todo/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter(task => task.id !== id))
  }

  // Edit Task
  const editTask = async (editedTask) => {
    const res = await fetch(`http://localhost:5000/todo/${editedTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editedTask)
    })

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
      task.id === data.id ? { ...data } : task
      )
    )
  }

  return (
    <>
      <div className="box-header">
        <h1 className="heading">Very Simple Todo App</h1>
        <h6 className="subheading">Track all of the things</h6>
      </div>

      <div className="box">

        <AddTask onAdd={addTask}/>

        <div className="box-todo">
          {(tasks.length > 0) ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask}/>
          ) : (
            'No more todo items!'
          )}
        </div>
        
      </div>
    </>
  );
}

export default App;

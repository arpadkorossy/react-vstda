import { useState } from 'react';

function AddTask({onAdd}) {
    const [name, setName] = useState('');
    const [priority, setPriority] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!name) {
            alert('Please add a todo item description');
            return;
        }

        onAdd({name, priority})
    }
        
    return (
        <div className="box-input">

            <div className="box-input-header"><b>Add New Todo</b></div>
        
            <form className="add-form" onSubmit={onSubmit}>

                <div>
                    <label for="create-todo-name">I want to...</label>
                    <textarea
                    className="create-todo-name"
                    id="create-todo-name" 
                    name="create-todo-name" 
                    placeholder='Todo item name'
                    rows="5"
                    cols="33"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label for="create-todo-priority">How much of a priority is this?</label>
                    <select
                    className="create-todo-priority"
                    type="number" 
                    id="create-todo-priority" 
                    name="create-todo-priority" 
                    placeholder='--Please choose a priority level--'
                    width="100" 
                    value={priority}
                    onChange={(e) => setPriority(Number(e.target.value))}
                    >
                        <option type="number" value="1">1 - High</option>
                        <option type="number" value="2">2 - Medium</option>
                        <option type="number" value="3">3 - Low</option>
                    </select>
                </div>

                <div>
                    <button className="button">Add New Todo Item</button>
                </div>

            </form>

        </div>
    )
}

export default AddTask;
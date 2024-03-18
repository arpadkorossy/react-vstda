import { useState } from 'react';

function EditTask({task, onEdit}) {
    const [id, setId] = useState(task.id);
    const [name, setName] = useState(task.name);
    const [complete, setComplete] = useState(task.complete);
    const [priority, setPriority] = useState(task.priority);
    const [edit, setEdit] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!name) {
            alert('Blank name is not allowed');
            return;
        }

        setEdit(false);
        onEdit({id, name, priority, complete, edit})
    }

    return (
        <>
            <form className="edit-form" onSubmit={onSubmit}>
            
                <label for="edit-todo-name">Edit Name:</label>
                <p>
                    <textarea
                    className="edit-todo-name"
                    id="edit-todo-name" 
                    name="edit-todo-name" 
                    placeholder={name}
                    rows="5"
                    cols="33"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </p>

                <label for="edit-todo-priority">Edit Priority:</label>
                <p>
                    <select
                    className="edit-todo-priority"
                    type="number" 
                    id="edit-todo-priority" 
                    name="edit-todo-priority" 
                    width="100" 
                    value={priority}
                    onChange={(e) => setPriority(Number(e.target.value))}
                    >
                        <option type="number" value="1">1 - High</option>
                        <option type="number" value="2">2 - Medium</option>
                        <option type="number" value="3">3 - Low</option>
                    </select>
                </p>

                <label for="complete">Complete</label>
                <p>
                    <input 
                    type="checkbox"
                    defaultChecked={complete}
                    id="complete" 
                    name="complete"
                    value="yes"
                    onChange={(e) => setComplete(e.target.checked)}
                    />
                </p>

                <p><button className="button">Update</button></p>

            </form>
        </>
    )
}

export default EditTask;
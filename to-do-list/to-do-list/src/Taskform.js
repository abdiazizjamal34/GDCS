import { useState } from "react";

export default function Taskform({onAdd}) {
    const [taskname, settaskname] = useState('');

    const handleInputChange = (event) => {
        settaskname(event.target.value);
    };
    const handlesubmit = (event) => {
        event.preventDefault();
        onAdd(taskname);
        settaskname('');
    }

    return (
        <form onSubmit={handlesubmit}>
            <button >Add</button>
            <input type="text" 

            placeholder="Add a task" value={taskname} onChange={handleInputChange} />
        </form>
    );
}
import React from 'react';

// this component encapsulates the logic to add a new task to the to do list
const AddTask = () => {

    return (
        <>
            <button>
                Add Task
            </button>
            <input type='text' placeholder='Add Task'></input>
        </>
    );
}

export default AddTask;
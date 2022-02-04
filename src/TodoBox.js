import React,{ useState, useEffect, useRef} from 'react';

function TodoBox(props){
    const[task,setTask] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = e =>{
        setTask(e.target.value);
    };

    const handleAdd = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: task
        });
        setTask('');
    };

    return(
        <form className='todo-box' onSubmit={handleAdd}>
            {props.edit ? (
            <>
            <input 
                type='text'
                placeholder='Update todo'
                value={task}
                name='text'
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button edit'>Update</button>
            </>) : 
            (<>
            <input 
                type='text'
                placeholder='Enter todo'
                value={task}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button'>Add</button>
            </>)
            }
            
        </form>
    );
}

export default TodoBox;
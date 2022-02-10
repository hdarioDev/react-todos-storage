import React from 'react'


function TodoItem(props) {
    // const onComplete = () => {
    //     console.log('completaste ' + props.text)
    // }
    // const onDelete = () => {
    //     console.log('boorar ' + props.text)
    // }
    return (
        <li className="todoitem">
            <span className={`todoitem--list-title ${props.completed && 'active-todo'}`}
                onClick={props.onComplete}
            >
                ✓
            </span>
            <p className={`todoitem--list-text ${props.completed && 'active-todo-text'}`} >{props.text}</p>
            <span className="todoitem--button-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem }

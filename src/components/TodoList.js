import React from 'react'

function TodoList(props) {
    return (
        <section className="container-todolist">
            <ul className="container-todolist--list">
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }

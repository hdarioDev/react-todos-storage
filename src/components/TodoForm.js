import React from 'react'
import { TodoContext } from '../contexts/TodoContext'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        openModal,
        setOpenModal,


    } = React.useContext(TodoContext)
    const onCancel = () => {

        setOpenModal(false)
        console.log("cancel")
    }
    const onSubmit = (event) => {
        console.log("onSubmit")
        if (newTodoValue.length <= 0) return;
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)

    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onKeyUp = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            addTodo(newTodoValue);
            setOpenModal(false)
        }
    };
    return (

        <form className="form-create" onKeyPress={onKeyUp} onSubmit={onSubmit}>
            <div
                className="form-title">
                <label className="label-create-todo">Ingresa un TODO</label>
            </div>

            <textarea
                className="text-create-todo"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Estudiar javascript...">

            </textarea>
            <button className="button-todo button-cancel" type="button" onClick={onCancel}>Cancelar</button>
            <button className="button-todo button-add" type="submit">Guardar</button>
        </form>
    )
}

export { TodoForm }

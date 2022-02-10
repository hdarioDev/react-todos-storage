import React from 'react'

function CreateTodoButton({ setOpenModal, openModal }) {

    console.log("openModal ", openModal)
    const oncClickButton = () => setOpenModal(!openModal);

    return (
        <div className="container-button-create">
            <button className="button-create"
                onClick={() => oncClickButton()}
            >
                +
            </button>
        </div>
    )
}

export { CreateTodoButton }
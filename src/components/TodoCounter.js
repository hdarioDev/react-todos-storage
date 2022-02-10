import React from 'react'


function TodoCounter({ total, completed }) {
    return (
        <div className="container-counter">
            <h1 className="container-counter--title">REACT TODO</h1>
            <h3 className="container-counter--title">Has completado {completed} de {total} TODOs</h3>
        </div>
    )
}

export { TodoCounter }

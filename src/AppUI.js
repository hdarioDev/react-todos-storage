// import logo from './logo.svg';
//import './App.css';
import React from 'react'
import { TodoContext } from './contexts/TodoContext'
import { TodoCounter } from './components/TodoCounter';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { SearchTodo } from './components/SearchTodo'
import './assets/css/myStyle.css'

import { ModalCreate } from './modals/ModalCreate'
import { TodoForm } from './components/TodoForm';


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
 


  } = React.useContext(TodoContext);


  return (
    <React.Fragment>


      <TodoCounter
      total={totalTodos}
      completed={completeTodo}
      />

      <SearchTodo

      />


      <TodoList >
        {loading && <p className="text--extra">Cargando...</p>}
        {error && <p className="text--extra">Error inesperado...</p>}
        {(!loading && !searchedTodos.length) && <p className="text--extra">Crea tu primer TODO</p>}

        {
          searchedTodos.map(
            todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )
          )
        }

      </TodoList>

      {!!openModal && (
        <ModalCreate>

          <TodoForm
          >
          </TodoForm>

        </ModalCreate>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      >

      </CreateTodoButton>

    </React.Fragment>

  );
}

export { AppUI };
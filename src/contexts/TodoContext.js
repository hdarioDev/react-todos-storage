import React from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const TodoContext = React.createContext()

function TodoProvider(props) {

  //SEPUEDE RENOMBRAR COMO OBJETO
  const [todos, saveTodos, loading, error] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false);
  //COUNT COMPLETED 
  const completedTodos = todos.filter(todo => !!todo.completed).length
  console.log(`completedTodos ${completedTodos}`)
  //COUNT ALL
  const totalTodos = todos.length
  console.log(`totalTodos ${totalTodos}`)

  //FILTER FOR SEARCHED
  let searchedTodos = []
  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  //COMPLETAR TODO
  const completeTodo = (text) => {
    //HALLAR LA POSICION DEL ARRAY
    const todoindex = todos.findIndex(todo => todo.text === text)
    console.log("todoindex ", todoindex)
    // todos[todoindex]={
    //   text : todos[todoindex].text,
    //   completed:true
    // }
    const newTodos = [...todos] //CREAR CLON
    newTodos[todoindex].completed = true
    //MANDAR A RENDERIZAR EL ESTADO
    saveTodos(newTodos)
  }

  //DELETE TODO
  const deleteTodo = (text) => {
    //HALLAR LA POSICION DEL ARRAY
    const todoindex = todos.findIndex(todo => todo.text === text)
    console.log("todoindex ", todoindex)
    const newTodos = [...todos] //CREAR CLON
    newTodos.splice(todoindex, 1)//CORTAR DESDE , HASTA
    //MANDAR A RENDERIZAR EL ESTADO
    saveTodos(newTodos)
  }

  //ADD TODO
  const addTodo = (text) => {
    //HALLAR LA POSICION DEL ARRAY
    const newTodos = [...todos] //CREAR CLON
    newTodos.push({
      completed: false,
      text
    })
    //MANDAR A RENDERIZAR EL ESTADO
    saveTodos(newTodos)
  }

  return (
    //PROVIDE ENVOLVERA TODA LA APP Y LLAMARA AL CONSUMIDOR
    <TodoContext.Provider value={{
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}
export { TodoContext, TodoProvider }
{/* <TodoContext.Consumer></TodoContext.Consumer> */ }
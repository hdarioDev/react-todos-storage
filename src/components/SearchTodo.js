import React from 'react'
import { TodoContext } from '../contexts/TodoContext'


function SearchTodo() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onsearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    return (
        <div className="container-search">
            <input placeholder="Buscar..." className="search"
                onChange={onsearchValueChange}
                value={searchValue}
            />
            <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search image" className="searchIcon" />

        </div>
    )
}

export { SearchTodo }

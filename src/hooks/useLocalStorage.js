import React from "react"

//CUSTOM HOCK STORAGE
function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue)
    React.useEffect(() => {
        // setTimeout(() => {
            try {


                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if (!localStorageItem) {//SI NO HAY NADA EN LOCALSTORAGE
                    localStorage.setItem(itemName, JSON.stringify(initialValue))//define tipo de elemento
                    parsedItem = []
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem)
                setLoading(false)
            } catch (error) {
                console.log("Error al cargar lista ");
                setLoading(false)
                setError(true)
            }
        // }, 2000);
    }, [])

    //CREATE TODO no se ejecuta al inicio

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem)//SETSTATE
        } catch (error) {
            setError(true)
        }

    }
    //UN CUSTOM HOCK SI TIENE MAS DE 2 PARAMETROS(estado y actualizador) DEBE RETORNAR COMO OBJETO
    return [
        item,
        saveItem,
        loading,
        error
    ]
}

export { useLocalStorage }
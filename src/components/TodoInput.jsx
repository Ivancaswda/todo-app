import { useState} from "react";

export function TodoInput(props) {
    const { handleAddTodo } = props
        // access handleAddTodo function
    const [inputValue, setInputValue] = useState('') // manage the data of input (at start '')


    return (
        <div className='input-container'>
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value) // commits this function when sets new value of input! we updated variable of value
            }} type="text" placeholder="Add task"/>
            <button onClick={() => {
                if (!inputValue) { return '' } // если у нас нету никакого значения в инпуте значит ничего не возращаем
                handleAddTodo(inputValue)
                setInputValue('') // после выполнения инпут будет равен нулю
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
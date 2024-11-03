export function TodoCard(props) {  // we gonna return HTML FOR HEADER export function
    const {todo, handleDeleteTodo, todoIndex, handleEditTodo} = props

    //  const {todoIndex, todos} = props
    //const todoo = todos[todoIndex] // получаем доступ к каждому объекту в массиве toоdo
   // console.log(todoo)



    return (
        <div className='card todo-item'>
            <p>{todo.input}</p> {/* create special template for each displaying clause in todos */}
            <div className='todo-buttons'>
                <button onClick={() => {
                    handleEditTodo(todoIndex) // find index in original array not in the filtered already
                }} disabled={todo.complete}> {/* (если сделано то disabled)
                 если todoo.complete === true in array therefore object`s button will be disabled  */}
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex) // we access the index for removing precise item
                }}>
                    <h6>Delete!</h6>
                </button>
            </div>
        </div>
    )
}
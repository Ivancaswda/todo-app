export function Header(props) {  // we gonna return HTML FOR HEADER export function
    const { todos } = props // as we set them in parameter
    const todosLength = todos.length
    // get the object from App here ()


    const  taskOrTasks = todosLength > 1 || todosLength === 0 ? 'tasks' : 'task' // if task = one  => making task
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}</h1>
        </header>
    )
}
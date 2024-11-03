

// we gonna to have here all `boxes` as we should wrapp jsx components for insertion
import {Header} from "./components/Header.jsx";
import {Tabs} from "./components/Tabs.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";
import {useState} from "react";
import {useEffect} from "react"; // same as localStorage for tracking awaits

function App() {
     // component this function which returns html with inserted js upwards
    // we add header component to main page
    // !!! name of tags should match title of file jsx (component)
  //  const todos = [
    //    {input: 'Hello! Add your first todoo!', complete: true},
    //    {input: 'Get the groceries!', complete: false},
    //    {input: 'Learn how to web design', complete: false},
    //    {input: 'Say hi to gran gran!', complete: true}
   // ] // four todos in array

    // variable system which specific to React
    const [todos, setTodos] = useState([ // default value for toodo list
        {input: 'Hello! Add your first todoo!', complete: true},

    ])

    const [selectedTab, setSelectedTab] = useState('All')
    // setting initial value of variable name ! setSelectedTab(fickleValue) was for managing
        // toodo-array  ""  // modify values

    // Add for Toodo List

    function handleAddTodo(newTodo) {
        // we should make a copy of object and overwrite its property
        const newTodoList = [...todos, { input: newTodo, complete: false}] // spread out of origina todo
                                                  // spread out all original values. and add input of new todoo
        setTodos(newTodoList) // represented changes
        handleSavedData(newTodoList)
    }
    function handleEditTodo(index) { // we should manage to turn affair from open to Completed
        // update/edit/modify
        // we should to find which Element we modifying thus we add index of precise element
        // and what we modifying
        let newTodoList = [...todos]
        let completedTodo = todos[index] // certain toodo which completing
        completedTodo['complete'] = true  // modify the status of that
        newTodoList[index] = completedTodo // Ставим под конец complete todo
        setTodos(newTodoList)
        handleSavedData(newTodoList)
    }
    function handleDeleteTodo(index) {
        let newTodoList = todos.filter((val, valIndex) => {
            return valIndex !== index  // Находим нужный элемент с помощью фильтра и удаляем его
        })
        setTodos(newTodoList) // ставим новый todoo-list
        handleSavedData(newTodoList)
    }




    useEffect(() => {
        if (!localStorage ||  !localStorage.getItem('todo-app')) { // ПРОВЕРЯЕМ ЕСТЬ ЛИ ЭЛЕМЕНТ В LOCALsTORAGE
            return
        }
        let db = JSON.parse(localStorage.getItem('todo-app')) // database

        setTodos(db.todos) // gave us all saved objects in
        console.log('Still saved in localStorage')
    }, [todos])  // wait untill todos finally sets // what kind of stuff contained and when it was executed
        // if empty means its instantly lauched
    function handleSavedData(currTodos) {
        localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos})) // we saved elements into localStorage
    }


  return (
        <> {/* Мы оставляем просто скобки чтобы не было лишнего второго дива при загрузке всего содержимого         */}
          <Header todos={todos} /> {/* we need to access certain property of todos object */}
          <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} selectedTab={selectedTab} /> {/* we pass it as the property for access there*/}
          <TodoInput handleAddTodo={handleAddTodo}  /> {/* we pass it as the property for access */}
        </>
  )
}

export default App

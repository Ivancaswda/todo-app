import {TodoCard} from "./TodoCard.jsx";

export function TodoList(props) {
    let { todos, selectedTab, } = props

    const tab = selectedTab // selectedTab - All, Open or Completed
    // determine on which tab should i show              // вощвращаем (выводим) те задания которые закончены   // возвращаем (выводим) те задания которые открыты (не закончены)
    const filterTodosList  = tab === 'All' ? todos : tab === 'Completed'
        ? todos.filter(val =>  val.complete) : todos.filter(val => !val.complete)


    // RENDER OUT ALL TOODO CARDS FOR EVERY ELEMENT



        // we now displaying amidts filteredTodoList
    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                {/* МЫ ВСЕГДА ДОЛЖНЫ ВОЗРАЩАТЬ ОТСЕЕВКУ НА СТРАНИЦУ
                    СТАВИМ УНИКАЛЬНЫЙ ИНДЕКС
                   Нам нужно отправить информацию к TodoCart jsx file ДЛЯ ИСПОЛЬЗУЕМ ...props (Всегда должен быть в конце)
                    и Дает возможность использовать все параметры в след файле
                    in toodo cart we`ll receive this intel
                */}
                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(val => val.input === todo.input )} //
                        {...props} // passing all properties into TodoCart
                        todo={todo} />
                )
            })}
        </>
    )
}
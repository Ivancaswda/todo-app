export function Tabs(props) {
    // mapping object - type component for creating multiple buttons
    const tabs = ['All', 'Open', 'Completed'] // values of buttons
    const { todos, selectedTab, setSelectedTab } = props // get toddo-object in here

    // we need 3 buttons

    return (
        <nav className='tab-container'>
            {tabs.map((tab, tabIndex) => {
               // mapping inside the react generate 3 buttons
                 // Если Таб === Все тогда показываем количество всего массива если Open тогда достигаем значение complete
                // если не complete тогда выводим все которые количество незавершенных и для последней проверяем кто completed тоже ставим кол-во
                // we`ll got value by this variable and injected it to the tab quantity
                const numOfTasks = tab === 'All' ? todos.length : tab === 'Open' ? todos.filter(complete =>
                     !complete.complete).length : todos.filter(complete => complete.complete).length
                return (
                <button onClick={() => {
                    setSelectedTab(tab)
                }} key={tabIndex} className={'tab-button ' + (tab === selectedTab ? 'tab-selected' : '')}>
                    {/* если tab равна выбранному tabу
                тогда добавляем другой стиль для выбранного*/}  {/* dynamic class to append */}
                    <h4>{tab} <span>{numOfTasks}</span></h4> {/* we also should add quantity near the tab */}
                </button>
                )
            })}
            <hr/>

        </nav>
    )
}
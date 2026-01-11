
import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props


    const filterTodosList = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)
    //filters todos based on the tabs selected


    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
                console.log(tempTodoIndex)
                return (
                    <TodoCard
                        key={todoIndex}
                        {...props}
                        todoIndex={tempTodoIndex}
                        todo={todo} />
                )

                //this maps out all the cards according tothe tab
            })}

        </>
    )
}

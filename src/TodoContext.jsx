import React, { createContext, useReducer } from "react";

const defalutValue = {
    TodoList: []
  
};

const reducer = (state, action) => {
    switch (action.type) {
        case "submit_input" :
            const inputValue = action.load.input;
            
            const newTodoList = {
                inputValue: inputValue,
                check: false,
                id: Date.now()
            }
            return {
                TodoList : [...state.TodoList, newTodoList]
            }
        case "del-Todo" :
            return {
                TodoList : state.TodoList.filter(Todo => Todo.id !== action.load.id),
            }
        case "edit" : 
            return {
                TodoList : state.TodoList.map(todo => {
                    if (todo.id === action.load.id) {
                        return {...todo, check: !todo.check}
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [TodoValues, dispatch] = useReducer(reducer, defalutValue);

    return (
        <TodoContext.Provider value = {{ TodoValues, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
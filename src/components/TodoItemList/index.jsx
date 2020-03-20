import React from 'react';
import './index.css';
import TodoItem from '../../components/TodoItem';

const TodoItemList = ({todos, onDeleteTodo}) => {
    let todoItems = null;
    if(todos) {
        todoItems = todos.map((todo) => {
            return (
                <TodoItem 
                    id={todo.id}
                    key={todo.id}
                    todo={todo.todo}
                    memo={todo.memo} 
                    time={todo.time}
                    onDeleteClick={onDeleteTodo}
                />
            )
        }) 
    } else {
        todoItems = <div>Loading...</div>
    }
    
    return ( 
        <div className="TodoItemList">
            {todoItems}
        </div>
        )
};
 
export default TodoItemList;
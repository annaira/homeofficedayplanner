import React from 'react';
import './index.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const TodoItem = ({id, todo, memo, time, onDeleteClick}) => {
    return (
        <div className="TodoItem">
            <div className="TodoItem-dueTime">
                <h2 className="TodoItem-dueTime__time">{time}</h2>
            </div>
            <div className="TodoItem-todo">
                <div className="TodoItem-todo__text">
                    {todo}
                </div>
                <div className="TodoItem-todo__memo">
                    {memo}
                </div>
            </div>
            <div className="TodoItem-delete">
                <button onClick={() => onDeleteClick(id)} className="TodoItem-delete__button">
                    <DeleteOutlineIcon style={{color: 'white'}}/>
                </button>
            </div>
        </div>
    )
};

export default TodoItem;
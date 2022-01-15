import React, { useState } from "react";

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const addTodo = props.addTodo;

    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    addTodo(newTodo);
                    setNewTodo("");
                }}
                className="todo-form"
            >
                <input
                    type="text"
                    placeholder="Enter Todo"
                    value={newTodo}
                    onChange={(event) => {
                        setNewTodo(event.target.value);
                    }}
                ></input>
                <button>Add Todo</button>
            </form>
        </>
    );
};

const TodoList = (props) => {
    const todoList = props.todoList;

    return (
        <div className="todo-list">
            {todoList.map((item) => {
                return <h3>{item}</h3>;
            })}
        </div>
    );
};

const Todo = (props) => {
    const [todoList, setTodoList] = useState([]);

    function addTodo(todo) {
        let copyList = [...todoList];
        copyList.push(todo);
        setTodoList(copyList);
    }

    return (
        <div className="todo">
            <TodoForm addTodo={addTodo} />
            <TodoList todoList={todoList} />
        </div>
    );
};

export default Todo;

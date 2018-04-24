import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';

let key = 0;
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childTodos: props.todos
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ childTodos: nextProps.todos });
    }

    renderTodoItem(todo) {
        return <TodoItem todo={todo} key={key++} onToggle={this.props.toggleParentTodo.bind(this, todo)} />;
    }

    renderFullList = todoItems => {
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <ul className="todo-list">{todoItems}</ul>
            </section>
        );
    };

    render() {
        const { childTodos } = this.state;
        let todoItems = [];
        childTodos.map(todo => {
            let view = this.renderTodoItem(todo);
            if (!view) return;
            todoItems.push(view);
        }, this);

        let fullList = (
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <ul className="todo-list">{todoItems}</ul>
            </section>
        );
        return fullList;
    }
}

export default TodoList;

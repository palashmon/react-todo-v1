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

    toggle(todoToToggle) {
        //debugger;
        var todoCopy = JSON.parse(JSON.stringify(this.state.childTodos));
        var found = todoCopy.find(v => v.id === todoToToggle.id);
        if (found) {
            found.completed = !todoToToggle.completed;
            this.setState({ childTodos: todoCopy });
        }
    }

    renderTodoItem(todo) {
        return <TodoItem todo={todo} key={todo.id} onToggle={this.props.toggleParentTodo.bind(this, todo)} />;
    }

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
                <button
                    style={{ padding: '10px 20px', cursor: 'pointer', fontSize: 12 }}
                    onClick={this.props.handleClick}
                >
                    Add Items (For Testing purpose only)
                </button>
            </section>
        );
        return fullList;
    }
}

export default TodoList;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const ALL = 'All';
const ACTIVE = 'Active';
const COMPLETED = 'Completed';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            nowShowing: ALL,
            editing: null
        };
    }

    // Create UUID for each todo
    uuid = () => {
        return Math.floor(Math.random() * 90000) + 100000;
    };

    onNewTodoInsert = title => {
        this.setState({
            todos: this.state.todos.concat({
                id: this.uuid(),
                title: title,
                completed: false
            })
        });
    };

    onHandleClick = () => {
        this.setState({
            todos: [
                {
                    id: this.uuid(),
                    title: 'This is first todo',
                    completed: false
                },
                {
                    id: this.uuid(),
                    title: 'This is second todo',
                    completed: false
                },
                {
                    id: this.uuid(),
                    title: 'We can do this also',
                    completed: false
                }
            ]
        });
    };

    toggleParentTodoStatus = updatedTodo => {
        this.setState({
            todos: this.state.todos.map(function(todo) {
                return todo.id !== updatedTodo.id
                    ? todo
                    : Object.assign({}, todo, { completed: !updatedTodo.completed });
            })
        });
    };

    toggleAllTodo = event => {
        this.setState({
            todos: this.state.todos.map(function(todo) {
                return Object.assign({}, todo, { completed: event.target.checked });
            })
        });
    };

    deleteParentTodo = deletedTodo => {
        this.setState({
            todos: this.state.todos.filter(function(todo) {
                return todo !== deletedTodo;
            })
        });
    };

    clearCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(function(todo) {
                return !todo.completed;
            })
        });
    };
    handleClickAll = () => {
        this.setState({ nowShowing: ALL });
    };
    handleClickActive = () => {
        this.setState({ nowShowing: ACTIVE });
    };
    handleClickComplete = () => {
        this.setState({ nowShowing: COMPLETED });
    };

    render() {
        let { todos, nowShowing } = this.state;
        let filter = null;
        let activeTodoCount = todos.reduce((accum, todo) => {
            return todo.completed ? accum : accum + 1;
        }, 0);
        let completedCount = todos.length - activeTodoCount;

        let shownTodos = [];
        for (let i = 0; i < todos.length; i++) {
            if (nowShowing === ACTIVE) {
                if (todos[i].completed) shownTodos = shownTodos.concat(todos[i]);
            } else if (nowShowing === COMPLETED) {
                if (!todos[i].completed) shownTodos = shownTodos.concat(todos[i]);
            } else shownTodos = shownTodos.concat(todos[i]);
        }

        if (activeTodoCount || completedCount) {
            filter = (
                <TodoFilter
                    count={shownTodos.length}
                    completedCount={completedCount}
                    clearCompletedButton={this.clearCompleted}
                    clickedAll={this.handleClickAll}
                    clickedActive={this.handleClickActive}
                    clickedCompleted={this.handleClickComplete}
                    nowShowing={nowShowing}
                />
            );
        }

        return (
            <div>
                <section className="todoapp">
                    <Header />
                    <TodoForm newTodoInsert={this.onNewTodoInsert} />
                    <TodoList
                        todos={shownTodos}
                        toggleParentTodo={this.toggleParentTodoStatus.bind(this)}
                        deleteParentTodo={this.deleteParentTodo.bind(this)}
                        toggleAllTodo={this.toggleAllTodo}
                        handleClick={this.onHandleClick}
                    />
                    {filter}
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;

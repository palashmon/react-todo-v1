import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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

    toggleParentTodoStatus = updatedTodo => {
        this.setState({
            todos: this.state.todos.map(function(todo) {
                return todo.id !== updatedTodo.id
                    ? todo
                    : Object.assign({}, todo, { completed: !updatedTodo.completed });
            })
        });
    };

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header />
                    <TodoForm newTodoInsert={this.onNewTodoInsert} />
                    <TodoList todos={this.state.todos} toggleParentTodo={this.toggleParentTodoStatus.bind(this)} />
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;

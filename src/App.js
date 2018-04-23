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

    onNewTodoInsert = title => {
        this.setState({
            todos: this.state.todos.concat({
                title: title,
                completed: false
            })
        });
    };

    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header />
                    <TodoForm newTodoInsert={this.onNewTodoInsert} />
                    <TodoList todos={this.state.todos} />
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;

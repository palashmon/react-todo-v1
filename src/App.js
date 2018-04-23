import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header />
                    <TodoForm />
                    <TodoList />
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;

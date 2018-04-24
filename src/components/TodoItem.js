import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editText: this.props.todo.title
        };
    }

    render() {
        return (
            <li>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.todo.completed}
                        onChange={this.props.onToggle}
                    />
                    <label>{this.props.todo.title}</label>
                </div>
            </li>
        );
    }
}

export default TodoItem;

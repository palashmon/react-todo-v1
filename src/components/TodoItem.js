import React, { Component } from 'react';
import classNames from 'classnames';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editText: this.props.todo.title
        };
    }

    render() {
        let liClasses = classNames({
            'main-class': true,
            completed: this.props.todo.completed,
            editing: this.props.editing
        });

        return (
            <li className={liClasses}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={this.props.todo.completed}
                        onChange={this.props.onToggle}
                    />
                    <label>{this.props.todo.title}</label>
                    <button className="destroy" onClick={this.props.onDeleteClick} />
                </div>
            </li>
        );
    }
}

export default TodoItem;

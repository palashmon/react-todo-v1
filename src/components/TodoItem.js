import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object,
        editing: PropTypes.bool,
        onToggle: PropTypes.func,
        onDeleteClick: PropTypes.func
    };
    state = {
        editText: this.props.todo.title
    };

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

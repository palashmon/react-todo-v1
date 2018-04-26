import React, { Component } from 'react';
import Utils from '../utils/helpers';

class TodoFilter extends Component {
    handleClearCompleted = () => {
        this.props.clearCompletedButton();
    };
    handleAll = () => {
        this.props.clickedAll();
    };
    handleActive = () => {
        this.props.clickedActive();
    };
    handleCompleted = () => {
        this.props.clickedCompleted();
    };

    render() {
        let { completedCount, count } = this.props;
        let clearButton = null;
        let activeTodoWord = Utils.pluralize(count, 'item');
        if (completedCount > 0) {
            clearButton = (
                <button className="clear-completed" onClick={this.handleClearCompleted}>
                    Clear completed
                </button>
            );
        }

        return (
            <footer className="footer">
                <strong className="todo-count">
                    {this.props.count} {activeTodoWord} left
                </strong>
                <ul className="filters">
                    <li key="1112221">
                        <a onClick={this.handleAll} href="#">
                            All
                        </a>
                    </li>
                    <li key="1112222">
                        <a onClick={this.handleCompleted} href="#">
                            Completed
                        </a>
                    </li>
                    <li key="1112223">
                        <a onClick={this.handleActive} href="#">
                            Active
                        </a>
                    </li>
                </ul>
                {clearButton}
            </footer>
        );
    }
}

export default TodoFilter;

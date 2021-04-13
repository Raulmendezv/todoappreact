import React from 'react';
import '../css/Todo.css';
import Checkmark from "./Checkmark";

class Todo extends React.Component {
    state = {
        done: false,
    }
    handleOnClick = () => {
        this.setState({ done: !this.state.done })
    }

    render() {
        return (
            <div className={`list-item ${this.state.done ? 'done' : ''}`}>
                Tarea
                <Checkmark handleOnClick={
                    this.handleOnClick} />
                <button className="delete is-pulled-right" />
            </div>
        )
    }
}

export default Todo;
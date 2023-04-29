import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const {text, checked, id, onToggle, onRemove} = this.props;
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {

          // onToggle이 실행되지 않도록 한다.
          e.stopPropagation();
          onRemove(id);
        }}>&times;
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>
            {text}
          </div>
          {
            checked && (<div className="check-mark">&#x2228;</div>)
          }
        </div>

      </div>
    );
  }
}

export default TodoItem;
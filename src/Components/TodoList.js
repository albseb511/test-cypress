import React from 'react'

const TodoItem = props =>
  <li>
    <div >
      <input type="checkbox" />
      <label>
        {' '}
      </label>
      <button className="btn-danger" />
    </div>
  </li>

export default props =>
  <ul className="todo-list">
    {props.todos.map(todo => <TodoItem />)}
  </ul>
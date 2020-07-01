import React from 'react'

const TaskForm = props =>
  <form onSubmit={props.onSubmit}>
    <input
      type='text'
      autoFocus
      value={props.value}
      onChange={props.onChange}
      className="p-2 rounded border task-input"
      placeholder="Add something?"/>
  </form>

  export default TaskForm
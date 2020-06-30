import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
  <footer >
    <span>
      <strong>0</strong> todos left
    </span>
    <ul className="text-left">
      <li><Link to="/">All</Link></li>
      {' '}
      <li><Link to="/active">Active</Link></li>
      {' '}
      <li><Link to="/completed">Completed</Link></li>
    </ul>
  </footer>
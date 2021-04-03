import React from 'react';
import './Dashboard.css';
import TodoList from './Components/TodoList';

  
  function Dashboard() {
    return (
      <div className="todo-app">
        <TodoList />
      </div>
    );
  }

export default Dashboard;
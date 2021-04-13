import React from 'react';
import Form from './Form';
import Header from './Header';
import TodoList from './TodoList';

function App() {
  return (
    <div className="wrapper">
      <div className="card frame">
        <Header />
        <TodoList />
        <Form />
      </div>
    </div>
  );
}

export default App;
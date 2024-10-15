'use client';
import React, { useState, useEffect } from 'react';

const Table = () => {
  const [todos, setTodos] = useState([]);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredTodos = searchId
    ? todos.filter((todo) => todo.id === parseInt(searchId))
    : todos;

  return (
    <div>
      <h1 className='list'>Todos List</h1>
      
      <div className='inputid'>
        <input
          type="text"
          placeholder="Enter ID..."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>
      
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'True' : 'False'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React from 'react';
import ToDoList from './ToDo/ToDoList';
import Context from './context';
import AddTodo from './ToDo/AddTodo';

function App() {

  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купить хлеб'},
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const styles = {
    div: {
      width: '1200px',
      margin: '0 auto',
      paddingTop: '10px'
    }
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App" style={styles.div}>
        <h1 style={{margin: '0 auto', textAlign: 'center'}}>To Do List: {todos.length}</h1>
        <AddTodo  onCreate={addTodo}/>
        {
          todos.length ? (< ToDoList 
            todos={todos}
            onToggle={toggleTodo} />) :
            <p>NO TODOS</p>
        }
        
      </div>
    </Context.Provider>
  );
}

export default App;

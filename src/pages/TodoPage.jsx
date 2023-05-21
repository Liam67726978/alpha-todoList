import { useState } from 'react';
import { Footer, Header, TodoCollection, TodoInput } from 'components';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);

  function handleInputChange(value) {
    setInputValue(value);
  }

  function handleAddTodo() {
    if (inputValue.length === 0) return;
    setTodos([
      ...todos,
      {
        title: inputValue,
        isDone: false,
        id: Math.random() * 100,
      },
    ]);
    setInputValue('');
  }

  function handleKeyPress() {
    if (inputValue.length === 0) return;
    setTodos([
      ...todos,
      {
        title: inputValue,
        isDone: false,
        id: Math.random() * 100,
      },
    ]);
    setInputValue('');
  }

  function handleToggleDone(id) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  }

  function handleChangeMode({ id, isEdit }) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        }
        return {
          ...todo,
          isEdit: false,
        };
      });
    });
  }

  function handleSave({ id, title }) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            isEdit: false,
          };
        }
        return todo;
      });
    });
  }

  function handleDelete(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleInputChange}
        onAddTodo={handleAddTodo}
        onKeyPress={handleKeyPress}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer todos={todos} />
    </div>
  );
};

export default TodoPage;

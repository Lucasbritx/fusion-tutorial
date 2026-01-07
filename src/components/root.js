import React, {useState} from 'react';

const Root = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleOnKeydown = (e) => {
    if (e.key === 'Enter') {
      setInputText('');
      setTodos([
        ...todos,
        inputText
      ]);
    }
  };

  const handleOnChange = (e) => {
    setInputText(e.currentTarget.value);
  };

  return (
    <>
      <h1>todos</h1>
      <div className="container">
        <input
          onChange={handleOnChange}
          onKeyDown={handleOnKeydown}
          placeholder="What needs to be done?"
          value={inputText}
          type="text"
        />
        {todos.map(todo => (
          <div className="todo">
            <div className="todo-text">{todo}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default <Root />;
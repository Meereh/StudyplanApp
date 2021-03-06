import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


const GlobalStyle = createGlobalStyle `
  body{
    background: #e9ecef;

  }
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <div>
      <TodoTemplate>
        <TodoHead/>
        <TodoList>

        </TodoList>
      </TodoTemplate>
    </div>
    </>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';

const TodoBox = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 10px 15px;
    /*첫번째만 제외하고 경계선주기*/
    font-size: 1.25rem;
  }
  li + li {
    border-top: 1px dashed #000;
  }
`;

//함수명은 대문자 시작으로 쓰는 것이 관례
const TodoList = ({ todos }) => {
  return (
    <TodoBox>
      {todos && todos.length > 0 ? (
        todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
      ) : (
        <li>할일을 등록하세요.</li>
      )}
    </TodoBox>
  );
};

export default React.memo(TodoList);

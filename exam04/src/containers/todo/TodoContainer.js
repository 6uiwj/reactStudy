import React from 'react';
import styled from 'styled-components';
import TodoForm from '../../components/todo/TodoForm';
import TodoList from '../../components/todo/TodoList';

//매개변수로 템플릿 리터럴 안쪽의 내용이 전부 들어감
// *{ } : ContentBox 하위의 모든 선택자
const ContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background: #f8f8f8;
  padding: 25px;

  * {
    box-sizing: border-box;
  }
`;

const todos = [
  { id: 1, title: '할일1' },
  { id: 2, title: '할일2' },
];

const TodoContainer = () => {
  return (
    <ContentBox>
      <TodoForm />
      <TodoList todos={todos} /> {/* todos는 TodoList의 속성값으로 넘겨줌 */}
    </ContentBox>
  );
};

export default React.memo(TodoContainer);

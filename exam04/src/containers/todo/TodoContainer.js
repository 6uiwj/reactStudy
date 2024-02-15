import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { produce } from 'immer';
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
/* 초기값 제거(240215)
const todos = [
  { id: 1, title: '할일1' },
  { id: 2, title: '할일2' },
];
*/
const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const onSubmit = useCallback(
    (e) => {
      //양식 기본 동작 차단
      e.preventDefault();

      /*
      setTodos((todos) => {
        return todos.concat({ id: todos.length + 1, title });
      });

      */
      //produce 사용
      setTodos(
        produce((draft) => {
          draft.push({ id: draft.length + 1, title });
        }),
      );

      setTitle(''); //제목 비워주기
    },
    [title], //변화 감지를 위해 title을 넣어줌
  );

  const onChange = useCallback(
    (e) => setTitle(() => e.target.value.trim()),
    [],
  );

  //더블클릭했을 때
  //제거시 filter 사용
  const onDoubleClick = useCallback(
    //(id) => setTodos((todos) => todos.filter((todo) => todo.id !== id)), //아이디값이 넘어왓을 때 아이디값이 아닌 것만 걸러줌 (이것만 배제하고 다시 만들어 준다)

    (id) =>
      setTodos(
        produce((draft) => {
          draft.splice(
            draft.findIndex((todo) => todo.id === id),
            1,
          );
        }),
      ),

    [],
  ); //splice : 원본데이터가 바뀌고 주소가 바뀜(변화감지 불가) -> filter사용

  return (
    <ContentBox>
      <TodoForm onSubmit={onSubmit} onChange={onChange} title={title} />
      <TodoList todos={todos} onDoubleClick={onDoubleClick} />
      {/* todos는 TodoList의 속성값으로 넘겨줌 */}
    </ContentBox>
  );
};

export default React.memo(TodoContainer);

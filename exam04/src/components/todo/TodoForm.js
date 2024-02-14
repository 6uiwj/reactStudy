import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import styled from 'styled-components';

//flex-grow:1 : 꽉 채우기
const FormBox = styled.form`
  display: flex;
  height: 50px; /*주석이 달릴까*/
  input {
    flex-grow: 1;
    border-color: #000;
    padding: 0 10px;
  }

  button {
    width: 50px;
    background: #000;
    color: #fff;
    border: 0;
    cursor: pointer;

    svg {
      font-size: 2.5rem;
    }
  }
`;

const TodoForm = () => {
  return (
    <FormBox autoComplete="off">
      <input type="text" />
      <button type="button">
        <FiPlusSquare />
      </button>
    </FormBox>
  );
};

export default React.memo(TodoForm);

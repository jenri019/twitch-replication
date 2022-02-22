import React, { useState } from 'react';
import styled from 'styled-components'

export const HeaderSearchbar = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(inputValue.trim().length > 0) {
          setInputValue('');
      }
  }

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Búsqueda..."
        />
        <SubmitButton>
          A
        </SubmitButton>
      </StyledForm>
    </StyledDiv>
  )
}

//Setting styles to components
const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 50px;
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  background-color: #ffffff;
  border-style: none;
  color: #777777;
  border-radius: 5px 5px 5px 5px;
  &:focus {
    outline: none;
  }
  width: 27rem;
  padding: 5px;
`;

const SubmitButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border-style: none;
  display: flex;
  justify-content: center;
  width: 2rem;
  &:hover {
    background-color: black;
    transition: 2s;
  }
`;

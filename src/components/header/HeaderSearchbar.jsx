import React, { useState } from 'react';
import styled from 'styled-components'

export const HeaderSearchbar = () => {

  const [inputValue, setInputValue] = useState('Búsqueda...');

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
      <StyledForm action="" onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <SubmitButton>A
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
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  border-radius: 5px 5px 5px 5px;
  border: solid #ffffff;
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  background-color: #ffffff;
  border-style: none;
  color: #777777;
  margin: 5px;
  width: 15rem;
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border-style: none;
  display: flex;
  justify-content: center;
`;

import React from 'react'
import styled from 'styled-components'

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

export const HeaderSearchbar = () => {
  return (
    <StyledDiv>
      <StyledForm action="">
        <StyledInput type="text" />
        <SubmitButton>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </SubmitButton>
      </StyledForm>
    </StyledDiv>
  )
}

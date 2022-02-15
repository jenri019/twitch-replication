import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
`;

const SubmitButton = styled.button`
  width: 5rem;
`;

export const HeaderSearchbar = () => {
  return (
    <StyledDiv>
      <form action="">
        <StyledInput type="text" />
        <SubmitButton>A</SubmitButton>
      </form>
    </StyledDiv>
  )
}

import React from 'react'// Create a Title component that'll render an <h1> tag with some styles
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${({primary}) =>  primary ? '#6216c7' : '#5e5e5e'};
    border-radius: 5px;
    border-style: none;
    color: #ffffff;
    text-align: center;
    padding: 7px 10px;
    font-size: 0.8rem;
    font-weight: bold;
`;

export const Button = ({btnText, primary}) => {
  return (
      (primary)
      ?<StyledButton primary>{btnText}</StyledButton>
      :<StyledButton>{btnText}</StyledButton>
  )
}

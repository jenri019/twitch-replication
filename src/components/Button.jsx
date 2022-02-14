import React from 'react'// Create a Title component that'll render an <h1> tag with some styles
import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${(props) =>  props.btnprimary === true ? '#6216c7' : '#5e5e5e'};
    border-radius: 5px;
    border-style: none;
    color: #ffffff;
    text-align: center;
    padding: 10px;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 1px;
`;

import React from 'react'
import { StyledButton } from '../Button';
import styled from 'styled-components'

const Container = styled.nav`
    display: flex;
    background-color: #18181b;
    justify-content: space-around;
    align-items: center;
    height: 50px;
`;

export const HeaderAccount = () => {
  return (
    <Container>
      <i>V</i>
      <StyledButton >Iniciar sesión</StyledButton>
      <StyledButton btnprimary>Registrate</StyledButton>
      <i>Gs</i>
    </Container>
  )
}

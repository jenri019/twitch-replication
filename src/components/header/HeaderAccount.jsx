import React from 'react'
import { Button } from '../Button';
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
      <Button btnText="Registrate"/>
      <Button btnText="Crear cuenta" primary/>
      <i>Gs</i>
    </Container>
  )
}
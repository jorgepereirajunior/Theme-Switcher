import { FC } from 'react'

import { Container, Body } from './styles'

import { Header } from '../../components/header'


export const Main:FC = () => {
  return (
    <Container>
      <Header>Theme Switcher</Header>
      <Body>
        E agora
      </Body>
    </Container>
  )
}
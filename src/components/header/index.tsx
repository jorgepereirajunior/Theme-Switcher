import React, {FC} from 'react'

import { Container, Title } from './styles'

export const Header: FC = ({ children }) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  )
}
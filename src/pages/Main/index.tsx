import { FC } from 'react'
import Switch from 'react-switch'
import { Container, Body, Box } from './styles'

import { Header } from '../../components/header'

export const Main:FC = () => {
  return (
    <Container>
      <Header>Theme Switcher</Header>
      <Body>
        <Box>
          <Switch
            checked
            onChange={() => {}}
            checkedIcon={false}
            size={20}
            
          />
        </Box>
      </Body>
    </Container>
  )
}
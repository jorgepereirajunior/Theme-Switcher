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
            uncheckedIcon={false}
            height={10}
            width={35}
            handleDiameter={15}
            onHandleColor={'#ac0000'}
          />
        </Box>
      </Body>
    </Container>
  )
}
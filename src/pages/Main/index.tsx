import { FC, useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { Container, Body, Box } from './styles'

import { Header } from '../../components/header'

interface MainProps {
  toggleTheme(): void;
}

export const Main:FC<MainProps> = ({ toggleTheme }) => {
  const { colors, name } = useContext(ThemeContext)
  
  return (
    <Container>
      <Header>Theme Switcher</Header>
      <Body>
        <Box>
          <Switch
            onChange={toggleTheme}
            checked={name === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={30}
            handleDiameter={15}
            offColor={'#777'}
            onColor={'#777'}
            onHandleColor={colors.switch}
            offHandleColor={colors.switch}
          />
        </Box>
      </Body>
    </Container>
  )
}
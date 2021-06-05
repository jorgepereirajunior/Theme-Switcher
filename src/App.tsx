import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { Main } from './pages/Main'

const App: FC = () => {
  const [theme, setTheme] = useState(light)

  function toggleTheme() {
    setTheme(theme.name === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Main toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  )
}

export default App;

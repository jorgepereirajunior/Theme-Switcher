import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import light from './styles/themes/light'

import { Main } from './pages/Main'

const App: FC = () => {
  return (
    <ThemeProvider theme={light}>
      <>
        <GlobalStyle />
        <Main />
      </>
    </ThemeProvider>
  )
}

export default App;

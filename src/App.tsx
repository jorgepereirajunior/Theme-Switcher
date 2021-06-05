import React, { FC } from 'react';

import GlobalStyle from './styles/global'
import { Main } from './pages/Main'

const App: FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  )
}

export default App;

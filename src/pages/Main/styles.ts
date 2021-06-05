import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
`

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  background-color: ${props => props.theme.colors.background};
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28%;
  height: 38%;

  background-color: #FFF;

  box-shadow: 1px 1px 20px rgba(0,0,0,0.2);
`
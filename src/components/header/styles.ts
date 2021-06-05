import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;

  background-color: ${props => props.theme.colors.primary};
  box-shadow: 1px 1px 5px rgba(0,0,0,0.6);
`

export const Title = styled.h1`
  font-size: 21px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${props => props.theme.colors.title};
`
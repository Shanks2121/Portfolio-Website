import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
  display: inline-block;
  color: ${({ color }) => color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Pacifico', cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  /* Transition properties for smooth hover effect */
  transition: transform 0.2s ease-in-out;  /* Animation duration and easing function */

  &:hover {
    transform: scale(1.2);  /* Scale up by 20% on hover */
  }
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          SY
        </Logo>
    )
}

export default LogoComponent

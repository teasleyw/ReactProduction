import styled from 'styled-components';
import { FaHeartBroken } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { Button } from '@mui/material';
const bkgClr = "hsl(323,21%,16%)";

export const SandboxPage = styled.div`
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: ${bkgClr};
    color: pink;
    padding-right: 10rem;
`
export const NeonBtn = styled.a`
   &{
  color: ${props => props.NeonColor};
  font-size: 2rem;
  display: inline-block;
  cursor: pointer;
  border: ${props => props.NeonColor} 0.125em solid;
  padding: 0.25em 1.25em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.25em ${props => props.NeonColor};
  position: relative;
  box-shadow: inset 0 0 0.5em ${props => props.NeonColor}, 0 0 0.5em ${props => props.NeonColor};
  transition: background-color 100ms linear;
   }
  &:before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: ${props => props.NeonColor};
    top: 120%;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: perspective(1em) rotateX(40deg) translateZ(0em) scale(1,0.35);
    filter: blur(1em);
    opacity: 0.7;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 1em 0.5em ${props => props.NeonColor};
    transition: opacity 100ms linear;
    opacity: 0;
  }
  &:hover {
      background-color: ${props => props.NeonColor};
      color: ${bkgClr};
      text-shadow: 0 0 0.05em hsl(0 0% 100% / 0.5), 0 0 0.25em ${bkgClr};
  }
  &:focus {
      background-color: ${props => props.NeonColor};
      color: ${bkgClr};
      text-shadow: none;
  }
  &:hover::after {
      opacity: 1;
  }
  &:focus::after {
     opacity: 1;
  }
  &:hover::before {
      opacity: 1;
  }
`;
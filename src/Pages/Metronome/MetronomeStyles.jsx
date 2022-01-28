import styled from 'styled-components';
import { FaHeartBroken } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { Button } from '@mui/material';
const bkgClr = "hsl(323,21%,16%)";
const boxClr  = "rgb(32,32,32)"
const btnClr = "rgb(255,255,255)"
const titleColor = "#e9f362"
const pc = "white";
const qc = " silver";

export const SandboxPage = styled.div`
    min-height: 100vh;
    text-align: center;
    justify-content: center;
    background: ${bkgClr};
    display: grid;
    grid-template-rows: repeat(2, 0.3fr);
    row-gap: 0;
`

export const Title = styled.h1`
    margin-top: 1em;
    width: 100%;
    height: 10px;
    max-height: 10px;
    text-align: center;
    color: ${titleColor};

    
`
export const MetronomeBox = styled.div`
    background-color: ${boxClr};
    border-radius: 1em;
    border: white 0.125em solid;
    min-height: 25em;
    width: 50em;
    text-align: center;
    color: ${titleColor};
    flex-flow: wrap column;
    padding: 5px;
    justify-content: center;
    
`
export const BPM = styled.h2`
    margin-top: 1em;
    color: rgb(0,206,209);
    
`

export const CurrentBeatNumber = styled.h2`
    width: 100%;
    margin: 5px;
    user-select: none;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2em;
    
`
export const Beats = styled.div`

    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    
`
export const Beat = styled.span`
&{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${pc};

}
&.is-active{
    background-color: ${qc};
}
&.is-muted{
    display: none;
    visibility: hidden;
}
    
`
export const Slider = styled.div`
    margin-top: 1em;
    color: rgb(0,206,209);
    
`
export const PlayBtn = styled.h2`
    margin-top: 1em;
    color: rgb(0,206,209);
    
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
    transition: box-shadow 1000ms linear;
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
export const DiscoBtn = styled.a`
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
  transition: 1000ms linear;

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
    transition: background 1000ms linear;
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
    transition: box-shadow 1000ms linear;
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
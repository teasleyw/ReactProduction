import React, { useState, useEffect } from 'react';
import {
    HeaderButtons,
    SandboxPage,
    MetronomeBox,
    Title,
    BPM,
    CurrentBeatNumber,
    Beats,
    Beat,
    Slider,
    PlayBtn,
    DiscoBtn,
  } from './MetronomeStyles.jsx';
import "./Metronome.scss"

export default function Metronome() {
    const [BPMn,setBPM] = useState(160);
    const [currBeat,setCurrBeat] = useState(0);
    
    function handleChange(event) {
        setBPM(event.target.value)
        console.log({BPMn})
        if (event.target.value > 300){
            setBPM(300)
        }
        else if (event.target.value <= -1){
            setBPM(0)
        }
    }
    
    return (
        <>
        <SandboxPage>
            <Title>
                Metronome
            </Title>
            <MetronomeBox>
                <CurrentBeatNumber>--</CurrentBeatNumber>
                <Beats>
                    <Beat/>
                    <Beat/>
                    <Beat/>
                    <Beat/>
                    <Beat/>
                </Beats>
                <Slider>

                </Slider>
                <PlayBtn>

                </PlayBtn>
                <BPM >
                BPM: &nbsp;
                <input onChange={handleChange} value={BPMn} type='number' step={1} min="10" max="300"/>
                </BPM>
                <DiscoBtn NeonColor = "red"> 4/4</DiscoBtn>
                <DiscoBtn NeonColor = "yellow"> 3/4</DiscoBtn>
                <DiscoBtn NeonColor = "lightblue"> 6/8</DiscoBtn>

            </MetronomeBox>
            
        </SandboxPage>
       
        </>
);
  }


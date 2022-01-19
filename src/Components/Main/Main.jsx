import React from 'react'
import "./main.css";
import HeroSection from '../HeroSection';
import InfoElements from '../InfoSection'
import { LockheedMartinSpace, NormaGroup,Bowling } from '../InfoSection/Data';
export default function Main() {
    return (
        <>
            <HeroSection/>
            <InfoElements {...NormaGroup}/>
            <InfoElements {...LockheedMartinSpace}/>
            <InfoElements {...Bowling}/>
        </>
    )
}

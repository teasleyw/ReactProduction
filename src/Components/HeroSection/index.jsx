import React, {useState} from 'react'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroBtnWrapper,Hero1,HeroP,ArrowForward,ArrowRight} from './HeroElements'
import Video from '../../Videos/video.mp4'
import {Button} from '../ButtonElement'
const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <Hero1>Full-stack Developer</Hero1>
                <HeroP>
                I am a graduate of Michigan State University.<br></br><br></br>
                I obtained a bachelor's degree in Computer Science.<br></br><br></br>
                Searching for Full Time Opportunity<br></br><br></br>
                This is my portfolio website as well as a way to put my skills to practice<br></br><br></br>
                scroll down to find out more about me and this project.

                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    href='/SignUp' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Sign Up to my website
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

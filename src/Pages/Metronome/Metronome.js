import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'rc-slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import metronomeWorker from './MetronomeWorker.js'
import WorkerBuilder from './workerBuilder.js'
import 'rc-slider/assets/index.css'
import './styles.css'
import {
    HeaderButtons,
    SandboxPage,
    MetronomeBox,
    Title,
    BPM,
    CurrentBeatNumber,
    Beats,
    Beat,
    PlayBtn,
    DiscoBtn,
  } from './MetronomeStyles.jsx';
import "./Metronome.scss"
import click1 from "../../Sounds/click1.wav"
import click2 from "../../Sounds/click2.wav"
const timerWorker = new WorkerBuilder(metronomeWorker);

class Metronome extends React.Component {
    constructor({startBpm = 20,frequency = 440.0,volume = 0.5,minBpm=0,maxBpm=300,...props}) {
        super()
        this.minBpm = minBpm
        this.maxBpm = maxBpm
        this.volume = volume
        this.tempoSelected = 1;
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
        this.frequency = frequency
        this.nextNoteTime = 0.0
        this.secondsPerBeat = 60.0 / startBpm
        this.volume = 1
        
        // initial state
        this.state = {
            TotalBeats:4,
            currBeat:0,
            bpm: startBpm,
            playing: false,
            tempoSelected: 1
        }

        // bind functions
        this.handlePlayPause = this.handlePlayPause.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    initAudio(){
        // create the audio context
        this.audioContext = new AudioContext()

        this.volumeNode = this.audioContext.createGain()
        this.volumeNode.gain.value = this.volume
        this.volumeNode.connect(this.audioContext.destination)

        // create a buffer source and add the buffer
        var source = this.audioContext.createBufferSource()
        source.buffer = this.audioContext.createBuffer(1, 1, 22050)

        // start playing the audio data immediately
        source.start(0)
    }

    handleChange(newBpm) {
        if (newBpm < this.minBpm || newBpm > this.maxBpm) return
        this.setState((prevState) => ({
            ...prevState,
            bpm: newBpm
        }), ()=> {
            this.secondsPerBeat = 60.0 / this.state.bpm
        })
    }
    componentDidMount() {
        timerWorker.onmessage = (message) => {
          if (message) {
            console.log("Message from worker", message.data);
          }
          if (message.data == 'tick'){
              this.tick()
          }
        };
      }
    // fired when a tick message is received from the interval worker (only when playing)
    tick() {
        // when it is time to schedule a note to play
        // we use while becuase audioContext time is incrementing even when paused
        // so we loop until the nextNoteTime catches up
        while (this.nextNoteTime < this.audioContext.currentTime + 0.1 ) {
        
            // create an oscillator which generates a constant tone (a beep)
            var osc = this.audioContext.createOscillator()
            osc.connect( this.volumeNode )
            //Play Higher beep on the emphasized beats
            

            if ((this.state.currBeat + 1 )> this.state.TotalBeats){
                this.setState(() => ({
                    currBeat: 1
                 }))
            }
            else{
                this.setState(() => ({
                    currBeat: this.state.currBeat + 1
                 }))
            }
            if (this.state.currBeat == 1){
                osc.frequency.value = this.frequency + 50
            }
            else{
                osc.frequency.value = this.frequency
            }

            // start the beep at the next note time
            osc.start( this.nextNoteTime )

            // stop the beep after at the note length
            osc.stop( this.nextNoteTime + 0.075 )
           

            
            // calculate the time of the next note
            this.nextNoteTime += this.secondsPerBeat
        }
       
    }
    handlePlayPause() {
        // if the audio context hasn't been created, we need to set it up
        // we must create the audio context after a user gesture (browser autoplay policy)

        this.initAudio()
        this.nextNoteTime = 0
        // start or stop the interval loop in the worker
        timerWorker.postMessage({message: !this.state.playing ? "start" : "stop" })
        // update the state so the play/pause icon re-renders
        this.setState((prevState) => ({
            ...prevState,
            playing: !prevState.playing
        }))
        if (this.state.playing === true){
            this.setState(() => ({
               currBeat: 0
            }))
            console.log('done')
        }
        else{
            this.setState(() => ({
                currBeat: 0
             }))
             // play first beep
             // create an oscillator which generates a constant tone (a beep)
             var osc = this.audioContext.createOscillator()
             osc.frequency.value = this.frequency + 50
             osc.connect( this.volumeNode )
             // start the beep at the next note time
             osc.start( this.nextNoteTime )
 
             // stop the beep after at the note length
             osc.stop( this.nextNoteTime + 0.075 )
        }
    }
    handleTempoChange(tempo) {
        // update the state so the play/pause icon re-renders
        this.setState(() => ({
            tempoSelected: tempo
        }))
    }
    render() {
        return (
            <SandboxPage>
            <Title>
                Metronome
            </Title>
            <MetronomeBox>
                <CurrentBeatNumber>{this.state.bpm}</CurrentBeatNumber>
                <Beats>
                    {this.state.tempoSelected == 2 &&
                    <>
                        <Beat selected={this.state.currBeat == 1 ? true : false}/>
                        <Beat selected={this.state.currBeat == 2 ? true : false}/>
                        <Beat selected={this.state.currBeat == 3 ? true : false}/>
                    </>
                    }
                    {this.state.tempoSelected == 1 &&
                    <>
                        <Beat selected={this.state.currBeat == 1 ? true : false}/>
                        <Beat selected={this.state.currBeat == 2 ? true : false}/>
                        <Beat selected={this.state.currBeat == 3 ? true : false}/>
                        <Beat selected={this.state.currBeat == 4 ? true : false}/>
                    </>
                    }
                    {this.state.tempoSelected == 3 &&
                    <>
                        <Beat/>
                        <Beat/>
                        <Beat/>
                        <Beat/>
                        <Beat/>
                        <Beat/>
                        <Beat/>
                        <Beat/>
                    </>
                    }
                </Beats>
                <Slider
                       min={this.minBpm}
                       max={this.maxBpm}
                       step={1}
                       value={this.state.bpm}
                       onChange={this.handleChange} />
                <PlayBtn>

                </PlayBtn>

                <DiscoBtn NeonColor = "white" selected={this.state.playing == true ? true : false} 
                onClick={() => this.handlePlayPause()}>Play/Pause</DiscoBtn>
                <DiscoBtn NeonColor = "red" selected={this.state.tempoSelected == 1 ? true : false}
                onClick={() => this.handleTempoChange(1)}> 
                4/4</DiscoBtn>
                <DiscoBtn NeonColor = "yellow" selected={this.state.tempoSelected == 2 ? true : false}
                onClick={() => this.handleTempoChange(2)}> 
                3/4</DiscoBtn>
                <DiscoBtn NeonColor = "lightblue"selected={this.state.tempoSelected == 3 ? true : false}
                onClick={() => this.handleTempoChange(3)}
                > 6/8</DiscoBtn>

            </MetronomeBox>
            
        </SandboxPage>
        )
    }
}


export default Metronome
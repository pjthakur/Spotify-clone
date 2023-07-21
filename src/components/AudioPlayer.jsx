import React from 'react'
import './styles/audio.css'
import banner from '../assets/banner.png'
import more from '../assets/details.png'
import back from '../assets/backward.png'
import forw from '../assets/forward.png'
import play from '../assets/play.png'
import speaker from '../assets/speaker.png'

const AudioPlayer = () => {
  return (
    <div className='audio-player-out'>
    <div className='audio-player'>
      <div className='player-details'>
        <h1>Viva La Vida</h1>
        <p>Coldplay</p>
      </div>
      <div className='player-banner-out'>
        <img className='player-banner' src={banner}/>
        <div className='player-progress'></div>
      </div>
      <div className='player-controls'>
        <div className='more-button'>
          <img src={more} alt='more-button'/>
        </div>
        <div className='main-controls'>
          <div className='back-button'><img src={back} alt='back-button'/></div>
          <div className='play-button'><img src={play} alt='play-button'/></div>
          <div className='back-button'><img src={forw} alt='forw-button'/></div>
        </div>
        <div className='more-button'>
          <img src={speaker} alt='speaker-button'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AudioPlayer
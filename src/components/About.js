import React from 'react'
import example from './../assets/example.svg'

export const About = () => {
  return (
    <div className='about-text'>
        <img src={example}></img>
        <h1>upload .csv file → set parameters → save the result</h1>
        <div>Any questions? <a href='mailto:dmitryletov2595@ya.ru'>Contact me</a></div>
        <span className='small-width-description'>Sorry, it seems that your device screen width is too low. Make sure, that your device screen width &gt; 800 pixels for correct working.</span>
    </div>
  )
}

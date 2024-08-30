import React from 'react'
import example from './../assets/example.svg'

export const About = () => {
  return (
    <div className='about-text'>
        <img src={example}></img>
        <h1>upload .csv file → set parameters → save the result</h1>
        <div>Any questions? <a href='mailto:dmitryletov2595@ya.ru'>Contact me</a></div>
    </div>
  )
}

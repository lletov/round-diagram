import React from 'react'
import gitlogo from './../assets/git_logo.png'

export const PanelHeader = () => {
    const brand = 'diagram'.toUpperCase();
  return (
    <div className='panel-header'>
        <h1>{brand}</h1>
        <div className='panel-header-links'>
            <a href='https://github.com/lletov/round-diagram' title='GitHub'><img src={gitlogo}/></a>
        </div>
    </div>
  )
}

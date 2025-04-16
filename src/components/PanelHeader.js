import React from 'react'
import gitlogo from './../assets/git_logo.png'
import userIcon from './../assets/user_icon.png'
import useStore from './../store/Store'
import { LoginForm } from './LoginForm'

export const PanelHeader = () => {
    const brand = 'diagram'.toUpperCase();
    const state = useStore((state) => state);

    function handleFormBtn(bool){
      state.setLoginFormHover(bool)
    }
  return (
    <div className='panel-header'>
        <h1>{brand}</h1>
        <div className='panel-header-links'>
            <a href='https://github.com/lletov/round-diagram' title='GitHub'><img src={gitlogo}/></a>
            <div className='file-info-btn' onClick={()=>{handleFormBtn(!state.loginFormHover)}}><img src={userIcon}/></div>
        </div>
        < LoginForm />
    </div>
  )
}

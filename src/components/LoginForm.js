import React from 'react'
import { useRef, useEffect } from 'react';
import useStore from './../store/Store'
import { useClickOutside } from './hooks/ClickOutside';

export const LoginForm = () => {
    const state = useStore((state) => state);

    const formRef= useRef(null);

    function closeForm(){
        state.setLoginFormHover(false)
    }

    useClickOutside(formRef, closeForm);

    return (
        <div 
            // ref={formRef}
            className='panel login-form' 
            style={{display: state.loginFormHover === true 
                ? 'block' 
                : 'none'
            }}
        >
            <div className='panel-block-header'>
                <h1>Login</h1>
            </div>
        </div>
    )
}

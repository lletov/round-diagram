import React from 'react'
import { useRef, useEffect } from 'react';
import useStore from './../store/Store'
import FileSample from './FileSample';
import { useClickOutside } from './hooks/ClickOutside';

export const FileTooltip = () => {

    const tooltipRef= useRef(null);

    const state = useStore((state) => state);

    function closeTooltip(){
        state.setFileTooltipBtnHover(false)
    }

    useClickOutside(tooltipRef, closeTooltip);

    return (
        <div 
            ref={tooltipRef}
            className='panel file-info-tooltip' 
            style={{visibility: state.fileTooltipBtnHover === true 
                ? 'visible' 
                : 'hidden'
            }}
        >
            <div className='panel-block-header'>
                <h1>Tooltip</h1>
                <h2>Here the file structure sample is shown. Make your files with the same structure. Copy it, paste in text editor, edit as you need with your points and connections, save as .csv file, upload here with file uploader and see the result.</h2>
            </div>
            <FileSample/>
        </div>
    )
}

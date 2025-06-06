import React from 'react'
import { useContext, useRef, useEffect } from 'react';
import { RangeSetting } from './RangeSetting'
import useStore from './../store/Store'
import takeScreenShot from './../methods/Screenshot'
import { FileTooltip } from './FileTooltip';
import { PanelHeader } from './PanelHeader';

export const Panel = () => {

  const state = useStore((state) => state);

  function handleFile(file) {
    console.log(file.name, ' file uploaded');
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        console.log(file.name, ' file set');
        state.setDiagramObject(reader.result);
    }
  }

  function handleSaveBtnMouse(bool){
    state.setSaveBtnHover(bool)
  }
  function saveBtnMouseClick(){
    console.log('save btn clicked');
    if (state.file && state.diagramObject){
        takeScreenShot("diagram-area", state.file.name.split(".")[0] + "_diagram", "image/png");
    }
  }
  function handleFileTooltipBtn(bool){
    state.setFileTooltipBtnHover(bool)
  }

  const rangeSettings = [
    {
        title: 'Diagram radius',
        stateParam: 'diagramRadius',
        min: "50",
        max: Math.round(state.canvasCenterY),
        value: state.diagramRadius
    },
    {
        title: 'Group radius',
        stateParam: 'groupRadius',
        min: "25",
        max: Math.round(state.canvasCenterY/2),
        value: state.groupRadius
    },
    {
        title: 'Point radius',
        stateParam: 'pointRadius',
        min: "50",
        max: Math.round(state.canvasCenterY/2),
        value: state.pointRadius
    }
]

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutsideTooltip, false);
//     return () => {
//       document.removeEventListener("click", handleClickOutsideTooltip, false);
//     };
//   }, []);

//   const handleClickOutsideTooltip = event => {
//     if (refOutside.current && !refOutside.current.contains(event.target)) {
//         handleFileTooltipBtn(false);
//     }
//   };

  return (
    <div className='panel'>
        <div className='panel-block'>
            <PanelHeader/>
            <div className='panel-block-header'>
                <h1>Upload File</h1>
                <div className='file-panel-header'>
                    <h2>Browse file in .csv format</h2>
                    <div
                        className='file-info-btn'
                        onClick={()=>{handleFileTooltipBtn(!state.fileTooltipBtnHover)}}
                    >i
                    </div>
                    <FileTooltip/>
                </div>
                
            </div>
            <input 
                type='file' 
                accept='.csv' 
                onChange={(event) => {
                    state.setFile(event.target.files)
                    handleFile(event.target.files[0]);
                }}
            />
        </div>
        <div className='panel-block'>
            <div className='panel-block-header'>
                <h1>Settings</h1>
                <h2>Set diagram params as you need</h2>
            </div>
            {rangeSettings.map((s, index) => 
               <RangeSetting key={index}
                    title={s.title}
                    stateParam={s.stateParam}
                    min={s.min}
                    max={s.max}
                    value={s.value}
               /> 
            )}
        </div>
        <div className='panel-block'>
            <div className='panel-block-header'>
                <h1>Save</h1>
                <h2>Save diagram result on your PC as .png file</h2>
            </div>
            <button 
                className='btn-m' 
                onClick={saveBtnMouseClick} 
                onMouseOver={()=>{handleSaveBtnMouse(true)}}
                onMouseLeave={()=>{handleSaveBtnMouse(false)}}
                
            >Save</button>
        </div>
    </div>
  )
}

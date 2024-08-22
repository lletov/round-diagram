import React from 'react'
import { useContext } from 'react';
import { RangeSetting } from './RangeSetting'
import useStore from './../store/Store'
import takeScreenShot from './../methods/Screenshot'

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
  // setSaveBtnHover

  function saveBtnMouseOver(){
    console.log('save btn hover')
    state.setSaveBtnHover(true)
  }
  function saveBtnMouseLeave(){
    console.log('save btn not hover')
    state.setSaveBtnHover(false)
  }
  function saveBtnMouseClick(){
    console.log('save btn clicked');
    if (state.file && state.diagramObject){
        takeScreenShot("diagram-area", state.file.name.split(".")[0] + "_diagram", "image/png");
    }
  }

  return (
    <div className='panel'>
        <div className='panel-block'>
            <div className='panel-block-header'>
                <h1>Upload File</h1>
                <h2>Browse file in .csv format</h2>
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
            <RangeSetting
                title='Diagram radius'
                stateParam='diagramRadius'
                min="50"
                max={Math.round(state.canvasCenterY)}
                value={state.diagramRadius}
            />
            <RangeSetting
                title='Group radius'
                stateParam='groupRadius'
                min="25"
                max={Math.round(state.canvasCenterY/2)}
                value={state.groupRadius}
            />
            <RangeSetting
                title='Point radius'
                stateParam='pointRadius'
                min="50"
                max={Math.round(state.canvasCenterY/2)}
                value={state.pointRadius}
            />
        </div>
        <div className='panel-block'>
            <div className='panel-block-header'>
                <h1>Save</h1>
                <h2>Save diagram result on your PC as .png file</h2>
            </div>
            <button 
                className='btn-m' 
                onClick={saveBtnMouseClick} 
                onMouseOver={saveBtnMouseOver}
                onMouseLeave={saveBtnMouseLeave}
                
            >Save</button>
        </div>
    </div>
  )
}

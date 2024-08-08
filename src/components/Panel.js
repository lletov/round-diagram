import React from 'react'
import { useContext } from 'react';
import { RangeSetting } from './RangeSetting'
import { DiagramContext } from './Context.js';

export const Panel = () => {

  const params = useContext(DiagramContext);

  return (
    <div className='panel'>
        <div className='panel-block'>
            <div className='panel-block-header'>
                <h1>Upload File</h1>
                <h2>Browse file in .csv format</h2>
            </div>
            <input type='file'/>
        </div>
        <div className='panel-block'>
            <div className='panel-block-header'>
                <h1>Settings</h1>
                <h2>Set diagram params as you need</h2>
            </div>
            <RangeSetting
                title='Diagram radius'
                min="10"
                max="40"
                value={params.diagramRadius}
                width={params.width}
            />
            <RangeSetting
                title='Group radius'
                min="10"
                max="40"
                value={params.groupRadius}
            />
            <RangeSetting
                title='Point radius'
                min="10"
                max="40"
                value={params.pointRadius}
            />
        </div>
        <div className='panel-block'>
            <div className='panel-block-header'>
                <h1>Save</h1>
                <h2>Save diagram result on your PC as .png file</h2>
            </div>
            <button className='btn-m'>Save</button>
        </div>
    </div>
  )
}

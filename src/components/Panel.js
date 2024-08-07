import React from 'react'
import { RangeSetting } from './RangeSetting'

export const Panel = () => {
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
            <RangeSetting/>
            <RangeSetting/>
            <RangeSetting/>
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

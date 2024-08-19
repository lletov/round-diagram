import React from 'react'
import { useContext } from 'react';
import { RangeSetting } from './RangeSetting'
import useStore from './../store/Store'
import { pointsByGroups, getGroupsCenters, getPointsCenters, transformToCorrectObject } from './../methods/Methods'

export const Panel = () => {

  const state = useStore((state) => state);

  function handleFile(file) {
    console.log(file.name, ' file uploaded');
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        try{
            console.log(file.name, ' file set');
            let pointsObjectByGroups = pointsByGroups(reader.result)[0]; 
            let groups = pointsByGroups(reader.result)[1]; 
            let groupsAmount = pointsByGroups(reader.result)[2]; 
            let pointsObjectByGroupsWithGroupCenters = getGroupsCenters(
                pointsObjectByGroups,
                groups, 
                groupsAmount, 
                state.canvasCenterX, 
                state.canvasCenterY, 
                state.diagramRadius
            );
            let pointsObjectByGroupsWithAllCenters = getPointsCenters(
                pointsObjectByGroupsWithGroupCenters, 
                groups, 
                groupsAmount, 
                state.groupRadius
            )
            let correctObject = transformToCorrectObject(
                pointsObjectByGroupsWithAllCenters,
                groups
            )
            state.setDiagramObject(correctObject)
        }
        catch(e){
            console.error(e)
        }
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
                min="10"
                max="40"
                value={state.diagramRadius}
            />
            <RangeSetting
                title='Group radius'
                stateParam='groupRadius'
                min="10"
                max="40"
                value={state.groupRadius}
            />
            <RangeSetting
                title='Point radius'
                stateParam='pointRadius'
                min="10"
                max="40"
                value={state.pointRadius}
            />
        </div>
        <div className='panel-block'>
            <div className='panel-block-header'>
                <h1>Save</h1>
                <h2>Save diagram result on your PC as .png file</h2>
            </div>
            <button className='btn-m' onClick={()=>{}}>Save</button>
        </div>
    </div>
  )
}

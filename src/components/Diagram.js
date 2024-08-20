import React from 'react'
import useStore from './../store/Store'
import { useState, useEffect, useLayoutEffect } from 'react'
import { Point } from './Point'
import { 
  testCreateObjectFromFile, 
  uploadFile,
  pointsByGroups, 
  getGroupsCenters, 
  getPointsCenters, 
  transformToCorrectObject,
  drawLines,
} from './../methods/Methods'

export const Diagram = () => {

  const state = useStore((state) => state);

  const handleResize = () => {
    console.log(window.innerWidth);
    state.setDiagramWidth(window.innerWidth);
    state.setDiagramHeight(window.innerHeight);
    state.setCanvasCenterX((window.innerWidth - 307) / 2);
    state.setCanvasCenterY((window.innerHeight - 8) / 2)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

  }, [state.diagramWidth])

  if (state.file){
    if (state.diagramObject) {

      let pointsObjectByGroups = pointsByGroups(state.diagramObject)[0]; 
      let groups = pointsByGroups(state.diagramObject)[1]; 
      let groupsAmount = pointsByGroups(state.diagramObject)[2]; 
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
      );
      let correctObject = transformToCorrectObject(
              pointsObjectByGroupsWithAllCenters,
              groups
      );
      // let canvas = document.getElementById("canvas");
      // let ctx = canvas.getContext("2d");
      // drawLines(correctObject, ctx);
      const pointsList = Object.keys(correctObject).map(k =>
          <div 
            key={k}
            className={'point' + ' ' + k}
            style={{
              top: correctObject[k].coords[1] + 'px', 
              left: correctObject[k].coords[0] + 'px',
              width: state.pointRadius + 'px',
              height: state.pointRadius + 'px',
            }}
            >
              {correctObject[k].title}
            </div>
        );
        return <div className='diagram'>{pointsList}</div>
      }
    return (
      <div className='diagram'>Loading...</div>
      )
  }
  return (
    <div className='diagram'>Diagram</div>
  )
}

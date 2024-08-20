      // console.log(file.name, ' file set');
      // let pointsObjectByGroups = pointsByGroups(reader.result)[0]; 
      // let groups = pointsByGroups(reader.result)[1]; 
      // let groupsAmount = pointsByGroups(reader.result)[2]; 
      // let pointsObjectByGroupsWithGroupCenters = getGroupsCenters(
      //     pointsObjectByGroups,
      //     groups, 
      //     groupsAmount, 
      //     state.canvasCenterX, 
      //     state.canvasCenterY, 
      //     state.diagramRadius
      // );
      // let pointsObjectByGroupsWithAllCenters = getPointsCenters(
      //     pointsObjectByGroupsWithGroupCenters, 
      //     groups, 
      //     groupsAmount, 
      //     state.groupRadius
      // );
      // let correctObject = transformToCorrectObject(
      //     pointsObjectByGroupsWithAllCenters,
      //     groups
      // )
      // state.setDiagramObject(correctObject)

      // let canvas = document.getElementById("canvas");
      // let ctx = canvas.getContext("2d");
      // drawLines(correctObject, ctx);



        // const pointsList = Object.keys(state.diagramObject).map(k =>
        //   <div 
        //     key={k}
        //     className={'point' + ' ' + k}
        //     style={{
        //       top: state.diagramObject[k].coords[1] + 'px', 
        //       left: state.diagramObject[k].coords[0] + 'px'
        //     }}
        //     >
        //       {state.diagramObject[k].title}
        //     </div>
        // );
        // return <div className='diagram'>{pointsList}</div>
        // let fr = state.diagramRadius * 3;
        // let gf = fr + 5
        // return <p>{gf}</p>

import React from 'react'
import useStore from './../store/Store'
import { useState, useEffect } from 'react'
import { Point } from './Point'
import { testCreateObjectFromFile, uploadFile } from './../methods/Methods'

export const Diagram = () => {

  const state = useStore((state) => state);

  if (state.file){
    if (state.diagramObject) {
        return (
          <p>Object recieved</p>
        )
      }
    return (
        <p>Loading...</p>
      )
  }
  return (
    <>
    <div className='diagram'>Diagram</div>
    </>
  )
}

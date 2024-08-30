
import { drawLine, getGroupCenters } from './MathMethods'
import React from 'react';

// - create diagram (after new file or new params)
// - clear data & canvas
// - get data from uploaded file
// - find center of groups 
// - find center of points
// - draw lines
// - create points 


export function replaceLetter(str){
    return str.replaceAll('P', 'Q')
}

export function pointsByGroups(str){
    let pointsArr = {};
    let rows = str.split('\n');
    let rowsNoR = rows.map((row) => row.replace(/\r?\n|\r/g, ''));
    let array2d = rowsNoR.map((row) => row.split(','));
    let groupsNames = [];
        for (let i = 1; i < array2d.length -1; i++) {
            groupsNames.push(array2d[i][2]);
        }
    const uniqueGroups = Array.from(new Set(groupsNames));
    for (let i = 0; i < uniqueGroups.length; i++) {
        pointsArr[`${uniqueGroups[i]}`] = {
            points: {},
            coords: [],
        }
        for (let j = 0; j < array2d.length; j++) {
            if (array2d[j].indexOf(uniqueGroups[i]) !== -1) {
                pointsArr[`${uniqueGroups[i]}`].points[`point${array2d[j][1].replace('point', '')}`] = {
                    title: array2d[j][0],
                    contacts: array2d[j][3].replaceAll('"', '').split('; ')
            }
        }
    }}
    let groupsAmount = Object.keys(pointsArr).length;
    let groups = Object.keys(pointsArr);
    return [pointsArr, groups, groupsAmount];
}

export function getGroupsCenters(pointsArr, groups, groupsAmount, canvasCenterX, canvasCenterY, mainRadius){
    let res = pointsArr;
    let mainGroupCenters = getGroupCenters(canvasCenterX, canvasCenterY, groupsAmount, mainRadius)
    for (let i = 0; i < groupsAmount; i++){
        res[groups[i]].coords = mainGroupCenters[i]
    }
    return res
}

export function getPointsCenters(pointsArr, groups, groupsAmount, secondaryRadius){
    let res = pointsArr;
    for (let i = 0; i < groupsAmount; i++){
        let pointsAmount = Object.keys(pointsArr[groups[i]].points).length
        let pointCenters = getGroupCenters(pointsArr[groups[i]].coords[0],
                                            pointsArr[groups[i]].coords[1], 
                                            pointsAmount, 
                                            secondaryRadius);
        // console.log(pointCenters)
        for (let j = 0; j < pointsAmount; j++){
            res[groups[i]].points[Object.keys(res[groups[i]].points)[j]].coords = pointCenters[j]
        } 
    }
    return res
}

export function transformToCorrectObject(pointsArr, groups){
    let transformedPoints = {}

    groups.forEach((group) => {
        for (let key of Object.keys(pointsArr[group].points)) {
                transformedPoints[key] = pointsArr[group].points[key]; 
            }
    });
    return transformedPoints
}

export function drawLines(pointsArr, ctx){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let point of Object.keys(pointsArr)) {
        let startPoint = pointsArr[point].coords
        // console.log(transformedPoints[point].contacts)
        if (pointsArr[point].contacts[0] !== ''){
            for (let contact of pointsArr[point].contacts) {
                // console.log(transformedPoints[point]);
                drawLine(
                    startPoint[0],
                    startPoint[1], 
                    pointsArr[contact].coords[0],
                    pointsArr[contact].coords[1], 
                    ctx
                )
            }
        }
        
    };
}

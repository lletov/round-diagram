
import { drawTextCircle, drawLine, getGroupCenters } from './MathMethods'
// const state = useStore((state) => state);
// import useStore from './../store/Store'

// - create diagram (after new file or new params)
// - clear data & canvas
// - get data from uploaded file
// - find center of groups 
// - find center of points
// - draw lines
// - create points 

export function uploadFile(file){
    let reader = new FileReader;
    reader.readAsText(file);
    reader.onload = function (){
      console.log('readed');
      console.log(reader.result)
    }
    return reader.result
}

// export function createObjectFromFile(file){
//     let reader = new FileReader;
//     pointsArr = {};
//     reader.readAsText(file);
//     console.log('file loaded');
//     // console.log(reader.result);
//     let rows = reader.result.split('\n');
//     rowsNoR = rows.map((row) => row.replace(/\r?\n|\r/g, ''));
//     // console.log(rowsNoR);
//     let array2d = rowsNoR.map((row) => row.split(','));
//     // console.log(array2d);
    
//     let RowGroups = [];
//     for (let i = 1; i < array2d.length -1; i++) {
//         RowGroups.push(array2d[i][2]);
//     }
//     const uniqueGroups = Array.from(new Set(RowGroups));
//     // console.log(uniqueGroups);
//     for (let i = 0; i < uniqueGroups.length; i++) {
//         pointsArr[`${uniqueGroups[i]}`] = {
//             points: {},
//             coords: [],
//         }
//         for (let j = 0; j < array2d.length; j++) {
//             if (array2d[j].indexOf(uniqueGroups[i]) !== -1) {
//                 pointsArr[`${uniqueGroups[i]}`].points[`point${array2d[j][1].replace('point', '')}`] = {
//                     title: array2d[j][0],
//                     contacts: array2d[j][3].replaceAll('"', '').split('; ')
//             }
//         }
//     }}
//     // console.log(pointsArr);

//     // find & write center points of groups
//     let groupsAmount = Object.keys(pointsArr).length;
//     let groups = Object.keys(pointsArr);
//     let mainGroupCenters = getGroupCenters(canvasCenterX, canvasCenterY, groupsAmount, mainRadius)
//     for (let i = 0; i < groupsAmount; i++){
//         pointsArr[groups[i]].coords = mainGroupCenters[i]
//     }

//     // find & write center points for every point
//     for (let i = 0; i < groupsAmount; i++){
//         let pointsAmount = Object.keys(pointsArr[groups[i]].points).length
//         let pointCenters = getGroupCenters(pointsArr[groups[i]].coords[0],
//                                             pointsArr[groups[i]].coords[1], 
//                                             pointsAmount, 
//                                             secondaryRadius);
//         // console.log(pointCenters)
//         for (let j = 0; j < pointsAmount; j++){
//             pointsArr[groups[i]].points[Object.keys(pointsArr[groups[i]].points)[j]].coords = pointCenters[j]
//         } 
//     }

//     let transformedPoints = {}

//     groups.forEach((group) => {
//         for (key of Object.keys(pointsArr[group].points)) {
//                 transformedPoints[key] = pointsArr[group].points[key]; 
//             }
//     });    
//     state.setDiagramObject(transformedPoints);
// }

// export function drawDiagramLines(diagramObject){
//     for (let point of Object.keys(diagramObject)) {
//         let startPoint = diagramObject[point].coords
//         // console.log(transformedPoints[point].contacts)
//         if (diagramObject[point].contacts[0] !== ''){
//             for (let contact of diagramObject[point].contacts) {
//                 // console.log(transformedPoints[point]);
//                 drawLine(
//                     startPoint[0],
//                     startPoint[1], 
//                     diagramObject[contact].coords[0],
//                     diagramObject[contact].coords[1], 
//                 )
//             }
//         }
        
//     };
// }

// export function createDiagramPoints(){
//     groups.forEach((group) => {
//         for (key of Object.keys(pointsArr[group].points)) {
//             // console.log('points ' + pointsArr2[group].points[key].coords)
//             drawTextCircle(
//                 pointsArr[group].points[key].coords[0], 
//                 pointsArr[group].points[key].coords[1], 
//                 circleRadius,
//                 pointsArr[group].points[key].title,
//                 key,
//                 2
//             );
//         }
//     });
// }


console.log('index.js connected');

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let fileUploader = document.getElementById('upload');
let readButton = document.getElementById('read');
readButton.addEventListener('click', readFile);

let pointsArr = {};


function readFile(event){
    console.log('read file button clicked');

    // clear canvas & data
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let prevItems = document.querySelectorAll(".item");
    pointsArr = {};
    prevItems.forEach((el) => el.remove());

    // get values
    let mainRadius = document.getElementById('main-radius').value;
    let secondaryRadius = document.getElementById('secondary-radius').value;
    let circleRadius = document.getElementById('circle-radius').value;
    let file = fileUploader.files[0];
    let reader = new FileReader;

    reader.readAsText(file);
    reader.onload = function() {
        console.log('file loaded');
        // console.log(reader.result);
        let rows = reader.result.split('\n');
        rowsNoR = rows.map((row) => row.replace(/\r?\n|\r/g, ''));
        // console.log(rowsNoR);
        let array2d = rowsNoR.map((row) => row.split(','));
        // console.log(array2d);
        
        let RowGroups = [];
        for (let i = 1; i < array2d.length -1; i++) {
            RowGroups.push(array2d[i][2]);
        }
        const uniqueGroups = Array.from(new Set(RowGroups));
        // console.log(uniqueGroups);
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
        // console.log(pointsArr);

        // find & write center points of groups
        let groupsAmount = Object.keys(pointsArr).length;
        let groups = Object.keys(pointsArr);
        let mainGroupCenters = getGroupCenters(canvasCenterX, canvasCenterY, groupsAmount, mainRadius)
        for (let i = 0; i < groupsAmount; i++){
            pointsArr[groups[i]].coords = mainGroupCenters[i]
        }

        // find & write center points for every point
        for (let i = 0; i < groupsAmount; i++){
            let pointsAmount = Object.keys(pointsArr[groups[i]].points).length
            let pointCenters = getGroupCenters(pointsArr[groups[i]].coords[0],
                                                pointsArr[groups[i]].coords[1], 
                                                pointsAmount, 
                                                secondaryRadius);
            // console.log(pointCenters)
            for (let j = 0; j < pointsAmount; j++){
                pointsArr[groups[i]].points[Object.keys(pointsArr[groups[i]].points)[j]].coords = pointCenters[j]
            } 
        }
        console.log(pointsArr);

        let transformedPoints = {}

        groups.forEach((group) => {
            for (key of Object.keys(pointsArr[group].points)) {
                    transformedPoints[key] = pointsArr[group].points[key]; 
                }
        });
        console.log(transformedPoints);

        // draw lines
        for (let point of Object.keys(transformedPoints)) {
            let startPoint = transformedPoints[point].coords
            // console.log(transformedPoints[point].contacts)
            if (transformedPoints[point].contacts[0] !== ''){
                for (let contact of transformedPoints[point].contacts) {
                    // console.log(transformedPoints[point]);
                    drawLine(
                        startPoint[0],
                        startPoint[1], 
                        transformedPoints[contact].coords[0],
                        transformedPoints[contact].coords[1], 
                    )
                }
            }
            
        };

        //  draw circles for all points
        groups.forEach((group) => {
            for (key of Object.keys(pointsArr[group].points)) {
                // console.log('points ' + pointsArr2[group].points[key].coords)
                drawTextCircle(
                    pointsArr[group].points[key].coords[0], 
                    pointsArr[group].points[key].coords[1], 
                    circleRadius,
                    pointsArr[group].points[key].title,
                    key,
                    2
                );
            }
        });
    }
}


// object structure

// let pointsArr2 = {
//     group1: {
//         points: {
//             point1: {
//                 title: 'point 1',
//                 contacts: ['point2', 'point4'],
//                 coords: [],
//             },
//             point2: {
//                 title: 'point 2',
//                 contacts: ['point3'],
//                 coords: [],
//             }, 
//             point3: {
//                 title: 'point 3',
//                 contacts: [],
//                 coords: [],
//             },
//         },
//         coords: []
//     },
//     group2: {
//         points: {
//             point4: {
//                 title: 'point 4',
//                 contacts: ['point5'],
//                 coords: [],
//             },
//             point5: {
//                 title: 'point 5',
//                 contacts: [],
//                 coords: [],
//             }, 
//             point6: {
//                 title: 'point 6',
//                 contacts: [],
//                 coords: [],
//             }, 
//         },
//         coords: []
//     },
//     group3: {
//         points: {
//             point7: {
//                 title: 'point 7',
//                 contacts: ['point1'],
//                 coords: [],
//             },
//             point8: {
//                 title: 'point 8',
//                 contacts: [],
//                 coords: [],
//             }, 
//             point9: {
//                 title: 'point 9',
//                 contacts: [],
//                 coords: [],
//             },
//         },
//         coords: []
//     },
//     group4: {
//         points: {
//             point10: {
//                 title: 'point 10',
//                 contacts: ['point5'],
//                 coords: [],
//             },
//             point11: {
//                 title: 'point 11',
//                 contacts: [],
//                 coords: [],
//             }, 
//             point12: {
//                 title: 'point 12',
//                 contacts: [],
//                 coords: [],
//             },
//         },
//         coords: []
//     },
//     group5: {
//         points: {
//             point13: {
//                 title: 'point 13',
//                 contacts: [],
//                 coords: [],
//             },
//             point14: {
//                 title: 'point 14',
//                 contacts: [],
//                 coords: [],
//             }, 
//             point15: {
//                 title: 'point 15',
//                 contacts: [],
//                 coords: [],
//             },
//         },
//         coords: []
//     },
// }

let mainRadius = document.getElementById('main-radius').value;
let secondaryRadius = document.getElementById('secondary-radius').value;
let circleRadius = document.getElementById('circle-radius').value;
let fieldWidth = window.innerWidth - 240;
let fieldHeight = window.innerHeight;
ctx.canvas.width  = fieldWidth;
ctx.canvas.height  = fieldHeight;

document.getElementById('elements').style.width = fieldWidth + 'px';
document.getElementById('elements').style.height = fieldHeight + 'px';

let canvasCenterX = document.getElementById('canvas').offsetWidth/2;
let canvasCenterY = document.getElementById('canvas').offsetHeight/2;

console.log("Window: " + window.innerWidth + " x " + window.innerHeight);
console.log("Canvas width: " + document.getElementById('canvas').offsetWidth);

function drawTextCircle(x, y, radius, text, point){
    // ctx.beginPath();
    // ctx.arc(x, y, radius, 0, 2 * Math.PI);
    // ctx.fillStyle = "white";
    // ctx.fill();
    // ctx.stroke();
    // ctx.fillStyle = "black";
    // ctx.fillText(text, x - radius + 4, y);
    let div = document.createElement('div');
    div.className = `item ${point}`;
    div.innerHTML = text;
    document.getElementById('elements').appendChild(div);
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
    div.style.top = y + 'px';
    div.style.left = x + 'px';
    // console.log(div.style.top)
}

function drawLine(startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function getGroupCenters(centerX, centerY, n, r){
    let currentAngle = 0;
    let angleStep = 360/n;
    let res = []
    for (let i = 0; i < n; i++) {
        let rad = currentAngle * Math.PI / 180;
        let x = Math.round(centerX + r * Math.cos(rad));
        let y = Math.round(centerY - r * Math.sin(rad));
        res.push([x,y])
        currentAngle += angleStep;
    }
    return res
}


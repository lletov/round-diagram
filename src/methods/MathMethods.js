export function drawTextCircle(x, y, radius, text, point){
    let div = document.createElement('div');
    div.className = `item ${point}`;
    div.innerHTML = text;
    document.getElementById('elements').appendChild(div);
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
    div.style.top = y + 'px';
    div.style.left = x + 'px';
}

export function drawLine(startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

export function getGroupCenters(centerX, centerY, groups, r){
    let currentAngle = 0;
    let angleStep = 360/groups;
    let res = []
    for (let i = 0; i < groups; i++) {
        let rad = currentAngle * Math.PI / 180;
        let x = Math.round(centerX + r * Math.cos(rad));
        let y = Math.round(centerY - r * Math.sin(rad));
        res.push([x,y])
        currentAngle += angleStep;
    }
    return res
}
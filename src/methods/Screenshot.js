import html2canvas from "html2canvas";

export default function takeScreenShot(elementId, fileName, fileType){
    const element = document.getElementById(elementId);
    if (!element){
        return;
    }
    html2canvas(element).then((canvas) => {
        let image = canvas.toDataURL(fileType);
        const a = document.createElement("a");
        a.href = image;
        a.download = fileName;
        a.click();

    })
    .catch(e=>{
        console.log("can't tak screenshot", e)
    })
}
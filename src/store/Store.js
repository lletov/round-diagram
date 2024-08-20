import { create } from 'zustand'

const useStore = create((set) => ({
    file: null,
    diagramObject: null,
    diagramWidth: null,
    diagramHeight: null,
    diagramRadius: 60,
    groupRadius: 30,
    pointRadius: 70,
    canvasCenterX: null,
    canvasCenterY: null,

    setRangeInput(parameter, number, min, max){
        switch(number){
            case number < min:
                set({ [parameter]: min});
                break;
            case number > max:
                set({ [parameter]: max});
                break;
            default:
                set({ [parameter]: number})
        }
    },
    setFile(filesList){
        set({ file: filesList[0]});
    },
    setDiagramObject(obj){
        set({ diagramObject: obj});
    },
    setDiagramWidth(num){
        set({ diagramWidth: num});
    },
    setDiagramHeight(num){
        set({ diagramHeight: num});
    }
}))

export default useStore
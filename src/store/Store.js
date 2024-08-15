import { create } from 'zustand'

const useStore = create((set) => ({
    file: null,
    diagramObject: null,
    width: 800,
    height: 600,
    diagramRadius: 13,
    groupRadius: 30,
    pointRadius: 16,

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
    }
}))

export default useStore
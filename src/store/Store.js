import { create } from 'zustand'

const useStore = create((set) => ({
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
    }
}))

export default useStore
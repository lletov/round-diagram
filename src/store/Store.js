import { create } from 'zustand'

const useStore = create((set) => ({
    width: 800,
    height: 600,
    diagramRadius: 13,
    groupRadius: 30,
    pointRadius: 16,
    setRangeInput(param, num, min, max) {
        if (num >= min || num <= max){
            set({ [param]: num})
        }
        if (num < min){
            set({ [param]: min})
        }
        if (num > max){
            set({ [param]: max})
        }
    },
}))

export default useStore
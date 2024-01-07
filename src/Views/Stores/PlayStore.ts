import { create } from 'zustand'
type state = {
    countDown: number,
    index: number,
}
type action = {
    setCountDown: (countDown: state['countDown']) => void,
    setIndex: (index: state['index']) => void,
}
export const usePlayStore = create<state & action>((set) => ({
    countDown: 30,
    index: 0,
    setCountDown: (countDown: number) => set({ countDown }),
    setIndex: (index: number) => set({ index })
}))
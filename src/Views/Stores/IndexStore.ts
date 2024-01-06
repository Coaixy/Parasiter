import { create } from 'zustand'
type state = {
    mail: string,
    qq: string,
    password: string,
    isLogin: boolean,
}
type action = {
    setMail: (mail: state['mail']) => void,
    setQQ: (qq: state['qq']) => void,
    setPassword: (password: state['password']) => void,
    setIsLogin: (isLogin: state['isLogin']) => void,

}
export const useIndexStore = create<state & action>((set) => ({
    mail: "",
    qq: "3045831167",
    isLogin: false,
    password: "",
    setPassword: (password: string) => set({ password }),
    setMail: (mail: string) => set({ mail }),
    setQQ: (qq: string) => set({ qq }),
    setIsLogin: (isLogin: boolean) => set({ isLogin })
}))
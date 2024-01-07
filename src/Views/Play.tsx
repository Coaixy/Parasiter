import React, { useEffect } from "react";
import { Image, Textarea } from "@nextui-org/react";
import { usePlayStore } from "./Stores/PlayStore";
const Play = () => {
    const countDown = usePlayStore((state) => state.countDown);
    const index = usePlayStore((state) => state.index);
    const setCountDown = usePlayStore((state) => state.setCountDown);
    const setIndex = usePlayStore((state) => state.setIndex);
    let timerId;
    useEffect(() => {
        timerId = setInterval(() => {
            setCountDown(countDown - 1);
            return () => {
                clearInterval(timerId);
            }
        }, countDown);   
    })
    return (<div className="flex justify-center flex-col">
        <div className="text-center m-4 mx-auto">
            <h1 className="underline font-bold text-2xl pb-4">Parasiter</h1>
            <h2 className="text-lg pb-4">倒计时:{countDown}</h2>
            <Image src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" width="100%" height="100%" />
        </div>
        <div className="w-full text-center mx-auto mt-4">
            <Textarea
                label="草稿纸"
                placeholder="记录下你的第一印象"
                className="min-h-[40px]"
            />
        </div>
    </div>);
}

export default Play;
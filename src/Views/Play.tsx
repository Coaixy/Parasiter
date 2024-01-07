import React, { useEffect, useRef } from "react";
import { Button, Image, Radio, RadioGroup, Textarea, select } from "@nextui-org/react";
import { usePlayStore } from "./Stores/PlayStore";
import testPlayImg  from './Assets/playImgs/testPlayImg.jpg'
import { useMount } from "ahooks";
const Play = () => {
    const [countDown, index, type, setCountDown, setIndex] = usePlayStore((state) => [state.countDown, state.index, state.type, state.setCountDown, state.setIndex])
    const [selected, setSelected] = React.useState("A");
    const selectArrayRef = useRef(['']);
    const sumIndex = useRef(10);
    const confirmSelect = () => {
        const selectText = selectArrayRef.current[selected.charCodeAt(0) - 65];
        alert("你选择的是:" + selectText);
    }
    //  获取数据
    useMount(() => {
        selectArrayRef.current = ["鞭毛虫卵", "绦虫卵", "未受精蛔虫卵", "受精蛔虫卵", "肺吸虫卵"];
    })
    // 倒计时
    useEffect(() => {
        setTimeout(() => {
            if (countDown === 0) {
                setCountDown(30);
                setIndex(index + 1);
                if(index == sumIndex.current){
                    
                    alert("答题结束")
                }
                return
            }
            setCountDown(countDown - 1);
        }, 1000);
    }, [countDown, setCountDown])
    return (<div className="flex justify-center flex-col">
        <div className="text-center m-4 mx-auto">
            <h1 className="underline font-bold text-2xl pb-4">Parasiter PlayGround</h1>
            <h2 className="text-lg pb-4 font-semibold">倒计时:{countDown}</h2>
            <h2 className="text-lg pb-4 font-semibold">当前进度:{index}/{sumIndex.current}</h2>
            <Image src={testPlayImg} width="100%" height="100%" />
        </div>
        <div className="w-full text-center mx-auto mt-4">
            <Textarea
                label="草稿纸"
                placeholder="记录下你的第一印象"
                className="min-h-[40px]"
            />
        </div>
        <div className="w-full text-center mx-auto mt-4" hidden={type != "select"}>
            <RadioGroup
                label="选择你看到的选项"
                className="w-full text-center text-black"
                defaultValue="a"
                value={selected}
                onValueChange={setSelected}
            >
                <Radio value="A" id="selectA">鞭虫卵</Radio>
                <Radio value="B" id="selectB">绦虫卵</Radio>
                <Radio value="C" id="selectC">未受精蛔虫卵</Radio>
                <Radio value="D" id="selectD">受精蛔虫卵</Radio>
                <Radio value="E" id="selectE">肺吸虫卵</Radio>
            </RadioGroup>
            <Button color="primary" onClick={confirmSelect}>确定</Button>
        </div>
    </div>);
}

export default Play;
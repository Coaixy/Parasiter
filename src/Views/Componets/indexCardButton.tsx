import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import indexButtonSingleImg from '../Assets/indexImgs/indexButtonSingle.png'
import indexButtonMapImg from '../Assets/indexImgs/indexButtonMap.png'
import indexButtonLearnImg from '../Assets/indexImgs/indexButtonLearn.png'
const IndexCardButton = (props: { name: string }) => {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none m-4"
        >
            <Image
                className="object-cover"
                height={200}
                src={props.name == "冒险模式" ? indexButtonMapImg : props.name == "学习模式" ? indexButtonLearnImg : indexButtonSingleImg}
                width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="font-bold text-black/80">{props.name}</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                    开始
                </Button>
            </CardFooter>
        </Card>
    );

}

export default IndexCardButton;

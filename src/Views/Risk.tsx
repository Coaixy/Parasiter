import { useEffect, useRef, useState } from 'react';
import map from './Assets/map.jpg'
import RiskNode from './Componets/RiskNode';
import { useMount, useSize, useTimeout } from 'ahooks';
const Risk = () => {
    const [nodes, setNodes] = useState<Array<Array<number>>>([[]]);
    const ref = useRef(null)
    const size = useSize(ref);
    const risks = Array.from({ length: 6 }, () => {
        const riskLevel = (Math.random() * 100);
        if (riskLevel < 60) {
            return "简单"
        } else {
            if (riskLevel < 90) {
                return "中等"
            } else {
                return "困难"
            }
        }
    });
    useTimeout(() => {
        const initialNodes = Array.from({ length: 6 }, () => [(Math.random() * (size?.width - 50)), (Math.random() * (size?.height - 50))]);
        setNodes(initialNodes);
    }, 10)
    return (

        <><h1>{size?.height}</h1>
            <div ref={ref} style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${map})`
            }}></div>
            {nodes.map((value, index) => {
                return <RiskNode x={value[0]} y={value[1]} key={index} risk={risks[index]}></RiskNode>
            })}
        </>);
}

export default Risk;
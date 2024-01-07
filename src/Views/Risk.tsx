import { useEffect, useState } from 'react';
import map from './Assets/map.jpg'
import RiskNode from './Componets/RiskNode';
const Risk = () => {
    const [nodes, setNodes] = useState<Array<Array<number>>>([[]]);
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
    useEffect(() => {
        const initialNodes = Array.from({ length: 6 }, () => [(Math.random() * 300), (Math.random() * 700)]);
        setNodes(initialNodes);
    }, []);
    return (
        <>
            <div style={{
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
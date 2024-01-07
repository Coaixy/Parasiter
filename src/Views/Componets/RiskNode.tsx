import Sword from '../Assets/Sword.png'
const RiskNode = (props: { x: number, y: number ,risk:string}) => {
    return (<div style={{ position: "fixed", left: props.x, top: props.y }} className='text-center'>
        <img src={Sword} alt="Risk Node" />
        <p className='underline font-bold'>{props.risk}</p>
    </div>);
}

export default RiskNode;
import "../Home/LanderRings.css";
import YellowRingImg from "./Assets/ringsYellow.png";
import OrangeRingImg from "./Assets/ringsOrange.png";

const LanderRings = (props) => {
  return (
    <img
      src={props.idx > 2 ? YellowRingImg : OrangeRingImg}
      alt="Ring"
      className="goldringsImg"
      style={{
        "--offsetX": props.offX,
        "--offsetY": props.offY,
        "--offsetRot": `${props.initAngle}deg`,
        "--speed": `${4.5 + Math.random() * 1.2}s`,
        "--stretch": `${props.stretch / 76.6}`,
      }}
    />
  );
};

export default LanderRings;
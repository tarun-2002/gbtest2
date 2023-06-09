
import React, {useState,useEffect,createRef} from 'react'
import "../Home/Home.css"
import StrangeShard from './StrangeShard'
import Slider from '../../components/Slider'
import Devices from '../../components/Devices'


const Home = (props) => {
  const kingEl = createRef();
  const [ringCount, setRingCount] = useState(Math.floor(2 + Math.random() * 3));
  const [sizeClass, setSizeClass] = useState(2);
  const [shardCount, setShardCount] = useState(
    Math.floor(100 + Math.random() * 20)
  );
  const [width, setWidth] = useState(0);
  const [portalWidth, setPortalWidth] = useState(0);

  const setShards = () => {
    setShardCount(Math.floor(50 * sizeClass + Math.random() * 20));
    setWidth(sizeClass === 2 ? 195 : 240);
    setPortalWidth(sizeClass === 2 ? 37 : 50);
  };

  const getSizeClass = () => {
    if (window.innerWidth > 800 && sizeClass !== 2) {
      setSizeClass(2);
      setShards();
    } else if (window.innerWidth > 400 && sizeClass !== 1) {
      setSizeClass(1);
      setShards();
    } else if (sizeClass !== 0) {
      setSizeClass(0);
      setShards();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", getSizeClass);
    getSizeClass();
    setShards();
  }, []);
  return (
    <>
              <div>
        {shardCount > 0 ? (
          [...Array(shardCount)].map((count, idx) => (
            <StrangeShard key={idx} width={width} portalWidth={portalWidth} />
          ))
        ) : (
          <></>
        )}
      </div>
        <div className='landing-page'>
          <div className='landing-circle-parent'>
          <img className= "landing-circle" src="/images/landing-circ.png" alt="" />
          <div>
          <img src="/images/landing-rings.png" alt="Ring" className="LanderRings_goldringsImg__0oFMX" style={{"--offsetX": "0px", "--offsetY": "0px", "--offsetRot": "0deg", "--speed": "5.250575433408974s","--stretch": "0"}}/>
          <img src="/images/landing-rings.png" alt="Ring" className="LanderRings_goldringsImg__0oFMX" style={{"--offsetX": "0.5371497986528092px", "--offsetY": "-0.5892893353959483px", "--offsetRot": "10deg", "--speed": "5.265867882458323s", "--stretch": "0.013054830287206267"}}/>
          <img src="/images/landing-rings.png" alt="Ring" className="LanderRings_goldringsImg__0oFMX" style={{"--offsetX": "1.071497986528092px", "--offsetY": "-1.5892893353959483px", "--offsetRot": "15deg", "--speed": "5.285867882458323s", "--stretch": "0.019054830287206267"}}/>
          </div>
          </div>

          <div className='throne'>
            <img className='throne-img' src="/images/throne-img.png" alt="" />
          </div>
          <div className='title-wrapper'>
          <h1 className='title-2'>G</h1><h1 className='title'>amer's Burnout</h1>
          </div>

        </div>
        <section className="col">
    <div className="heading-wrapper">
      <h3>Games</h3>
    </div>
    </section>
<section className='games'>
        <Slider/>
        </section>

      <section className='devices'>
        <Devices/>
      </section>


        
    </>
  )
}

export default Home

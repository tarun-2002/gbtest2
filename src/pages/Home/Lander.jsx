import React, { useState, createRef, useEffect } from "react";
import "../Home/Lander.css";
import LanderRings from "./LanderRings";
import StrangeShard from "./StrangeShard";


import king from "./Assets/throne-img.png";


import windowImg from "./Assets/landing-circ.png";
import leftEye from "./Assets/left-eye.png";
import rightEye from "./Assets/right-eye.png";

// import cloud1 from "../Assets/Lander/PortalClouds/window-clouds-1.png";
// import cloud2 from "../Assets/Lander/PortalClouds/window-clouds-2.png";
// import cloud3 from "../Assets/Lander/PortalClouds/window-clouds-3.png";

// import FaceBookIcon from "../Assets/Lander/FaceBookIcon";
// import YouTubeIcon from "../Assets/Lander/YouTubeIcon";
// import InstaGramIcon from "../Assets/Lander/InstaGramIcon";
// import Hamburger from "./Hamburger";

const Lander = (props) => {
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
    <div className="landerWrapper" id="landerWrapper">
      <div className="portalWindow">
        <img src={windowImg} alt="" className="portalWindowImg1" />
        {/* <img
          src={cloud1}
          alt=""
          className={`${LanderCSS.portalWindowClouds} ${LanderCSS.windowCloud1}`}
        />
        <img
          src={cloud2}
          alt=""
          className={`${LanderCSS.portalWindowClouds} ${LanderCSS.windowCloud2}`}
        />
        <img
          src={cloud3}
          alt=""
          className={`${LanderCSS.portalWindowClouds} ${LanderCSS.windowCloud3}`}
        /> */}
      </div>
      <img src={windowImg} alt="" className="portalWindowImg"/>

      <div className="goldrings">
        {[...Array(ringCount)].map((count, idx) => (
          <LanderRings
            key={idx}
            offX={`${idx * (-0.8 + Math.random() + 0.8)}px`}
            offY={`${idx * (-0.8 + Math.random() * 0.8)}px`}
            stretch={idx % 4}
            initAngle={idx * 10}
            idx={idx}
          />
        ))}
      </div>

      <div>
        {shardCount > 0 ? (
          [...Array(shardCount)].map((count, idx) => (
            <StrangeShard key={idx} width={width} portalWidth={portalWidth} />
          ))
        ) : (
          <></>
        )}
      </div>

      <div className="kingBodyWrapper">
        <img src={king} alt="" className="kingBody" ref={kingEl} />

        <div className="kingEyesWrapper">
          <img src={leftEye} alt="o" className="leftEye"/>
          <img src={rightEye} alt="o" className="rightEye" />
        </div>
      </div>

      {/* <img src={title} alt="OASIS '22" className={LanderCSS.oasisTitle} /> */}
      {/* <div className={LanderCSS.titleBgGrad}></div> */}

      {/* register */}
      {/* <div className={LanderCSS.registerWrapper}>
        {/* <div onClick={props.changeRegState}>Register Now</div> */}
        {/* <Button btn_title="Register Now" onClick_fun={props.changeRegState} />
      </div> */} */

      {/* icons */}
      {/* // <div className={LanderCSS.bottomWrapper}>
      //   {<img src={logo} alt="OASIS" className={LanderCSS.oasisLogoBottom} />} */}

        {/* <div className={LanderCSS.iconWrapper}>
          <a
            href="https://www.facebook.com/oasis.bitspilani"
            rel="noreferrer"
            target="_blank"
          >
            <FaceBookIcon />
          </a>

          <a
            href="https://instagram.com/bitsoasis"
            rel="noreferrer"
            target="_blank"
          >
            <InstaGramIcon />
          </a>

          <a
            href="https://m.youtube.com/channel/UCf40GISJivaYZK2pPOyt1kw"
            rel="noreferrer"
            target="_blank"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div> */}
      <div className="landerTransition"></div>
    </div>
  );
};

export default Lander;
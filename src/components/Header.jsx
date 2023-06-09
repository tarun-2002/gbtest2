import React, { useState,useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Hamburger from "./Hamburger"

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const isMobile = width <= 992;

  return (
    <>
    {isMobile ? (<Hamburger/>):(<Navbar/>)}</>
  );
};

export default Header;

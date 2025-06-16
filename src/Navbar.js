import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
/*Frames of the animated logo*/
import frame0 from "./images/animated_logo/frame_00_animated_logo.png"
import frame1 from "./images/animated_logo/frame_01_animated_logo.png"
import frame2 from "./images/animated_logo/frame_02_animated_logo.png"
import frame3 from "./images/animated_logo/frame_03_animated_logo.png"
import frame4 from "./images/animated_logo/frame_04_animated_logo.png"
import frame5 from "./images/animated_logo/frame_05_animated_logo.png"
import frame6 from "./images/animated_logo/frame_06_animated_logo.png"
import frame7 from "./images/animated_logo/frame_07_animated_logo.png"
import frame8 from "./images/animated_logo/frame_08_animated_logo.png"
import frame9 from "./images/animated_logo/frame_09_animated_logo.png"
import frame10 from "./images/animated_logo/frame_10_animated_logo.png"
import frame11 from "./images/animated_logo/frame_11_animated_logo.png"
import frame12 from "./images/animated_logo/frame_12_animated_logo.png"
import frame13 from "./images/animated_logo/frame_13_animated_logo.png"
import frame14 from "./images/animated_logo/frame_14_animated_logo.png"
import frame15 from "./images/animated_logo/frame_15_animated_logo.png"
import frame16 from "./images/animated_logo/frame_16_animated_logo.png"
import frame17 from "./images/animated_logo/frame_17_animated_logo.png"

function Navbar() {
    /*Give the logo a animation on click*/
    const frames = [frame0, frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11, frame12, frame13, frame14, frame15, frame16, frame17];
    const [frameindex, setFrameIndex] = useState(0);
    const pancakeRef = useRef(null); 
    /*pancakeRef = { current: null } */ 
    const isAnimatingRef = useRef(false); //used to block repeat clicks during animation

    useEffect(()=>{
        const pancake = pancakeRef.current;
        const handleClick = () => { 
            if (isAnimatingRef.current) {
                return; //blocks if middle of animation
            }
            isAnimatingRef.current = true;
            let i = 0;
            const myInterval = setInterval(() => {
                setFrameIndex(i);
                i++;
                if(i > frames.length) {
                    clearInterval(myInterval);
                    setFrameIndex(0);
                    //Resets the isAnimating variable back to false
                    setTimeout(() => {
                        isAnimatingRef.current = false;
                    }, 100);
                }
            }, 90);
        };
        if (pancake) {
            pancake.addEventListener("click", handleClick);
        }
        return () => {
            if(pancake) {
                pancake.removeEventListener("click", handleClick);
            }
        }
    });
    return (
        <header className="header">
            <div className="logo">
                <img src={frames[frameindex]} alt="Website Logo" className="logo-image" ref={ pancakeRef }></img>
                <span className="website-name">Ryan Fu's portfolio website</span>
            </div>
            <nav className="navbar-buttons">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/projects" className="nav-link">PROJECTS</Link>
                <Link to="/experiences" className="nav-link">EXPERIENCES</Link>
                <Link to="/hobbies" className="nav-link">HOBBIES</Link>
                <Link to="/contact" className="nav-link">CONTACT ME</Link>
            </nav>
        </header>
    );
}

export default Navbar;
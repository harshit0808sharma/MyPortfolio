import { useState } from "react"
// import { IoMenu } from "react-icons/io5"
import { MdLightMode, MdNightlight } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import { Link } from "react-router-dom";


const Header = ({theam, setTheam}) => {
  // const [open, setOpen] = useState(false);
  const [color, setColor] = useState(1);
 

  return (
    <>
        <header className={`header ${theam ? "light-light": "light-dark"}`}>
            <a href="#" className="logo">Portfolio</a>
            {/* <p id="menu-icon" onClick={()=> setOpen(!open)}>{open?<RxCross2/>:<IoMenu/>}</p> */}
            <nav className="navbar">
                <a className={color == 1? "active": ""} onClick={()=> setColor(1)} href="#home">Home</a>
                <a className={color == 2? "active": ""} onClick={()=> setColor(2)} href="#about">About</a>
                <a className={color == 3? "active": ""} onClick={()=> setColor(3)} href="#services">Skills</a>
                <a className={color == 4? "active": ""} onClick={()=> setColor(4)} href="#projects">Projects</a>
                <a className={color == 5? "active": ""} onClick={()=> setColor(5)} href="#contact">Contact</a>
            </nav>
            <span className="theam-icon" onClick={()=> setTheam(!theam)}>{theam ? <MdNightlight/> : <MdLightMode />}</span>
        </header>
    </>
  )
}

export default Header
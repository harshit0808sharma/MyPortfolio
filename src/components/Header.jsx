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
            
            <nav className="navbar">
                <a className={color == 1? "active": ""} 
                onClick={()=>{ 
                  setColor(1); 
                  const section =  document.getElementById("home");
                  if(section){
                    section.scrollIntoView({ behaviour: "smooth"});
                    }
                }}
                >Home</a>
                <a className={color == 2? "active": ""} 
                  onClick={()=> {
                    setColor(2);
                    const section =  document.getElementById("about");
                    if(section){
                      section.scrollIntoView({ behaviour: "smooth"});
                      }
                    }}>About</a>
                <a className={color == 3? "active": ""} 
                  onClick={()=> {
                    setColor(3);
                    const section =  document.getElementById("services");
                    if(section){
                      section.scrollIntoView({ behaviour: "smooth"});
                      }
                    }}>Skills</a>
                <a className={color == 4? "active": ""} 
                  onClick={()=> {
                    setColor(4);
                    const section =  document.getElementById("projects");
                    if(section){
                      section.scrollIntoView({ behaviour: "smooth"});
                      }
                    }}>Projects</a>
                <a className={color == 5? "active": ""} 
                  onClick={()=> {
                    setColor(5);
                    const section =  document.getElementById("contact");
                    if(section){
                      section.scrollIntoView({ behaviour: "smooth"});
                      }
                    }}>Contact</a>
            </nav>
            <span className="theam-icon" onClick={()=> setTheam(!theam)}>{theam ? <MdNightlight/> : <MdLightMode />}</span>
        </header>
    </>
  )
}

export default Header
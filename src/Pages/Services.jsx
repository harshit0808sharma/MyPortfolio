
import { useState } from 'react';
import Language from '../components/Language';

const Services = ({theam}) => {
    const [category, setCategory] = useState("1");
  return (
    <>
        <section className={`services ${theam? "light": "dark"}`} id="services">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="services-container">
            <div className="skill-left">
                <button className={category === "1"? "skill-active-btn": ''} onClick={()=> setCategory("1")}>Front-End</button>
                <button className={category === "2"? "skill-active-btn": ''} onClick={()=> setCategory("2")}>Back-End</button>
                <button className={category === "3"? "skill-active-btn": ''} onClick={()=> setCategory("3")}>Database</button>
                <button className={category === "4"? "skill-active-btn": ''} onClick={()=> setCategory("4")}>Tools</button>
            </div>
            <div className="skill-right">
                <h2>Skills</h2>
                <div className='skill-box'>
                    <Language category={category}/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services


import { useState } from "react"
import Project from "../components/Project"


const Projects = ({theam}) => {
    const [category, setCategory] = useState("1");

  return (
    <>
        <section className={`portfolio ${theam? "light-light": "light-dark"}`} id="projects">
                <h2 className="heading">Latest <span>Project</span></h2>
                <div className="portfolio-btn">
                    <button className={category==="1"? "portfolio-active-btn": "pf-btn"} onClick={()=> setCategory("1")}>React Js</button>
                    <button className={category==="2"? "portfolio-active-btn": "pf-btn"} onClick={()=> setCategory("2")}>Next Js</button>
                    <button className={category==="3"? "portfolio-active-btn": "pf-btn"} onClick={()=> setCategory("3")}>Other</button>
                </div>
                <div className="portfolio-container">
                  <Project category={category}/>
                </div>
            </section>

    </>
  )
}

export default Projects
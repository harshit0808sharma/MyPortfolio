import { useEffect, useState } from "react";
import {ProjectData} from "../assets/Data"
import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = ({category}) => {
    const [filteredData, setFilteredData] = useState([]);
    const filterResult = () =>{
        const filter = ProjectData.filter((item)=> item?.languageId === category);
        setFilteredData(filter);
    }
    useEffect(()=>{
        filterResult();
    },[category])

  return (
    <>
        {
            filteredData.map((value, index)=>(
                <div className="portfolio-box" key={index}>
                        <img src={value?.img} alt=""/>
                        <div className="portfolio-layer">
                            <h4>{value?.projectName}</h4>
                            <p>{value?.projectDescription}</p>
                            <a href={value?.link}><FaExternalLinkAlt/></a>
                        </div>
                </div>
            ))
        }
    </>
  )
}

export default Project
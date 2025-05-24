import { useEffect, useState } from "react";
import { LanguageData } from "../assets/Data";

const Language = ({category}) => {
    const [skills, setSkills] = useState([]);
    const filterSkills = () =>{
        const filter = LanguageData.filter((item)=> item?.languageCategory === category);
        setSkills(filter);
    }
    useEffect(()=>{
        filterSkills();
    }, [category]);

  return (
    <>
        {
            skills.map((value, index) => (
                <div className="skill" key={index}>
                    <div className="skill-inside" style={{width: `${value?.skillFill}`}}>
                        <img src={value?.img} alt="random" />
                        <p>{value?.languageName}</p>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default Language;
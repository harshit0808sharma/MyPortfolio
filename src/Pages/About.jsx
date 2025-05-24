import { Link } from 'react-router-dom'
import image2 from '../assets/images/computer.jpg'
import img1 from '../assets/images/ProfileLogo.jpg'

const About = ({theam}) => {
  return (
    <>
      <section className={`about ${theam? "light-light": "light-dark"}`} id="about">
            <div className="about-img">
                <img src={img1} alt="about image"/>
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <p>Hello!, I&apos;m Harshit Sharma, a passionate Software developer with a flair for both front-end and back-end technologies. I have a strong foundation in React.js, Next.js, C# and SQL, which allows me to build comprehensive web applications from start to finish. My journey in tech began with a curiosity about how websites work, and that curiosity quickly turned into a full-fledged career.</p>
                <Link to="/about" className="btn">Read More</Link>
            </div>
      </section>

    </>
  )
}

export default About
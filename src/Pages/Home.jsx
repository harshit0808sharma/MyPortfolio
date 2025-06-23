import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import img2 from '../assets/images/ProfileLogo.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import { useState } from 'react';

const Home = ({ theam }) => {
    const [text] = useTypewriter({
        words: ['Frontend Developer', "Backend Developer", "Fullstack Developer", "Software Developer"],
        loop: {},
        typeSpeed: 140,
        delaySpeed: 80,
    })



    return (
        <>
            <section className={`home ${theam ? "light" : "dark"}`} id="home">
                <div className="home-content">
                    <h3>Hello, It&apos;s me</h3>
                    <h1>Harshit Sharma</h1>
                    <h3>And I&apos;am a <span className="multiple-text">{text}</span><span className='multiple-text'><Cursor /></span></h3>
                    <p>Welcome to my portfolio! I&apos;m Harshit, a Software Developer with expertise in web technologies. I build engaging full-stack web solutions using modern technologies.</p>
                    <div className="social-media">
                        {/* <a href="#"><FaInstagram/></a> */}
                        <a href="https://github.com/harshit0808sharma"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/harshit-sharma9045"><FaLinkedin /></a>
                        {/* <a href="#"><FaYoutube/></a> */}
                    </div>
                    <a href="/Harshit_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
                </div>
                <div className="home-image">
                    <div className="img-spinner">
                        <img src={img2} alt="home image" />
                        <span className="circle-spin"></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
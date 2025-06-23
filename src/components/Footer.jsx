import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = ({ theam }) => {
  return (
    <>
      <footer className={`footer ${theam ? "light-light" : "light-dark"}`}>
        <div className="footer-left">
          <Link to="/"><h2>My portfolio</h2></Link>
        </div>
        <div className="footer-center">
          <div className="footer-center-left">
            <span>Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
          <div className="footer-center-right">
            <div>
              <span><FaFacebook /></span>
              <span><FaTwitter /></span>
              <span><FaYoutube /></span>
              <span><FaLinkedin /></span>
            </div>
            <p>harshit0808sharma@gmail.com</p>
          </div>
        </div>
        <div className="footer-right">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
            Back to Top
          </button>

        </div>
      </footer>

    </>
  )
}

export default Footer
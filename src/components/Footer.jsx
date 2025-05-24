import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = ({theam}) => {
  return (
    <>
    <footer className={`footer ${theam ? "light-light": "light-dark"}`}>
        <div className="footer-left">
          <h2>My portfolio</h2>
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
              <span><FaFacebook/></span>
              <span><FaTwitter/></span>
              <span><FaYoutube/></span>
              <span><FaLinkedin/></span>
            </div>
            <p>harshit0808sharma@gmail.com</p>
          </div>
        </div>
        <div className="footer-right">
          <button>
            <a href="#home">Back to Top</a>
          </button>
        </div>
    </footer>

    </>
  )
}

export default Footer
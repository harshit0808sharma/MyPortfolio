import Footer from "../components/Footer";
import profile from '../assets/images/ProfileLogo.jpg'
import { Link } from "react-router-dom";
import img1 from '../assets/images/youtube.jpg'
import img2 from '../assets/images/Amazon3dLogo.jpg'
import { LanguageData } from "../assets/Data";

const AboutMe = ({theam}) => {
  return (
    <>
        <div className={`aboutme ${theam? "light-light": "light-dark"}`}>
            <section>
                <h1>About Me <span className="back-to-home"><Link to="/">Back</Link></span></h1>
                <div className="about-top">
                  <img src={profile} alt="random" />
                  <h2>Harshit Sharma</h2>
                </div>
                <div className="about-center">
                  <p>Hello!, I&apos;m Harshit Sharma, a passionate Software developer with a flair for both front-end and back-end technologies. I have a strong foundation in React.js, Next.js, C# and SQL, which allows me to build comprehensive web applications from start to finish. My journey in tech began with a curiosity about how websites work, and that curiosity quickly turned into a full-fledged career.</p>
                </div>
                <div className="about-bottom">
                  <div className="about-bottom-center">
                    {
                      LanguageData.map((value, index)=> (
                        <img src={value?.img} alt="random" key={index}/>
                      ))
                    }
                  </div>
                </div>
                <div className="another-about-bottom">
                  <h2 className="projects-heading">Projects</h2>
                  <div className="projects-inside">
                    <div className="project-first">
                      <div className="project-first-left">
                        <h2>Hotel Booking Application</h2>
                        <h3>Language: ReactJs, Redux, C#, SQL</h3>
                        <p>The hotel booking project involved creating a web application using HTML, CSS, JavaScript, React.js for the front-end, with SQL and C# for the backend, hosted on ASP.NET Core. The system allows users to browse available rooms, make bookings, and manage their reservations. I implemented features like user authentication, real-time availability updates.</p>
                      </div>
                      <div className="project-first-center">
                        <span></span>
                        <span className="logo">
                          <img src="" alt="random" />
                        </span>
                        <span className="project-connected-line"></span>
                      </div>
                      <div className="project-first-right"></div>
                    </div>
                    <div className="project-second">
                      <div className="project-second-left">
                      </div>
                      <div className="project-second-center">
                        <span></span>
                        <span className="logo">
                          <img src={img1} alt="random" />
                        </span>
                        <span className="project-connected-line"></span>
                      </div>
                      <div className="project-second-right">
                        <h2>Youtube Cone</h2>
                        <h3>Language: ReactJs, Youtube API</h3>
                        <p>The YouTube clone project is primarily focused on recreating the user interface of YouTube using HTML, CSS, JavaScript and React.js. I used the YouTube API to fetch and display videos based on user searches.</p>
                      </div>
                    </div>
                    <div className="project-first">
                      <div className="project-first-left">
                        <h2>Youtube Clone</h2>
                        <h3>Language: ReactJs, Context API</h3>
                        <p>The Amazon clone project focused on recreating the user interface of Amazon using HTML, CSS, JavaScript and React.js. I designed the front end to mimic Amazon layout, including product listings, a shopping cart, and a checkout page.</p>
                      </div>
                      <div className="project-first-center">
                        <span></span>
                        <span className="logo">
                          <img src={img2} alt="random" />
                        </span>
                        <span className="project-connected-line"></span>
                      </div>
                      <div className="project-first-right"></div>
                    </div>
                    <div className="project-second">
                      <div className="project-second-left">
                      </div>
                      {/* <div className="project-second-center">
                        <span></span>
                        <span className="logo">
                          <img src="" alt="random" />
                        </span>
                        <span className="project-connected-line"></span>
                      </div> */}
                      {/* <div className="project-second-right">
                        <h2>Amazon Clone</h2>
                        <h3>Language: ReactJs, C#, SQL</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eos placeat, consequatur, unde in nobis saepe maxime necessitatibus architecto ut ab. Odio sapiente aperiam incidunt repudiandae reprehenderit placeat quia enim!</p>
                      </div> */}
                    </div>
                  </div>
                </div>
            </section>
            <Footer theam={theam}/>
        </div>
    </>
  )
}

export default AboutMe;
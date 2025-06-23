import Footer from "../components/Footer";
import profile from '../assets/images/ProfileLogo.jpg'
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
// import img1 from '../assets/images/youtube.jpg'
// import img2 from '../assets/images/Amazon3dLogo.jpg'
import { LanguageData } from "../assets/Data";
// import amazon from '../assets/images/amazonclone.png'
// import youtube from '../assets/images/youtubeclone.png'
// import todo from './images/todoapp.png'
// import foodapp from '../assets/images/foodapplication.png'
// import chatapp from '../assets/images/chatapp.png'
// import nextshop from '../assets/images/nextshop.png'
// import noteapp from './images/noteapp.png'


const AboutMe = ({ theam }) => {
  return (
    <>
      <div className={`aboutme ${theam ? "light-light" : "light-dark"}`}>
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
                LanguageData.map((value, index) => (
                  <img src={value?.img} alt="random" key={index} />
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
                    <a href="#" target="_blank" onClick={(e) => e.preventDefault()}>
                      <FcSearch style={{ fontSize: "2.5rem" }} />
                    </a>
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
                    <a href="https://harshit0808sharma.github.io/youtube-clone/" target="_blank">
                      <FcSearch style={{ fontSize: "2.5rem" }} />
                    </a>
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
                  <h2>Amazon Clone</h2>
                  <h3>Language: ReactJs, Context API</h3>
                  <p>The Amazon clone project focused on recreating the user interface of Amazon using HTML, CSS, JavaScript and React.js. I designed the front end to mimic Amazon layout, including product listings, a shopping cart, and a checkout page.</p>
                </div>
                <div className="project-first-center">
                  <span></span>
                  <span className="logo">
                    <a href="https://harshit0808sharma.github.io/amazon-clone/" target="_blank">
                      <FcSearch style={{ fontSize: "2.5rem" }} />
                    </a>
                  </span>
                  <span className="project-connected-line"></span>
                </div>
                <div className="project-first-right"></div>
              </div>
              <div className="project-second">
                <div className="project-second-left"></div>
                <div className="project-second-center">
                  <span></span>
                  <span className="logo">
                    <a href="https://food-app-ten-sage.vercel.app/" target="_blank">
                      <FcSearch style={{ fontSize: "2.5rem" }} />
                    </a>
                  </span>
                  <span className="project-connected-line"></span>
                </div>
                <div className="project-second-right">
                  <h2>Food Delivery App</h2>
                  <h3>Language: ReactJs, NextJs, Context API, Tailwind CSS</h3>
                  <p>This food application was developed using ReactJS and Next.js, with Tailwind CSS for styling and Context API for state management. The app allows users to browse restaurants, view menus, and place orders. LocalStorage was used to persist cart data across sessions.</p>
                </div>
              </div>
              <div className="project-first">
                <div className="project-first-left">
                  <h2>Chat Application</h2>
                  <h3>Language: ReactJs, Firebase, Context API</h3>
                  <p>This real-time chat application was built using ReactJS for the frontend, with Firebase as the backend for authentication, real-time messaging, and storage. I implemented user login/logout, one-on-one messaging, and real-time data updates using Firebase Firestore and Context API for global state management.</p>
                </div>
                <div className="project-first-center">
                  <span></span>
                  <span className="logo">
                    <a href="https://chat-app-omega-murex.vercel.app/#/" target="_blank">
                      <FcSearch style={{ fontSize: "2.5rem" }} />
                    </a>
                  </span>
                  <span className="project-connected-line"></span>
                </div>
                <div className="project-first-right"></div>
              </div>
              <div className="project-second">
                <div className="project-second-left"></div>
                <div className="project-second-center">
                  <span></span>
                  <span className="logo">
                    <a href="#" target="_blank" onClick={(e) => e.preventDefault()}>
                      <FcSearch style={{ fontSize: "2.5rem" }} />
                    </a>
                  </span>
                  <span className="project-connected-line"></span>
                </div>
                <div className="project-second-right">
                  <h2>Blog Application</h2>
                  <h3>Language: HTML, CSS, JS, ReactJs, C#, ASP.NET Core, SQL Server</h3>
                  <p>This full-stack blog application enables users to write, read, and manage blog posts. The frontend is built using ReactJS, HTML, CSS, and JavaScript. Backend functionalities including user authentication, post management, and database interactions were handled with ASP.NET Core and SQL Server.</p>
                </div>
              </div>
              <div className="project-first">
                <div className="project-first-left">
                  <h2>Next Shop</h2>
                  <h3>Language: NextJs, Axios, Fake Store API</h3>
                  <p>This e-commerce storefront was developed using Next.js and integrated with the Fake Store API using Axios. The app features product listings, detailed product pages, and cart functionality. It showcases SSR and client-side navigation with a clean UI.</p>
                </div>
                <div className="project-first-center">
                  <span></span>
                  <span className="logo">
                    <a href="https://product-gallery-nextjs.vercel.app/" target="_blank">
                      <FcSearch style={{ fontSize: "2.5rem" }} />
                    </a>
                  </span>
                  <span className="project-connected-line"></span>
                </div>
                <div className="project-first-right"></div>
              </div>

            </div>
          </div>
        </section>
        <Footer theam={theam} />
      </div>
    </>
  )
}

export default AboutMe;
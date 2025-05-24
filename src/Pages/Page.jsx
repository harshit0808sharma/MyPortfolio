// import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import Services from "./Services"


const Page = ({theam, setTheam}) => {
  // const [theam, setTheam] = useState(false);
  // console.log(theam);
  return (
    <>
      <Header setTheam={setTheam} theam={theam}/>
      <Home theam={theam}/>
      <About theam={theam}/>
      <Services theam={theam}/>
      <Projects theam={theam}/>
      <Contact theam={theam}/>
      <Footer theam={theam}/>
    </>
  )
}

export default Page
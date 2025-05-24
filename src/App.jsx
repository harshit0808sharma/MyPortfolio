import { Route, Routes } from "react-router-dom";
import Page from "./Pages/Page";
import AboutMe from "./Pages/AboutMe";
import { useState } from "react";


const App = () => {
  const [theam, setTheam] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Page theam={theam} setTheam={setTheam}/>}/>
        <Route path="/about" element={<AboutMe theam={theam}/>}/>
      </Routes>
    </>
  )
}

export default App;
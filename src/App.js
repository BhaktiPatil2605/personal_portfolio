// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React , { useEffect, useState }from 'react'
// import  from 'react';
// import './App.css';
// import './Light.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Skills from './components/Skills';
import Experience from './components/Experience';


function App() {

  const [personalInfo, setPersonalInfo] = useState(null);
  const [mode, setMode] = useState('light');

    useEffect(() => {
        fetchPersonalInfo();
    }, []);

    const fetchPersonalInfo = async () => {
        try {
            const response = await fetch('/personal_info.json'); // Fetching from the public folder
            const data = await response.json();
            console.log(data);
            setPersonalInfo(data);
        } catch (error) {
            console.error("Error fetching personal info:", error);
        }
    };
    console.log(personalInfo);

    // const changeMode=()=>{
    //   if(mode==='light'){
    //     setMode('dark');
    //   }else{
    //     setMode('light')
    //   }
    // }

    const changeMode = () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

   // Dynamically change the CSS file based on the mode
   useEffect(() => {
    const linkElement = document.getElementById('theme-css');
    if (mode === 'dark') {
        linkElement.href = './App.css'; // Load dark mode (App.css)
    } else {
        linkElement.href = './Light.css'; // Load light mode (Light.css)
    }
    console.log(`Mode changed to: ${mode}, applied CSS file: ${linkElement.href}`);
}, [mode]);

    // return false;
  // var margin="50px"
  return (
    <>
    <Navbar mode={mode} changeMode={changeMode} />
    <div className="scrollspy-example">
        <Home personalInfo={personalInfo} mode={mode}/>
        <About personalInfo={personalInfo} mode={mode}/>
        <Project personalInfo={personalInfo} mode={mode}/>
        <Skills personalInfo={personalInfo} mode={mode}/>
        <Experience personalInfo={personalInfo} mode={mode}/>
        <Contact personalInfo={personalInfo} mode={mode}/>
      </div>
    </>
    
  );
}

export default App;



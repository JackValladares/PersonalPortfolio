import {useState} from "react";
import NavBar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Career from './Components/Career';
import MyProjects from './Components/MyProjects/MyProjects'
function HomePage(){
    return(
        <div>
            <AboutMe />
            <Career />
            <MyProjects />
            <Education />

        </div>
    );
}

export default HomePage;
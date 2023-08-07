import {useState} from "react";
import NavBar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
function HomePage(){
    return(
        <div>
            <NavBar></NavBar>
            <AboutMe></AboutMe>
            <Education></Education>
        </div>
    );
}

export default HomePage;
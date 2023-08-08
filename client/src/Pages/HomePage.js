import {useState} from "react";
import NavBar from './Components/HomePage/Navbar';
import AboutMe from './Components/HomePage/AboutMe';
import Education from './Components/HomePage/Education';
import Career from './Components/HomePage/Career';
import MyProjects from './Components/HomePage/MyProjects/MyProjects'
import UserComponent from "./Components/Login/userComponent";
function HomePage(){
    return(
        <div>
            <AboutMe />
            <Career />
            <MyProjects />
            <Education />
            <UserComponent />

        </div>
    );
}

export default HomePage;
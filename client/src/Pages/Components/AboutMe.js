import {useState} from 'react';
import './AboutMe.less';
import imgMyself from '../Images/Myself.png';
function AboutMe(){


    return(
        <div class="aboutMe container">
            <img class="imgMyself" src = {imgMyself} alt = "Me" />
            <div class="aboutMeBlurb">
                <h2 class="aboutMeTitle">Hi There!</h2>
                <p class="aboutMeParagraph">A lifelong programmer and innovator, I have a passion for writing awesome code for cool projects.
                Take a look at my journey down below</p>
            </div>
        </div>
    );

}

export default AboutMe;
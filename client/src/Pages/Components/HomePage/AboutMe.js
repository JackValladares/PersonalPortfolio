import {useState} from 'react';
import './AboutMe.less';
import WavyTransition from "./WavyTransition";
import imgMyself from '../../Images/Myself.png';
function AboutMe(){


    return(
        <div>
            <div className="aboutMe container">
                <img className="imgMyself" src = {imgMyself} alt = "Me" />
                <div className="aboutMeBlurb">
                    <h2 className="aboutMeTitle">Hi There!</h2>
                    <p className="aboutMeParagraph">A lifelong programmer and innovator, I have a passion for writing awesome code for cool projects.
                        Take a look at my journey down below</p>
                </div>
            </div>
            <WavyTransition fillColor="#0E141B" inverted={false}/>

        </div>
    );

}

export default AboutMe;
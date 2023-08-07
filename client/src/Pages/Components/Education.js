import {useState} from 'react';
import './Education.less';
import imgGTLogo from '../Images/GTLogo.png'
import imgGCSULogo from '../Images/GCSULogo.png'
function Education(){

    const [school, setSchool] = useState("Georgia College")

    const GCSU = [
        "Georgia College",
        "Bachelor's Degree",
        "Computer Science",
        "Cyber Security",
        "August 2017- December 2021",
    ]

    const Tech = [
        "Georgia Tech",
        "Master's Degree",
        "Computer Science",
        "Machine Learning",
        "August 2023 - [December 2025]",
    ]

    let selectedSchoolDetails;

    switch(school){
        case "Georgia College":
            selectedSchoolDetails = GCSU;
            break;
        case "Georgia Tech":
            selectedSchoolDetails = Tech;
            break;
        default:
            selectedSchoolDetails = GCSU;
            break;
    }

    return(
        <div className="educationSection container">
            <div className="sectionTitle">
                My Education
            </div>
            <div className="buttonHolder">
                <div className={`button GeorgiaCollege ${(school === "Georgia College") ? "selected" : ""}`}
                     onClick={() => setSchool("Georgia College")}>

                    <img className="buttonLogo gcsu" src={imgGCSULogo} alt="Georgia College and State University"/>
                </div>
                <div className={`button GeorgiaCollege ${(school === "Georgia Tech") ? "selected" : ""}`}
                     onClick={() => setSchool("Georgia Tech")}>

                    <img className="buttonLogo tech" src={imgGTLogo} alt="Georgia Tech"/>
                </div>
            </div>

            <div className="educationDescription">
                {renderSchoolDetails(selectedSchoolDetails)}


            </div>

        </div>
    );

}
export default Education;

function renderSchoolDetails(details)
{
    return(
        <div className={"schoolDetails"}>
            <div className={"schoolName"}>{details[0]}</div> {/*Name of the school */}
            <div className={"schoolDegree"}>{details[1]}</div> {/*Degree Type Earned */}
            <div className={"schoolSubject"}>{details[2]}</div> {/*Degree Subject */}
            <div className={"schoolConcentration"}>{details[3]}</div> {/*Degree Concentration */}
            <div className={"schoolDates"}>{details[4]}</div> {/*Time Spent (or that will be spent) */}
        </div>
    );
}


import {useState} from 'react';
import { Avatar, Card, CardMedia, CardHeader, CardContent, Typography } from '@mui/material'
import './Education.less';

import imgGTLogo from '../../Images/GTLogo.png'
import imgGCSULogo from '../../Images/GCSULogo.png'
import WavyTransition from "./WavyTransition";
function Education(){

    const [selectedSchool, setSelectedSchool] = useState("Georgia College")


    const schools = [

            [
                "Georgia College",
                "Bachelor's Degree",
                "Computer Science",
                "Cyber Security",
                "August 2017- December 2021",
                imgGCSULogo,
                [
                    "SNAP Officer (2018 - 2019)",
                    "Leadership Certificate Program (2019 - 2020)" ,
                    "American Computing Machinery Club Social Chair (2019-2020)",
                    "Eta Sigma Alpha (2017 - Present)",
                    "Honors Executive Board Director of Campus Involvement (2020 - Present)" ,
                    "Young Americans for Liberty Social Chair (2019 - Present)" ,
                    "Georgia Education Mentorship Program (2020 - Present)" ,
                    "American Computing Machinery Club Vice President (2020 - 2021)",
                    "Upsilon Pi Epsilon (2020 - Present)"
                ],
                "I earned my Bachelor's Degree in Computer Science at Georgia College and State University at Milledgeville, GA." +
                "Along the way I had some incredible experiences, including active participation in the school's honor's college, leadership program, and computer science extracurriculars." +
                "I was also able to get some hands-on experience working at an internship and two contract positions alongside my normal studies, preparing me both academically and professionally for my career ahead!"
            ],
            [
                "Georgia Tech",
                "Master's Degree",
                "Computer Science",
                "Machine Learning",
                "August 2023 - [December 2025]",
                imgGTLogo,
                [

                ],
                "This year, I begin my journey at Georgia Tech studying for my Master's Degree in Computer Science with a Master's in Machine Learning." +
                "Personal enrichment is my top priority as a part of this program, and I hope to engage in some incredible hands-on, research opportunities."
            ],
    ]


    let selectedSchoolDetails;

    schools.forEach((school) => {
        if (school[0] === selectedSchool)
            selectedSchoolDetails = school;
    });

    return(
        <div>
            <WavyTransition fillColor="#0E141B" inverted={false} />



            <div className="educationSection container">
                <div className="sectionTitle secondary">
                    My Education
                </div>

                <div className={"tabHolder"}>
                    {



                        schools.map(school => {
                            var isSelected = (selectedSchool === school[0]);

                            return (
                                <Card
                                    sx={{
                                        width: '9rem',
                                        maxHeight: '15rem',
                                        margin: '0px',
                                        cursor: 'pointer',
                                        marginRight: "10px",
                                        borderRadius: '10px',
                                        backgroundColor: '#2B4555',
                                        color: 'white',
                                        opacity: isSelected ? '1.0' : '0.5',
                                        transition: 'all ease .5s'
                                    }}
                                    className={`schoolTab ${(isSelected ? "selected" : "")}`}
                                    onClick={() => setSelectedSchool(school[0])}
                                >
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        src={school[5]}
                                        alt={school[0]}
                                    />
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column", // Align children vertically
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: '10px',

                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {school[0]}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 'normal',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {school[1]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            );

                        })
                    }
                </div>



                <div className="educationDescription">
                    {renderSchoolDetails(selectedSchoolDetails)}


                </div>




            </div>
        </div>


    );

}
export default Education;

function renderSchoolDetails(details) {
    const achievements = details[6];
    const schoolBlurb = details[7];

    return(
        <div className="schoolDetails">
            <div className="schoolHeader">
                <h2 className="schoolName">{details[0]}</h2> {/* Name of the school */}
                <p className="schoolDegree">{details[1]}</p> {/* Degree Type Earned */}
            </div>
            <div className="schoolBody">
                <p className="schoolSubject">{details[2]}</p> {/* Degree Subject */}
                <p className="schoolConcentration">{details[3]}</p> {/* Degree Concentration */}
                <p className="schoolDates">{details[4]}</p> {/* Time Spent (or that will be spent) */}

                <div className="schoolAchievements">
                    <h3>Activities and Societies:</h3>
                    <ul>
                        {achievements.map(achievement => <li key={achievement}>{achievement}</li>)}
                    </ul>
                </div>
                <div className="schoolBlurb">
                    <p>{schoolBlurb}</p>
                </div>
            </div>
        </div>
    );
}
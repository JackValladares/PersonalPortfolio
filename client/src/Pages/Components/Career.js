import {useState} from 'react';
import { Avatar, Card, CardMedia, CardHeader, CardContent, Typography } from '@mui/material'
import { DiTerminal,  DiReact, DiGithubBadge, DiJavascript1, DiLess, DiVisualstudio, DiPhp, DiJava} from 'react-icons/di'
import { FaVuejs, FaNodeJs, FaShopify } from 'react-icons/fa'
import { VscAzureDevops } from 'react-icons/vsc'
import {BsFillDatabaseFill} from 'react-icons/bs'
import {TfiMicrosoft} from 'react-icons/tfi'
import './Career.less';

import imgEverSparkLogo from '../Images/Everspark.png'
import imgSimplePartLogo from '../Images/SimplePart.jpg'
import imgGNETsLogo from '../Images/GNETs.png'
import imgSkilletWorksLogo from '../Images/Skilletworks.jpg'
import WavyTransition from "./WavyTransition";

function Career(){

    const [selectedJob, setSelectedJob] = useState("All Experience")

    const icons =
    [
        ["React", DiReact],
        ["Node", FaNodeJs],
        ["Vue", FaVuejs],
        ["JavaScript", DiJavascript1],
        ["GitHub", DiGithubBadge],
        ["Azure DevOps", VscAzureDevops],
        ["Visual Studio", DiVisualstudio],
        ["SQL", BsFillDatabaseFill],
        ["ASP.NET", TfiMicrosoft],
        ["Java", DiJava],
        ["Less CSS", DiLess],
        ["PhP", DiPhp],
        ["Shopify", FaShopify]
    ]


    const jobs = [

            [
                "All Experience",
                "Coding Afficionado",
                DiTerminal,
                "",
                [],
                [],
                "April 2019 - Present"
            ],

        [
            "SimplePart LLC",
            "Software Engineer",
            imgSimplePartLogo,
            "In this position, I am a Full-Stack Software Engineer for Simplepart LLC'S Ecommerce SaaS solution. " +
            "This is a fast-paced, innovative environment wherein I've had the opportunity to take on leadership roles in a variety of different complex projects. " +
            "My responsibilities include the following:",
            [
                "Working in an Agile environment with daily stand-up meetings and biweekly sprint planning/retrospective",
                "Developing and maintaining scalable, efficient code in ASP.NET and Vue.js",
                "Leading full-stack project initiatives to build out our SAAS platform, including greenfield development such as our own APIs, robust site functionality, and internal company software",
                "Utilizing Existing APIs to implement platform functionality, including social media integration, payment processing, and other backend processes",
                "Performing database operations in MSSQL Server, including writing/optimizing stored procedures, expanding and organizing database architecture, and running queries for testing/debugging",
                "Styling website components using the Less CSS preprocessor",
                "Running quality assurance and makes sure code is modular and performs consistently across hundreds of client sites",
                "Designing Solutions Architecture for Enterprise-Level E-Commerce Software",
                "Leading groups of developers to build high-quality projects under deadlines, and presenting these projects to stakeholders and managers"
            ],
            ["Vue", "Azure DevOps", "Visual Studio", "SQL", "Less CSS", "ASP.NET", "JavaScript"],
            "September 2022 - Present"
        ],

        [
            "EverSpark",
            "Front End Developer",
            imgEverSparkLogo,
            "In this role, I acted as both the Project Manager of Web Development and a Frontend Web Developer for Everspark Interactive. " +
            "I left this position on amicable terms to move into a position with a more heavy emphasis on development over management. " +
            "This role involved the following responsibilities:",
            [
                "Managed internal and offshore development/design team",
                "Created and maintained processes for web development projects",
                "Acted as a member of the development team and completed projects and tasks using WordPress, Shopify, PhP, HTML, CSS, JavaScript and MySQL with SEO in mind",
                "Performed DNS maintenance, site migrations, SSL installation, and Dev/Staging/Production Pipeline",
                "Performed Quality Assurance of all company projects"


            ],
            ["Shopify", "GitHub", "PhP", "SQL", "JavaScript"],
            "April 2022 - September 2022"
        ],

        [
            "GNETs Of Oconee",
            "Full-Stack Developer",
            imgGNETsLogo,
            "As a solo developer, I designed and launched a full-stack web application using ASP.NET, React.js, and MySQL, crafting features such as a messaging system and an employee scheduler. " +
            "Collaborating closely with the client, I translated business requirements into functional solutions, integrated external APIs, and configured live hosting. My responsibilities extended to post-launch support, " +
            "and the role included the following:",
            [
                "Designed, developed, and launched a full-stack web application from the ground up under a defined timeline, using ASP.NET, React.js, and MySQL",
                "Collaborated closely with the client to translate business requirements into a functional product that satisfied the client's needs",
                "Crafted advanced features from scratch, including a messaging system, an employee management system, and an employee shift scheduler",
                "Integrated external APIs for additional functionalities, such as exporting website data into a formatted spreadsheet",
                "Configured DNS settings and deployed a web application and its associated database for live hosting",
                "Provided post-launch support, involving on-call maintenance, platform improvements, and necessary adjustments based on the client's evolving needs",
                "During this maintenance period, undertook 2 to 3 significant updates/fixes to ensure the software continued to meet the client's needs effectively",
                "Completed the role with successful delivery of the software, meeting all timelines, and achieving the client's satisfaction"
            ],
            ["React", "GitHub", "Visual Studio", "SQL", "JavaScript", "ASP.NET"],
            "September 2021 - July 2022"
        ],

        [
            "Skilletworks",
            "Database Analyst",
            imgSkilletWorksLogo,
            "This position was as a Data Analyst with Skilletworks LLC in Atlanta, Georgia. I worked with them on their custom product indexing software, and left this position after fulfilling my contract's terms to my supervisor's satisfaction. " +
            "It involved the following responsibilities:",
            [
                "Working with Skilletworks' CEO to index products in a database and improve upon custom software",
                "Traveling between different restaurants in Atlanta and talking to entrepreneurs about my client’s software",
                "Managing database schema to align with an exponentially growing list of products",
                "Communicating with Skilletworks' internal developer to work within the defined design philosophy of company software",
            ],
            ["React", "SQL", "GitHub"],
            "September 2020 - June 2021"
        ],



    ]


    let selectedJobDetails

    jobs.forEach((job) => {
        if (job[0] === selectedJob)
            selectedJobDetails = job;
    });

    return(
        <div>
            <div className="careerSection container">
            <div className="sectionTitle secondary">
                My Career
            </div>

            <div className={"tabHolder"}>
                {



                    jobs.map(job => {
                        var isSelected = (selectedJob === job[0]);

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
                                onClick={() => setSelectedJob(job[0])}
                            >
                                {
                                    job[2] === DiTerminal ?

                                        <DiTerminal size="100px"/> :
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            src={job[2]}
                                            alt={job[0]}
                                        />
                                }

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
                                        {job[0]}
                                    </Typography>


                                </CardContent>
                            </Card>
                        );

                    })
                }
            </div>


            <div className="sectionTitle secondary">
                Technologies Used
            </div>

            <div className={"tabHolder"}>
                {
                    icons.map(([name, IconComponent], index) => {
                        let isValidSkill = (selectedJobDetails[0] === "All Experience" || (selectedJobDetails[5].includes(name)));
                        console.log(name, "==", selectedJobDetails[5]);
                        return (
                            <Card
                                sx={{
                                    width: '9rem',
                                    maxHeight: '15rem',
                                    margin: '0px',
                                    marginRight: "10px",
                                    borderRadius: '10px',
                                    backgroundColor: '#2B4555',
                                    color: 'white',
                                    transition: 'all ease .5s',
                                    paddingTop: '10px',
                                    paddingBottom: '5px',
                                    opacity: isValidSkill ? '1.0' : '.3',

                                }}
                                key={index}
                                className={`schoolTab ${(isValidSkill ? "selected" : "")}`}
                            >
                                {
                                    <IconComponent size="2rem" />
                                }

                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}
                                >
                                    {name}
                                </Typography>

                            </Card>
                        );

                    })
                }
            </div>



            <div className="educationDescription">
                {renderJobDetails(selectedJobDetails)}


            </div>



        </div>
            <WavyTransition fillColor="#0E141B" inverted={true} />
        </div>


    );

}
export default Career;

function renderJobDetails(details) {
    var bulletList = details[4];

    return(
        <div className="jobDetails">
            <div className="jobHeader">
                <h2 className="jobName">{details[0]}</h2> {/* Name of the school */}
                <p className="jobTitle">{details[1]}</p> {/* Degree Type Earned */}
                <p className="jobDate">{details[6]}</p> {/* Dates Worked There */}
            </div>
            <div className="jobBody">
                <div className="jobList">
                    <p>{details[3]}</p>
                    <ul>
                        {bulletList.map(achievement => <li key={achievement}>{achievement}</li>)}
                    </ul>
                </div>

            </div>
        </div>
    );
}
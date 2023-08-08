import React from 'react';
import "./Project.less"
import {DiGithubBadge, DiJava, DiJavascript1, DiLess, DiPhp, DiReact, DiVisualstudio, DiGhostSmall} from 'react-icons/di'
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import {FaNodeJs, FaShopify, FaVuejs} from "react-icons/fa";
import {VscAzureDevops} from "react-icons/vsc";
import {BsFillDatabaseFill, BsUnity} from "react-icons/bs";
import {TfiMicrosoft} from "react-icons/tfi";


/*
Blurb:
[0] - Name (String)
[1] - Description (String)
[2] - Tech (String Array)
 */
function Project({ blurb, image, url }) {
    let techStack = blurb[2]

    const icons =
        [
            ["React", DiReact],
            ["Node", FaNodeJs],
            ["Vue", FaVuejs],
            ["JavaScript", DiJavascript1],
            ["GitHub", DiGithubBadge],
            ["Azure DevOps", VscAzureDevops],
            ["VS", DiVisualstudio],
            ["SQL", BsFillDatabaseFill],
            ["ASP.NET", TfiMicrosoft],
            ["Java", DiJava],
            ["Less CSS", DiLess],
            ["PhP", DiPhp],
            ["Shopify", FaShopify],
            ["Unity", BsUnity],
            ["C-Sharp", DiGhostSmall]
        ]


    return (
        <div className="projectTile">
            <a href={url}>
                <img className="projectImage" src={image} alt={blurb[0]}></img>
            </a>

            <div className="projectText">
                <div className="projectTitle">{blurb[0]}</div>
                <div className="projectDescription">
                    <div className="projectBlurb">{blurb[1]}</div>

                </div>
                <div className="projectTools">
                    {
                    techStack.map((tech) => {
                            let Icon;

                            icons.map(([name, IconComponent], index) => {
                                if(name === tech)
                                {
                                    Icon = IconComponent
                                }
                            })

                            if (!Icon) {
                                console.warn(`No icon found for technology: ${tech}`);
                                return null; // or render some default content
                            }

                            return (
                                <Card
                                    sx={{
                                        width: '5rem',
                                        maxHeight: '3.5rem',
                                        margin: '0px',
                                        marginRight: "10px",
                                        borderRadius: '10px',
                                        paddingTop: '5px',
                                        backgroundColor: '#2B4555',
                                        color: 'white',
                                        transition: 'all ease .5s',
                                        marginTop: '5px',

                                    }}
                                >
                                    {
                                        <Icon size="1.5rem" />
                                    }

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 'bold',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {tech}
                                    </Typography>

                                </Card>
                            );


                    })

                }
                </div>
                <div className="projectURL">

                </div>
            </div>

        </div>
    );
}

export default Project;

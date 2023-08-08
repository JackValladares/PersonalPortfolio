import './MyProjects.less'
import Project from './Project';
import imgAdminPanel from '../../Images/AdminPanel.png'
import imgApartmentApp from '../../Images/RoomMate.png'

function MyProjects() {

    const projects = [
        { blurb: ['Employee Management App', 'A Full-Stack Application used to track employee hours, manage login information, and leave shift messages', ["ASP.NET", "React", "SQL"]],  image: imgAdminPanel, url: 'http://example.com/1' },
        { blurb: ['Apartment Application', 'Academic web application demonstrating the basics of web development over a semester-long Agile project', ["PhP", "GitHub", "JavaScript", "SQL"]], image: imgApartmentApp, url: 'http://example.com/2' },
        // ... more projects
    ];

    return (


        <div className="projectSection container">

            <div className="sectionTitle secondary" style={{marginBottom: 60}}>
                Some of my Projects
            </div>

            {projects.map((project, index) => (
                <Project key={index} blurb={project.blurb} image={project.image} url={project.url} />
            ))}
        </div>
    );

}
export default MyProjects;

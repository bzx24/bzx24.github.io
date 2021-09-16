import Button from '@material-ui/core/Button';
import Paper from './documents/paper.pdf';
import Poster from './documents/poster.pdf';
import "./styles/projects.scss";

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <head>
                <meta charset="utf-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Projects</title>
                <link href="https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300" rel="stylesheet"></link>
            </head>
            <div className="columns">
                <div className="left"></div>
                <div className="middle">
                    <body>
                        <div className="title">
                            <span>Projects</span>
                        </div>
                        <div className="project">
                            <div className="projectTitle">Markov Volleyball</div>
                            <div className="projectInfo">I designed and implemented a Markov chain model 
                            that models the progression of a volleyball rally to create a better and less 
                            subjective passing metric. I wrote a paper on this project as part of an independent study.
                            I'm currently in the process of submitting my paper to the MIT Sloan Sports Analytics 
                            Conference Paper Competition.
                            </div>
                            <div className="buttons">
                                <span style={{marginRight: "2%"}}>
                                    <a href="https://github.com/bzx24/markov-volleyball" rel="noopener noreferrer" target="_blank" style={{color: "#21b6ae", textDecoration: "none"}}>
                                        View GitHub
                                    </a>
                                </span>
                                <span>
                                    <a href={Paper} rel="noopener noreferrer" target="_blank" style={{color: "#21b6ae", textDecoration: "none" }}>
                                        View Paper
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="project">
                            <div className="projectTitle">Markov Linear Regression</div>
                            <div className="projectInfo">I worked with a classmate to deign and implement a linear regression model that that explains 95% 
                            of the variation in win percentage for NCAA Division 1 Men's Volleyball Teams. Our results shed insight on which volleyball skills are the most
                            important to winning. Our poster was a finalist in the 2020 MIT Sloan Sports Analytics Conference Poster Competition.
                            </div>
                            <div className="buttons">
                                <a href={Poster} rel="noopener noreferrer" target="_blank" style={{color: "#21b6ae", textDecoration: "none" }}>
                                    View Poster
                                </a>
                            </div>
                        </div>
                    </body>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
}
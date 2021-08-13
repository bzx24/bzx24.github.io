import "./styles/about.scss";

export default function About() {
    return (
        <div className="about" id="about">
            <head>
                <meta charset="utf-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>About Me</title>
                <link href="https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300" rel="stylesheet"></link>
            </head>
            <div className="columns">
                <div className="left"></div>
                <div className="middle">
                    <body>
                        <div className="title">
                            <span>About Me</span>
                        </div>
                        <div className="info">
                        Hi, I'm Brian, a sophomore at Rice University studying computer science and mathematics. 
                        This semester, I'm taking Intro to Program Design, Tools and Models for Data Science, Honors Linear Algebra, and Honors Analysis.
                        I'm also a TA for COMP 140, Intro to Computational Thinking. 
                        My professional interests are software development and data science. 
                        I work with the Rice volleyball team coaching staff on volleyball analytics projects and spent the past summer implementing a calendar integration feature for the Rice Public Art App.
                        In my free time, I read manga and play for the club volleyball and Overwatch team at Rice.
                        </div>
                        <div className="info">
                        Contact me at
                        <span> <a href="mailto:bzx1@rice.edu" style={{color: "#21b6ae", textDecoration: "none" }}>bzx1@rice.edu.</a> </span>
                        </div>
                    </body>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
}
import "./styles/about.scss";

export default function About() {
    return (
        <div className="about">
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
                        <div className="title"></div>
                        <div className="info">
                        </div>
                    </body>
                </div>
                <div className="right"></div>
            </div>
        </div>
    );
}
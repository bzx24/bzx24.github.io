import "./landing.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Landing() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
        showCursor: true,
        backDelay: 1200,
        backSpeed: 90,
        strings: ["Computer Science", "Mathematics", "Sports Analytics", "Rice University"],
        });
    }, []);

    return (
        <div className = "landing">
            <head>
                {/* modified landing page design created by Dinesh Pandiyan
                https://github.com/flexdinesh/dev-landing-page
                */}
                <meta charset="utf-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Brian Xu</title>
                <link href="https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300" rel="stylesheet"></link>
                <link href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" rel="stylesheet"></link>
            </head>
            <body>
                <main>
                <div class="intro">Howdy, I'm Brian Xu</div>
                <div class="tagline">
                    <span ref={textRef}></span>
                </div>
                </main>
            </body>
        </div>
    );
}
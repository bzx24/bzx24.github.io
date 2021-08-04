import "./landing.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Landing() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
        showCursor: false,
        backDelay: 1200,
        backSpeed: 70,
        typeSpeed: 70,
        strings: ["a student at Rice University.", "majoring in computer science and mathematics.", "a full stack developer.", "interested in sports analytics.", "a volleyball player and esports enthusiast."],
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
            <div className="body">
                <div className="left"></div>
                <div className="right">
                    <main>
                        <div class="intro1">Howdy, my name is</div>
                        <div class="intro2">Brian Xu.</div>
                        <div class="tagline">
                            <span>I'm </span>
                            <span ref={textRef}></span>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
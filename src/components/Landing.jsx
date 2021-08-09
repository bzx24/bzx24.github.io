import "./styles/landing.scss";
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
        strings: ["a student at Rice University.", "majoring in computer science + math.", "a full stack developer.", "interested in sports analytics.", "a volleyball and esports enthusiast."],
        });
    }, []);

    return (
        <div className = "landing">
            <head>
                <meta charset="utf-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Brian Xu</title>
                <link href="https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:300" rel="stylesheet"></link>
                <link href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" rel="stylesheet"></link>
            </head>
            <div className="columns">
                <div className="left"></div>
                <div className="right">
                    <main>
                        <div className="intro1">Howdy, my name is</div>
                        <div className="intro2">Brian Xu.</div>
                        <div className="tagline">
                            <span>I'm </span>
                            <span ref={textRef}></span>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
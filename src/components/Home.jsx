import "./styles/home.scss";
import Landing from "./Landing"
import About from "./About"
import Projects from "./Projects"

export default function Home() {
    return (
        <div className="home">
            <div className="sections">
                <Landing/>
                <About/>
                <Projects/>
            </div>
        </div>
    );
}
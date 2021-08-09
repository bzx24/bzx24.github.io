import "./styles/home.scss";
import Test from "./Test"
import Test2 from "./Test2"
import Landing from "./Landing"
import About from "./About"
import Projects from "./Projects"

export default function Home() {
    return (
        <div className="home">
            <div className="sections">
                <Landing/>
                <About/>
            </div>
        </div>
    );
}
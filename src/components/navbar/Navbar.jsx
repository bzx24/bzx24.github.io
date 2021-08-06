import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
    return (
        <div className = "navbar">
            <div className = "wrapper">
                <div className = "left">
                    <div className = "button">
                        <Link to="/">
                            <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Home</Button>
                        </Link>
                        <Link to="/about">
                            <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">About</Button>
                        </Link>
                        <Link to="/projects">
                            <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Projects</Button>
                        </Link>
                        <Link to="/blog">
                            <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Blog</Button>
                        </Link>
                    </div>
                </div>
                <div className = "right">
                    <div className = "icons-social">
                        <a target="_blank" rel="noreferrer" href="https://github.com/bzx24"><i class="fab fa-github"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bzxu"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div className = "button">
                        <Link to="/resume.pdf" target="_blank" download>
                            <Button style = {{color: "#FAFAFA", backgroundColor: "#21b6ae", fontSize: "15px", font: "Roboto"}} variant="contained" size="small">RESUME</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
import Button from '@material-ui/core/Button';
import { init } from "ityped";
import "./navbar.scss";

export default function Navbar() {
    return (
        <div className = "navbar">
            <div className = "wrapper">
                <div className = "left">
                    <div className = "button">
                        <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Home</Button>
                        <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">About</Button>
                        <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Projects</Button>
                        <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Blog</Button>
                    </div>
                </div>
                <div className = "right">
                    <div className = "icons-social">
                        <a target="_blank" href="https://github.com/bzx24"><i class="fab fa-github"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/bzxu"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div className = "button">
                        <Button style = {{color: "#FAFAFA", backgroundColor: "#21b6ae", fontSize: "15px", font: "Roboto"}} variant="contained" size="small">RESUME</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Button from '@material-ui/core/Button';
import PDF from './documents/resume.pdf';
import "./styles/navbar.scss";

export default function Navbar() {
    return (
        <div className = "navbar">
            <div className = "wrapper">
                <div className = "left">
                    {/*
                    <div className = "button">
                        <Link to="/" style = {{textDecoration: "none"}}>
                            <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Home</Button>
                        </Link>
                        <Link to="/projects" style = {{textDecoration: "none"}}>
                            <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Projects</Button>
                        </Link>
                        <Link to="/blog" style = {{textDecoration: "none"}}>
                            <Button style = {{color: "#FAFAFA", fontSize: "15px", font: "Roboto"}} variant="text" size="small">Blog</Button>
                        </Link>
                    </div>
                    */}
                </div>
                <div className = "right">
                    <div className = "icons-social">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/bzx24"><i class="fab fa-github"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bzxu"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div className = "button">
                        <a href={PDF} rel="noopener noreferrer" target="_blank" style = {{textDecoration: "none"}}>
                            <Button style = {{color: "#FAFAFA", backgroundColor: "#21b6ae", fontSize: "15px", font: "Roboto"}} variant="contained" size="small">RESUME</Button>
                        </a>

                        {/*
                        <Link to="/resume.pdf" target="_blank" download style = {{textDecoration: "none"}}>
                            <Button style = {{color: "#FAFAFA", backgroundColor: "#21b6ae", fontSize: "15px", font: "Roboto"}} variant="contained" size="small">RESUME</Button>
                        </Link>
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
}
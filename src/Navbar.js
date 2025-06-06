import photo from "./images/websitelogo.png";

function Navbar() {
    return (
        <header className="header">
            <div className="logo">
                <img src={photo} alt="Website Logo" className="logo-image"></img>
                <span className="website-name">Ryan Fu's portfolio website</span>
            </div>
            <nav className="navbar-buttons">
                <a href="/" className="nav-link">HOME</a>
                <a href="/projects" className="nav-link">PROJECTS</a>
                <a href="/experiences" className="nav-link">EXPERIENCES</a>
                <a href="/hobbies" className="nav-link">HOBBIES</a>
                <a href="/contact" className="nav-link">CONTACT ME</a>
            </nav>
        </header>
    );
}

export default Navbar;
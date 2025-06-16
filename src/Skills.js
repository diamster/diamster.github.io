import { useNavigate } from "react-router-dom";

function Skills() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        window.scrollTo(0, 0); // makes user scroll to top upon button click to next page
        navigate("/projects");
    };
    return (
        <div className="skills-section">
            <h2>Technical Skills</h2>
            <p className="skills-intro">
                I have experience with a range of programming languages and tools that support both front-end and back-end development. My core languages include:
            </p>
            <ul className="skills-list">
                <li>C#</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>HTML/CSS</li>
            </ul>   
            <p className="skills-intro">Furthermore, I'm also familiar with using Git and GitHub for version control and collaboration. However I'm always looking to learn new tools and apply my skills to real world projects.</p>
            <div className="skills-button-location">
                <button onClick={handleButtonClick} className="skills-button">
                    See my code in action!
                </button>
            </div>    

        </div>
    );
}

export default Skills;
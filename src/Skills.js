import { Link } from "react-router-dom";
function Skills() {
    return (
        <div className="skills-section">
            <h2>Technical Skills</h2>
            <p className="skills-intro">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ratione unde inventore at quas ipsa esse quod dolorum dolore quae quam facilis veritatis quos? Quas alias quasi itaque molestiae consectetur.
            </p>
            <ul className="skills-list">
                <li>C#</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>HTML/CSS</li>
            </ul>   
            <div className="skills-button-location">
                <Link to="/projects" className="skills-button">
                    See my code in action!
                </Link>
            </div>    

        </div>
    );
}

export default Skills;
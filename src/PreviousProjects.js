import photo from "./images/FarioGameplayScreenshot.png";
function PreviousProjects() {
    return (
        <div className="previous-projects-section">
            <h2 className="project-headings">Previous Projects</h2>
            <div className="previous-projects-items">
                <h3 className="project-title">Fario (Unity Game)</h3>
                <img src={photo} alt="Gameplay screenshot of Fario" className="game-image"></img>
                <p className="project-description">
                    A 2D platformer game developed using the Unity Game Engine. The game features a custom-built health and shield system, enemy interactions, and multi-level progression. 
                    The game also aims to showcase the fundamental game design mechanics and level design using C# and Unity's built-in physics.
                </p>
                <ul className="project-details">
                    <li><strong>Start Date:</strong> January 2023</li>
                    <li><strong>End Date:</strong> April 2023</li>
                    <li><strong>Status:</strong> Completed</li>
                    <li><strong>Tech Stack:</strong> Unity Game Engine, C#</li>
                </ul>
                <a href="https://youtu.be/l5W0lafmQls?si=2Z1FDG2rj3AR1WDm" className="project-link" target="_blank" rel="noopener noreferrer">
                {/*target is used to make the link open in a new tab and rel is used to prevent security vulnerabilities based on chatGPT recommendation*/}
                    Checkout the gameplay of my game on Youtube!
                </a>
            </div>
        </div>
    );
}

export default PreviousProjects;
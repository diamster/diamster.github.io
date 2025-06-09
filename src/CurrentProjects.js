function CurrentProjects() {
    return (
        <div className="current-projects-section">
            <h2 className="project-headings">Current Projects</h2>
            <div className="current-projects-items">
                <h3 className="project-title">Portfolio Website</h3>
                <p className="project-description">
                    A personal portfolio website showcasing my skills, current and past projects, infomation about myself and hobbies. 
                </p>
                <ul className="project-details">
                    <li><strong>Start Date:</strong> May 2025</li>
                    <li><strong>Status:</strong> In Progress</li>
                    <li><strong>Tech Stack:</strong> React, HTML, and CSS</li>
                </ul>
                <a href="https://github.com/diamster/diamster.github.io" className="project-link" target="_blank" rel="noopener noreferrer">
                {/*target is used to make the link open in a new tab and rel is used to prevent security vulnerabilities based on chatGPT recommendation*/}
                    View it on my github!
                </a>
            </div>
        </div>
    );
}

export default CurrentProjects;
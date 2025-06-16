function CurrentProjects() {
    return (
        <div className="info-section">
            <h2 className="section-heading">Current Projects</h2>
            {/*Portfolio Website (mini project for CMPT276)*/}
            <div className="info-item">
                <h3 className="info-title">Portfolio Website</h3>
                <p className="info-description">
                    A personal portfolio website built using React, designed to showcase my technical skills, past and current projects, and experiences. The website also includes sections about me, my hobbies, and a contact me page. 
                    While the layout is styled with CSS and follows a clean, user friendly structure inspired by wiki style designs such as fandom.
                </p>
                <ul className="info-details">
                    <li><strong>Start Date:</strong> May 2025</li>
                    <li><strong>Status:</strong> In Progress</li>
                    <li><strong>Tech Stack:</strong> React, HTML, and CSS</li>
                </ul>
                <a href="https://github.com/diamster/diamster.github.io" className="project-link" target="_blank" rel="noopener noreferrer">
                {/*target is used to make the link open in a new tab and rel is used to prevent security vulnerabilities based on chatGPT recommendation*/}
                    Check it out on my github!
                </a>
            </div>
            {/*Taiwan Travel Guide Website (final project for CMPT276)*/}
            <div className="info-item">
                <h3 className="info-title">Taiwan Travel Guide Website</h3>
                <p className="info-description">
                    A website built to help users explore Taiwan's top destinations, attractions and events. The website also organizes travel information in an interactive format with location suggestions and planning tips. 
                </p>
                <ul className="info-details">
                    <li><strong>Start Date:</strong> May 2025</li>
                    <li><strong>Status:</strong> In Progress</li>
                    <li><strong>Tech Stack:</strong> React, HTML, and CSS</li>
                </ul>
                <a href="https://github.com/CMPT-276-SUMMER-2025/final-project-18-flowers" className="project-link" target="_blank" rel="noopener noreferrer">
                {/*target is used to make the link open in a new tab and rel is used to prevent security vulnerabilities based on chatGPT recommendation*/}
                    Check it out on my github!
                </a>
            </div>
        </div>
    );
}

export default CurrentProjects;
function CurrentProjects() {
    return (
        <div className="current-projects-section">
            <h2 className="project-headings">Current Projects</h2>
            <div className="current-projects-items">
                <h3 className="website-project">Portfolio Website</h3>
                <a href="https://github.com/diamster/diamster.github.io" className="portfolio-link" target="_blank" rel="noopener noreferrer">
                {/*target is used to make the link open in a new tab and rel is used to prevent security vulnerabilities based on chatGPT recommendation*/}
                    View it on my github!
                </a>
            </div>
        </div>
    );
}

export default CurrentProjects;
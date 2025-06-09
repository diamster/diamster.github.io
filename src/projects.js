import CurrentProjects from "./CurrentProjects"
import PreviousProjects from "./PreviousProjects";
function Projects () {
    return (
        <div className="projects-page">
            <CurrentProjects></CurrentProjects>
            <PreviousProjects></PreviousProjects>
        </div>
    );
}

export default Projects;
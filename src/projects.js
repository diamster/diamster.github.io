import CurrentProjects from "./CurrentProjects";
import PreviousProjects from "./PreviousProjects";
import ExperienceButton from "./ExperienceButton";
function Projects () {
    return (
        <div className="page-setup">
            <CurrentProjects></CurrentProjects>
            <PreviousProjects></PreviousProjects>
            <ExperienceButton></ExperienceButton>
        </div>
    );
}

export default Projects;
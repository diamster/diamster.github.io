import WorkExperience from "./WorkExperience";
import VolunteerExperience from "./VolunteerExperience";
import ProjectButton from "./ProjectButton";

function Experiences () {
    return (
        <div className="page-setup">
            <WorkExperience></WorkExperience>
            <VolunteerExperience></VolunteerExperience>
            <ProjectButton></ProjectButton>
        </div>
    );
}

export default Experiences;
import WorkExperience from "./WorkExperience";
import VolunteerExperience from "./VolunteerExperience";

function Experiences () {
    return (
        <div className="page-setup">
            <WorkExperience></WorkExperience>
            <VolunteerExperience></VolunteerExperience>
        </div>
    );
}

export default Experiences;
import HobbiesSection from './HobbiesSection';
import PersonalInterests from "./PersonalInterests";


function Hobbies () {
    return (
        <div className="page-setup">
            <PersonalInterests></PersonalInterests>
            <HobbiesSection></HobbiesSection>
        </div>
    );
}

export default Hobbies;
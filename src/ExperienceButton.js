import { useNavigate } from "react-router-dom";

function ExperienceButton() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        window.scrollTo(0, 0); // makes user scroll to top upon button click to next page
        navigate("/experiences");
    };
    return (
        <div className="experience-button-location">
            <button onClick={handleButtonClick} className="experience-button">
                View my Experiences!
            </button>
        </div>


    );
}

export default ExperienceButton; 
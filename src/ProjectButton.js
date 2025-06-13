import { useNavigate } from "react-router-dom";

function ProjectButton() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        window.scrollTo(0, 0); 
        navigate("/projects");
    }
    return (
        <div className="project-button-location">
            <button onClick={handleButtonClick} className="project-button">
                View my Projects!
            </button>
        </div>
    );
}

export default ProjectButton;
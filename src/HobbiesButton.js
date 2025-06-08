import { useNavigate } from "react-router-dom";

function HobbiesButton() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        window.scrollTo(0, 0); // makes user scroll to top upon button click to next page
        navigate("/hobbies");
    };
    return (
        <div className="hobbies-button-location">
            <button onClick={handleButtonClick} className="hobbies-button">
                Learn more about me!
            </button>
        </div>


    );
}

export default HobbiesButton;
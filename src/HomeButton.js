import { useNavigate } from "react-router-dom";

function HomeButton() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        window.scrollTo(0, 0); // makes user scroll to top upon button click to next page
        navigate("/");
    };
    return (
        <div className="home-button-location">
            <button onClick={handleButtonClick} className="home-button">
                Return back to Home Page!
            </button>
        </div>
    );
}

export default HomeButton;
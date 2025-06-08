import { Link } from "react-router-dom";
function HobbiesButton() {
    return (
        <div className="hobbies-button-location">
            <Link to="./hobbies" className="hobbies-button">
                Learn more about me!
            </Link>
        </div>


    );
}

export default HobbiesButton;
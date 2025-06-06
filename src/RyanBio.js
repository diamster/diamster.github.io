import photo from "./images/PhotoID.jpg";
/*Import photo since images folder is in src and not public*/

function RyanBio() {
    return (
        <div className="about-section">
            <div className="photo-border">
                <img src={photo} alt="Photo ID of myself" className="profile-photo"></img>
            </div>
            <div className="about-text">
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ratione unde inventore at quas ipsa esse quod dolorum dolore quae quam facilis veritatis quos? Quas alias quasi itaque molestiae consectetur.</p>
            </div>
        </div>


    );
}

export default RyanBio;
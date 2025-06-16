import photo from "./images/PhotoID.jpg";
/*Import photo since images folder is in src and not public*/

function RyanBio() {
    return (
        <div className="about-wrapper">
            <h1 className="intro-heading">Hi, I'm Ryan Fu!</h1>
            <div className="about-section">
                <div className="photo-border">
                    <img src={photo} alt="Photo ID of myself" className="profile-photo"></img>
                </div>
                <div className="about-text">
                    <h2>About me</h2>
                    <p>
                        Hello! Thanks for checking out my portfolio website! I am Ryan Fu, a Math and Computer Science joint major student at Simon Fraser University with a strong passion on learning new infomation and continuously growing my skills.
                        Whether I'm developing a website, collaborating on group projects, or exploring new frameworks, I always enjoy turning ideas into real, usable tools. I'm also always eager to take on new challenges and further develop my abilities in software development.
                    </p>
                </div>
            </div>
        </div>


    );
}

export default RyanBio;
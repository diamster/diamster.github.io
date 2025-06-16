import photo from "./images/HIVELeaderOutfit.jpeg";
function WorkExperience() {
    return (
    <div className="info-section">
      <h2 className="section-heading">Work Experience</h2>

      <div className="info-item">
        <h3 className="info-title">SFU HIVE Welcome Leader</h3>
        <p className="info-description">
            Guided new students during orientation and promoted a welcoming academic environment. My responsibilities included supporting the transition of new undergraduate students to their university life,
            facilitating group activities, answering student questions, and providing insight into academic life and available resources. 
      </p>
      <ul className="info-details">
        <li><strong>Start Date:</strong> June 2024</li>
        <li><strong>End Date:</strong> Septemember 2024</li>
        <li><strong>Skills Gained:</strong> Communication, Teamwork, leadership and Campus Knowledge</li>

      </ul>
      </div>
      <div className="work-experience-photo-border">
        <img src={photo} alt="Photo of myself in HIVE Leader Uniform" className="work-photo"></img>
      </div>
    </div>
    );
}

export default WorkExperience;
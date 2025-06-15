function ContactMe() {
    return (
        <div className="contact-page">
            <div className="contact-box">
                <h2>Contact Me</h2>
                <p><strong>Email:</strong> ryf@sfu.ca</p>
                <p><strong>Connect with me:</strong></p>
        <ul className="contact-links">
          <li><a href="https://github.com/diamster" target="_blank" rel="noopener noreferrer" className="external-button">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/ryan-fu-0a482436b/" target="_blank" rel="noopener noreferrer" className="external-button">LinkedIn</a></li>
        </ul>

        <p>
          <strong>Resume:</strong> <a href="/files/Ryan_Fu_Resume.pdf" download className="external-button">Download my resume!</a>
        </p>

        <p>Thank you for checking out my website!</p>
      </div>
        </div>
    );
}

export default ContactMe;
import "../styles/About.css";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                {/* <div className="about-image"><img src="/profile.png" alt="Profile" /></div> */}
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>Hello! I'm <strong>Sivapandi R</strong> Motivated and enthusiastic fresher seeking an opportunity as a Software Developer where I can apply
                        programming knowledge and web development skills to build efficient and scalable software solutions.</p>
                    <div className="info-grid">
                        <div><strong>Name:</strong>Sivapandi R</div>
                        <div><strong>Degree:</strong>B.E. ECE</div>
                        <div><strong>Email:</strong>sivapandi622004@gmail.com</div>
                    </div>
                    <a className="btn" href="/resume.pdf">Download Resume</a>
                </div></div></section>);
}
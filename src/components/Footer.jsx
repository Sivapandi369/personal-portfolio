import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* <h2><strong>SIVAPANDI R</strong></h2> */}
                {/* <p>Frontend Developer | Web Designer</p> */}

                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="social-links">
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                </div>

                <p className="copyright">
                    © 2026 Sivapandi R. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

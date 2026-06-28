import "../styles/Internship.css";

export default function Internship(){
  return(
    <section className="internship" id="internship">
      <h2>Internship & Certifications</h2>

      <div className="card">
        <h3>Web Development Intern</h3>
        <h4>Corizo Corporation</h4>
        <p><strong>Duration:</strong> 3 Months</p>
        <ul>
          <li>Built responsive web pages.</li>
          <li>Worked with HTML, CSS and JavaScript.</li>
          <li>Improved UI and debugging skills.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Certifications</h3>
        <ul>
          <li>Web Development - Corizo Corporation (2024)</li>
          <li>NPTEL - Introduction to Industrial IoT 4.0</li>
        </ul>
      </div>
    </section>
  );
}

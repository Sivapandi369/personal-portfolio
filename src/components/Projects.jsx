import "../styles/Projects.css";

const projects = [
    { title: 'Food Delivery Website', tech: 'React + Vite', desc: 'Responsive food ordering UI with restaurant cards.' },
    { title: 'Personal Portfolio', tech: 'HTML, CSS, JavaScript', desc: 'Modern portfolio showcasing skills and projects.' },
    { title: 'Student Management System', tech: 'JavaScript', desc: 'CRUD application to manage student records.' }
];

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((p, i) => (
                    <div className="project-card" key={i}>
                        <div className="image-placeholder">Project Image</div>
                        <h3>{p.title}</h3>
                        <p><strong>Tech:</strong> {p.tech}</p>
                        <p>{p.desc}</p>
                        <div className="buttons">
                            <a href="#" className="btn">Live Demo</a>
                            <a href="#" className="btn outline">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
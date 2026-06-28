import "../styles/Skills.css";

const skills = [
    { name: 'HTML', level: '95%' },
    { name: 'CSS', level: '90%' },
    { name: 'JavaScript', level: '90%' },
    { name: 'React', level: '90%' },
    { name: 'Git & GitHub', level: '90%' },
    { name: 'Python', level: '90%' }
];
export default function Skills() {
    return (
        <section className="skills" id="skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((s) => (
                    <div className="skill-card" key={s.name}>
                        <h3>{s.name}</h3>
                        <div className="bar"><div className="fill" style={{ width: s.level }}></div></div>
                        <span>{s.level}</span>
                    </div>
                ))}
            </div>
        </section>);
}
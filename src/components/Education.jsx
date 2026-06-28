import "../styles/Education.css";

export default function Education() {
    return (
        <section className='education' id='education'>
            <h2>Education</h2>
            <div className='timeline'>
                <div className='card'><h3>B.E. Electronics and Communication Engineering</h3><p>Sethu Institute of Technology (2025)</p><span>CGPA: 7.3</span></div>
                <div className='card'><h3>Higher Secondary Certifcate (HSC)</h3><p>Muthalamman Hindu Hr. Sec. School (2021)</p><span>80%</span></div>
                <div className='card'><h3>Secondary School Leaving Certifcate (SSLC)</h3><p>Muthalamman Hindu Hr. Sec. School (2019)</p><span>80%</span></div>
            </div>
        </section>
    );
}
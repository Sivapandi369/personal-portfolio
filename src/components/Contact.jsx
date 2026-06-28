import "../styles/Contact.css";

export default function Contact()
 {
     return (
        <section className='contact' id='contact'>
            <h2>Contact</h2>
            <div className='wrap'>
                <div>
                    <h3>Get in Touch</h3>
                    <p>Email: sivapandi622004@gmail.com</p>
                    <p>Phone: +91 9360833565</p>
                    <p>Location: Theni, Tamil Nadu</p>
                </div>

                    <form>
                        <input placeholder='Your Name' />
                        <input placeholder='Your Email' />
                        <textarea placeholder='Message'></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
        </section>
     );
 }
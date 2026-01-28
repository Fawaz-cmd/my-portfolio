
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <motion.div
                className="contact-content glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="section-header center">
                    <h2 className="section-title">What's Next?</h2>
                </div>

                <h2 className="big-heading">Get In Touch</h2>

                <p className="contact-text">
                    I'm currently looking for new opportunities as a Software Engineer.
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <a href="mailto:chowdary.fawaz@gmail.com" className="btn btn-large">Say Hello</a>
            </motion.div>

            <footer className="footer">
                <p>Designed & Built by <span className="highlight">Chowdary Mohammad Fawaz</span></p>
            </footer>
        </section>
    );
};

export default Contact;


import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
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
                    I'm currently looking for new opportunities as a Machine Learning Engineer.
                    Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                <div className="contact-details">
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <a href="mailto:fawazcmd834@gmail.com">fawazcmd834@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt className="contact-icon" />
                        <a href="tel:+918341563005">+91 8341563005</a>
                    </div>
                </div>

                <a href="mailto:fawazcmd834@gmail.com" className="btn btn-large">Say Hello</a>
            </motion.div>

            <footer className="footer">
                <p>Designed & Built by <span className="highlight">Chowdary Mohammad Fawaz</span></p>
            </footer>
        </section>
    );
};

export default Contact;

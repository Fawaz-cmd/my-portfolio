
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaAward, FaTrophy } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        "AICTE Android Web Development",
        "Microchip University – PIC16 Architecture",
        "Tata – Data Visualization",
        "Deloitte – Cyber Security",
        "Eduskills Data Embedding",
        "Intel & Digital India – AI for All",
        "edX – Microprocessors",
        "MATLAB & IBM Certification"
    ];

    const participation = [
        "Guinness World Record – Largest Gen AI Hackathon",
        "Organized TEDx Event",
        "Generative AI Workshop at IIT Hyderabad",
        "Hack2Skill Hackathon (Google Agentic AI)",
        "Google DevFest Hyderabad",
        "HackWithHyderabad Hackathon",
        "Ethical Hacking Workshop"
    ];

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Credentials & <span className="gradient-text">Impact</span>
                </motion.h2>

                <div className="creds-grid">
                    <div className="creds-column">
                        <h3 className="column-header"><FaAward /> Certifications</h3>
                        <div className="list-container">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    className="list-item glass-panel"
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="bullet"></span>
                                    {cert}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="creds-column">
                        <h3 className="column-header"><FaTrophy /> Achievements</h3>
                        <div className="list-container">
                            {participation.map((item, index) => (
                                <motion.div
                                    className="list-item glass-panel"
                                    key={index}
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="bullet"></span>
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;

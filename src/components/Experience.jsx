
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaBriefcase, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Incuxai (IIT Hyderabad)",
            role: "Generative AI Intern",
            period: "Internship",
            description: [
                "Worked on cutting-edge Generative AI models and applications.",
                "Gained hands-on experience in LLMs and prompt engineering.",
                "Collaborated with experts to optimize model performance."
            ],
            tech: ["Python", "LLMs", "Generative AI"]
        },
        {
            company: "Datavalley",
            role: "AI & ML Intern",
            period: "Internship",
            description: [
                "Explored the foundations of Artificial Intelligence and Machine Learning.",
                "Built understanding of core algorithms and data preprocessing.",
                "Implemented various ML models for predictive analysis."
            ],
            tech: ["Python", "Sklearn", "Pandas"]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Where I've Worked</h2>
                <div className="line"></div>
            </motion.div>

            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="experience-card glass-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="exp-header">
                            <div>
                                <h3 className="exp-role">{exp.role}</h3>
                                <span className="exp-company">@ {exp.company}</span>
                            </div>
                            <div className="exp-period">
                                <FaCalendarAlt /> {exp.period}
                            </div>
                        </div>

                        <ul className="exp-list">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <div className="exp-tech">
                            {exp.tech.map((t, i) => (
                                <span key={i}>{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

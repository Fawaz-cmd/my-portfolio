
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaGraduationCap, FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
    const education = [
        {
            school: "G. Pullaiah College of Engineering and Technology",
            degree: "B.Tech in CSE",
            year: "2024 - 2027",
            grade: "CGPA: 8.5"
        },
        {
            school: "IGNOU",
            degree: "B.Com",
            year: "2023 - 2026",
            grade: null
        },
        {
            school: "Narayana Junior College",
            degree: "Intermediate",
            year: "2021 - 2023",
            grade: "CGPA: 9.0"
        }
    ];

    const skills = [
        { category: "Languages", items: ["Java", "C", "Python", "JavaScript"] },
        { category: "Web Technologies", items: ["React", "Node.js", "HTML5", "CSS3", "Tailwind"] },
        { category: "Core Concepts", items: ["Data Structures", "Algorithms", "DBMS", "OS", "OOP"] },
        { category: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] }
    ];

    return (
        <section id="about" className="about-section">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">About Me</h2>
                <div className="line"></div>
            </motion.div>

            <div className="about-grid">
                <motion.div
                    className="about-column"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="column-title"><FaGraduationCap className="icon" /> Education</h3>
                    <div className="timeline">
                        {education.map((edu, index) => (
                            <div key={index} className="timeline-item glass-panel">
                                <span className="year">{edu.year}</span>
                                <h4>{edu.school}</h4>
                                <p className="degree">{edu.degree}</p>
                                {edu.grade && <span className="grade">{edu.grade}</span>}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="about-column"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="column-title"><FaCode className="icon" /> Skills</h3>
                    <div className="skills-grid">
                        {skills.map((group, index) => (
                            <div key={index} className="skill-category">
                                <h4>{group.category}</h4>
                                <div className="skill-tags">
                                    {group.items.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

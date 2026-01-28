
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaGithub, FaExternalLinkAlt, FaFolder, FaRegFolder } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Image to QR Generator",
            description: "A high-performance tool that converts uploaded images into scannable QR codes instantly. Features a clean UI and efficient processing algorithms.",
            tags: ["React", "JavaScript", "QR Lib", "CSS3"],
            links: { demo: "#", code: "https://github.com/Fawaz-cmd" }
        },
        {
            title: "Weather Info System",
            description: "Real-time weather tracking application using geolocation and pincodes. Integrates multiple APIs for accurate forecasting and data visualization.",
            tags: ["Python", "Rest API", "Data Analysis"],
            links: { demo: "#", code: "https://github.com/Fawaz-cmd" }
        },
        {
            title: "AI Talent Assessment",
            description: "An intelligent system analyzing sports performance metrics. Uses machine learning models to provide actionable insights and improvement plans for athletes.",
            tags: ["Python", "scikit-learn", "Data Science", "AI"],
            links: { demo: "#", code: "https://github.com/Fawaz-cmd" }
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Some Things I've Built</h2>
                <div className="line"></div>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card glass-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -7 }}
                    >
                        <div className="card-header">
                            <div className="folder-icon">
                                <FaRegFolder />
                            </div>
                            <div className="card-links">
                                <a href={project.links.code} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                    <FaGithub />
                                </a>
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>

                        <h3 className="project-title">{project.title}</h3>

                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>

                        <ul className="project-tech-list">
                            {project.tags.map((tag, i) => (
                                <li key={i}>{tag}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;


import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-grid">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="hero-greeting highlight">Creative Developer</p>
                    <h1 className="hero-name main-title">I'M <br /><span className="text-glow">CHOWDARY MOHAMMAD FAWAZ</span></h1>
                    <div className="hero-tagline">
                        <span className="tagline-badge">Computer Science Student</span>
                        <span className="tagline-divider">|</span>
                        <span className="tagline-badge">Aspiring Machine Learning Engineer</span>
                    </div>
                    <p className="hero-description mission-text">
                        Exploring data, training models, and turning ideas into intelligent real-world solutions.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-large">View My Work</a>
                        <div className="social-links">
                            <a href="https://github.com/Fawaz-cmd" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/chowdary-mohammad-fawaz-8b4b562bb" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="profile-container">
                        <div className="profile-mask-bg"></div>
                        <div className="profile-wrapper">
                            <img src={profileImg} alt="Chowdary Mohammad Fawaz" className="profile-img" />
                            <div className="scanner-line"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-down">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

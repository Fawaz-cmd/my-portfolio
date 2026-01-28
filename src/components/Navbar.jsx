import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <a href="#" className="logo">
                    &lt;Fawaz /&gt;
                </a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Work</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-cta btn" onClick={() => setIsOpen(false)}>Resume</a>
                </div>

                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>

    );
};

export default Navbar;

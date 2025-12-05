import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icon';

export const NavigationDock: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    const sections = [
        { id: 'home', icon: 'home', label: 'Home' },
        { id: 'projects', icon: 'folder', label: 'Projects' },
        { id: 'about', icon: 'user', label: 'About' },
        { id: 'contact', icon: 'email', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navigation-dock-container">
            <motion.div
                className="navigation-dock"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
            >
                {sections.map((section) => (
                    <motion.button
                        key={section.id}
                        className={`dock-item ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(section.id)}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="dock-icon">
                            <Icon name={section.icon} size={24} />
                        </span>
                        {activeSection === section.id && (
                            <motion.span
                                className="dock-label"
                                layoutId="dock-label"
                            >
                                {section.label}
                            </motion.span>
                        )}
                        {activeSection === section.id && (
                            <motion.div
                                className="active-indicator"
                                layoutId="active-indicator"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};

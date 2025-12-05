import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icon';

export const ContactSection: React.FC = () => {
    return (
        <div className="content-section dark">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="contact-content"
            >
                <div className="contact-glass-container">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Have a project in mind or just want to say hello? My inbox is always open. Feel free to connect with me.</p>
                    <div className="contact-links">
                        <motion.a
                            href="mailto:puneet.goyal018@gmail.com"
                            className="contact-link"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon name="email" size={24} />
                            <span>Email</span>
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/puneet-goyal-a056a6109"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon name="linkedin" size={24} />
                            <span>LinkedIn</span>
                        </motion.a>
                        <motion.a
                            href="https://github.com/goyalpuneet18"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon name="github" size={24} />
                            <span>GitHub</span>
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

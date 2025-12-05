import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

export const AboutSection: React.FC = () => {
    return (
        <div className="content-section light">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="section-title">About Me</h2>

                <div className="stats-grid">
                    <motion.div
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="stat-number">
                            <Counter end={15} suffix="+" />
                        </div>
                        <div className="stat-label">Projects</div>
                    </motion.div>
                    <motion.div
                        className="stat-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="stat-number">
                            <Counter end={23} suffix="+" />
                        </div>
                        <div className="stat-label">Technologies</div>
                    </motion.div>
                </div>

                <div className="about-content">
                    <p className="about-bio">
                        Full Stack Developer with expertise in building scalable web and mobile applications.
                        Passionate about creating innovative solutions using cutting-edge technologies,
                        from AI-powered tools to cross-platform mobile apps. Committed to writing clean,
                        maintainable code and delivering exceptional user experiences.
                    </p>

                    <div className="skills-section">
                        <h3>My Skillset</h3>

                        <motion.div
                            className="skill-category"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="category-header">
                                <span className="category-icon">💻</span>
                                <span className="category-title">Programming Languages</span>
                            </div>
                            <div className="skills-grid">
                                {["Java", "Python", "Dot-Net Core", "Node.js", "MongoDB", "MS SQL", "Kotlin", "JavaScript"].map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className="skill-badge"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="skill-category"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="category-header">
                                <span className="category-icon">🏗️</span>
                                <span className="category-title">Frameworks</span>
                            </div>
                            <div className="skills-grid">
                                {["Angular 12+", "React", "Spring-boot 3", "Flutter", "Flask", "Kafka", "Moon.js"].map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className="skill-badge"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="skill-category"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="category-header">
                                <span className="category-icon">🛠️</span>
                                <span className="category-title">Tools</span>
                            </div>
                            <div className="skills-grid">
                                {["Git-lab", "Pivotal Cloud Foundry", "Docker", "Selenium", "Kubernetes", "Figma"].map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className="skill-badge"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="skill-category"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="category-header">
                                <span className="category-icon">🤖</span>
                                <span className="category-title">AI/ML Models</span>
                            </div>
                            <div className="skills-grid">
                                {["Llama-3-1-8b-instruct", "Mistral-7b-instruct-v03"].map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className="skill-badge"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <h3 style={{ marginTop: '4rem' }}>Certifications</h3>
                        <div className="certifications-grid">
                            {[
                                "Microsoft Technology Associate: Database Administration Fundamentals (MTA)",
                                "Google Cybersecurity Certificate",
                                "Oracle AI Vector Search Certified Professional"
                            ].map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="certification-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                >
                                    <span className="cert-icon">🏅</span>
                                    <span className="cert-name">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

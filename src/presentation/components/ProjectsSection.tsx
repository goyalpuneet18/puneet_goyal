import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
    {
        title: "Coaching Companion Bot",
        description: "Telegram bot using multi-agent architecture to provide personalized coaching and guidance.",
        tags: ["Telegram API", "Multi-Agent", "Python", "AI"],
        icon: "bot"
    },
    {
        title: "Financial PDF Reader",
        description: "React application that reads financial PDFs, converts them to Excel, and provides AI-based analytics.",
        tags: ["React", "PDF.js", "AI", "Excel Export"],
        icon: "pdf"
    },
    {
        title: "Secure QR Generator",
        description: "QR code generator with built-in tokenization for enhanced security.",
        tags: ["Node.js", "QR Code", "Security", "JWT"],
        icon: "qr"
    },
    {
        title: "Zapier Integration App",
        description: "Custom Zapier application enabling workflow automation and third-party integrations.",
        tags: ["Zapier CLI", "REST API", "Webhooks"],
        icon: "zapier"
    },
    {
        title: "Flutter Mobile App",
        description: "Cross-platform mobile application for real-time data visualization and management.",
        tags: ["Flutter", "Dart", "Firebase", "Mobile"],
        icon: "flutter"
    }
];

export const ProjectsSection: React.FC = () => {
    return (
        <div className="content-section dark">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Personal projects showcasing diverse technical skills</p>
            </motion.div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectIcon } from './ProjectIcon';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        tags: string[];
        icon: string;
    };
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
        >
            <div className={`project-icon-wrapper icon-${project.icon}`}>
                <ProjectIcon type={project.icon} className="project-svg-icon" />
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-tags">
                {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                ))}
            </div>
        </motion.div>
    );
};

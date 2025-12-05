import React from 'react';
import { InteractiveBackground } from '../components/InteractiveBackground';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { NavigationDock } from '../components/NavigationDock';
import { ReactLenis } from 'lenis/react';

export const HomePage: React.FC = () => {
    return (
        <>
            <InteractiveBackground />
            <NavigationDock />
            <ReactLenis root>
                <div style={{ position: 'relative' }}>
                    <div id="home"><HeroSection /></div>
                    <div id="projects"><ProjectsSection /></div>
                    <div id="about"><AboutSection /></div>
                    <div id="contact"><ContactSection /></div>
                </div>
            </ReactLenis>
        </>
    );
};

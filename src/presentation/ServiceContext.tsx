import React, { createContext, useContext } from 'react';
import { BackgroundService } from '../core/application/BackgroundService';
import { ScrollService } from '../core/application/ScrollService';

interface Services {
    backgroundService: BackgroundService;
    scrollService: ScrollService;
}

const services: Services = {
    backgroundService: new BackgroundService(),
    scrollService: new ScrollService(),
};

const ServiceContext = createContext<Services>(services);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ServiceContext.Provider value={services}>
            {children}
        </ServiceContext.Provider>
    );
};

export const useServices = () => useContext(ServiceContext);

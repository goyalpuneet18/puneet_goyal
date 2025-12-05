import React from 'react';
import type { ReactElement } from 'react';

interface IconProps {
    name: string;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, size = 48 }) => {
    const icons: Record<string, ReactElement> = {
        bot: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="8" width="16" height="12" rx="2" />
                <path d="M9 12h.01M15 12h.01M9 16h6" />
                <path d="M12 2v6M8 8l-2-2M16 8l2-2" />
            </svg>
        ),
        pdf: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M9 13h6M9 17h6" />
            </svg>
        ),
        qr: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <circle cx="6.5" cy="6.5" r="1" fill="currentColor" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                <circle cx="6.5" cy="17.5" r="1" fill="currentColor" />
                <circle cx="17.5" cy="17.5" r="1" fill="currentColor" />
            </svg>
        ),
        api: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        app: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
            </svg>
        ),
        email: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
            </svg>
        ),
        linkedin: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
        github: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        ),
        wave: (
            <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
                {/* Palm - main hand base */}
                <path
                    d="M20 42 L20 28 C20 26 21 24 23 24 L41 24 C43 24 44 26 44 28 L44 42 C44 44 43 46 41 46 L23 46 C21 46 20 44 20 42 Z"
                    fill="currentColor"
                />

                {/* Pinky finger */}
                <rect x="20" y="14" width="6" height="12" rx="3" fill="currentColor" />

                {/* Ring finger */}
                <rect x="27" y="10" width="6" height="16" rx="3" fill="currentColor" />

                {/* Middle finger - tallest */}
                <rect x="34" y="8" width="6" height="18" rx="3" fill="currentColor" />

                {/* Index finger */}
                <rect x="41" y="12" width="6" height="14" rx="3" fill="currentColor" />

                {/* Thumb - side positioned */}
                <ellipse cx="17" cy="34" rx="4" ry="7" fill="currentColor" />

                {/* Wrist */}
                <rect x="24" y="46" width="16" height="8" rx="2" fill="currentColor" opacity="0.9" />
            </svg>
        ),
        home: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
        ),
        user: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        ),
        folder: (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
        )
    };

    return (
        <div className="icon-wrapper" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            {icons[name] || null}
        </div>
    );
};

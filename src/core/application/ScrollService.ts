import type { IScrollSection } from '../domain/IScrollSection';

export class ScrollService {
    private sections: IScrollSection[] = [];
    private listeners: ((sections: IScrollSection[]) => void)[] = [];

    public registerSection(section: IScrollSection) {
        this.sections.push(section);
    }

    public updateScroll(scrollY: number) {
        // Logic to update section progress based on scrollY
        // This is a simplified placeholder
        this.sections.forEach(section => {
            // Calculate progress based on element position relative to viewport
            // For now, just a dummy update
            section.progress = Math.min(1, Math.max(0, scrollY / 1000));
        });
        this.notifyListeners();
    }

    public subscribe(listener: (sections: IScrollSection[]) => void) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    private notifyListeners() {
        this.listeners.forEach(l => l(this.sections));
    }
}

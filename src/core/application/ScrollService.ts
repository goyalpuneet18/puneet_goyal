import type { IScrollSection } from '../domain/IScrollSection';

export class ScrollService {
    private sections: IScrollSection[] = [];
    private listeners: ((sections: IScrollSection[]) => void)[] = [];

    public registerSection(section: IScrollSection) {
        this.sections.push(section);
    }

    public updateScroll(scrollY: number) {
        this.sections.forEach(section => {
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

export interface Course {
    id: number;
    name: string;
    duration: number;
    level: 'Basico' | 'Intermedio' | 'Avanzado';
    active : boolean;
}
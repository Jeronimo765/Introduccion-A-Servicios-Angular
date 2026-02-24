export interface Course {
    id: number;
    nombre: string;
    duracion: number;
    nivel: 'Basico' | 'Intermedio' | 'Avanzado';
    estado : boolean;
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
})
export class App {
  nombreCurso: string =  '';
  duracion: number = 0;
  nivel: string = 'Basico';

  courses: any[] = [];

  submit() {
    if (!this.nombreCurso || !this.duracion) return;

    const newCourse = {
      id: Date.now(),
      nombre: this.nombreCurso,
      duracion: this.duracion,
      nivel: this.nivel,
      activo: true
    };

    this.courses.push(newCourse);

    this.nombreCurso = '';
    this.duracion = 0;
    this.nivel = 'Basico';
  }

  toggle(id: number) {
    const course = this.courses.find(c => c.id === id);
    if (course) {
      course.activo = !course.activo;
    }
  }
 
  delete(id: number) {
    this.courses = this.courses.filter(c => c.id !== id)
  }
}
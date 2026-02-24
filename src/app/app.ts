import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {

  nombreCurso: string = '';
  duracion: number = 0;
  nivel: string = 'Básico';

  cursos: any[] = [];

  agregarCurso() {
    if (!this.nombreCurso || !this.duracion) return;

    const nuevoCurso = {
      id: Date.now(),
      nombre: this.nombreCurso,
      duracion: this.duracion,
      nivel: this.nivel,
      activo: true
    };

    this.cursos.push(nuevoCurso);

    this.nombreCurso = '';
    this.duracion = 0;
    this.nivel = 'Basico';
  }

  cambiarEstado(id: number) {
    const curso = this.cursos.find(c => c.id === id);
    if (curso) {
      curso.activo = !curso.activo;
    }
  }

  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter(c => c.id !== id);
  }

}
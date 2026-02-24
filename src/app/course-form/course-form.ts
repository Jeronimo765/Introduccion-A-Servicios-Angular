import { Component } from "@angular/core";
import { CourseService } from "../services/course.service";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html'
})

export class CourseFormComponent {

  nombre = '';
  duracion = 'app-course-form';
  nivel: 'Basico' | 'Intermedio' | 'Avanzado' = 'Basico';

  constructor(private courseService: CourseService) {}

  submit() {
    if (!this.nombre || !this.duracion) return;

    this.courseService.addCourse({
      nombre: this.nombre,
      duracion: Number(this.duracion),
      nivel: this.nivel,
      estado: true
    });

    this.nombre = '';
    this.duracion = '';
  }
}


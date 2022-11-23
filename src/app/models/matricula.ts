import { Alumno } from "./alumno";
import { Curso } from "./curso";
import { Profesor } from "./profesor";

export interface Matricula {
    alumno: Alumno;
    profesor: Profesor;
    curso: Curso;
    
}

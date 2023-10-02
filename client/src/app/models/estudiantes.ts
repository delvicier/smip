enum Parentesco {
  Padre = 'Padre',
  Madre = 'Madre',
  Abuelo = 'Abuelo/a',
  Tio = 'Tio/a',
  Hermano = 'Hermano/a',
  Otros = 'Otros'
}

enum Jornada {
  Padre = 'Padre',
  Madre = 'Madre',
  Abuelo = 'Abuelo/a',
  Tio = 'Tio/a',
  Hermano = 'Hermano/a',
  Otros = 'Otros'
}

  export interface Estudiantes {
    id: number;
    nombres?: string;
    apellidos?: string;
    cedula?: string;
    nacimiento?: string;
    edad?: string;
    id_deta?: number;
    estudiante_id?: number;
    genero?: string;
    discapacidad?: string;
    disca_porcentaje?: string;
    ciudad_naci?: string;
    etnia?: string;
    provincia?: string;
    canton?: string;
    parroquia?: string;
    direccion_detallada?: string;
    nombres_repre?: string;
    apellidos_repre?: string;
    cedula_repre?: string;
    telefono?: string;
    celular?: string;
    parentesco?: Parentesco;
    id_matri?: number;
    estudiante_matri_id?: number;
    curso?: string;
    jornada?: Jornada;
    anio_lectivo?: number;
    fecha_matri?: string;
    especialidad?: string;
  }


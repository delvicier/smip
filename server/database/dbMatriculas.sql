-- Tabla estudiantes
CREATE TABLE estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    cedula VARCHAR(15),
    nacimiento DATE
);


-- Tabla detalles
CREATE TABLE detalles (
    id_deta INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_id INT UNIQUE,
    genero VARCHAR(50),
    discapacidad VARCHAR(50),
    disca_porcentaje VARCHAR(5),
    ciudad_naci VARCHAR(50),
    etnia VARCHAR(50),
    provincia VARCHAR(50),
    canton VARCHAR(50),
    parroquia VARCHAR(50),
    direccion_detallada VARCHAR(240),
    nombres_repre VARCHAR(50),
    apellidos_repre VARCHAR(50),
    cedula_repre VARCHAR(15),
    telefono VARCHAR(15),
    celular VARCHAR(15),
    parentesco ENUM('Padre', 'Madre', 'Abuelo/a', 'Tio/a', 'Hermano/a', 'Otros'),
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id)
);


-- Tabla Matricula
CREATE TABLE matricula (
    id_matri INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_matri_id INT UNIQUE,
    curso VARCHAR(50),
    jornada ENUM('Matutina', 'Vespertina'),
    anio_lectivo INT,
    fecha_matri DATE,
    especialidad VARCHAR(50),
    FOREIGN KEY (estudiante_matri_id) REFERENCES estudiantes(id)
);


-- Tabla Notas
CREATE TABLE notas (
    id_notas INT AUTO_INCREMENT PRIMARY KEY,
    matricula_id INT UNIQUE,
    primero DECIMAL(4, 2),
    segundo DECIMAL(4, 2),
    tercero DECIMAL(4, 2),
    cuarto DECIMAL(4, 2),
    quinto DECIMAL(4, 2),
    sexto DECIMAL(4, 2),
    septimo DECIMAL(4, 2),
    octavo DECIMAL(4, 2),
    noveno DECIMAL(4, 2),
    decimo DECIMAL(4, 2),
    promedio_basic VARCHAR(50),
    primero_bgu DECIMAL(4, 2),
    segundo_bgu DECIMAL(4, 2),
    tercero_bgu DECIMAL(4, 2),
    promedio_bgu VARCHAR(50),
    proyecto VARCHAR(50),
    participacion VARCHAR(50),
    observaciones VARCHAR(50),
    FOREIGN KEY (matricula_id) REFERENCES matricula(id_matri)
);


-- Tabla Encabezado Matricula Doc
CREATE TABLE doc_matricula (
    id_enca INT AUTO_INCREMENT PRIMARY KEY,
    img_logo VARCHAR(50) UNIQUE,
    titulo_institucion VARCHAR(50) UNIQUE,
    sub_institucion VARCHAR(50) UNIQUE,
    tel_direccion VARCHAR(50) UNIQUE,
    correo VARCHAR(50) UNIQUE,
    titulo1 VARCHAR(50) UNIQUE,
    subtitulo1 VARCHAR(50) UNIQUE,
    subtitulo2 VARCHAR(50) UNIQUE,
    articulo1 VARCHAR(50) UNIQUE,
    articulo2 VARCHAR(50) UNIQUE,
    titulo2 VARCHAR(50) UNIQUE,
    articulo3 VARCHAR(50) UNIQUE,
    articulo4 VARCHAR(50) UNIQUE,
    preguntas1_1 VARCHAR(140) UNIQUE,
    preguntas1_2 VARCHAR(140) UNIQUE,
    preguntas1_3 VARCHAR(140) UNIQUE,
    preguntas1_4 VARCHAR(140) UNIQUE,
    preguntas1_5 VARCHAR(140) UNIQUE,
    preguntas1_6 VARCHAR(140) UNIQUE,
    preguntas2_1 VARCHAR(140) UNIQUE,
    preguntas2_2 VARCHAR(140) UNIQUE,
    preguntas2_3 VARCHAR(140) UNIQUE,
    preguntas2_4 VARCHAR(140) UNIQUE,
    preguntas3_1 VARCHAR(140) UNIQUE,
    preguntas3_2 VARCHAR(140) UNIQUE,
    preguntas3_3 VARCHAR(140) UNIQUE,
    preguntas3_4 VARCHAR(140) UNIQUE,
    preguntas3_5 VARCHAR(140) UNIQUE,
    preguntas3_6 VARCHAR(140)
);


-- Tabla Encabezado Seguros Doc
CREATE TABLE encabezado_doc_s (
    id_encas INT AUTO_INCREMENT PRIMARY KEY,
    img_logo VARCHAR(50) UNIQUE,
    fecha VARCHAR(50) UNIQUE,
    dirigido_a VARCHAR(50) UNIQUE,
    subtitulo VARCHAR(140) UNIQUE,
    parrafo VARCHAR(240) UNIQUE,
    title1 VARCHAR(140) UNIQUE,
    title2 VARCHAR(140) UNIQUE,
    parrafo_final VARCHAR(240) UNIQUE,
    img_footer1 VARCHAR(50) UNIQUE,
    img_footer2 VARCHAR(50) UNIQUE,
    footer_firma1 VARCHAR(50) UNIQUE,
    footer_firma2 VARCHAR(50) UNIQUE
);



-- Tabla Especialidad Seguros Doc
CREATE TABLE especialidad_doc_s (
    id_espe INT AUTO_INCREMENT PRIMARY KEY,
    encabezado1 VARCHAR(50) UNIQUE,
    titulo_1 VARCHAR(140) UNIQUE,
    titulo_2 VARCHAR(140) UNIQUE,
    titulo_3 VARCHAR(140) UNIQUE,
    titulo_4 VARCHAR(140) UNIQUE,
    titulo_5 VARCHAR(140) UNIQUE,
    amie VARCHAR(50) UNIQUE,
    especialidad1 VARCHAR(50) UNIQUE,
    cant_estudiantes1 INT UNIQUE,
    especialidad2 VARCHAR(50) UNIQUE,
    cant_estudiantes2 INT UNIQUE,
    especialidad3 VARCHAR(50) UNIQUE,
    cant_estudiantes3 INT UNIQUE,
    especialidad4 VARCHAR(50) UNIQUE,
    cant_estudiantes4 INT UNIQUE,
    especialidad5 VARCHAR(50) UNIQUE,
    cant_estudiantes5 INT UNIQUE,
    especialidad6 VARCHAR(50) UNIQUE,
    cant_estudiantes6 INT UNIQUE
);


-- Tabla Titulos Seguros Doc
CREATE TABLE titulos_doc_s (
    id_titus INT AUTO_INCREMENT PRIMARY KEY,
    encabezado VARCHAR(50) UNIQUE,
    titulo1 VARCHAR(140) UNIQUE,
    titulo2 VARCHAR(140) UNIQUE,
    titulo3 VARCHAR(140) UNIQUE,
    titulo4 VARCHAR(140) UNIQUE,
    titulo5 VARCHAR(140) UNIQUE,
    titulo6 VARCHAR(140) UNIQUE,
    titulo7 VARCHAR(140) UNIQUE,
    titulo8 VARCHAR(140) UNIQUE,
    amie VARCHAR(50) UNIQUE,
    institucion VARCHAR(50) UNIQUE 
);


-- Tabla estudiantes
CREATE TABLE estudiantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(140),
    cedula VARCHAR(17) UNIQUE,
    curso VARCHAR(50),
    especialidad VARCHAR(50),
    nacimiento VARCHAR(17)
);


-- Tabla detalles
CREATE TABLE detalles (
    id_deta INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_deta_id INT UNIQUE,
    nacionalidad VARCHAR(50),
    lugar_naci VARCHAR(50),
    etnia ENUM('blanco', 'mestizo', 'indigena', 'afroecuatoriano', 'otros'),
    religion VARCHAR(50),
    edad VARCHAR(17),
    tipo_sangre VARCHAR(50),
    domicilio VARCHAR(50),
    cambio_domi VARCHAR(50),
    sector_refer VARCHAR(50),
    telefono_deta VARCHAR(15),
    celular_deta VARCHAR(15),
    FOREIGN KEY (estudiante_deta_id) REFERENCES estudiantes(id)
);


-- Tabla academico
CREATE TABLE academico (
    id_acad INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_acad_id INT UNIQUE,
    respuesta3_1 VARCHAR(240),
    respuesta3_2 VARCHAR(240),
    respuesta3_3 VARCHAR(240),
    respuesta3_4 VARCHAR(240),
    respuesta3_5 VARCHAR(240),
    FOREIGN KEY (estudiante_acad_id) REFERENCES estudiantes(id)
);


-- Tabla salud
CREATE TABLE salud (
    id_salud INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_salud_id INT UNIQUE,
    discapacidad ENUM('Si', 'No'),
    detallar_disc VARCHAR(50),
    num_carnet VARCHAR(15),
    atencion_med ENUM('Privada', 'Subcentro de salud', 'Hospital Publico', 'IESS'),
    medic_regular VARCHAR(50),
    observacion VARCHAR(140),
    FOREIGN KEY (estudiante_salud_id) REFERENCES estudiantes(id)
);


-- Tabla enfermedades
CREATE TABLE enfermedades (
    id_enfe INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_enfe_id INT UNIQUE,
    enfermedades VARCHAR(140),
    accidentes VARCHAR(140),
    alergias VARCHAR(140),
    cirugias VARCHAR(140),
    perdida_conoci VARCHAR(17),
    otros VARCHAR(140),
    FOREIGN KEY (estudiante_enfe_id) REFERENCES estudiantes(id)
);


-- Tabla embarazo
CREATE TABLE embarazo (
    id_emba INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_emba_id INT UNIQUE,
    respuesta4_1 VARCHAR(240),
    respuesta4_2 VARCHAR(240),
    respuesta4_3 VARCHAR(240),
    respuesta4_4 VARCHAR(240),
    respuesta4_5 VARCHAR(240),
    respuesta4_6 VARCHAR(240),
    respuesta4_7 VARCHAR(240),
    respuesta4_8 VARCHAR(240),
    respuesta4_9 VARCHAR(240),
    respuesta4_10 VARCHAR(240),
    respuesta4_11 VARCHAR(240),
    respuesta4_12 VARCHAR(240),
    FOREIGN KEY (estudiante_emba_id) REFERENCES estudiantes(id)
);


-- Tabla patologias
CREATE TABLE patologias (
    id_pato INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_pato_id INT UNIQUE,
    obesidad ENUM('Si', 'No'),
    cardiacas ENUM('Si', 'No'),
    hipertension ENUM('Si', 'No'),
    diabetes ENUM('Si', 'No'),
    mentales ENUM('Si', 'No'),
    otros_pato ENUM('Si', 'No'),
    otros_detalle VARCHAR(240),
    observaciones VARCHAR(240),
    FOREIGN KEY (estudiante_pato_id) REFERENCES estudiantes(id)
);


-- Tabla representante
CREATE TABLE representante (
    id_repre INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_repre_id INT UNIQUE,
    descripcion_hijo VARCHAR(240),
    nombres_repre VARCHAR(50),
    cedula_repre VARCHAR(15),
    fecha_repre VARCHAR(17),
    FOREIGN KEY (estudiante_repre_id) REFERENCES estudiantes(id)
);


-- Tabla grupo familiar
CREATE TABLE grupo_familiar (
    id_gfami INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_gfami_id INT UNIQUE,
    nombres1 VARCHAR(50),
    parentesco1 VARCHAR(50),
    edad1 VARCHAR(50),
    profesion1 VARCHAR(50),
    ocupacion1 VARCHAR(50),
    ingresos1 VARCHAR(50),
    nombres2 VARCHAR(50),
    parentesco2 VARCHAR(50),
    edad2 VARCHAR(50),
    profesion2 VARCHAR(50),
    ocupacion2 VARCHAR(50),
    ingresos2 VARCHAR(50),
    nombres3 VARCHAR(50),
    parentesco3 VARCHAR(50),
    edad3 VARCHAR(50),
    profesion3 VARCHAR(50),
    ocupacion3 VARCHAR(50),
    ingresos3 VARCHAR(50),
    nombres4 VARCHAR(50),
    parentesco4 VARCHAR(50),
    edad4 VARCHAR(50),
    profesion4 VARCHAR(50),
    ocupacion4 VARCHAR(50),
    ingresos4 VARCHAR(50),
    FOREIGN KEY (estudiante_gfami_id) REFERENCES estudiantes(id)
);


-- Tabla familia
CREATE TABLE familia (
    id_fami INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_fami_id INT UNIQUE,
    nombres_madre VARCHAR(50),
    edad_madre INT,
    civil_madre VARCHAR(50),
    instruccion_madre VARCHAR(50),
    bono_madre VARCHAR(50),
    ocupacion_madre VARCHAR(50),
    telefono_madre VARCHAR(15),
    correo_madre VARCHAR(80),
    nombres_padre VARCHAR(50),
    edad_padre INT,
    civil_padre VARCHAR(50),
    instruccion_padre VARCHAR(50),
    bono_padre VARCHAR(50),
    ocupacion_padre VARCHAR(50),
    telefono_padre VARCHAR(15),
    correo_padre VARCHAR(80),
    nombres_repre VARCHAR(50),
    edad_repre INT,
    civil_repre VARCHAR(50),
    instruccion_repre VARCHAR(50),
    bono_repre VARCHAR(50),
    ocupacion_repre VARCHAR(50),
    telefono_repre VARCHAR(15),
    correo_repre VARCHAR(80),
    nombre_referencia VARCHAR(50),
    telefono_referencia VARCHAR(15),
    FOREIGN KEY (estudiante_fami_id) REFERENCES estudiantes(id)
);


-- Tabla referencias familiares 
CREATE TABLE refe_familiares (
    id_refefa INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_refefa_id INT UNIQUE,
    respuesta1_1 VARCHAR(240),
    respuesta1_2 VARCHAR(240),
    respuesta1_3 VARCHAR(240),
    respuesta1_4 VARCHAR(240),
    respuesta1_5 VARCHAR(240),
    presos ENUM('Padre', 'Madre', 'Hermano/a'),
    respuesta1_6 VARCHAR(240),
    respuesta1_7 VARCHAR(240),
    respuesta1_8 VARCHAR(240),
    respuesta1_9 VARCHAR(240),
    respuesta1_10 VARCHAR(240),
    discapacitados ENUM('Si', 'No'),
    respuesta1_11 VARCHAR(240),
    respuesta1_12 VARCHAR(240),
    FOREIGN KEY (estudiante_refefa_id) REFERENCES estudiantes(id)
);


-- Tabla vivienda
CREATE TABLE vivienda (
    id_vivi INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_vivi_id INT UNIQUE,
    villa VARCHAR(50),
    departamento VARCHAR(50),
    casa_pisos VARCHAR(50),
    propia VARCHAR(50),
    arrendada VARCHAR(50),
    prestada VARCHAR(50),
    hipotecas VARCHAR(50),
    compartida VARCHAR(50),
    electricidad VARCHAR(50),
    agua VARCHAR(50),
    alcantarillado VARCHAR(50),
    telefono_fijo VARCHAR(50),
    tv_cable VARCHAR(50),
    internet VARCHAR(50),
    FOREIGN KEY (estudiante_vivi_id) REFERENCES estudiantes(id)
);


-- Tabla rendimiento academico
CREATE TABLE ren_academico (
    id_renacad INT AUTO_INCREMENT PRIMARY KEY,
    estudiante_renacad_id INT UNIQUE,
    fecha_ingreso VARCHAR(17),
    ingreso_curso VARCHAR(50),
    repitio_anio VARCHAR(50),
    institucion_origen VARCHAR(50),
    institucion_lugar VARCHAR(50),
    problem_academico VARCHAR(50),
    problem_disciplina VARCHAR(50),
    relacion_pares VARCHAR(50),
    otros_renacad VARCHAR(50),
    bulliyng VARCHAR(50),
    respuesta2_1 VARCHAR(240),
    respuesta2_2 VARCHAR(240),
    respuesta2_3 VARCHAR(240),
    FOREIGN KEY (estudiante_renacad_id) REFERENCES estudiantes(id)
);





















-- Tabla encabezado
CREATE TABLE encabezado_doc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    img_logo1 VARCHAR(50),
    img_logo2 VARCHAR(50),
    nombre_institucion VARCHAR(50),
    nombre_departament VARCHAR(50),
    direccion VARCHAR(50),
    telefono VARCHAR(50),
    correo VARCHAR(50),
    titulo_doc VARCHAR(50),
    num_codigo VARCHAR(50)
);


-- Tabla titulos
CREATE TABLE titulos_doc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo1 VARCHAR(100),
    titulo2 VARCHAR(100),
    titulo3 VARCHAR(100),
    titulo4 VARCHAR(100),
    titulo5 VARCHAR(100),
    titulo6 VARCHAR(100),
    titulo7 VARCHAR(100),
    titulo8 VARCHAR(100),
    titulo9 VARCHAR(100),
    titulo10 VARCHAR(100),
    titulo11 VARCHAR(100),
    titulo12 VARCHAR(100),
    titulo13 VARCHAR(100),
    titulo14 VARCHAR(100)
);


-- Tabla preguntas1
CREATE TABLE preguntas1_doc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    preguntas1_1 VARCHAR(100),
    preguntas1_2 VARCHAR(100),
    preguntas1_3 VARCHAR(100),
    preguntas1_4 VARCHAR(100),
    preguntas1_5 VARCHAR(100),
    preguntas1_6 VARCHAR(100),
    preguntas1_7 VARCHAR(100),
    preguntas1_8 VARCHAR(100),
    preguntas1_9 VARCHAR(100),
    preguntas1_10 VARCHAR(100),
    art_discapacitados VARCHAR(100),
    preguntas1_11 VARCHAR(100),
    preguntas1_12 VARCHAR(100)
);


-- Tabla preguntas2
CREATE TABLE preguntas2_doc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    preguntas2_1 VARCHAR(100),
    preguntas2_2 VARCHAR(100),
    preguntas2_3 VARCHAR(100)
);


-- Tabla preguntas3
CREATE TABLE preguntas3_doc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    preguntas3_1 VARCHAR(100),
    preguntas3_2 VARCHAR(100),
    preguntas3_3 VARCHAR(100),
    preguntas3_4 VARCHAR(100),
    preguntas3_5 VARCHAR(100)
);


-- Tabla preguntas4
CREATE TABLE preguntas4_doc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    preguntas4_1 VARCHAR(100),
    preguntas4_2 VARCHAR(100),
    preguntas4_3 VARCHAR(100),
    preguntas4_4 VARCHAR(100),
    preguntas4_5 VARCHAR(100),
    preguntas4_6 VARCHAR(100),
    preguntas4_7 VARCHAR(100),
    preguntas4_8 VARCHAR(100),
    preguntas4_9 VARCHAR(100),
    preguntas4_10 VARCHAR(100),
    preguntas4_11 VARCHAR(100),
    preguntas4_12 VARCHAR(100)
);


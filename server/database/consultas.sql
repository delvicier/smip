-- Comenzar la transacción
START TRANSACTION;

-- Insertar datos en la tabla estudiantes
INSERT INTO estudiantes (nombres, apellidos, cedula, nacimiento)
VALUES (?, ?, ?, ?);

-- Obtener el ID del último estudiante insertado
SET @estudiante_id = LAST_INSERT_ID();

-- Insertar datos en la tabla detalles
INSERT INTO detalles (estudiante_id, genero, discapacidad, disca_porcentaje, ciudad_naci, etnia, provincia, canton, parroquia, direccion_detallada, nombres_repre, apellidos_repre, cedula_repre, telefono, celular, parentesco)
VALUES (@estudiante_id, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);

-- Insertar datos en la tabla matricula
INSERT INTO matricula (estudiante_matri_id, curso, jornada, anio_lectivo, fecha_matri, especialidad)
VALUES (@estudiante_id, ?, ?, ?, ?, ?);

-- Confirmar la transacción
COMMIT;


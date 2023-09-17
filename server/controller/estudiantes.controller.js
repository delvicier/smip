const { pool } = require("../db.js");

exports.getEstudiante = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM estudiantes e JOIN detalles d ON e.id = d.estudiante_id JOIN matricula m ON e.id = m.estudiante_matri_id WHERE e.cedula = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ message: "Estudiante no encontrado :(" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getEstudiantes = async (req, res) => {
  const { curso, jornada, anio_lectivo } = req.query;

  try {
    const [result] = await pool.query(
      "SELECT * FROM estudiantes e " +
        "JOIN detalles d ON e.id = d.estudiante_id " +
        "JOIN matricula m ON e.id = m.estudiante_matri_id " +
        "WHERE m.curso = ? AND m.jornada = ? AND m.anio_lectivo = ?",
      [curso, jornada, anio_lectivo]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Estudiantes no encontrados :(" });
    }

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getEstudiantesTotales = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM estudiantes e JOIN detalles d ON e.id = d.estudiante_id JOIN matricula m ON e.id = m.estudiante_matri_id;"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createEstudiantes = async (req, res) => {
  try {
    // Extraer los valores del cuerpo de la solicitud
    const {
      nombres,
      apellidos,
      cedula,
      nacimiento,
      genero,
      discapacidad,
      disca_porcentaje,
      ciudad_naci,
      etnia,
      provincia,
      canton,
      parroquia,
      direccion_detallada,
      nombres_repre,
      apellidos_repre,
      cedula_repre,
      telefono,
      celular,
      parentesco,
      curso,
      jornada,
      anio_lectivo,
      fecha_matri,
      especialidad,
    } = req.body;

    // Comenzar la transacción
    await pool.query("START TRANSACTION");

    // Insertar datos en la tabla estudiantes
    const [estudianteResult] = await pool.query(
      "INSERT INTO estudiantes (nombres, apellidos, cedula, nacimiento) VALUES (?, ?, ?, ?)",
      [nombres, apellidos, cedula, nacimiento]
    );
    const estudianteId = estudianteResult.insertId;

    // Insertar datos en la tabla detalles
    await pool.query(
      "INSERT INTO detalles (estudiante_id, genero, discapacidad, disca_porcentaje, ciudad_naci, etnia, provincia, canton, parroquia, direccion_detallada, nombres_repre, apellidos_repre, cedula_repre, telefono, celular, parentesco) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        estudianteId,
        genero,
        discapacidad,
        disca_porcentaje,
        ciudad_naci,
        etnia,
        provincia,
        canton,
        parroquia,
        direccion_detallada,
        nombres_repre,
        apellidos_repre,
        cedula_repre,
        telefono,
        celular,
        parentesco,
      ]
    );

    // Insertar datos en la tabla matricula
    await pool.query(
      "INSERT INTO matricula (estudiante_matri_id, curso, jornada, anio_lectivo, fecha_matri, especialidad) VALUES (?, ?, ?, ?, ?, ?)",
      [estudianteId, curso, jornada, anio_lectivo, fecha_matri, especialidad]
    );

    // Confirmar la transacción
    await pool.query("COMMIT");

    // Enviar una respuesta con el ID del estudiante creado
    res.json({ id: estudianteId });
  } catch (error) {
    // En caso de error, realizar un rollback de la transacción y enviar una respuesta con el mensaje de error
    await pool.query("ROLLBACK");
    return res.status(500).json({ message: error.message });
  }
};

exports.updateEstudiante = async (req, res) => {
    try {
      const cedulaEstudiante = req.params.cedula; // Obtener la cédula del estudiante de los parámetros de la URL
      const {
        nombres,
        apellidos,
        nacimiento,
        genero,
        discapacidad,
        disca_porcentaje,
        ciudad_naci,
        etnia,
        provincia,
        canton,
        parroquia,
        direccion_detallada,
        nombres_repre,
        apellidos_repre,
        cedula_repre,
        telefono,
        celular,
        parentesco,
        curso,
        jornada,
        anio_lectivo,
        fecha_matri,
        especialidad
      } = req.body;
  
      // Comenzar la transacción
      await pool.query('START TRANSACTION');
  
      // Actualizar datos en la tabla estudiantes basado en la cédula
      await pool.query(
        'UPDATE estudiantes SET nombres = ?, apellidos = ?, nacimiento = ? WHERE cedula = ?',
        [nombres, apellidos, nacimiento, cedulaEstudiante]
      );
  
      // Obtener el ID del estudiante actualizado
      const [estudianteResult] = await pool.query('SELECT id FROM estudiantes WHERE cedula = ?', [cedulaEstudiante]);
      const estudianteId = estudianteResult[0].id;
  
      // Actualizar datos en la tabla detalles
      await pool.query(
        'UPDATE detalles SET genero = ?, discapacidad = ?, disca_porcentaje = ?, ciudad_naci = ?, etnia = ?, provincia = ?, canton = ?, parroquia = ?, direccion_detallada = ?, nombres_repre = ?, apellidos_repre = ?, cedula_repre = ?, telefono = ?, celular = ?, parentesco = ? WHERE estudiante_id = ?',
        [
          genero,
          discapacidad,
          disca_porcentaje,
          ciudad_naci,
          etnia,
          provincia,
          canton,
          parroquia,
          direccion_detallada,
          nombres_repre,
          apellidos_repre,
          cedula_repre,
          telefono,
          celular,
          parentesco,
          estudianteId
        ]
      );
  
      // Actualizar datos en la tabla matricula
      await pool.query(
        'UPDATE matricula SET curso = ?, jornada = ?, anio_lectivo = ?, fecha_matri = ?, especialidad = ? WHERE estudiante_matri_id = ?',
        [curso, jornada, anio_lectivo, fecha_matri, especialidad, estudianteId]
      );
  
      // Confirmar la transacción
      await pool.query('COMMIT');
  
      // Enviar una respuesta con el mensaje de éxito
      res.json({ message: 'Estudiante actualizado exitosamente' });
    } catch (error) {
      // En caso de error, realizar un rollback de la transacción y enviar una respuesta con el mensaje de error
      await pool.query('ROLLBACK');
      return res.status(500).json({ message: error.message });
    }
};
  
exports.deleteEstudiante = async (req, res) => {
    try {
      const cedulaEstudiante = req.params.cedula; // Obtener la cédula del estudiante de los parámetros de la URL
  
      // Comenzar la transacción
      await pool.query('START TRANSACTION');
  
      // Eliminar datos de la tabla matricula basado en la cédula
      await pool.query('DELETE FROM matricula WHERE estudiante_matri_id IN (SELECT id FROM estudiantes WHERE cedula = ?)', [cedulaEstudiante]);
  
      // Eliminar datos de la tabla detalles basado en la cédula
      await pool.query('DELETE FROM detalles WHERE estudiante_id IN (SELECT id FROM estudiantes WHERE cedula = ?)', [cedulaEstudiante]);
  
      // Eliminar datos de la tabla estudiantes basado en la cédula
      await pool.query('DELETE FROM estudiantes WHERE cedula = ?', [cedulaEstudiante]);
  
      // Confirmar la transacción
      await pool.query('COMMIT');
  
      // Enviar una respuesta con el mensaje de éxito
      res.json({ message: 'Datos del estudiante eliminados exitosamente' });
    } catch (error) {
      // En caso de error, realizar un rollback de la transacción y enviar una respuesta con el mensaje de error
      await pool.query('ROLLBACK');
      return res.status(500).json({ message: error.message });
    }
};

exports.getRecord = async (req, res) => {
    try {
      const [result] = await pool.query(
        "SELECT  e.*, n.* FROM matricula m JOIN estudiantes e ON m.estudiante_matri_id = e.id LEFT JOIN notas n ON m.id_matri = n.matricula_id WHERE e.cedula = ?",
        [req.params.id]
      );
      if (result.length === 0)
        return res.status(404).json({ message: "Estudiante no encontrado :(" });
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

exports.getRecords = async (req, res) => {
    const { curso, jornada, anio_lectivo } = req.query;
  
    try {
      const [result] = await pool.query(
        "SELECT e.*, n.* FROM matricula m " +
          "JOIN estudiantes e ON m.estudiante_matri_id = e.id " +
          "LEFT JOIN notas n ON m.id_matri = n.matricula_id " +
          "WHERE m.curso = ? AND m.jornada = ? AND m.anio_lectivo = ?",
        [curso, jornada, anio_lectivo]
      );
  
      if (result.length === 0) {
        return res.status(404).json({ message: "Estudiantes no encontrados :(" });
      }
  
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

exports.createRecord = async (req, res) => {
    try {
      const {
        primero,
        segundo,
        tercero,
        cuarto,
        quinto,
        sexto,
        septimo,
        octavo,
        noveno,
        decimo,
        promedio_basic,
        primero_bgu,
        segundo_bgu,
        tercero_bgu,
        promedio_bgu,
        proyecto,
        participacion,
        observaciones,
        cedulaEstudiante
      } = req.body;
  
      // Obtener la información de la matrícula del estudiante utilizando la cédula
      const [matriculaResult] = await pool.query(
        'SELECT m.id_matri FROM matricula m JOIN estudiantes e ON m.estudiante_matri_id = e.id WHERE e.cedula = ?',
        [cedulaEstudiante]
      );
  
      if (matriculaResult.length === 0) {
        return res.status(404).json({ message: 'Estudiante no encontrado en la matrícula' });
      }
  
      const matriculaId = matriculaResult[0].id_matri;
  
      // Ejecutar la consulta INSERT INTO notas utilizando los datos proporcionados
      await pool.query(
        'INSERT INTO notas (matricula_id, primero, segundo, tercero, cuarto, quinto, sexto, septimo, octavo, noveno, decimo, promedio_basic, primero_bgu, segundo_bgu, tercero_bgu, promedio_bgu, proyecto, participacion, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          matriculaId,
          primero,
          segundo,
          tercero,
          cuarto,
          quinto,
          sexto,
          septimo,
          octavo,
          noveno,
          decimo,
          promedio_basic,
          primero_bgu,
          segundo_bgu,
          tercero_bgu,
          promedio_bgu,
          proyecto,
          participacion,
          observaciones
        ]
      );
  
      // Enviar una respuesta con el mensaje de éxito
      res.json({ message: 'Registro de notas creado exitosamente' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};
  
exports.updateRecord = async (req, res) => {
    try {
      const cedulaEstudiante = req.params.cedula;
      const {
        primero,
        segundo,
        tercero,
        cuarto,
        quinto,
        sexto,
        septimo,
        octavo,
        noveno,
        decimo,
        promedio_basic,
        primero_bgu,
        segundo_bgu,
        tercero_bgu,
        promedio_bgu,
        proyecto,
        participacion,
        observaciones
      } = req.body;
  
      // Obtener la información de la matrícula del estudiante utilizando la cédula
      const [matriculaResult] = await pool.query(
        'SELECT m.id_matri FROM matricula m JOIN estudiantes e ON m.estudiante_matri_id = e.id WHERE e.cedula = ?',
        [cedulaEstudiante]
      );
  
      if (matriculaResult.length === 0) {
        return res.status(404).json({ message: 'Estudiante no encontrado en la matrícula' });
      }
  
      const matriculaId = matriculaResult[0].id_matri;
  
      // Ejecutar la consulta de actualización para las notas utilizando los datos proporcionados
      await pool.query(
        'UPDATE notas SET primero = ?, segundo = ?, tercero = ?, cuarto = ?, quinto = ?, sexto = ?, septimo = ?, octavo = ?, noveno = ?, decimo = ?, promedio_basic = ?, primero_bgu = ?, segundo_bgu = ?, tercero_bgu = ?, promedio_bgu = ?, proyecto = ?, participacion = ?, observaciones = ? WHERE matricula_id = ?',
        [
          primero,
          segundo,
          tercero,
          cuarto,
          quinto,
          sexto,
          septimo,
          octavo,
          noveno,
          decimo,
          promedio_basic,
          primero_bgu,
          segundo_bgu,
          tercero_bgu,
          promedio_bgu,
          proyecto,
          participacion,
          observaciones,
          matriculaId
        ]
      );
  
      // Enviar una respuesta con el mensaje de éxito
      res.json({ message: 'Notas actualizadas exitosamente' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};


const { pool2 } = require("../db.js");

exports.getHoja1Dece = async (req, res) => {
  try {
    const [result] = await pool2.query(
      "SELECT *FROM estudiantes LEFT JOIN detalles ON estudiantes.id = detalles.estudiante_deta_id LEFT JOIN familia ON estudiantes.id = familia.estudiante_fami_id LEFT JOIN refe_familiares ON estudiantes.id = refe_familiares.estudiante_refefa_id WHERE estudiantes.cedula = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ message: "Estudiante no encontrado :(" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getHoja2Dece = async (req, res) => {
  try {
    const [result] = await pool2.query(
      "SELECT gf.*,vi.*,sa.* FROM estudiantes AS e LEFT JOIN grupo_familiar AS gf ON e.id = gf.estudiante_gfami_id LEFT JOIN vivienda AS vi ON e.id = vi.estudiante_vivi_id LEFT JOIN salud AS sa ON e.id = sa.estudiante_salud_id WHERE e.cedula = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ message: "Estudiante no encontrado :(" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getHoja3Dece = async (req, res) => {
  try {
    const [result] = await pool2.query(
      "SELECT ra.*, ac.*, em.* FROM estudiantes AS e LEFT JOIN ren_academico AS ra ON e.id = ra.estudiante_renacad_id LEFT JOIN academico AS ac ON e.id = ac.estudiante_acad_id LEFT JOIN embarazo AS em ON e.id = em.estudiante_emba_id WHERE e.cedula = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ message: "Estudiante no encontrado :(" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getHoja4Dece = async (req, res) => {
  try {
    const [result] = await pool2.query(
      "SELECT e.*, p.*, r.* FROM estudiantes AS est LEFT JOIN enfermedades AS e ON est.id = e.estudiante_enfe_id LEFT JOIN patologias AS p ON est.id = p.estudiante_pato_id LEFT JOIN representante AS r ON est.id = r.estudiante_repre_id WHERE est.cedula = ?",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ message: "Estudiante no encontrado :(" });
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getDece = async (req, res) => {
  const { curso, especialidad } = req.query;

  try {
    const [result] = await pool2.query(
      "SELECT e.nombres, e.cedula, e.curso, e.especialidad, d.edad, d.tipo_sangre, d.celular_deta, d.telefono_deta, d.domicilio, d.sector_refer, s.discapacidad, s.detallar_disc, s.num_carnet, s.observacion, en.enfermedades, en.alergias, p.cardiacas, p.hipertension, p.diabetes, p.mentales, p.otros_detalle, p.observaciones, r.nombres_repre, r.cedula_repre FROM estudiantes AS e LEFT JOIN detalles AS d ON e.id = d.estudiante_deta_id LEFT JOIN salud AS s ON e.id = s.estudiante_salud_id LEFT JOIN enfermedades AS en ON e.id = en.estudiante_enfe_id LEFT JOIN patologias AS p ON e.id = p.estudiante_pato_id LEFT JOIN representante AS r ON e.id = r.estudiante_repre_id WHERE e.curso = ? AND e.especialidad = ?",
      [curso, especialidad]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Estudiantes no encontrados :(" });
    }

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createH1Dece = async (req, res) => {
  try {
    // Extraer los valores del cuerpo de la solicitud
    const {
      nombres,
      cedula,
      curso,
      especialidad,
      nacimiento,
      nacionalidad,
      lugar_naci,
      etnia,
      religion,
      edad,
      tipo_sangre,
      domicilio,
      cambio_domi,
      sector_refer,
      telefono_deta,
      celular_deta,
      nombres_madre,
      edad_madre,
      civil_madre,
      instruccion_madre,
      bono_madre,
      ocupacion_madre,
      telefono_madre,
      correo_madre,
      nombres_padre,
      edad_padre,
      civil_padre,
      instruccion_padre,
      bono_padre,
      ocupacion_padre,
      telefono_padre,
      correo_padre,
      nombres_repre,
      edad_repre,
      civil_repre,
      instruccion_repre,
      bono_repre,
      ocupacion_repre,
      telefono_repre,
      correo_repre,
      nombre_referencia,
      telefono_referencia,
      respuesta1_1,
      respuesta1_2,
      respuesta1_3,
      respuesta1_4,
      respuesta1_5,
      presos,
      respuesta1_6,
      respuesta1_7,
      respuesta1_8,
      respuesta1_9,
      respuesta1_10,
      discapacitados,
      respuesta1_11,
      respuesta1_12,
    } = req.body;

    // Comenzar la transacción
    await pool2.query("START TRANSACTION");

    // Insertamos un estudiante en la tabla "estudiantes"
    const [estudianteResult] = await pool2.query(
      "INSERT INTO estudiantes (nombres, cedula, curso, especialidad, nacimiento) VALUES (?, ?, ?, ?, ?)",
      [nombres, cedula, curso, especialidad, nacimiento]
    );
    const estudianteId = estudianteResult.insertId;

    // Insertamos detalles para el estudiante en la tabla "detalles"
    await pool2.query(
      "INSERT INTO detalles (estudiante_deta_id, nacionalidad, lugar_naci, etnia, religion, edad, tipo_sangre, domicilio, cambio_domi, sector_refer, telefono_deta, celular_deta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        estudianteId,
        nacionalidad,
        lugar_naci,
        etnia,
        religion,
        edad,
        tipo_sangre,
        domicilio,
        cambio_domi,
        sector_refer,
        telefono_deta,
        celular_deta,
      ]
    );

    // Insertamos información familiar en la tabla "familia"
    await pool2.query(
      "INSERT INTO familia (estudiante_fami_id, nombres_madre, edad_madre, civil_madre, instruccion_madre, bono_madre, ocupacion_madre, telefono_madre, correo_madre, nombres_padre, edad_padre, civil_padre, instruccion_padre, bono_padre, ocupacion_padre, telefono_padre, correo_padre, nombres_repre, edad_repre, civil_repre, instruccion_repre, bono_repre, ocupacion_repre, telefono_repre, correo_repre, nombre_referencia, telefono_referencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        estudianteId,
        nombres_madre,
        edad_madre,
        civil_madre,
        instruccion_madre,
        bono_madre,
        ocupacion_madre,
        telefono_madre,
        correo_madre,
        nombres_padre,
        edad_padre,
        civil_padre,
        instruccion_padre,
        bono_padre,
        ocupacion_padre,
        telefono_padre,
        correo_padre,
        nombres_repre,
        edad_repre,
        civil_repre,
        instruccion_repre,
        bono_repre,
        ocupacion_repre,
        telefono_repre,
        correo_repre,
        nombre_referencia,
        telefono_referencia,
      ]
    );

    // Insertamos referencias familiares en la tabla "refe_familiares"
    await pool2.query(
      "INSERT INTO refe_familiares (estudiante_refefa_id, respuesta1_1, respuesta1_2, respuesta1_3, respuesta1_4, respuesta1_5, presos, respuesta1_6, respuesta1_7, respuesta1_8, respuesta1_9, respuesta1_10, discapacitados, respuesta1_11, respuesta1_12) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        estudianteId,
        respuesta1_1,
        respuesta1_2,
        respuesta1_3,
        respuesta1_4,
        respuesta1_5,
        presos,
        respuesta1_6,
        respuesta1_7,
        respuesta1_8,
        respuesta1_9,
        respuesta1_10,
        discapacitados,
        respuesta1_11,
        respuesta1_12,
      ]
    );

    // Realizamos un COMMIT para guardar los datos
    await pool2.query("COMMIT");

    // Enviar una respuesta con el ID del estudiante creado
    res.json({ id: estudianteId });
  } catch (error) {
    // En caso de error, realizar un rollback de la transacción y enviar una respuesta con el mensaje de error
    await pool2.query("ROLLBACK");
    return res.status(500).json({ message: error.message });
  }
};

exports.updateH1Dece = async (req, res) => {
  try {
    // Extraer los valores del cuerpo de la solicitud
    const {
      nombres,
      curso,
      especialidad,
      nacimiento,
      cedula,
      nacionalidad,
      lugar_naci,
      etnia,
      religion,
      edad,
      tipo_sangre,
      domicilio,
      cambio_domi,
      sector_refer,
      telefono_deta,
      celular_deta,
      nombres_madre,
      edad_madre,
      civil_madre,
      instruccion_madre,
      bono_madre,
      ocupacion_madre,
      telefono_madre,
      correo_madre,
      nombres_padre,
      edad_padre,
      civil_padre,
      instruccion_padre,
      bono_padre,
      ocupacion_padre,
      telefono_padre,
      correo_padre,
      nombres_repre,
      edad_repre,
      civil_repre,
      instruccion_repre,
      ocupacion_repre,
      telefono_repre,
      correo_repre,
      nombre_referencia,
      telefono_referencia,
      respuesta1_1,
      respuesta1_2,
      respuesta1_3,
      respuesta1_4,
      respuesta1_5,
      presos,
      respuesta1_6,
      respuesta1_7,
      respuesta1_8,
      respuesta1_9,
      respuesta1_10,
      discapacitados,
      respuesta1_11,
      respuesta1_12,
    } = req.body;

    // Comenzar la transacción
    await pool2.query("START TRANSACTION");

    // Actualizamos los datos en la tabla "estudiantes"
    await pool2.query(
      "UPDATE estudiantes SET nombres = ?, curso = ?, especialidad = ?, nacimiento = ? WHERE cedula = ?",
      [nombres, curso, especialidad, nacimiento, cedula]
    );

    // Obtenemos el ID del estudiante
    const [estudianteIdResult] = await pool2.query(
      "SELECT id FROM estudiantes WHERE cedula = ?",
      [cedula]
    );
    const estudianteId = estudianteIdResult[0].id;

    // Actualizamos los datos en la tabla "detalles"
    await pool2.query(
      "UPDATE detalles SET nacionalidad = ?, lugar_naci = ?, etnia = ?, religion = ?, edad = ?, tipo_sangre = ?, domicilio = ?, cambio_domi = ?, sector_refer = ?, telefono_deta = ?, celular_deta = ? WHERE estudiante_deta_id = ?",
      [
        nacionalidad,
        lugar_naci,
        etnia,
        religion,
        edad,
        tipo_sangre,
        domicilio,
        cambio_domi,
        sector_refer,
        telefono_deta,
        celular_deta,
        estudianteId,
      ]
    );

    // Actualizamos los datos en la tabla "familia"
    await pool2.query(
      "UPDATE familia SET nombres_madre = ?, edad_madre = ?, civil_madre = ?, instruccion_madre = ?, bono_madre = ?, ocupacion_madre = ?, telefono_madre = ?, correo_madre = ?, nombres_padre = ?, edad_padre = ?, civil_padre = ?, instruccion_padre = ?, bono_padre = ?, ocupacion_padre = ?, telefono_padre = ?, correo_padre = ?, nombres_repre = ?, edad_repre = ?, civil_repre = ?, instruccion_repre = ?, ocupacion_repre = ?, telefono_repre = ?, correo_repre = ?, nombre_referencia = ?, telefono_referencia = ? WHERE estudiante_fami_id = ?",
      [
        nombres_madre,
        edad_madre,
        civil_madre,
        instruccion_madre,
        bono_madre,
        ocupacion_madre,
        telefono_madre,
        correo_madre,
        nombres_padre,
        edad_padre,
        civil_padre,
        instruccion_padre,
        bono_padre,
        ocupacion_padre,
        telefono_padre,
        correo_padre,
        nombres_repre,
        edad_repre,
        civil_repre,
        instruccion_repre,
        ocupacion_repre,
        telefono_repre,
        correo_repre,
        nombre_referencia,
        telefono_referencia,
        estudianteId,
      ]
    );

    // Actualizamos los datos en la tabla "refe_familiares"
    await pool2.query(
      "UPDATE refe_familiares SET respuesta1_1 = ?, respuesta1_2 = ?, respuesta1_3 = ?, respuesta1_4 = ?, respuesta1_5 = ?, presos = ?, respuesta1_6 = ?, respuesta1_7 = ?, respuesta1_8 = ?, respuesta1_9 = ?, respuesta1_10 = ?, discapacitados = ?, respuesta1_11 = ?, respuesta1_12 = ? WHERE estudiante_refefa_id = ?",
      [
        respuesta1_1,
        respuesta1_2,
        respuesta1_3,
        respuesta1_4,
        respuesta1_5,
        presos,
        respuesta1_6,
        respuesta1_7,
        respuesta1_8,
        respuesta1_9,
        respuesta1_10,
        discapacitados,
        respuesta1_11,
        respuesta1_12,
        estudianteId,
      ]
    );

    // Realizamos un COMMIT para guardar los datos
    await pool2.query("COMMIT");

    // Enviar una respuesta con un mensaje de éxito
    res.json({ message: "Estudiante actualizado con éxito" });
  } catch (error) {
    // En caso de error, realizar un rollback de la transacción y enviar una respuesta con el mensaje de error
    await pool2.query("ROLLBACK");
    return res.status(500).json({ message: error.message });
  }
};

exports.createH2Dece = async (req, res) => {
  try {
    // Extraer los valores del cuerpo de la solicitud
    const {
      nombres1,
      parentesco1,
      edad1,
      profesion1,
      ocupacion1,
      ingresos1,
      nombres2,
      parentesco2,
      edad2,
      profesion2,
      ocupacion2,
      ingresos2,
      nombres3,
      parentesco3,
      edad3,
      profesion3,
      ocupacion3,
      ingresos3,
      nombres4,
      parentesco4,
      edad4,
      profesion4,
      ocupacion4,
      ingresos4,
      villa,
      departamento,
      casa_pisos,
      propia,
      arrendada,
      prestada,
      hipotecas,
      compartida,
      electricidad,
      agua,
      alcantarillado,
      telefono_fijo,
      tv_cable,
      internet,
      discapacidad,
      detallar_disc,
      num_carnet,
      atencion_med,
      medic_regular,
      observacion,
      cedulaEstudiante
    } = req.body;

    // Comenzar la transacción
    await pool2.query("START TRANSACTION");

    // Consultar el campo cedula de la tabla "estudiantes"
    const [cedulaResult] = await pool2.query(
      'SELECT estudiantes.id FROM estudiantes WHERE estudiantes.cedula = ?',
      [cedulaEstudiante]
    );

    if (cedulaResult.length === 0) {
      return res.status(404).json({ message: "CEDULA NO ENCONTRADA" });
    }

    const cedula = cedulaResult[0].id;

    // Insertamos detalles para el estudiante en la tabla "detalles"
    await pool2.query(
      'INSERT INTO grupo_familiar (estudiante_gfami_id, nombres1, parentesco1, edad1, profesion1, ocupacion1, ingresos1,nombres2, parentesco2, edad2, profesion2, ocupacion2, ingresos2,nombres3, parentesco3, edad3, profesion3, ocupacion3, ingresos3,nombres4, parentesco4, edad4, profesion4, ocupacion4, ingresos4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        cedula,
        nombres1,
        parentesco1,
        edad1,
        profesion1,
        ocupacion1,
        ingresos1,
        nombres2,
        parentesco2,
        edad2,
        profesion2,
        ocupacion2,
        ingresos2,
        nombres3,
        parentesco3,
        edad3,
        profesion3,
        ocupacion3,
        ingresos3,
        nombres4,
        parentesco4,
        edad4,
        profesion4,
        ocupacion4,
        ingresos4
      ]
    );

     
    // Insertamos información familiar en la tabla "familia"
    await pool2.query(
      "INSERT INTO vivienda ( estudiante_vivi_id, villa, departamento, casa_pisos, propia, arrendada, prestada, hipotecas, compartida, electricidad, agua, alcantarillado, telefono_fijo, tv_cable, internet) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        cedula,
        villa,
        departamento,
        casa_pisos,
        propia,
        arrendada,
        prestada,
        hipotecas,
        compartida,
        electricidad,
        agua,
        alcantarillado,
        telefono_fijo,
        tv_cable,
        internet
      ]
    );

    // Insertamos referencias familiares en la tabla "refe_familiares"
    await pool2.query(
      "INSERT INTO salud ( estudiante_salud_id, discapacidad, detallar_disc, num_carnet, atencion_med, medic_regular, observacion) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        cedula,
        discapacidad,
        detallar_disc,
        num_carnet,
        atencion_med,
        medic_regular,
        observacion
      ]
    );
    
    // Realizamos un COMMIT para guardar los datos
    await pool2.query("COMMIT");

    // Enviar una respuesta con el ID del estudiante creado
    res.json({ message: 'Registro de notas creado exitosamente' });
  } catch (error) {

    await pool2.query("ROLLBACK");
    return res.status(500).json({ message: error.message });
  }
};

exports.updateH2Dece = async (req, res) => {
    try {
      // Extraer el ID del estudiante de la solicitud
      const { cedula } = req.params;
  
      // Extraer los valores del cuerpo de la solicitud
      const {
        nombres1,
        parentesco1,
        edad1,
        profesion1,
        ocupacion1,
        ingresos1,
        nombres2,
        parentesco2,
        edad2,
        profesion2,
        ocupacion2,
        ingresos2,
        nombres3,
        parentesco3,
        edad3,
        profesion3,
        ocupacion3,
        ingresos3,
        nombres4,
        parentesco4,
        edad4,
        profesion4,
        ocupacion4,
        ingresos4,
        villa,
        departamento,
        casa_pisos,
        propia,
        arrendada,
        prestada,
        hipotecas,
        compartida,
        electricidad,
        agua,
        alcantarillado,
        telefono_fijo,
        tv_cable,
        internet,
        discapacidad,
        detallar_disc,
        num_carnet,
        atencion_med,
        medic_regular,
        observacion,
      } = req.body;
  
      // Comenzar la transacción
      await pool2.query("START TRANSACTION");
  
      // Verificar si el estudiante existe
      const [studentResult] = await pool2.query(
        'SELECT estudiantes.id FROM estudiantes WHERE estudiantes.cedula = ?',
        [cedula]
      );

      const estudianteId = studentResult[0].id;
  
      if (studentResult.length === 0) {
        await pool2.query("ROLLBACK");
        return res.status(404).json({ message: "Estudiante no encontrado" });
      }
  
      // Actualizar los campos en la tabla "grupo_familiar"
      await pool2.query(
        'UPDATE grupo_familiar SET nombres1=?, parentesco1=?, edad1=?, profesion1=?, ocupacion1=?, ingresos1=?, nombres2=?, parentesco2=?, edad2=?, profesion2=?, ocupacion2=?, ingresos2=?, nombres3=?, parentesco3=?, edad3=?, profesion3=?, ocupacion3=?, ingresos3=?, nombres4=?, parentesco4=?, edad4=?, profesion4=?, ocupacion4=?, ingresos4=? WHERE estudiante_gfami_id = ?',
        [
          nombres1,
          parentesco1,
          edad1,
          profesion1,
          ocupacion1,
          ingresos1,
          nombres2,
          parentesco2,
          edad2,
          profesion2,
          ocupacion2,
          ingresos2,
          nombres3,
          parentesco3,
          edad3,
          profesion3,
          ocupacion3,
          ingresos3,
          nombres4,
          parentesco4,
          edad4,
          profesion4,
          ocupacion4,
          ingresos4,
          estudianteId
        ]
      );
  
      // Actualizar los campos en la tabla "vivienda"
      await pool2.query(
        'UPDATE vivienda SET villa=?, departamento=?, casa_pisos=?, propia=?, arrendada=?, prestada=?, hipotecas=?, compartida=?, electricidad=?, agua=?, alcantarillado=?, telefono_fijo=?, tv_cable=?, internet=? WHERE estudiante_vivi_id = ?',
        [
          villa,
          departamento,
          casa_pisos,
          propia,
          arrendada,
          prestada,
          hipotecas,
          compartida,
          electricidad,
          agua,
          alcantarillado,
          telefono_fijo,
          tv_cable,
          internet,
          estudianteId
        ]
      );
  
      // Actualizar los campos en la tabla "salud"
      await pool2.query(
        'UPDATE salud SET discapacidad=?, detallar_disc=?, num_carnet=?, atencion_med=?, medic_regular=?, observacion=? WHERE estudiante_salud_id = ?',
        [
          discapacidad,
          detallar_disc,
          num_carnet,
          atencion_med,
          medic_regular,
          observacion,
          estudianteId
        ]
      );
  
      // Realizamos un COMMIT para guardar los datos
      await pool2.query("COMMIT");
  
      // Enviar una respuesta con un mensaje de éxito
      res.json({ message: 'Datos actualizados exitosamente' });
    } catch (error) {
      await pool2.query("ROLLBACK");
      return res.status(500).json({ message: error.message });
    }
};

exports.createH3Dece = async (req, res) => {
    try {
      // Extraer los valores del cuerpo de la solicitud
      const {
        cedulaEstudiante,
        fecha_ingreso,
        ingreso_curso,
        repitio_anio,
        institucion_origen,
        institucion_lugar,
        problem_academico,
        problem_disciplina,
        relacion_pares,
        otros_renacad,
        bulliyng,
        respuesta2_1,
        respuesta2_2,
        respuesta2_3,
        respuesta3_1,
        respuesta3_2,
        respuesta3_3,
        respuesta3_4,
        respuesta3_5,
        respuesta4_1,
        respuesta4_2,
        respuesta4_3,
        respuesta4_4,
        respuesta4_5,
        respuesta4_6,
        respuesta4_7,
        respuesta4_8,
        respuesta4_9,
        respuesta4_10,
        respuesta4_11,
        respuesta4_12
      } = req.body;
  
      // Comenzar la transacción
      await pool2.query("START TRANSACTION");
  
      // Obtener el ID del estudiante con la cedula proporcionada
      const [estudianteIdResult] = await pool2.query(
        'SELECT estudiantes.id FROM estudiantes WHERE estudiantes.cedula = ?',
        [cedulaEstudiante]
      );
  
      if (estudianteIdResult.length === 0) {
        await pool2.query("ROLLBACK");
        return res.status(404).json({ message: "CEDULA NO ENCONTRADA" });
      }
  
      const estudianteId = estudianteIdResult[0].id;
  
      // Insertar en la tabla "ren_academico"
      await pool2.query(
        'INSERT INTO ren_academico (estudiante_renacad_id, fecha_ingreso, ingreso_curso, repitio_anio, institucion_origen, institucion_lugar, problem_academico, problem_disciplina, relacion_pares, otros_renacad, bulliyng, respuesta2_1, respuesta2_2, respuesta2_3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          estudianteId,
          fecha_ingreso,
          ingreso_curso,
          repitio_anio,
          institucion_origen,
          institucion_lugar,
          problem_academico,
          problem_disciplina,
          relacion_pares,
          otros_renacad,
          bulliyng,
          respuesta2_1,
          respuesta2_2,
          respuesta2_3
        ]
      );
  
      // Insertar en la tabla "academico"
      await pool2.query(
        'INSERT INTO academico (estudiante_acad_id, respuesta3_1, respuesta3_2, respuesta3_3, respuesta3_4, respuesta3_5) VALUES (?, ?, ?, ?, ?, ?)',
        [
          estudianteId,
          respuesta3_1,
          respuesta3_2,
          respuesta3_3,
          respuesta3_4,
          respuesta3_5
        ]
      );
  
      // Insertar en la tabla "embarazo"
      await pool2.query(
        'INSERT INTO embarazo (estudiante_emba_id, respuesta4_1, respuesta4_2, respuesta4_3, respuesta4_4, respuesta4_5, respuesta4_6, respuesta4_7, respuesta4_8, respuesta4_9, respuesta4_10, respuesta4_11, respuesta4_12) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          estudianteId,
          respuesta4_1,
          respuesta4_2,
          respuesta4_3,
          respuesta4_4,
          respuesta4_5,
          respuesta4_6,
          respuesta4_7,
          respuesta4_8,
          respuesta4_9,
          respuesta4_10,
          respuesta4_11,
          respuesta4_12
        ]
      );
  
      // Confirmar la transacción (se aplican los cambios)
      await pool2.query("COMMIT");
  
      // Enviar una respuesta con un mensaje de éxito
      res.json({ message: 'Registro creado exitosamente' });
    } catch (error) {
      await pool2.query("ROLLBACK");
      return res.status(500).json({ message: error.message });
    }
};

exports.updateH3Dece = async (req, res) => {
    try {
      // Extraer el ID del estudiante de la solicitud
      const { cedula } = req.params;
  
      // Extraer los valores del cuerpo de la solicitud
      const {
        fecha_ingreso,
        ingreso_curso,
        repitio_anio,
        institucion_origen,
        institucion_lugar,
        problem_academico,
        problem_disciplina,
        relacion_pares,
        otros_renacad,
        bulliyng,
        respuesta2_1,
        respuesta2_2,
        respuesta2_3,
        respuesta3_1,
        respuesta3_2,
        respuesta3_3,
        respuesta3_4,
        respuesta3_5,
        respuesta4_1,
        respuesta4_2,
        respuesta4_3,
        respuesta4_4,
        respuesta4_5,
        respuesta4_6,
        respuesta4_7,
        respuesta4_8,
        respuesta4_9,
        respuesta4_10,
        respuesta4_11,
        respuesta4_12
      } = req.body;
  
      // Comenzar la transacción
      await pool2.query("START TRANSACTION");
  
      // Verificar si el estudiante existe
      const [studentResult] = await pool2.query(
        'SELECT estudiantes.id FROM estudiantes WHERE estudiantes.cedula = ?',
        [cedula]
      );

      const estudianteId = studentResult[0].id;
  
      if (studentResult.length === 0) {
        await pool2.query("ROLLBACK");
        return res.status(404).json({ message: "Estudiante no encontrado" });
      }
  
      // Actualizar la tabla "ren_academico"
      await pool2.query(
        'UPDATE ren_academico SET fecha_ingreso=?, ingreso_curso=?, repitio_anio=?, institucion_origen=?, institucion_lugar=?, problem_academico=?, problem_disciplina=?, relacion_pares=?, otros_renacad=?, bulliyng=?, respuesta2_1=?, respuesta2_2=?, respuesta2_3=? WHERE estudiante_renacad_id = ?',
        [
            fecha_ingreso,
            ingreso_curso,
            repitio_anio,
            institucion_origen,
            institucion_lugar,
            problem_academico,
            problem_disciplina,
            relacion_pares,
            otros_renacad,
            bulliyng,
            respuesta2_1,
            respuesta2_2,
            respuesta2_3,
            estudianteId
        ]
      );
  
      // Actualizar la tabla "academico"
      await pool2.query(
        'UPDATE academico SET respuesta3_1=?, respuesta3_2=?, respuesta3_3=?, respuesta3_4=?, respuesta3_5=? WHERE estudiante_acad_id = ?',
        [
          respuesta3_1,
          respuesta3_2,
          respuesta3_3,
          respuesta3_4,
          respuesta3_5,
          estudianteId
        ]
      );
  
      // Actualizar la tabla "embarazo"
      await pool2.query(
        'UPDATE embarazo SET respuesta4_1=?, respuesta4_2=?, respuesta4_3=?, respuesta4_4=?, respuesta4_5=?, respuesta4_6=?, respuesta4_7=?, respuesta4_8=?, respuesta4_9=?, respuesta4_10=?, respuesta4_11=?, respuesta4_12=? WHERE estudiante_emba_id = ?',
        [
          respuesta4_1,
          respuesta4_2,
          respuesta4_3,
          respuesta4_4,
          respuesta4_5,
          respuesta4_6,
          respuesta4_7,
          respuesta4_8,
          respuesta4_9,
          respuesta4_10,
          respuesta4_11,
          respuesta4_12,
          estudianteId
        ]
      );
  
      // Confirmar la transacción (se aplican los cambios)
      await pool2.query("COMMIT");
  
      // Enviar una respuesta con un mensaje de éxito
      res.json({ message: 'Datos actualizados exitosamente' });
    } catch (error) {
      await pool2.query("ROLLBACK");
      return res.status(500).json({ message: error.message });
    }
};

exports.createH4Dece = async (req, res) => {
    try {
      // Extraer los valores del cuerpo de la solicitud
      const {
        cedulaEstudiante,
        enfermedades,
        accidentes,
        alergias,
        cirugias,
        perdida_conoci,
        otros,
        obesidad,
        cardiacas,
        hipertension,
        diabetes,
        mentales,
        otros_pato,
        otros_detalle,
        observaciones,
        descripcion_hijo,
        nombres_repre,
        cedula_repre,
        fecha_repre
      } = req.body;
  
      // Comenzar la transacción
      await pool2.query("START TRANSACTION");
  
      // Obtener el ID del estudiante con la cedula proporcionada
      const [estudianteIdResult] = await pool2.query(
        'SELECT estudiantes.id FROM estudiantes WHERE estudiantes.cedula = ?',
        [cedulaEstudiante]
      );
  
      if (estudianteIdResult.length === 0) {
        await pool2.query("ROLLBACK");
        return res.status(404).json({ message: "CEDULA NO ENCONTRADA" });
      }
  
      const estudianteId = estudianteIdResult[0].id;
  
      // Insertar en la tabla "enfermedades"
      await pool2.query(
        'INSERT INTO enfermedades (estudiante_enfe_id, enfermedades, accidentes, alergias, cirugias, perdida_conoci, otros) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          estudianteId,
          enfermedades,
          accidentes,
          alergias,
          cirugias,
          perdida_conoci,
          otros
        ]
      );
  
      // Insertar en la tabla "patologias"
      await pool2.query(
        'INSERT INTO patologias (estudiante_pato_id, obesidad, cardiacas, hipertension, diabetes, mentales, otros_pato, otros_detalle, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          estudianteId,
          obesidad,
          cardiacas,
          hipertension,
          diabetes,
          mentales,
          otros_pato,
          otros_detalle,
          observaciones
        ]
      );
  
      // Insertar en la tabla "representante"
      await pool2.query(
        'INSERT INTO representante (estudiante_repre_id, descripcion_hijo, nombres_repre, cedula_repre, fecha_repre) VALUES (?, ?, ?, ?, ?)',
        [
          estudianteId,
          descripcion_hijo,
          nombres_repre,
          cedula_repre,
          fecha_repre
        ]
      );
  
      // Confirmar la transacción (se aplican los cambios)
      await pool2.query("COMMIT");
  
      // Enviar una respuesta con un mensaje de éxito
      res.json({ message: 'Registro creado exitosamente' });
    } catch (error) {
      await pool2.query("ROLLBACK");
      return res.status(500).json({ message: error.message });
    }
};

exports.updateH4Dece = async (req, res) => {
    try {
      // Extraer el ID del estudiante de la solicitud
      const { cedula } = req.params;
  
      // Extraer los valores del cuerpo de la solicitud
      const {
        enfermedades,
        accidentes,
        alergias,
        cirugias,
        perdida_conoci,
        otros,
        obesidad,
        cardiacas,
        hipertension,
        diabetes,
        mentales,
        otros_pato,
        otros_detalle,
        observaciones,
        descripcion_hijo,
        nombres_repre,
        cedula_repre,
        fecha_repre
      } = req.body;
  
      // Comenzar la transacción
      await pool2.query("START TRANSACTION");
  
      // Verificar si el estudiante existe
      const [studentResult] = await pool2.query(
        'SELECT estudiantes.id FROM estudiantes WHERE estudiantes.cedula = ?',
        [cedula]
      );

      const estudianteId = studentResult[0].id;
  
      if (studentResult.length === 0) {
        await pool2.query("ROLLBACK");
        return res.status(404).json({ message: "Estudiante no encontrado" });
      }
  
      // Actualizar la tabla "enfermedades"
      await pool2.query(
        'UPDATE enfermedades SET enfermedades=?, accidentes=?, alergias=?, cirugias=?, perdida_conoci=?, otros=? WHERE estudiante_enfe_id = ?',
        [
          enfermedades,
          accidentes,
          alergias,
          cirugias,
          perdida_conoci,
          otros,
          estudianteId
        ]
      );
  
      // Actualizar la tabla "patologías"
      await pool2.query(
        'UPDATE patologias SET obesidad=?, cardiacas=?, hipertension=?, diabetes=?, mentales=?, otros_pato=?, otros_detalle=?, observaciones=? WHERE estudiante_pato_id = ?',
        [
          obesidad,
          cardiacas,
          hipertension,
          diabetes,
          mentales,
          otros_pato,
          otros_detalle,
          observaciones,
          estudianteId
        ]
      );
  
      // Actualizar la tabla "representante"
      await pool2.query(
        'UPDATE representante SET descripcion_hijo=?, nombres_repre=?, cedula_repre=?, fecha_repre=? WHERE estudiante_repre_id = ?',
        [
          descripcion_hijo,
          nombres_repre,
          cedula_repre,
          fecha_repre,
          estudianteId
        ]
      );
  
      // Confirmar la transacción (se aplican los cambios)
      await pool2.query("COMMIT");
  
      // Enviar una respuesta con un mensaje de éxito
      res.json({ message: 'Datos actualizados exitosamente' });
    } catch (error) {
      await pool2.query("ROLLBACK");
      return res.status(500).json({ message: error.message });
    }
};





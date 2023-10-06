const { Router } = require("express");
const {
  getEstudiante,
  getEstudiantes,
  getEstudiantesTotales,
  getEstudiantesTotalesAnio,
  getEstudiantesSeguros,
  createEstudiantes,
  updateEstudiante,
  deleteEstudiante,
  getRecords,
  getRecord,
  createRecord,
  updateRecord,
} = require("../controller/estudiantes.controller.js");
const {
  getDece,
  getHoja1Dece,
  getHoja2Dece,
  getHoja3Dece,
  getHoja4Dece,
  createH1Dece,
  createH2Dece,
  createH3Dece,
  createH4Dece,
  updateH1Dece,
  updateH2Dece,
  updateH3Dece,
  updateH4Dece,
} = require("../controller/dece.controller.js");

const authMiddleware = require("../middleware/middleware.js");
const authMiddleware2 = require("../middleware/middleware2.js");

const router = Router();

router.get('/estudiante/:id', authMiddleware,getEstudiante);

router.get('/estudiantes', authMiddleware, getEstudiantes);

router.get('/estudiantestotales', authMiddleware, getEstudiantesTotales);

router.get('/estadisticas/:id', authMiddleware2, getEstudiantesTotalesAnio);

router.get('/seguros', authMiddleware, getEstudiantesSeguros);

router.post('/estudiante', authMiddleware, createEstudiantes);

router.put('/estudiante/cedula/:cedula', authMiddleware, updateEstudiante);

router.delete('/estudiante/cedula/:cedula', authMiddleware, deleteEstudiante);


router.get('/record/:id', authMiddleware, getRecord);

router.get('/records', authMiddleware, getRecords);

router.post('/record', authMiddleware, createRecord);

router.put('/record/cedula/:cedula', authMiddleware, updateRecord);


router.get('/deces', authMiddleware2, getDece);

router.get('/decehoja1/:id', authMiddleware2, getHoja1Dece);

router.get('/decehoja2/:id', authMiddleware2, getHoja2Dece);

router.get('/decehoja3/:id', authMiddleware2, getHoja3Dece);

router.get('/decehoja4/:id', authMiddleware2, getHoja4Dece);

router.post('/deceh1', authMiddleware2, createH1Dece);

router.post('/deceh2', authMiddleware2, createH2Dece);

router.post('/deceh3', authMiddleware2, createH3Dece);

router.post('/deceh4', authMiddleware2, createH4Dece);

router.put('/deceh1/:cedula', authMiddleware2, updateH1Dece);

router.put('/deceh2/:cedula', authMiddleware2, updateH2Dece);

router.put('/deceh3/:cedula', authMiddleware2, updateH3Dece);

router.put('/deceh4/:cedula', authMiddleware2, updateH4Dece);


module.exports = router;
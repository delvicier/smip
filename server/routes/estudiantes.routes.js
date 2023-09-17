const { Router } = require("express");
const {
  getEstudiante,
  getEstudiantes,
  getEstudiantesTotales,
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

const authMiddleware = require("../middleware.js");

const router = Router();

router.get('/estudiante/:id', getEstudiante);

router.get('/estudiantes', getEstudiantes);

router.get('/estudiantestotales', authMiddleware, getEstudiantesTotales);

router.post('/estudiante', createEstudiantes);

router.put('/estudiante/cedula/:cedula', updateEstudiante);

router.delete('/estudiante/cedula/:cedula', deleteEstudiante);


router.get('/record/:id', getRecord);

router.get('/records', getRecords);

router.post('/record', createRecord);

router.put('/record/cedula/:cedula', updateRecord);


router.get('/deces', getDece);

router.get('/decehoja1/:id', getHoja1Dece);

router.get('/decehoja2/:id', getHoja2Dece);

router.get('/decehoja3/:id', getHoja3Dece);

router.get('/decehoja4/:id', getHoja4Dece);

router.post('/deceh1', createH1Dece);

router.post('/deceh2', createH2Dece);

router.post('/deceh3', createH3Dece);

router.post('/deceh4', createH4Dece);

router.put('/deceh1/:cedula', updateH1Dece);

router.put('/deceh2/:cedula', updateH2Dece);

router.put('/deceh3/:cedula', updateH3Dece);

router.put('/deceh4/:cedula', updateH4Dece);


module.exports = router;
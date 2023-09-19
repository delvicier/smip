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

router.get('/estudiante/:id', authMiddleware,getEstudiante);

router.get('/estudiantes', authMiddleware, getEstudiantes);

router.get('/estudiantestotales', authMiddleware, getEstudiantesTotales);

router.post('/estudiante', authMiddleware, createEstudiantes);

router.put('/estudiante/cedula/:cedula', authMiddleware, updateEstudiante);

router.delete('/estudiante/cedula/:cedula', authMiddleware, deleteEstudiante);


router.get('/record/:id', authMiddleware, getRecord);

router.get('/records', authMiddleware, getRecords);

router.post('/record', authMiddleware, createRecord);

router.put('/record/cedula/:cedula', authMiddleware, updateRecord);


router.get('/deces', getDece);

router.get('/decehoja1/:id', authMiddleware, getHoja1Dece);

router.get('/decehoja2/:id', authMiddleware, getHoja2Dece);

router.get('/decehoja3/:id', authMiddleware, getHoja3Dece);

router.get('/decehoja4/:id', authMiddleware, getHoja4Dece);

router.post('/deceh1', authMiddleware, createH1Dece);

router.post('/deceh2', authMiddleware, createH2Dece);

router.post('/deceh3', authMiddleware, createH3Dece);

router.post('/deceh4', authMiddleware, createH4Dece);

router.put('/deceh1/:cedula', authMiddleware, updateH1Dece);

router.put('/deceh2/:cedula', authMiddleware, updateH2Dece);

router.put('/deceh3/:cedula', authMiddleware, updateH3Dece);

router.put('/deceh4/:cedula', authMiddleware, updateH4Dece);


module.exports = router;
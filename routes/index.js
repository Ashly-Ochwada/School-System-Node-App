var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'welcome to api' });
});

module.exports = router;

const classroomController = require('../controllers').classroom;
const studentController = require('../controllers').student;
const trainerController = require('../controllers').trainer;
const courseController = require('../controllers').course;




router.get('/api/student', studentController.list);
router.get('/api/student/:id', studentController.getById);
router.post('/api/student', studentController.add);
router.put('/api/student/:id', studentController.update);
router.delete('/api/student/:id', studentController.delete);


router.get('/api/classroom', classroomController.list);
router.get('/api/classroom/:id', classroomController.getById);
router.post('/api/classroom', classroomController.add);
router.put('/api/classroom/:id', classroomController.update);
router.delete('/api/classroom/:id', classroomController.delete);


router.get('/api/trainer', trainerController.list);
router.get('/api/trainer/:id', trainerController.getById);
router.post('/api/trainer', trainerController.add);
router.put('/api/trainer/:id', trainerController.update);
router.delete('/api/trainer/:id', trainerController.delete);


router.get('/api/course', courseController.list);
router.get('/api/course/:id', courseController.getById);
router.post('/api/course', courseController.add);
router.put('/api/course/:id', courseController.update);
router.delete('/api/course/:id', courseController.delete);

router.post('/api/classroom/add_with_students', classroomController.addWithStudents);
router.post('/api/trainer/add_with_course', trainerController.addWithCourse);
router.post('/api/student/add_course', studentController.addCourse);




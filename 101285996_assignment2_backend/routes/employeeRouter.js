const router = require('express').Router();
let employeeData = require('../models/employeeModel');


router.route('/api/v1/employees').get((req, res) => {
    employeeData.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/api/v1/employees').post((req, res) => {
  
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailId = req.body.emailId;

  
    const newEmployee = new employeeData({
        firstName,
        lastName,
        emailId,
    });
  
    newEmployee.save()
    .then(() => res.json('Employee addition Completed!'))
    .catch(err => res.json('Error Caught: ' + err));
  });


  router.route('/api/v1/employees/:id').get((req, res) => {
    employeeData.findById(req.params.id)
      .then(employees => res.json(employees))
      .catch(err => res.status(400).json('Error Caught: ' + err));
  });




router.route('/api/v1/employees/:id').put((req, res) => {
    employeeData.findById(req.params.id)
      .then(employees => {
        employees.firstName = req.body.firstName;
        employees.lastName = req.body.lastName;
        employees.emailId = req.body.emailId;
      
  
        employees.save()
          .then(() => res.json('Employee updation Completed!'))
          .catch(err => res.json('Error Caught: ' + err));
      })
      .catch(err => res.json('Error Caught: ' + err));
  });


  router.route('/api/v1/employees/:id').delete((req, res) => {
    employeeData.findByIdAndDelete(req.params.id)
      .then(() => res.json('Employee deletion Updated.'))
      .catch(err => res.status(400).json('Error Caught: ' + err));
  });

module.exports = router;
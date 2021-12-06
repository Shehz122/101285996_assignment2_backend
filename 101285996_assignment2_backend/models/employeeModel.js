const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);




var emailValidation = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const employeeInfo = mongoose.Schema({
    _id: Number,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    emailId: {type: String, required: true,  validate: [emailValidation, 'Invalid Email address']}
},


{ _id: false }, {
    timestamps: true
});
employeeInfo.plugin(AutoIncrement);
module.exports = mongoose.model('employeeData', employeeInfo);
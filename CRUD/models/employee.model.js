const mongoose = require('mongoose');

var empSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
        required: 'This field is required.'
    },
    city: {
        type: String,
        required: 'This field is required.'
    },
    age: {
        type: Number,
        required: 'This field is required.'
    },
    salary: {
        type: Number,
        required: 'This field is required.'
    }
});

//Custom Validation

empSchema.path('fullName').validate((val) => {
    FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
    return FullNameRegEx.test(val);
},'Invalid Name.');

empSchema.path('email').validate((val) => {
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
},'Invalid Email.');

empSchema.path('mobile').validate((val) => {
    ConNoRegEx = /^([0-9]{10})$/;
    return ConNoRegEx.test(val);
},'Invalid Contactno.');

empSchema.path('city').validate((val) => {
    FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
    return FullNameRegEx.test(val);
},'Invalid City.');

empSchema.path('age').validate((val) => {
    AgeRegEx = /^([0-9]{1,2})$/;
    return AgeRegEx.test(val);
},'Invalid age.');

empSchema.path('salary').validate((val) => {
    SalaryRegEx = /^([0-9]{5,6})$/;
    return SalaryRegEx.test(val);
},'Invalid Salary');

mongoose.model('EmpDetails',empSchema);
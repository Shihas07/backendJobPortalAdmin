const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    enum: ["Full Time", "Part Time", "Contract", "Internship"], 
    required: true,
  },
  salaryFrom: {
    type: Number,
    required: true,
   
  },
  salaryTo: {
    type: Number,
    required: true,
   
  },
  applicationDeadLine: {
    type: Date,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
    
  },
}, { timestamps: true }); 

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

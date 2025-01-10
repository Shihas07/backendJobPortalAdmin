const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
  
  },
  companyName: {
    type: String,
    
  },
  location: {
    type: String,
    
  },
  jobType: {
    type: String,
    enum: ["Full Time", "Part Time", "Contract", "Internship"], 
    
  },
  salaryFrom: {
    type: Number,
    
   
  },
  salaryTo: {
    type: Number,
   
   
  },
  applicationDeadLine: {
    type: Date,
    
  },
  jobDescription: {
    type: String,
   
    
  },
}, { timestamps: true }); 

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

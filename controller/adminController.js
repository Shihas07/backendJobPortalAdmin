const Job = require("../modal/jobData");

const addData = async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      location,
      jobType,
      salaryFrom,
      salaryTo,
      applicationDeadLine,
      jobDescription,
    } = req.body;

    console.log(req.body);

    const existingJob = await Job.findOne({ companyName, jobTitle });

    if (existingJob) {
      return res
        .status(400)
        .json({
          message: "Job with this title already exists for the company.",
        });
    }

    const newJob = new Job({
      jobTitle,
      companyName,
      location,
      jobType,
      salaryFrom,
      salaryTo,
      applicationDeadLine,
      jobDescription,
    });

    await newJob.save();

    res.status(201).json({ message: "Job added successfully", job: newJob });
  } catch (error) {
    console.error("Error adding job:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const fetchData = async (req, res) => {
  try {
    const jobs = await Job.find(); 
    console.log(jobs)

    if (jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found." });
    }
        console.log("jobs",jobs)
    res.status(200).json({ message: "Jobs fetched successfully", jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  addData,
  fetchData
};

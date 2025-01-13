const mongoose = require('mongoose');
const Job = require('./models/jobModel'); // Adjust the path as needed
const JobType = require('./models/jobTypeModel'); // Adjust the path as needed

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://abdulraheem123986:jobportalapi@jobportalapi.6rd2y.mongodb.net/?retryWrites=true&w=majority&appName=jobportalapi')
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Database connection error:', err));

// Function to insert jobs
const insertJobs = async () => {
  try {
    // Fetch job types from the database
    const jobTypes = await JobType.find({});

    // Map job type names to their corresponding IDs
    const jobTypeMap = {};
    jobTypes.forEach(jobType => {
      jobTypeMap[jobType.jobTypeName] = jobType._id;
    });

    // Insert jobs
    const jobs = await Job.insertMany([
      {
        title: "ACCOUNTS MANAGER",
        description: "0-3 years freshers and experienced both can apply",
        salary: "200000",
        location: "BANGALORE",
        jobType: jobTypeMap["ACCOUNTS"], // IT - SOFTWARE
        user: new mongoose.Types.ObjectId("66c8816748edae00d4e3b54d")
      },
      {
        title: "PROCESS EXECUTIVE",
        description: "0-3 years freshers and experienced both can apply",
        salary: "450000",
        location: "MUMBAI",
        jobType: jobTypeMap["ACCOUNTS"], // IT - SOFTWARE
        user: new mongoose.Types.ObjectId("66c8816748edae00d4e3b54d")
      },
      {
        title: "B-PHARM",
        description: "0-3 years freshers and experienced both can apply",
        salary: "100000",
        location: "TENKASI",
        jobType: jobTypeMap["MEDICINES"], // MEDICINES
        user: new mongoose.Types.ObjectId("66c8816748edae00d4e3b54d")
      },
      {
        title: "ELECTRONC ENGINEER",
        description: "0-3 years freshers and experienced both can apply",
        salary: "120000",
        location: "BANGALORE",
        jobType: jobTypeMap["ELECTRONICS ENGINEERING"], // ELECTRONICS ENGINEERING
        user: new mongoose.Types.ObjectId("66c8816748edae00d4e3b54d")
      },
      {
        title: "ASSOCIATIVE MANAGER",
        description: "0-3 years freshers and experienced both can apply",
        salary: "850000",
        location: "PUNE",
        jobType: jobTypeMap["NON - IT"], // IT - SOFTWARE
        user: new mongoose.Types.ObjectId("66c8816748edae00d4e3b54d")
      },
      {
        title: "MOTOR MECHANIC",
        description: "0-3 years freshers and experienced both can apply",
        salary: "150000",
        location: "BANGALORE",
        jobType: jobTypeMap["MECHANIC ENGINEERING"], // NON - IT
        user: new mongoose.Types.ObjectId("66c8816748edae00d4e3b54d")
      }
    ]);

    console.log('Jobs inserted:', jobs);

    // Close the database connection
    mongoose.connection.close();
  } catch (error) {
    console.log('Error inserting jobs:', error);
    mongoose.connection.close();
  }
};

// Run the insert function
insertJobs();

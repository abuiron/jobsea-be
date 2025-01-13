const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const jobTypeSchema = new mongoose.Schema({
    jobTypeName: {
        type: String,
        trim: true,
        required: [true, 'job category is required'],
        maxlength: 70,
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
}, { timestamps: true });

// Check if the model already exists, or define a new one
const JobType = mongoose.models.JobType || mongoose.model('JobType', jobTypeSchema);

module.exports = JobType;

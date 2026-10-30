const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    applicantId: { type: String, required: true },
    serviceType: { type: String, required: true },
    formData: { type: Object, required: true },
    workflowState: {
        type: String,
        enum: ['draft', 'pending_village_officer', 'pending_local_govt', 'approved', 'rejected'],
        default: 'pending_village_officer'
    },
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);
const Submission = require('../models/Submission');

exports.createSubmission = async (req, res) => {
    try {
        const { applicantId, serviceType, formData } = req.body;

        if (!applicantId || !serviceType || !formData) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newSubmission = new Submission({ applicantId, serviceType, formData });
        const savedSubmission = await newSubmission.save();

        res.status(201).json({
            message: 'Application submitted successfully',
            submissionId: savedSubmission._id,
            workflowState: savedSubmission.workflowState
        });
    } catch (error) {
        console.error('Error saving submission:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
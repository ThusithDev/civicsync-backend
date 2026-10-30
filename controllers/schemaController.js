const { getUiSchemaUrl } = require('../services/s3Service');

exports.fetchSchemaUrl = async (req, res) => {
    try {
        const { schemaName } = req.params;
        const url = await getUiSchemaUrl(`${schemaName}.json`);
        
        res.status(200).json({
            schemaName,
            downloadUrl: url
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve schema URL' });
    }
};
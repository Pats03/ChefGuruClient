const { getStoreData } = require('../services/shopifyService');

module.exports = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(400).json({
            success: false,
            message: 'API Key is required',
        });
    }

    try {
        const store = await getStoreData(apiKey);
        req.store = store;
        next();
    } catch {
        res.status(401).json({
            success: false,
            message: 'Invalid API Key',
        });
    }
};

const mockShopifyData = require('../mock/mockShopifyData.json');

const getStoreData = (apiKey) => {
    return new Promise((resolve, reject) => {
        const store = Object.values(mockShopifyData).find(store => store.apiKey === apiKey);
        if (store) {
            resolve(store);
        } else {
            reject('Store not found');
        }
    });
};

module.exports = { getStoreData };

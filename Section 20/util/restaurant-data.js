const path = require('path');
const fs = require('fs');

const getPath = path.join(__dirname, '..', 'data', 'restaurants.json');

function getStoredRestaurants(){
    const fileData = fs.readFileSync(getPath);
    const storedRestaurants = JSON.parse(fileData);
    return storedRestaurants;
}

function storeRestaurants(storableRestaurants){
    fs.writeFileSync(getPath, storableRestaurants)
}

module.exports = {
    getStoredRestaurants: getStoredRestaurants,
    storeRestaurants: storeRestaurants
}
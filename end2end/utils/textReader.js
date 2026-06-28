const fs = require('fs');
const path = require('path');


const filePath = path.resolve(__dirname, '../testData/config.json');
const textData = require('../testData/config.json');

function getDataFromJson(pathStr) {
  const keys = pathStr.split('.');
  let value = textData;

  for (const key of keys) {
    if (!(key in value)) {
      throw new Error(`Missing key "${pathStr}" in JSON`);
    }
    value = value[key];
  }

  return value;
}

module.exports = getDataFromJson;

/* Modeli Ekleme */
var Manager = require("../models/Manager");

function checkApi(apikey) {
    return new Promise((resolve, reject) => {

        Manager.find({ apikey: apikey }).then((confirm) => {
            if (confirm.length > 0) {
    
                resolve("İşlem Başarıyla Gerçekleşti");
    
            } else {
                reject("Api Key Hatası");
            }
    
        });

    });
}

module.exports = checkApi;

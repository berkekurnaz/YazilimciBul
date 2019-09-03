var fs = require('fs');

module.exports = {
    deleteImage: function (imagePath) {
        return new Promise((resolve, reject) => {

            var path = imagePath.substring(22);
            fs.unlink('./public/' + path, function (err) {
                if (err) {
                    reject("Resim Silme Hatası");
                } else {
                    resolve("Resim Başarıyla Silindi");
                }
            });

        });
    }
}
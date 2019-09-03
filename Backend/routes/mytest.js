var express = require('express');
var router = express.Router();

var fs = require('fs');
var myWebsiteData = require("../helper/myWebsiteData");

var creatorImageName = require("../helper/creatorImageName");
var myImageHelper = require("../helper/myImageHelper");
const multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        var filetype = '';
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        cb(null, 'image-' + creatorImageName.generateImage() + '.' + filetype);
    }
});
var upload = multer({ storage: storage });

/* Modeli Ekleme */
var MyTest = require("../models/MyTest");

/* Api Check Ekleme */
var apiCheck = require("../api_check/apiCheck");

/* Fotograf Listeleme Islemi */
router.get('/', function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        MyTest.find().then((mytests) => {
            res.json(mytests);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Fotograf Silme Islemi */
router.get("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        MyTest.findById(id).then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json("Silme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Fotograf Silme Islemi */
router.delete("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        MyTest.findByIdAndRemove(id).then((data) => {
            if (data.photo.includes("defaultdeveloper")) {
                res.json("Fotoğrafsız Silme İşlemi Başarılı.");
            } else {
                myImageHelper.deleteImage(data.photo).then((dataa) => {
                    res.json("Fotoğraflı Silme İşlemi Başarılı.");
                }).catch((err) => {
                    res.json("Silme İşlemi Başarısız.");
                });
            }
        }).catch((err) => {
            res.json("Silme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});


/* Fotograf Ekleme Islemi */
router.post("/", upload.single('file'), function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        /* Fotograf Null İse Default Resim Atama */
        var myFileName = "";
        if (!req.file) {
            myFileName = myWebsiteData.my_website_name + "images/defaultdeveloper.png";
        } else {
            myFileName = myWebsiteData.my_website_name + 'images/' + req.file.filename;
        }

        new MyTest({
            name: req.body.name,
            photo: myFileName,
        }).save().then(() => {
            res.json("Kaydetme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Kaydetme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* MyTest Guncelleme Islemi */
router.put("/:id", upload.single('file'), function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        if (req.file) {
            MyTest.findById({ "_id": id }).then((data) => {

                if (!data.photo.includes("defaultdeveloper")) {
                    var path = data.photo.substring(myWebsiteData.my_website_name_length);
                    fs.unlink('./public/' + path, function (err) {
                        console.log(err);
                    });
                }

                data.name = req.body.name;
                data.photo = myWebsiteData.my_website_name + 'images/' + req.file.filename;

                data.save().then((data) => {
                    res.json("Güncelleme İşlemi Başarılı.");
                }).catch((err) => {
                    res.json("Güncelleme İşleminde Hata Oluştu.");
                });
            });
        } else {
            MyTest.findByIdAndUpdate({ "_id": id }, req.body).then((newProject) => {
                res.json("Güncelleme İşlemi Başarılı.");
            }).catch((err) => {
                res.json("Güncelleme İşleminde Hata Oluştu.");
            });
        }

    }).catch((err) => {
        res.json(err);
    });

});

module.exports = router;

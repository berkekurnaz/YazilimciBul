var express = require('express');
var router = express.Router();

var fs = require('fs');
var myWebsiteData = require("../helper/myWebsiteData");

var creatorImageName = require("../helper/creatorImageName");
var myImageHelper = require("../helper/myImageHelper");
const multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/projectimages');
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
var Project = require("../models/Project");

/* Api Check Ekleme */
var apiCheck = require("../api_check/apiCheck");

/* Project Listeleme Islemi */
router.get('/', function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Project.find().then((projects) => {
            res.json(projects);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Project Listeleme Islemi */
router.get('/:id', function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Project.find({ developer_id: id }).then((projects) => {
            res.json(projects);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Project Bulma Islemi */
router.get('/detay/:id', function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Project.findById(id).then((education) => {
            res.json(education);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Project Ekleme Islemi */
router.post("/", upload.single('file'), function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

         /* Fotograf Null İse Default Resim Atama */
         var myFileName = "";
         if (!req.file) {
             myFileName = myWebsiteData.my_website_name + "images/defaultproject.png";
         } else {
             myFileName = myWebsiteData.my_website_name + 'projectimages/' + req.file.filename;
         }

        new Project({
            developer_id: req.body.developer_id,
            projectName: req.body.projectName,
            description: req.body.description,
            month: req.body.month,
            year: req.body.year,
            projectUrl: req.body.projectUrl,
            projectPhoto: myFileName,
        }).save().then(() => {
            res.json("Kaydetme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Kaydetme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Project Guncelleme Islemi */
router.put("/:id", upload.single('file'), function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        if (req.file) {
            Project.findById({ "_id": id }).then((data) => {

                if (!data.projectPhoto.includes("defaultproject")) {
                    var path = data.projectPhoto.substring(myWebsiteData.my_website_name_length);
                    fs.unlink('./public/' + path, function (err) {
                        console.log(err);
                    });
                }

                data.developer_id = req.body.developer_id;
                data.projectName = req.body.projectName;
                data.description = req.body.description;
                data.month = req.body.month;
                data.year = req.body.year;
                data.projectUrl = req.body.projectUrl;
                data.projectPhoto = myWebsiteData.my_website_name + 'projectimages/' + req.file.filename;

                data.save().then((data) => {
                    res.json("Güncelleme İşlemi Başarılı.");
                }).catch((err) => {
                    res.json("Güncelleme İşleminde Hata Oluştu.");
                });
            });
        } else {
            Project.findByIdAndUpdate({ "_id": id }, req.body).then((newProject) => {
                res.json("Güncelleme İşlemi Başarılı.");
            }).catch((err) => {
                res.json("Güncelleme İşleminde Hata Oluştu.");
            });
        }


    }).catch((err) => {
        res.json(err);
    });

});

/* Project Silme Islemi */
router.delete("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Project.findByIdAndRemove(id).then((data) => {
            if (data.projectPhoto.includes("defaultproject")) {
                res.json("Fotoğrafsız Silme İşlemi Başarılı.");
            } else {
                myImageHelper.deleteImage(data.projectPhoto).then((dataa) => {
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

module.exports = router;

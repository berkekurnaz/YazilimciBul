var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

var fs = require('fs');
var myWebsiteData = require("../helper/myWebsiteData");

var creatorImageName = require("../helper/creatorImageName");
var myImageHelper = require("../helper/myImageHelper");
const multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/developerimages');
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
var Developer = require("../models/Developer");

/* Api Check Ekleme */
var apiCheck = require("../api_check/apiCheck");

/* Developer Listeleme Islemi */
router.get('/', function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Developer.find().sort({ createdDate: -1 }).then((developers) => {
            res.json(developers);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Son Kaydolan 10 Developer Listeleme Islemi */
router.get('/last10', function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Developer.find().limit(10).sort({ createdDate: -1 }).then((developers) => {
            res.json(req.query.name);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Sehre Gore Developer Listeleme Islemi */
router.get('/city/:city_name', function (req, res, next) {

    var city = req.params.city_name;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Developer.find(
            {
                city: city,
            }).then((developers) => {
                res.json(developers);
            }).catch((err) => {
                res.json(err);
            });

    }).catch((err) => {
        res.json(err);
    });

});

/* Ise Gore Developer Listeleme Islemi */
router.get('/job/:job_name', function (req, res, next) {

    var job = req.params.job_name;
    var apikey = req.headers.apikey;

    var regexJob = new RegExp(job, 'i');

    Developer.find(
        {
            job: regexJob,
        }).then((developers) => {
            res.json(developers);
        }).catch((err) => {
            res.json(err);
        });

});

/* Ise Gore Developer Listeleme Islemi */
router.get('/query', function (req, res, next) {

    var name = req.query.name;
    var surname = req.query.surname;
    var category = req.query.category;
    var skills = req.query.skills;
    var city = req.query.city;

    var apikey = req.headers.apikey;

    var regexName = new RegExp(name, 'i');
    var regexSurname = new RegExp(surname, 'i');
    var regexCategory = new RegExp(category, 'i');
    var regexSkills = new RegExp(skills, 'i');
    var regexCity = new RegExp(city, 'i');

    apiCheck(apikey).then((data) => {

        Developer.find(
            {
                name: regexName,
                surname: regexSurname,
                developerAreas: regexCategory,
                developerSkills: regexSkills,
                city: regexCity,
            }).then((developers) => {
                res.json(developers);
            }).catch((err) => {
                res.json(err);
            });

    }).catch((err) => {
        res.json(err);
    });

});

/* Developer Bulma Islemi */
router.get('/:id', (req, res) => {

    var id = req.params.id;

    const promise = Developer.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup: {
                from: 'jobs',
                localField: '_id',
                foreignField: 'developer_id',
                as: 'jobs'
            }
        },
        {
            $lookup: {
                from: 'educations',
                localField: '_id',
                foreignField: 'developer_id',
                as: 'educations'
            }
        },
        {
            $lookup: {
                from: 'projects',
                localField: '_id',
                foreignField: 'developer_id',
                as: 'projects'
            }
        },
        {
            $lookup: {
                from: 'awards',
                localField: '_id',
                foreignField: 'developer_id',
                as: 'awards'
            }
        }
    ]);

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});


/* Developer Ekleme Islemi */
router.post("/", upload.single('file'), function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        /* Fotograf Null İse Default Resim Atama */
        var myFileName = "";
        if (!req.file) {
            myFileName = myWebsiteData.my_website_name + "developerimages/defaultdeveloper.png";
        } else {
            myFileName = myWebsiteData.my_website_name + 'developerimages/' + req.file.filename;
        }

        new Developer({
            name: req.body.name,
            surname: req.body.surname,
            job: req.body.job,
            description: req.body.description,
            photo: myFileName,

            mail: req.body.mail,
            phone: req.body.phone,

            country: req.body.country,
            city: req.body.city,
            address: req.body.address,

            mediaWebsite: req.body.mediaWebsite,
            mediaGithub: req.body.mediaGithub,
            mediaLinkedin: req.body.mediaLinkedin,
            mediaMedium: req.body.mediaMedium,

            developerSkills: req.body.developerSkills,
            developerAreas: req.body.developerAreas,

            username: req.body.username,
            password: req.body.password,
            isConfirm: req.body.isConfirm,

            lastLoginDate: req.body.lastLoginDate,
        }).save().then(() => {
            res.json("Kaydetme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Kaydetme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Developer Guncelleme Islemi */
router.put("/:id", upload.single('file'), function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        if (req.file) {
            Developer.findById({ "_id": id }).then((data) => {

                if (!data.photo.includes("defaultdeveloper")) {
                    var path = data.photo.substring(myWebsiteData.my_website_name_length);
                    fs.unlink('./public/' + path, function (err) {
                        console.log(err);
                    });
                }
                data.name = req.body.name;
                data.surname = req.body.surname;
                data.job = req.body.job;
                data.description = req.body.description;
                data.photo = myWebsiteData.my_website_name + 'developerimages/' + req.file.filename;

                data.mail = req.body.mail;
                data.phone = req.body.phone;

                data.country = req.body.country;
                data.city = req.body.city;
                data.address = req.body.address;

                data.mediaWebsite = req.body.mediaWebsite;
                data.mediaGithub = req.body.mediaGithub;
                data.mediaLinkedin = req.body.mediaLinkedin;
                data.mediaMedium = req.body.mediaMedium;

                data.developerSkills = req.body.developerSkills;
                data.developerAreas = req.body.developerAreas;

                data.username = req.body.username;
                data.password = req.body.password;
                data.isConfirm = req.body.isConfirm;

                data.lastLoginDate = req.body.lastLoginDate;


                data.save().then((data) => {
                    res.json("Güncelleme İşlemi Başarılı.");
                }).catch((err) => {
                    res.json("Güncelleme İşleminde Hata Oluştu.");
                });
            });
        } else {
            Developer.findByIdAndUpdate({ "_id": id }, req.body).then((newDeveloper) => {
                res.json("Güncelleme İşlemi Başarılı.");
            }).catch((err) => {
                res.json("Güncelleme İşleminde Hata Oluştu.");
            });
        }

    }).catch((err) => {
        res.json(err);
    });

});

/* Developer Silme Islemi */
router.delete("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Developer.findByIdAndRemove(id).then((data) => {
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

module.exports = router;

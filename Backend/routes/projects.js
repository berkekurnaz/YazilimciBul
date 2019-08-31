var express = require('express');
var router = express.Router();

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
router.post("/", function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        new Project({
            developer_id: req.body.developer_id,
            projectName: req.body.projectName,
            description: req.body.description,
            month: req.body.month,
            year: req.body.year,
            projectUrl: req.body.projectUrl,
            projectPhoto: req.body.projectPhoto,
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
router.put("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Project.findByIdAndUpdate({ "_id": id }, req.body).then((newProject) => {
            res.json("Güncelleme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Güncelleme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Project Silme Islemi */
router.delete("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Project.findByIdAndRemove(id).then(() => {
            res.json("Silme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Silme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

module.exports = router;

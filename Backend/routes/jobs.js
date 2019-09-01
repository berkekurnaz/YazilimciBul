var express = require('express');
var router = express.Router();

/* Modeli Ekleme */
var Job = require("../models/Job");

/* Api Check Ekleme */
var apiCheck = require("../api_check/apiCheck");

/* Job Listeleme Islemi */
router.get('/', function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Job.find().then((jobs) => {
            res.json(jobs);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Job Listeleme Islemi */
router.get('/:id', function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Job.find({developer_id: id}).then((job) => {
            res.json(job);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Job Bulma Islemi */
router.get('/detay/:id', function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Job.findById(id).then((job) => {
            res.json(job);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Job Ekleme Islemi */
router.post("/", function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        new Job({
            developer_id: req.body.developer_id,
            company: req.body.company,
            title: req.body.title,
            description: req.body.description,
            startYear: req.body.startYear,
            endYear: req.body.endYear,
        }).save().then(() => {
            res.json("Kaydetme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Kaydetme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Job Guncelleme Islemi */
router.put("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Job.findByIdAndUpdate({ "_id": id }, req.body).then((newEducation) => {
            res.json("Güncelleme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Güncelleme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Job Silme Islemi */
router.delete("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Job.findByIdAndRemove(id).then(() => {
            res.json("Silme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Silme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

module.exports = router;

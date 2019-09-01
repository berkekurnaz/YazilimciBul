var express = require('express');
var router = express.Router();

/* Modeli Ekleme */
var Award = require("../models/Award");

/* Api Check Ekleme */
var apiCheck = require("../api_check/apiCheck");

/* Award Listeleme Islemi */
router.get('/', function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Award.find().then((awards) => {
            res.json(awards);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Award Listeleme Islemi */
router.get('/:id', function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Award.find({developer_id: id}).then((awards) => {
            res.json(educations);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Award Bulma Islemi */
router.get('/detay/:id', function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Award.findById(id).then((award) => {
            res.json(award);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Award Ekleme Islemi */
router.post("/", function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        new Award({
            developer_id: req.body.developer_id,
            title: req.body.title,
            description: req.body.description,
            year: req.body.year,
            awardUrl: req.body.awardUrl,
        }).save().then(() => {
            res.json("Kaydetme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Kaydetme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Award Guncelleme Islemi */
router.put("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Award.findByIdAndUpdate({ "_id": id }, req.body).then((newAward) => {
            res.json("Güncelleme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Güncelleme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Award Silme Islemi */
router.delete("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Award.findByIdAndRemove(id).then(() => {
            res.json("Silme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Silme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

module.exports = router;

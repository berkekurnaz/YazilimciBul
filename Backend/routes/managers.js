var express = require('express');
var router = express.Router();

/* Modeli Ekleme */
var Manager = require("../models/Manager");

/* Api Check Ekleme */
var apiCheck = require("../api_check/apiCheck");

/* Manager Listeleme Islemi */
router.get('/', function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Manager.find().sort({createdDate: -1}).then((managers) => {
            res.json(managers);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });


});

/* Manager Bulma Islemi */
router.get('/:id', function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Manager.findById(id).then((manager) => {
            res.json(manager);
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Manager Ekleme Islemi */
router.post("/", function (req, res, next) {

    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        new Manager({
            name: req.body.name,
            surname: req.body.surname,
            description: req.body.description,

            mail: req.body.mail,
            phone: req.body.phone,

            username: req.body.username,
            password: req.body.password,

            apikey: req.body.apikey,
        }).save().then(() => {
            res.json("Kaydetme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Kaydetme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Manager Guncelleme Islemi */
router.put("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Manager.findByIdAndUpdate({ "_id": id }, req.body).then((newManager) => {
            res.json("Güncelleme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Güncelleme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Manager Silme Islemi */
router.delete("/:id", function (req, res, next) {

    var id = req.params.id;
    var apikey = req.headers.apikey;

    apiCheck(apikey).then((data) => {

        Manager.findByIdAndRemove(id).then(() => {
            res.json("Silme İşlemi Başarılı.");
        }).catch((err) => {
            res.json("Silme İşleminde Hata Oluştu.");
        });

    }).catch((err) => {
        res.json(err);
    });

});

/* Manager Ekleme Islemi */
router.post("/login", function (req, res, next) {

    var apikey = req.headers.apikey;

    username = req.body.username;
    password = req.body.password;

    apiCheck(apikey).then((data) => {

        Manager.find({username: username}).then((manager) => {
            if(manager.length == 0){
                res.json("Sistemde Bu Kullanıcı Adında Birisi Yok.");
            }else{
                if(manager[0].password === password){
                    res.json(manager)
                }else{
                    res.json("Yanlış Şifre Girdiniz.");
                }
            }
        }).catch((err) => {
            res.json(err);
        });

    }).catch((err) => {
        res.json(err);
    });

});

module.exports = router;

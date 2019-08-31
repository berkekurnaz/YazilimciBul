var express = require('express');
var router = express.Router();

/* Modeli Ekleme */
var Manager = require("../models/Manager");

/* Manager Listeleme Islemi */
router.get('/', function(req, res, next) {
  
    Manager.find().then((managers) => {
      res.json(managers);
    }).catch((err) => {
      res.json(err);
    });
  
});

/* Manager Bulma Islemi */
router.get('/:id', function(req, res, next) {
  
    var id = req.params.id;
    Manager.findById(id).then((manager) => {
      res.json(manager);
    }).catch((err) => {
      res.json(err);
    });
  
});

/* Manager Ekleme Islemi */
router.post("/", function(req, res, next){
 
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
  
});

/* Manager Guncelleme Islemi */
router.put("/:id", function(req, res, next){
  
    var id = req.params.id;

    Manager.findByIdAndUpdate({"_id": id}, req.body).then((newManager) => {
        res.json("Güncelleme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Güncelleme İşleminde Hata Oluştu.");
    });
  
});

/* Manager Silme Islemi */
router.delete("/:id", function(req, res, next){
  
    var id = req.params.id;
    Manager.findByIdAndRemove(id).then(() => {
        res.json("Silme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Silme İşleminde Hata Oluştu.");
    });
  
});

module.exports = router;

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
        cb(null, './public/userimages');
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
var User = require("../models/User");

/* Api Check Ekleme */
var apiCheck = require("../api_check/apiCheck");


/* User Listeleme Islemi */
router.get('/', function (req, res, next) {

  var apikey = req.headers.apikey;

  apiCheck(apikey).then((data) => {

      User.find().sort({ createdDate: -1 }).then((users) => {
          res.json(users);
      }).catch((err) => {
          res.json(err);
      });

  }).catch((err) => {
      res.json(err);
  });

});

/* User Bulma Islemi */
router.get('/detay/:id', function (req, res, next) {

  var id = req.params.id;
  var apikey = req.headers.apikey;

  apiCheck(apikey).then((data) => {

      User.findById(id).then((user) => {
          res.json(user);
      }).catch((err) => {
          res.json(err);
      });

  }).catch((err) => {
      res.json(err);
  });

});

/* User Login Islemi */
router.post('/login', function (req, res, next) {

  var bodyUsername = req.body.username;
  var bodyPassword = req.body.password;
  var apikey = req.headers.apikey;

  apiCheck(apikey).then((data) => {

      User.find({username: bodyUsername, password: bodyPassword}).then((user) => {
          res.json(user);
      }).catch((err) => {
          res.json(err);
      });

  }).catch((err) => {
      res.json(err);
  });

});

/* User Ekleme Islemi */
router.post("/", upload.single('file'), function (req, res, next) {

  var apikey = req.headers.apikey;

  apiCheck(apikey).then((data) => {

      /* Fotograf Null İse Default Resim Atama */
      var myFileName = "";
      if (!req.file) {
          myFileName = myWebsiteData.my_website_name + "userimages/defaultuser.png";
      } else {
          myFileName = myWebsiteData.my_website_name + 'userimages/' + req.file.filename;
      }

      new User({
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

/* User Guncelleme Islemi */
router.put("/:id", upload.single('file'), function (req, res, next) {

  var id = req.params.id;
  var apikey = req.headers.apikey;

  apiCheck(apikey).then((data) => {

      if (req.file) {
          User.findById({ "_id": id }).then((data) => {

              if (!data.photo.includes("defaultuser")) {
                  var path = data.photo.substring(myWebsiteData.my_website_name_length);
                  fs.unlink('./public/' + path, function (err) {
                      console.log(err);
                  });
              }
              data.name = req.body.name;
              data.surname = req.body.surname;
              data.job = req.body.job;
              data.description = req.body.description;
              data.photo = myWebsiteData.my_website_name + 'userimages/' + req.file.filename;

              data.mail = req.body.mail;
              data.phone = req.body.phone;

              data.country = req.body.country;
              data.city = req.body.city;
              data.address = req.body.address;

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
          User.findByIdAndUpdate({ "_id": id }, req.body).then((newDeveloper) => {
              res.json("Güncelleme İşlemi Başarılı.");
          }).catch((err) => {
              res.json("Güncelleme İşleminde Hata Oluştu.");
          });
      }

  }).catch((err) => {
      res.json(err);
  });

});

/* User Silme Islemi */
router.delete("/:id", function (req, res, next) {

  var id = req.params.id;
  var apikey = req.headers.apikey;

  apiCheck(apikey).then((data) => {

      User.findByIdAndRemove(id).then((data) => {
          if (data.photo.includes("defaultuser")) {
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

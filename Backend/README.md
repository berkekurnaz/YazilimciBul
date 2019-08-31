# Yazilimci Bul Backend 
YazılımcıBul Projesinin Backend Kodları Bu Depoda Bulunmaktadır.

## Api Dökümanları
Burada Apiye Ait Dökümanlar Bulunmaktadır.

### Developers
Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/developers | `GET` | Empty | Bütün Yazılımcıları Getirmek
/developers/:id | `GET` | Empty | Tek Bir Yazılımcı Getirmek
/developers| `POST` | Developer Model | Yeni Yazılımcı Oluşturmak
/developers/:id | `PUT` | Developer Model | Yazılımcı Güncellemek
/developers/:id | `DELETE` | Developer Model | Yazılımcı Silmek

### Managers
Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/managers | `GET` | Empty | Bütün Yöneticileri Getirmek
/managers/:id | `GET` | Empty | Tek Bir Yönetici Getirmek
/managers| `POST` | Manager Model | Yeni Yönetici Oluşturmak
/managers/:id | `PUT` | Manager Model | Yönetici Güncellemek
/managers/:id | `DELETE` | Manager Model | Yönetici Silmek
# Yazilimci Bul Backend 
YazılımcıBul Projesinin Backend Kodları Bu Depoda Bulunmaktadır.

## Api Dökümanları
Burada Apiye Ait Dökümanlar Bulunmaktadır. <br/>
Bütün Endpoint'ler İçin `Headers` altında `apikey` tanımlaması yapılmak zorundadır. <br/>

### Developers
**Developer Model:** name, surname, job, description, photo, mail, phone, country, city, address, username, password, isConfirm, createdDate, lastLoginDate. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/developers | `GET` | Empty | Bütün Yazılımcıları Getirmek
/developers/:id | `GET` | Empty | Tek Bir Yazılımcı Getirmek
/developers| `POST` | Developer Model | Yeni Yazılımcı Oluşturmak
/developers/:id | `PUT` | Developer Model | Yazılımcı Güncellemek
/developers/:id | `DELETE` | Developer Model | Yazılımcı Silmek

### Managers
**Manager Model:** name, surname, description, username, password, mail, phone, apikey. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/managers | `GET` | Empty | Bütün Yöneticileri Getirmek
/managers/:id | `GET` | Empty | Tek Bir Yönetici Getirmek
/managers| `POST` | Manager Model | Yeni Yönetici Oluşturmak
/managers/:id | `PUT` | Manager Model | Yönetici Güncellemek
/managers/:id | `DELETE` | Manager Model | Yönetici Silmek

### Educations
**Education Model:** developer_id, schoolName, department, degree, startYear, endYear, description. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/educations | `GET` | Empty | Bütün Eğitimleri Getirmek
/educations/:id | `GET` | Empty | Belirli Bir Yazılımcının Eğitimlerini Getirmek
/educations/detay/:id | `GET` | Empty | Tek Bir Eğitimi Getirmek
/educations| `POST` | Education Model | Yeni Eğitim Oluşturmak
/educations/:id | `PUT` | Education Model | Eğitim Güncellemek
/educations/:id | `DELETE` | Education Model | Eğitim Silmek

### Projects
**Project Model:** developer_id, projectName, description, month, year, projectUrl, projectPhoto. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/projects | `GET` | Empty | Bütün Projeleri Getirmek
/projects/:id | `GET` | Empty | Belirli Bir Yazılımcının Projelerini Getirmek
/projects/detay/:id | `GET` | Empty | Tek Bir Proje Getirmek
/projects| `POST` | Project Model | Yeni Proje Oluşturmak
/projects/:id | `PUT` | Project Model | Proje Güncellemek
/projects/:id | `DELETE` | Project Model | Proje Silmek

### Jobs
**Job Model:** developer_id, company, title, description, startYear, endYear. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/jobs | `GET` | Empty | Bütün İşleri Getirmek
/jobs/:id | `GET` | Empty | Belirli Bir Yazılımcının İşlerini Getirmek
/jobs/detay/:id | `GET` | Empty | Tek Bir İş Getirmek
/jobs| `POST` | Job Model | Yeni İş Oluşturmak
/jobs/:id | `PUT` | Job Model | İş Güncellemek
/jobs/:id | `DELETE` | Job Model | İş Silmek
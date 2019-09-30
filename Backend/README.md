# Yazilimci Bul Backend 
YazılımcıBul Projesinin Backend Kodları Bu Depoda Bulunmaktadır.

## Api Dökümanları
Burada Apiye Ait Dökümanlar Bulunmaktadır. <br/>
Bütün Endpoint'ler İçin `Headers` altında `apikey` tanımlaması yapılmak zorundadır. <br/>

### Developers
**Developer Model:** name, surname, job, description, photo, mail, phone, country, city, address, mediaWebsite, mediaGithub, mediaLinkedin, mediaMedium, developerSkills, developerAreas,username, password, isConfirm, createdDate, lastLoginDate. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/developers | `GET` | Empty | Bütün Yazılımcıları Getirmek
/developers/query | `GET` | name,surname,city,category,skills | Koşullu Yazılımcı Getirmek (Query İle)
/developers/last10 | `GET` | Empty | Son Kaydolan 10 Yazılımcıyı Getirmek
/developers/:id | `GET` | Empty | Tek Bir Yazılımcı Getirmek
/developers/city/:city_name | `GET` | Empty | Sehre Gore Yazılımcıları Getirmek
/developers/job/:job_name | `GET` | Empty | Ise Gore Yazılımcıları Getirmek
/developers| `POST` | Developer Model | Yeni Yazılımcı Oluşturmak
/developers/login | `POST` | username,password | Yazılımcı Giriş Yapmak
/developers/:id | `PUT` | Developer Model | Yazılımcı Güncellemek
/developers/:id | `DELETE` | Empty | Yazılımcı Silmek

### Managers
**Manager Model:** name, surname, description, username, password, mail, phone, apikey. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/managers | `GET` | Empty | Bütün Yöneticileri Getirmek
/managers/:id | `GET` | Empty | Tek Bir Yönetici Getirmek
/managers| `POST` | Manager Model | Yeni Yönetici Oluşturmak
/managers/:id | `PUT` | Manager Model | Yönetici Güncellemek
/managers/:id | `DELETE` | Empty | Yönetici Silmek

### Educations
**Education Model:** developer_id, schoolName, department, degree, startYear, endYear, description. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/educations | `GET` | Empty | Bütün Eğitimleri Getirmek
/educations/:id | `GET` | Empty | Belirli Bir Yazılımcının Eğitimlerini Getirmek
/educations/detay/:id | `GET` | Empty | Tek Bir Eğitimi Getirmek
/educations| `POST` | Education Model | Yeni Eğitim Oluşturmak
/educations/:id | `PUT` | Education Model | Eğitim Güncellemek
/educations/:id | `DELETE` | Empty | Eğitim Silmek

### Projects
**Project Model:** developer_id, projectName, description, month, year, projectUrl, projectPhoto. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/projects | `GET` | Empty | Bütün Projeleri Getirmek
/projects/:id | `GET` | Empty | Belirli Bir Yazılımcının Projelerini Getirmek
/projects/detay/:id | `GET` | Empty | Tek Bir Proje Getirmek
/projects| `POST` | Project Model | Yeni Proje Oluşturmak
/projects/:id | `PUT` | Project Model | Proje Güncellemek
/projects/:id | `DELETE` | Empty | Proje Silmek

### Jobs
**Job Model:** developer_id, company, title, description, startYear, endYear. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/jobs | `GET` | Empty | Bütün İşleri Getirmek
/jobs/:id | `GET` | Empty | Belirli Bir Yazılımcının İşlerini Getirmek
/jobs/detay/:id | `GET` | Empty | Tek Bir İş Getirmek
/jobs| `POST` | Job Model | Yeni İş Oluşturmak
/jobs/:id | `PUT` | Job Model | İş Güncellemek
/jobs/:id | `DELETE` | Empty | İş Silmek

### Awards
**Award Model:** developer_id, title, description, year, awardUrl. <br/>

Route| Http Verb | Post Body | Açıklama
:--- | :---: | :---: | :---:
/awards | `GET` | Empty | Bütün Ödülleri Getirmek
/awards/:id | `GET` | Empty | Belirli Bir Yazılımcının Ödüllerini Getirmek
/awards/detay/:id | `GET` | Empty | Tek Bir Ödül Getirmek
/awards| `POST` | Award Model | Yeni Ödül Oluşturmak
/awards/:id | `PUT` | Award Model | Ödül Güncellemek
/awards/:id | `DELETE` | Empty | Ödül Silmek
import React, { Component } from 'react'
import Typed from 'typed.js';

import heroimage from "../../styles/images/hero_1.jpg";
import image1 from "../../styles/images/img_1.jpg";

class Explore extends Component {

    render() {
        return (
            <div>
                <div class="site-blocks-cover inner-page-cover overlay" style={{ backgroundImage: `url(${heroimage})` }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div class="container">
                        <div class="row align-items-center justify-content-center text-center">

                            <div class="col-md-10">


                                <div class="row justify-content-center">
                                    <div class="col-md-8 text-center">
                                        <h1 data-aos="fade-up">Keşfet</h1>
                                        <p class="mb-0" data-aos="fade-up" data-aos-delay="100">İhtiyacına Göre Yazılımcını Hızlıca Keşfet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="site-section " data-aos="fade">
                    <div class="container">
                    
                    <div class="row mb-12">
                            <div class="col-md-6" >
                                <div class="card bg-dark text-white" style={{ border: "3px solid black", marginBottom: "10px" }}>
                                    <img style={{ filter: "blur(3px)", backgroundSize: "cover", height: "250px" }} src="https://barisdogansutcu.com/wp-content/uploads/2019/07/frontend-developer-ve-ozellikleri-1200x675.jpg" class="card-img" alt="..." />
                                    <div class="card-img-overlay text-center" style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
                                        <h5 style={{ fontWeight: "bold" }} class="card-title" style={{ backgroundColor: "#5CACE2", border: "1px solid black"}}>Full Stack Web Developer</h5>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Fikrinizi Uçtan Uca Geliştirebilecek Web Developer'ler Bu Kategori Altında Seni Bekliyorlar.</p>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Bu Kategoride Toplam 52 Yazılımcı</p>
                                        <a href="" className="btn btn-info" style={{ fontWeight: "bold" }}>Full Stack Web Developer Keşfet</a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" >
                                <div class="card bg-dark text-white" style={{ border: "3px solid black", marginBottom: "10px" }}>
                                    <img style={{ filter: "blur(5px)", objectFit: "cover", height: "250px" }} src="https://myventurepad.com/wp-content/uploads/2018/04/mobile-app.jpg" class="card-img" alt="..." />
                                    <div class="card-img-overlay text-center" style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
                                        <h5 style={{ fontWeight: "bold" }} class="card-title" style={{ backgroundColor: "#5CACE2", border: "1px solid black"}}>Mobil Uygulama Geliştiricisi</h5>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Kullanıcılarınız İçin Eşşiz Bir Önyüz Geliştirmesi Yapacak Yazılımcıyı Bu Kategori Altında Bulabilirsiniz.</p>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Bu Kategoride Toplam 52 Yazılımcı</p>
                                        <a href="" className="btn btn-info" style={{ fontWeight: "bold" }}>Frontend Developer Keşfet</a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-12">
                            <div class="col-md-6" >
                                <div class="card bg-dark text-white" style={{ border: "3px solid black", marginBottom: "10px" }}>
                                    <img style={{ filter: "blur(3px)", backgroundSize: "cover", height: "250px" }} src="https://d33wubrfki0l68.cloudfront.net/d79ba4b37450a5f20ee971d19354df81fe1b227a/a330b/en/blog/uploads/experienced-web-developer-doing-backend-development.jpg" class="card-img" alt="..." />
                                    <div class="card-img-overlay text-center" style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
                                        <h5 style={{ fontWeight: "bold" }} class="card-title" style={{ backgroundColor: "#5CACE2", border: "1px solid black"}}>Backend Developer</h5>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Projelerinizin Arkaplanında Olacak Bütün İşleri Yapabilecek Birilerini Bu Kategoride Bulun.</p>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Bu Kategoride Toplam 52 Yazılımcı</p>
                                        <a href="" className="btn btn-info" style={{ fontWeight: "bold" }}>Backend Developer Keşfet</a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" >
                                <div class="card bg-dark text-white" style={{ border: "3px solid black", marginBottom: "10px" }}>
                                    <img style={{ filter: "blur(5px)", objectFit: "cover", height: "250px" }} src="https://www.archer.ie/wp-content/uploads/2019/07/fb-share-frontend-developer.png" class="card-img" alt="..." />
                                    <div class="card-img-overlay text-center" style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
                                        <h5 style={{ fontWeight: "bold" }} class="card-title" style={{ backgroundColor: "#5CACE2", border: "1px solid black"}}>Frontend Developer</h5>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Kullanıcılarınız İçin Eşşiz Bir Önyüz Geliştirmesi Yapacak Yazılımcıyı Bu Kategori Altında Bulabilirsiniz.</p>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Bu Kategoride Toplam 52 Yazılımcı</p>
                                        <a href="" className="btn btn-info" style={{ fontWeight: "bold" }}>Frontend Developer Keşfet</a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-12">
                            <div class="col-md-6" >
                                <div class="card bg-dark text-white" style={{ border: "3px solid black", marginBottom: "10px" }}>
                                    <img style={{ filter: "blur(3px)", backgroundSize: "cover", height: "250px" }} src="https://s3.amazonaws.com/ae-lane-report/wp-content/uploads/2018/09/19131146/vg-design-1024x576.jpg" class="card-img" alt="..." />
                                    <div class="card-img-overlay text-center" style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
                                        <h5 style={{ fontWeight: "bold" }} class="card-title" style={{ backgroundColor: "#5CACE2", border: "1px solid black"}}>Oyun Geliştiricisi</h5>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Projelerinizin Arkaplanında Olacak Bütün İşleri Yapabilecek Birilerini Bu Kategoride Bulun.</p>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Bu Kategoride Toplam 52 Yazılımcı</p>
                                        <a href="" className="btn btn-info" style={{ fontWeight: "bold" }}>Backend Developer Keşfet</a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" >
                                <div class="card bg-dark text-white" style={{ border: "3px solid black", marginBottom: "10px" }}>
                                    <img style={{ filter: "blur(5px)", objectFit: "cover", height: "250px" }} src="https://www.archer.ie/wp-content/uploads/2019/07/fb-share-frontend-developer.png" class="card-img" alt="..." />
                                    <div class="card-img-overlay text-center" style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
                                        <h5 style={{ fontWeight: "bold" }} class="card-title" style={{ backgroundColor: "#5CACE2", border: "1px solid black"}}>Masaüstü Uygulama Geliştiricisi</h5>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Kullanıcılarınız İçin Eşşiz Bir Önyüz Geliştirmesi Yapacak Yazılımcıyı Bu Kategori Altında Bulabilirsiniz.</p>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Bu Kategoride Toplam 52 Yazılımcı</p>
                                        <a href="" className="btn btn-info" style={{ fontWeight: "bold" }}>Frontend Developer Keşfet</a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-12">
                            <div class="col-md-6" >
                                <div class="card bg-dark text-white" style={{ border: "3px solid black", marginBottom: "10px" }}>
                                    <img style={{ filter: "blur(3px)", backgroundSize: "cover", height: "250px" }} src="https://d33wubrfki0l68.cloudfront.net/d79ba4b37450a5f20ee971d19354df81fe1b227a/a330b/en/blog/uploads/experienced-web-developer-doing-backend-development.jpg" class="card-img" alt="..." />
                                    <div class="card-img-overlay text-center" style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
                                        <h5 style={{ fontWeight: "bold" }} class="card-title" style={{ backgroundColor: "#5CACE2", border: "1px solid black"}}>Veritabanı Geliştiricisi</h5>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Projelerinizin Arkaplanında Olacak Bütün İşleri Yapabilecek Birilerini Bu Kategoride Bulun.</p>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Bu Kategoride Toplam 52 Yazılımcı</p>
                                        <a href="" className="btn btn-info" style={{ fontWeight: "bold" }}>Backend Developer Keşfet</a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6" >
                                <div class="card bg-dark text-white" style={{ border: "3px solid black", marginBottom: "10px" }}>
                                    <img style={{ filter: "blur(5px)", objectFit: "cover", height: "250px" }} src="https://www.archer.ie/wp-content/uploads/2019/07/fb-share-frontend-developer.png" class="card-img" alt="..." />
                                    <div class="card-img-overlay text-center" style={{ textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
                                        <h5 style={{ fontWeight: "bold" }} class="card-title" style={{ backgroundColor: "#5CACE2", border: "1px solid black"}}>Gömülü Sistem Geliştiricisi</h5>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Kullanıcılarınız İçin Eşşiz Bir Önyüz Geliştirmesi Yapacak Yazılımcıyı Bu Kategori Altında Bulabilirsiniz.</p>
                                        <p style={{ fontWeight: "bold" }} class="card-text">Bu Kategoride Toplam 52 Yazılımcı</p>
                                        <a href="" className="btn btn-info" style={{ fontWeight: "bold" }}>Frontend Developer Keşfet</a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Explore;
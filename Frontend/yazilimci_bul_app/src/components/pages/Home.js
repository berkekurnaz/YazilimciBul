import React, { Component } from 'react'
import Typed from 'typed.js';

import heroimage from "../../styles/images/hero_1.jpg";
import image1 from "../../styles/images/img_1.jpg";

class Home extends Component {

    componentDidMount() {
        var typed = new Typed('.typed-words', {
            strings: ["Hızlı", " Güvenli", " Kaliteli"],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 4000,
            startDelay: 1000,
            loop: true,
            showCursor: true
        });
    }

    render() {
        return (
            <div>
                <div class="site-blocks-cover overlay" style={{ backgroundImage: `url(${heroimage})` }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div class="container">
                        <div class="row align-items-center justify-content-center text-center">

                            <div class="col-md-10">


                                <div class="row justify-content-center mb-4">
                                    <div class="col-md-8 text-center">
                                        <h1 data-aos="fade-up">Yazılımcı Bul <span class="typed-words"></span></h1>
                                        <p data-aos="fade-up" data-aos-delay="100">İhtiyacın Olan Proje İçin İhtiyacın Olan Yazılımcı Burada</p>
                                    </div>
                                </div>

                                <div class="form-search-wrap p-2" data-aos="fade-up" data-aos-delay="200">
                                    <form method="post">
                                        <div class="row align-items-center">
                                            <div class="col-lg-12 col-xl-4 no-sm-border border-right">
                                                <input type="text" class="form-control" placeholder="Yazılımcı Adı, Kullandığı Teknolojiler" />
                                            </div>
                                            <div class="col-lg-12 col-xl-3 no-sm-border border-right">
                                                <div class="select-wrap">
                                                    <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                                                    <select class="form-control" name="" id="">
                                                        <option value="">Bütün Şehirler</option>
                                                        <option value="">Appartment</option>
                                                        <option value="">Restaurant</option>
                                                        <option value="">Eat &amp; Drink</option>
                                                        <option value="">Events</option>
                                                        <option value="">Fitness</option>
                                                        <option value="">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-xl-3">
                                                <div class="select-wrap">
                                                    <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                                                    <select class="form-control" name="" id="">
                                                        <option value="">Bütün Kategoriler</option>
                                                        <option value="">Appartment</option>
                                                        <option value="">Restaurant</option>
                                                        <option value="">Eat &amp; Drink</option>
                                                        <option value="">Events</option>
                                                        <option value="">Fitness</option>
                                                        <option value="">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-xl-2 ml-auto text-right">
                                                <input type="submit" class="btn btn-primary" value="Ara" />
                                            </div>

                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="site-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <img src={image1} alt="Image" class="img-fluid rounded" />
                            </div>
                            <div class="col-md-5 ml-auto">
                                <h2 class="text-primary mb-3">Yazılımcı Bul Nedir ?</h2>
                                <p>
                                    Yazılımcı Bul Bir Fikri Olup Bu Fikri Gerçek Hayata Uygulayabilecek Yazılımcılar Arayan Kişilerle Yazılımcılar Arasında İletişim Kurmayı Amaçlayan Bir Platformdur.
                                </p>
                                <p class="mb-4">
                                    Yazılımcı Bul Platformu İle Projeleriniz İçin İhtiyaç Duyduğunuz Yazılımcıları Kolaylıkla Bulabilirsiniz.
                                    Yazılımcı İseniz Sisteme Kayıt Olarak Sizinle İletişime Geçilmesini Sağlayabilirsiniz.
                                </p>

                                <ul class="ul-check list-unstyled success">
                                    <li>Tamamen Ücretsizdir</li>
                                    <li>Size Uygun Öneriler Sunar</li>
                                    <li>Kolay Arayüze Sahiptir</li>
                                    <li>Açık Kaynak Kodludur</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="site-section">
                    <div class="container">
                        <div class="row justify-content-center mb-5">
                            <div class="col-md-7 text-center border-primary">
                                <h2 class="font-weight-light text-primary">Popüler Kategoriler</h2>
                                <p class="color-black-opacity-5">İhtiyacınız Olan Kategoriye Ait Yazılımcıları Listeleyin</p>
                            </div>
                        </div>

                        <div class="row align-items-stretch">
                            <div class="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                                <a href="#" class="popular-category h-100">
                                    <span class="icon"><span class="flaticon-house"></span></span>
                                    <span class="caption mb-2 d-block">Mobil Uygulama Geliştirme</span>
                                    <span class="number">3,921</span>
                                </a>
                            </div>
                            <div class="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                                <a href="#" class="popular-category h-100">
                                    <span class="icon"><span class="flaticon-guitar"></span></span>
                                    <span class="caption mb-2 d-block">İnternet Sitesi Geliştirme</span>
                                    <span class="number">398</span>
                                </a>
                            </div>
                            <div class="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                                <a href="#" class="popular-category h-100">
                                    <span class="icon"><span class="flaticon-gym"></span></span>
                                    <span class="caption mb-2 d-block">Oyun Geliştirme</span>
                                    <span class="number">1,229</span>
                                </a>
                            </div>
                            <div class="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                                <a href="#" class="popular-category h-100">
                                    <span class="icon"><span class="flaticon-shopping-bag"></span></span>
                                    <span class="caption mb-2 d-block">Veritabanı Geliştirme</span>
                                    <span class="number">32,891</span>
                                </a>
                            </div>
                            <div class="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                                <a href="#" class="popular-category h-100">
                                    <span class="icon"><span class="flaticon-mexican-taco"></span></span>
                                    <span class="caption mb-2 d-block">Gömülü Sistem Geliştirme</span>
                                    <span class="number">29,221</span>
                                </a>
                            </div>
                            <div class="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
                                <a href="#" class="popular-category h-100">
                                    <span class="icon"><span class="flaticon-cocktail"></span></span>
                                    <span class="caption mb-2 d-block">Masaüstü Yazılım Geliştirme</span>
                                    <span class="number">219</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="site-section bg-light">
                    <div class="container">

                        <div class="row justify-content-center mb-5">
                            <div class="col-md-7 text-center border-primary">
                                <h2 class="font-weight-light text-primary">Yorumlar</h2>
                            </div>
                        </div>

                        <div class="slide-one-item home-slider owl-carousel">
                            <div>
                                <div class="testimonial">
                                    <figure class="mb-4">
                                        <img src="images/person_3.jpg" alt="Image" class="img-fluid mb-3" />
                                        <p>Berke Kurnaz</p>
                                    </figure>
                                    <blockquote>
                                        <p>&ldquo;Yazılımcı Bul İle Şirketimiz İçin Gerekli İnternet Sitesini Geliştirebilecek Yazılımcıyı Bulduk.&rdquo;</p>
                                    </blockquote>
                                </div>
                            </div>
                            <div>
                                <div class="testimonial">
                                    <figure class="mb-4">
                                        <img src="images/person_2.jpg" alt="Image" class="img-fluid mb-3" />
                                        <p>Christine Aguilar</p>
                                    </figure>
                                    <blockquote>
                                        <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                                    </blockquote>
                                </div>
                            </div>

                            <div>
                                <div class="testimonial">
                                    <figure class="mb-4">
                                        <img src="images/person_4.jpg" alt="Image" class="img-fluid mb-3" />
                                        <p>Robert Spears</p>
                                    </figure>
                                    <blockquote>
                                        <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                                    </blockquote>
                                </div>
                            </div>

                            <div>
                                <div class="testimonial">
                                    <figure class="mb-4">
                                        <img src="images/person_5.jpg" alt="Image" class="img-fluid mb-3" />
                                        <p>Bruce Rogers</p>
                                    </figure>
                                    <blockquote>
                                        <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                                    </blockquote>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="py-5 bg-primary">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-md-12">
                                <h2 class="mb-2 text-white">Haydi Başlayalım. Hemen Ücretsiz Bir Hesap Oluştur.</h2>
                                <p class="mb-4 lead text-white-opacity-05">Sisteme Üye Ol, Yazılımcını Bul Ve Hemen İletişime Geç.</p>
                                <p class="mb-0"><a href="booking.html" class="btn btn-outline-white text-white btn-md font-weight-bold">Üye Ol</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-5 bg-primary">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-md-12">
                                <h2 class="mb-2 text-white">Yazılımcı Mısın? Hemen Ücretsiz Sisteme Kayıt Ol.</h2>
                                <p class="mb-4 lead text-white-opacity-05">Yazılımcı Olarak Üye Ol Ve Profilin Listelensin.</p>
                                <p class="mb-0"><a href="booking.html" class="btn btn-outline-white text-white btn-md font-weight-bold">Yazılımcı Olarak Üye Ol</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;
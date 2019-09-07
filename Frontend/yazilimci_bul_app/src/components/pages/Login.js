import React, { Component } from 'react'
import Typed from 'typed.js';

import heroimage from "../../styles/images/hero_1.jpg";
import image1 from "../../styles/images/img_1.jpg";

class Login extends Component {

    render() {
        return (
            <div>


                <div class="site-section bg-light">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-6 mb-5" data-aos="fade">

                                <form action="#" class="p-5 bg-white">
                                <h3 className="text-center">Üye Girişi</h3>
                                <hr/>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label class="text-black" for="email">Kullanıcı Adı</label>
                                            <input type="email" id="email" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label class="text-black" for="email">Şifre</label>
                                            <input type="email" id="email" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                        <a href="">Şifremi Unuttum ?</a>
                                        </div>
                                    </div>
                                    
                                    <div class="row form-group">
                                        <div class="col-md-12 text-center">
                                            <input type="submit" value="Üye Girişi Yap" class="btn btn-primary py-2 px-4 text-white" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12 text-center">
                                        <a href="">Hemen Ücretsiz Üye Ol</a>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div class="col-md-6 mb-5" data-aos="fade">

                                <form action="#" class="p-5 bg-white">
                                <h3 className="text-center">Yazılımcı Girişi</h3>
                                <hr/>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label class="text-black" for="email">Kullanıcı Adı</label>
                                            <input type="email" id="email" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label class="text-black" for="email">Şifre</label>
                                            <input type="email" id="email" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12">
                                        <a href="">Şifremi Unuttum ?</a>
                                        </div>
                                    </div>
                                    
                                    <div class="row form-group">
                                        <div class="col-md-12 text-center">
                                            <input type="submit" value="Yazılımcı Girişi Yap" class="btn btn-primary py-2 px-4 text-white" />
                                        </div>
                                    </div>

                                    <div class="row form-group">
                                        <div class="col-md-12 text-center">
                                        <a href="">Hemen Ücretsiz Üye Ol</a>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;
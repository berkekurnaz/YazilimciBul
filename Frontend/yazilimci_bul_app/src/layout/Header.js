import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

export default class Header extends Component {

  render() {
    return (
      <div>
        <div class="site-mobile-menu">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>

        <header class="site-navbar py-2 bg-white" role="banner">

          <div class="container">
            <div class="row align-items-center">

              <div class="col-11 col-xl-3">
                <h1 class="mb-0 site-logo"><a href="index.html" class="text-black h2 mb-0">Yazılımcı Bul</a></h1>
              </div>
              <div class="col-12 col-md-9 d-none d-xl-block">
                <nav class="site-navigation position-relative text-right" role="navigation">

                  <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li><a href="/"><span>Anasayfa</span></a></li>
                    <li ><a href="/explore"><span>Keşfet</span></a></li>
                    <li><a href="/developers"><span>Yazılımcılar</span></a></li>
                    <li class="has-children">
                      <a href="about.html"><span>Nedir</span></a>
                      <ul class="dropdown">
                        <li><a href="#">Nedir</a></li>
                        <li><a href="#">Biz Kimiz</a></li>
                        <li><a href="#">Kaynak Kodlar</a></li>
                        <li><a href="#">S.S.S</a></li>
                      </ul>
                    </li>
                    <li><a href="blog.html"><span>Blog</span></a></li>
                    <li><a href="/login"><span>Giriş Yap</span></a></li>
                  </ul>
                </nav>
              </div>


              <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: "relative",top: "3px"}}>
                <a href="#" class="site-menu-toggle js-menu-toggle text-black">
                  <span class="icon-menu h3"></span>
                </a>
              </div>

            </div>

          </div>


        </header>
      </div>
    )
  }
}
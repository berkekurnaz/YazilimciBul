import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    fetchDevelopers,
} from '../../actions/developersAction';
import DevelopersList from '../DevelopersList';

class Developers extends Component {

    static propTypes = {
        movies: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.fetchDevelopers();
    }

    render() {
        return (
            <div>
                <div class="site-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">

                                <DevelopersList
                                    developers={this.props.developers} />


                                <div class="col-12 mt-5 text-center">
                                    <div class="custom-pagination">
                                        <span>1</span>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <span class="more-page">...</span>
                                        <a href="#">10</a>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-3 ml-auto">

                                <div class="mb-5">
                                    <h3 class="h5 text-black mb-3">Arama Yap</h3>
                                    <form action="#" method="post">
                                        <div class="form-group">
                                            <input type="text" placeholder="Ad Soyad" class="form-control" />
                                        </div>
                                        <div class="form-group">
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
                                        <div class="form-group">
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
                                        <div class="form-group">
                                            <div class="wrap-icon">
                                                <span class="icon icon-room"></span>
                                                <input type="text" placeholder="Anahtar Kelimeler" class="form-control" />
                                            </div>
                                        </div>

                                        <div className="form-group text-center">
                                            <input type="submit" class="btn btn-info" value="Yazılımcı Ara" />
                                        </div>

                                    </form>
                                </div>

                                <div className="mb-5">
                                    <h3 class="h5 text-black mb-3">Rastgele 5 Yazılımcı</h3>
                                    <div class="card">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Berke Kurnaz</li>
                                            <li class="list-group-item">Berke Kurnaz</li>
                                            <li class="list-group-item">Berke Kurnaz</li>
                                            <li class="list-group-item">Berke Kurnaz</li>
                                            <li class="list-group-item">Berke Kurnaz</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <h3 class="h5 text-black mb-3">Nasıl Listelenir ?</h3>
                                    <p>
                                        Bu Sayfada Yazılımcıları Listeleme İşlemi Son Eklenenden İlk Eklenene Doğru Gerçekleştirilmektedir.
                                    </p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ developers }) => {
    return {
        developers
    }
};

const mapDispatchToProps = {
    fetchDevelopers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Developers);
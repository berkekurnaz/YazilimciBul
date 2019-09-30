import React, { Component } from 'react'
import axios from "axios";


class Developer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            developer: [],
            loading: false,
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'apikey': 'myapikey18812019',
        };
        this.setState({ loading: true }, () => {
            axios.get('http://localhost:3000/developers/' + match.params.id, { headers })
                .then(result => this.setState({
                    loading: false,
                    developer: [...result.data][0],
                }));
        });
    }


    render() {
        return (
            <div>


                <div class="site-section bg-light">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-12" data-aos="fade">

                                <div className="row p-3">
                                    <div className="col-md-4">
                                        <div className="row m-2 bg-white">
                                            <img src="http://localhost:3000/developerimages/image-kcy0y167h1jr98312e7j.jpg" alt="..." class="img-thumbnail"></img>
                                        </div>
                                        <div className="row mt-2 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h4>İletişim Bilgileri</h4>
                                                <hr />
                                                <p>
                                                    Mail : {this.state.developer.mail}<br />
                                                    Telefon : {this.state.developer.phone}<br />
                                                    Şehir : {this.state.developer.city}<br />
                                                    Adres : {this.state.developer.address}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt-4 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h4>Çalıştığı Alanlar</h4>
                                                <hr />
                                                <p>{this.state.developer.developerAreas}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-4 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h4>Yetenekler</h4>
                                                <hr />
                                                <p>{this.state.developer.developerSkills}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-4 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h4>Sosyal Medya</h4>
                                                <hr />
                                                <a href="" class="btn btn-info"><span class="icon-facebook"></span> Website</a>
                                                <a href="" class="btn btn-info"><span class="icon-facebook"></span> Github</a>
                                                <a href="" class="btn btn-info"><span class="icon-facebook"></span> Linkedin</a>
                                                <a href="" class="btn btn-info"><span class="icon-facebook"></span> Medium</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8">

                                        <div className="row mt-4 ml-1 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h3 className="text-center">{this.state.developer.name + " " + this.state.developer.surname}</h3>
                                                <hr />
                                                <p>
                                                    Ad : {this.state.developer.name} <br />
                                                    Soyad : {this.state.developer.surname} <br />
                                                    Meslek : {this.state.developer.job}
                                                </p> <br />
                                                <h4>Hakkında</h4>
                                                <hr />
                                                <p>
                                                    {this.state.developer.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row mt-4 ml-1 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h4 className="text-center">İşler</h4>
                                                <hr />
                                                
                                            </div>
                                        </div>

                                        <div className="row mt-4 ml-1 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h4 className="text-center">Eğitim</h4>
                                                <hr />
                                                
                                            </div>
                                        </div>

                                        <div className="row mt-4 ml-1 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h4 className="text-center">Projeler</h4>
                                                <hr />
                                                
                                            </div>
                                        </div>

                                        <div className="row mt-4 ml-1 p-2 bg-white">
                                            <div className="col-md-12">
                                                <h4 className="text-center">Ödüller</h4>
                                                <hr />
                                                
                                            </div>
                                        </div>


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

export default Developer;
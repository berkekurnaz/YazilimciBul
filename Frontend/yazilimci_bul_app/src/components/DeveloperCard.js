import React from 'react';

const DeveloperCard = ({ developer }) => (
    <div class="d-block d-md-flex listing-horizontal">

        <a href="#" class="img d-block" style={{ backgroundImage: `url(resim yolu)` }}>
        </a>

        <div class="lh-content">
            <a href="#" class="bookmark"><span class="icon-heart"></span></a>
            <h3><a href="#">Berke Kurnaz</a></h3>
            <p>{developer.name}</p>
            <p>Yazılım Geliştiricisi</p>
            <p>
                Veritabanı Yöneticisi, Backend Developer, Frontend Developer
            </p>
        </div>

    </div>
);

export default DeveloperCard;
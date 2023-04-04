import React from 'react';
import './ContentKnowledge.css';

function ContentKnowledge() {
    return (
        <div class="content-wrapper">
            <div class="content-container">
                <h2>Şirket web sitesi kurmak için ihtiyacınız olan şey</h2>
            </div>
            <div class="content-container">
                <ol class="content-list-items">
                    <li class="item">
                        <div class="item-text-container">
                            <h3>KUCUK ISLETME DOSTU</h3>
                            <p>
                                Her butceye uygun tasarim ve icerik dizanylari
                                ile isletmenizin ihtiyaclarinin 100%
                                karsiliyoruz.
                            </p>
                        </div>
                    </li>
                    <li class="item">
                        <div class="item-text-container">
                            <h3>ÜCRETSİZ ŞİRKET ARAÇLARI</h3>
                            <p>
                                Maksimum marka bilinirliği için Blakfy ile bir
                                yıllık ücretsiz domain sizin.
                            </p>
                        </div>
                    </li>
                    <li class="item">
                        <div class="item-text-container">
                            <h3>SEO</h3>
                            <p>
                                Blakfy web siteniz varsayılan olarak arama
                                motorları için optimizasyonlu olduğundan dolayı
                                online bulunun.
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default ContentKnowledge;

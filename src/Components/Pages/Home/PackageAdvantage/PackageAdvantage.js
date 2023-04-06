import React from 'react';
import './PackageAdvantage.css';
import {
    BsSearch,
    BsInfoLg,
    BsFillCartPlusFill,
    BsFillChatSquareTextFill
} from 'react-icons/bs';

function PackageAdvantage() {
    return (
        <div>
            <div className="package-container">
                <div className="rowsTitle">
                    <h1>Türkiye'nin en gelişmiş e-ticaret yazılımı</h1>
                    <p>
                        En büyük e-ticaret sitelerinin kullandığı, Türkiye'nin
                        en iyi e-ticaret alt yapısı ile zaman kaybetmeden
                        başarıyı yakalayın.
                        <br />
                        <br />
                        Benzersiz kapsamda, 7/24 teknik destek, Kampanya
                        Kurguları, Pazarlama Modülleri ve Mobil Uygulamalar ile
                        fark yaratın!
                    </p>
                </div>
                <div className="rowsList">
                    <div className="modul">
                        <p className="logo">
                            <BsSearch />
                        </p>
                        <p className="title">
                            <strong>Web Tasarımı</strong>
                        </p>
                        <p className="comment">
                            Müşterilerin ihtiyaçlarına uygun web siteleri
                            tasarlamak, özelleştirmek ve geliştirmek.
                        </p>
                    </div>
                    <div className="modul">
                        <div className="modulItem">
                            <p className="logo">
                                <BsInfoLg />
                            </p>
                            <p className="title">
                                <strong>Web Geliştirme</strong>
                            </p>
                            <p className="comment">
                                Web sitelerinin kodlamasını ve teknik yönlerini
                                yönetmek.
                            </p>
                        </div>
                    </div>
                    <div className="modul">
                        <div className="modulItem">
                            <p className="logo">
                                <BsFillCartPlusFill />
                            </p>
                            <p className="title">
                                <strong>SEO ve Dijital Pazarlama</strong>
                            </p>
                            <p className="comment">
                                Müşterilerin web sitelerinin görünürlüğünü
                                artırmak ve trafiklerini artırmak için arama
                                motoru optimizasyonu (SEO) ve dijital pazarlama
                                stratejileri sunmak.
                            </p>
                        </div>
                    </div>
                    <div className="modul">
                        <div className="modulItem">
                            <p className="logo">
                                <BsFillChatSquareTextFill />
                            </p>
                            <p className="title">
                                <strong>Marka ve Grafik Tasarımı</strong>
                            </p>
                            <p className="comment">
                                Müşterilerin marka kimliklerini tasarlamak ve
                                geliştirmek, logo, broşür, afiş vb. grafik
                                tasarım hizmetleri sunmak.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackageAdvantage;

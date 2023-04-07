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
                            <strong>Web Design</strong>
                        </p>
                        <p className="comment">
                            Strengthen your brand's profile in the digital
                            world. Professional, functional and always stunning
                            pages. Dynamic and interactive user areas.
                        </p>
                    </div>
                    <div className="modul">
                        <div className="modulItem">
                            <p className="logo">
                                <BsInfoLg />
                            </p>
                            <p className="title">
                                <strong>E-Commerce</strong>
                            </p>
                            <p className="comment">
                                We produce end-user-oriented and functional
                                e-commerce sites! A stronger and target-oriented
                                process is possible with the fast infrastructure
                                we have established for you.
                            </p>
                        </div>
                    </div>
                    <div className="modul">
                        <div className="modulItem">
                            <p className="logo">
                                <BsFillCartPlusFill />
                            </p>
                            <p className="title">
                                <strong>Web software</strong>
                            </p>
                            <p className="comment">
                                We encode your digital identity! Share with us
                                ready-to-use functional software projects for
                                your brand, business or project. We love to
                                produce!
                            </p>
                        </div>
                    </div>
                    <div className="modul">
                        <div className="modulItem">
                            <p className="logo">
                                <BsFillChatSquareTextFill />
                            </p>
                            <p className="title">
                                <strong>Graphic Design</strong>
                            </p>
                            <p className="comment">
                                We let our creativity speak as we raise your
                                voice! With İlter Graphic Design team, your
                                brand will be enjoyable once again, from its
                                logo to its e-bulletins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackageAdvantage;

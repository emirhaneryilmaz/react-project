import React from 'react'
import Nav from '../kurumlar/nav'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Kurumlar() {
    const navigate = useNavigate();
    const location = useLocation();
    const id1 = location.state.id;
    const user = location.state.user;
    const city = location.state.city;
    const neigh = location.state.neigh;
    const street = location.state.street;

    const goAdalet = event => {
        event.preventDefault();
        navigate('/adalet-bakanligi', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
    }

    const goEmniyet = event => {
        event.preventDefault();
        navigate('/emniyet-genel-mudurlugu', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
    }

    const goAta = event => {
        event.preventDefault();
        navigate('/Ataturk-kultur', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
    }

    const goAvrupa = event => {
        event.preventDefault();
        navigate('/avrupa-birligi-baskanligi', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
    }

    const goPtt = event => {
        event.preventDefault();
        navigate('/PTT', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
    }

    const goMeb = event => {
        event.preventDefault();
        navigate('/milli-egitim-bakanligi', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
    }

    const goHome = event => {
        event.preventDefault();
        if(user) {
            navigate('/home', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
        } else {
            navigate('/');
        }
    }

    const refresh = event => {
        event.preventDefault();
        navigate('', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
    }

    return (
        <div>
            <header id="top">
                <Nav />
            </header>
            <main id="serviceListBlock" className="agencyList">
                <div id="vue">
                    <nav className="pageTabNavigation" aria-label="Üst Sayfalar">
                        <ul className="breadcrumbNavigation">
                            <li><a href='#' className="home" onClick={goHome}>Ana Sayfa</a></li>
                            <li className="here">Kurumlar</li>
                        </ul>
                    </nav>
                    <div className="serviceListBanner " role="presentation">
                    </div>
                    <section id="pageContentBlock" className="themed">
                        <ul className="htoogleBar">
                            <li><a href="#" onClick={refresh} className="selected">Kurumlar</a></li>
                            <li><a href="#" onClick={refresh}>Belediyeler ve Bağlı İşletmeler</a></li>
                            <li><a href="#" onClick={refresh}>Firmalar</a></li>
                            <li><a href="#" onClick={refresh}>Üniversiteler</a></li>
                            <li><a href="#" onClick={refresh}>Şirketler İçin Hizmetler</a></li>
                        </ul>
                        <div className="contentWrapper">
                            <h2 className="sectionTitle bigHeader">Kurumlar</h2>
                            <p className="richText">Bu sayfa üzerinde Türkiye Cumhuriyeti Devleti'ne ait temel yasama, yürütme ve yargı kurumları ile Özel Kuruluşların listesini bulabilirsiniz. İlgili bağlantıları kullanarak kurum hakkında bilgi alabilir, e-Devlet Kapısı ve kendi İnternet siteleri üzerinden sunulan elektronik hizmetlerin listesine ulaşabilirsiniz. </p>
                        </div>

                        <ul id="agencyAllListBlock" className="letterItems">
                            <li className="agencyDetailBlock info-container">
                                <div className="agencyDetail">
                                    <img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/1.1.8.0.webp" alt="Adalet Bakanlığı" width="64" height="64" className="agencyLogo webp" />
                                    <div className="agencyInformation">
                                        <h3>
                                            <a href="#" onClick={goAdalet}>Adalet Bakanlığı</a>
                                        </h3>
                                        <div className="agencyText"></div>
                                        <div className="agencyLinks">
                                            <a title="Adalet Bakanlığı ile ilgili ayrıntılı bilgi">Ayrıntılı Bilgi</a> <a href="https://www.adalet.gov.tr/" rel="external">Adalet Bakanlığı Web Sitesi</a>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="agencyDetailBlock info-container">
                                <div className="agencyDetail">
                                    <img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/78.1.8.0.webp" alt="Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı" width="64" height="64" className="agencyLogo webp" />
                                    <div className="agencyInformation">
                                        <h3>
                                            <a href="#" onClick={goAta}>Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı</a>
                                        </h3>
                                        <div className="agencyText"></div>
                                        <div className="agencyLinks">
                                            <a title="Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı ile ilgili ayrıntılı bilgi">Ayrıntılı Bilgi</a> <a href="https://www.ayk.gov.tr/" rel="external">Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı Web Sitesi</a>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="agencyDetailBlock info-container">
                                <div className="agencyDetail">
                                    <img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/80.1.8.0.webp" alt="Avrupa Birliği Başkanlığı" width="64" height="64" className="agencyLogo webp" />
                                    <div className="agencyInformation">
                                        <h3>
                                            <a href="#" onClick={goAvrupa}>Avrupa Birliği Başkanlığı</a>
                                        </h3>
                                        <div className="agencyText"></div>
                                        <div className="agencyLinks">
                                            <a href="/avrupa-birligi-baskanligi" title="Avrupa Birliği Başkanlığı ile ilgili ayrıntılı bilgi">Ayrıntılı Bilgi</a> <a href="https://www.ab.gov.tr/" rel="external">Avrupa Birliği Başkanlığı Web Sitesi</a>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="agencyDetailBlock info-container">
                                <div className="agencyDetail">
                                    <img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/13.1.8.0.webp" alt="Emniyet Genel Müdürlüğü" width="64" height="64" className="agencyLogo webp" />
                                    <div className="agencyInformation">
                                        <h3>
                                            <a href="#" onClick={goEmniyet}>Emniyet Genel Müdürlüğü</a>
                                        </h3>
                                        <div className="agencyText"></div>
                                        <div className="agencyLinks">
                                            <a title="Emniyet Genel Müdürlüğü ile ilgili ayrıntılı bilgi">Ayrıntılı Bilgi</a> <a href="https://www.egm.gov.tr/" rel="external">Emniyet Genel Müdürlüğü Web Sitesi</a>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="agencyDetailBlock info-container">
                                <div className="agencyDetail">
                                    <img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/21.1.8.0.webp" alt="Milli Eğitim Bakanlığı" width="64" height="64" className="agencyLogo webp" />
                                    <div className="agencyInformation">
                                        <h3>
                                            <a href="#" onClick={goMeb}>Milli Eğitim Bakanlığı</a>
                                        </h3>
                                        <div className="agencyText"></div>
                                        <div className="agencyLinks">
                                            <a title="Milli Eğitim Bakanlığı ile ilgili ayrıntılı bilgi">Ayrıntılı Bilgi</a> <a href="https://www.meb.gov.tr/" rel="external">Milli Eğitim Bakanlığı Web Sitesi</a>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="agencyDetailBlock info-container">
                                <div className="agencyDetail">
                                    <img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/28.1.8.0.webp" alt="PTT" width="64" height="64" className="agencyLogo webp" />
                                    <div className="agencyInformation">
                                        <h3>
                                            <a href="#" onClick={goPtt}>PTT</a>
                                        </h3>
                                        <div className="agencyText"></div>
                                        <div className="agencyLinks">
                                            <a title="PTT ile ilgili ayrıntılı bilgi">Ayrıntılı Bilgi</a> <a href="https://www.ptt.gov.tr/" rel="external">PTT Web Sitesi</a>
                                        </div>

                                    </div>
                                </div>
                            </li>
                        </ul>


                    </section>
                </div>
            </main >
        </div >
    )
}

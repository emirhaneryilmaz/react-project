import React from 'react'
import Nav from '../nav'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Ata() {
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state.user;
    const id1 = location.state.id;
    const city = location.state.city;
    const neigh = location.state.neigh;
    const street = location.state.street;

    const goBack = event => {
        event.preventDefault();
        navigate('/kurumlar', { state: {id: id1, user: user, city: city, neigh: neigh, street: street } })
    }

    const goHome = event => {
        event.preventDefault();
        if(user) {
            navigate('/home', { state: { id: id1, user: user, city: city, neigh: neigh, street: street } })
        } else {
            navigate('/');
        }
    }

    return (
        <div>
            <header id="top">
                <Nav />
            </header>
            <main id="serviceBlock" className="typeSocialSecurity">
                <div id="vue">
                    <div className="serviceBanner " role="presentation">
                    </div>
                    <nav className="pageTabNavigation" aria-label="Üst Sayfalar">
                        <ul className="breadcrumbNavigation">
                            <li><a href='#' className="home" onClick={goHome}>Ana Sayfa</a></li>
                            <li><a href="#" onClick={goBack}>Kurumlar</a></li>
                            <li className="here">Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı</li>
                        </ul>
                    </nav>
                    <section id="pageContentBlock" className="themed">
                        <section className="serviceTitleBlock"><div className="serviceDetails"><img className="agencyLogo webp" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/78.1.8.0.webp" alt="" width="64" height="64" /><h2><a>Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı</a><em></em></h2></div><div className="serviceActions"><div className="share_item"><button className="share_button" id="share_button" data-match-height="serviceActs"><i className="ico-share" aria-hidden="true"></i> <span className="serviceActions_maintitle">Paylaş</span></button><div className="share_menu" id="share_menu" data-match-height="serviceActs"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.turkiye.gov.tr/ataturk-kultur-dil-ve-tarih-yuksek-kurumu-baskanligi&text=Atat%C3%BCrk+K%C3%BClt%C3%BCr%2C+Dil+ve+Tarih+Y%C3%BCksek+Kurumu+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1&via=ekapi&related=ekapi"><i className="ico-twitter" aria-hidden="true"></i><span className="serviceActions_maintitle">Twitter'da Paylaş</span></a><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.turkiye.gov.tr/ataturk-kultur-dil-ve-tarih-yuksek-kurumu-baskanligi"><i className="ico-facebook" aria-hidden="true"></i><span className="serviceActions_maintitle"> Facebook'da Paylaş</span></a></div></div></div></section><aside id="serviceHelperBlock"><ul className="serviceIntroductionBlock"><li>Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı hizmetleri Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı ile e-Devlet Kapısı altyapısı üzerinden sunulmaktadır.</li><li className="progressStatus">Web Sayfası <a href="https://www.ayk.gov.tr/" rel="noopener noreferrer external">https://www.ayk.gov.tr/</a></li><li className="progressInfo">Cumhurbaşkanlığı İletişim Merkezi (CİMER) aracılığıyla kamu kurumlarına dilekçe hakkı kapsamında istek ve şikâyetlerinizi gönderebilir veya bilgi edinme hakkı kapsamında kamu kurumlarından bilgi talebinde bulunabilirsiniz. Ayrıca aldığınız hizmet sonrası kamu kurum veya personeline teşekkür mesajlarınızı iletilebilir ve politika önerileri sunarak yönetime katılabilirsiniz.</li></ul></aside>
                        <section id="contentStart" className="serviceContainer">

                            <div id="serviceListBlock">
                                <div className="agencyServicesContainer servicelist-unstyled">

                                    <ul className="agencyServices">
                                        <li className="agencyServiceBlock" data-city="" data-mname="Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı" data-type="">

                                            <div className="serviceList">
                                                <h4>Kuruma Ait İnternet Sitesi Üzerinden Sunulan Hizmetler</h4>
                                                <ul>
                                                    <li className="subSection">
                                                        <a href="https://ataturkansiklopedisi.gov.tr" className="integratedService" data-tags="Atatürk Ansiklopedisi" rel="external" data-description="">Atatürk Ansiklopedisi</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://masal.gov.tr" className="integratedService" data-tags="Türk Masal Külliyatı" rel="external" data-description="">Türk Masal Külliyatı</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://sozluk.gov.tr" className="integratedService" data-tags="Güncel Türkçe Sözlük" rel="external" data-description="">Güncel Türkçe Sözlük</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="http://katalog.ayk.gov.tr" className="integratedService" data-tags="Toplu Katalog Hizmeti" rel="external" data-description="">Toplu Katalog Hizmeti</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://dergi.ayk.gov.tr" className="integratedService" data-tags="AYK Dergi Dizini" rel="external" data-description="">AYK Dergi Dizini</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>






                            <h3 className="definitionHeader">İletişim Bilgileri</h3>

                            <dl className="dataList compact">
                                <dt> Kurum Adı</dt>
                                <dd>Atatürk Kültür, Dil ve Tarih Yüksek Kurumu Başkanlığı</dd>
                                <dt> Web Sayfası</dt>
                                <dd> <a href="https://www.ayk.gov.tr/" rel="noopener noreferrer external" className="defaultlink">https://www.ayk.gov.tr/</a></dd>
                                <dt> Tel</dt>
                                <dd> +90 3122855512</dd>
                                <dt> Adres</dt>
                                <dd> Ziyabey Cad. No:19 Balgat 06520 ÇANKAYA ANKARA TÜRKİYE </dd>
                            </dl>
                        </section>
                    </section>
                </div>
            </main>
        </div >
    )
}

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../nav'

export default function Meb() {
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
                            <li className="here">Milli Eğitim Bakanlığı</li>
                        </ul>
                    </nav>
                    <section id="pageContentBlock" className="themed">
                        <section className="serviceTitleBlock"><div className="serviceDetails"><img className="agencyLogo webp" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/21.1.8.0.webp" alt="" width="64" height="64" /><h2><a>Milli Eğitim Bakanlığı</a><em></em></h2></div><div className="serviceActions"><div className="share_item"><button className="share_button" id="share_button" data-match-height="serviceActs"><i className="ico-share" aria-hidden="true"></i> <span className="serviceActions_maintitle">Paylaş</span></button><div className="share_menu" id="share_menu" data-match-height="serviceActs"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.turkiye.gov.tr/milli-egitim-bakanligi&text=Milli+E%C4%9Fitim+Bakanl%C4%B1%C4%9F%C4%B1&via=ekapi&related=ekapi"><i className="ico-twitter" aria-hidden="true"></i><span className="serviceActions_maintitle">Twitter'da Paylaş</span></a><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.turkiye.gov.tr/milli-egitim-bakanligi"><i className="ico-facebook" aria-hidden="true"></i><span className="serviceActions_maintitle"> Facebook'da Paylaş</span></a></div></div></div></section><aside id="serviceHelperBlock"><ul className="serviceIntroductionBlock"><li>Milli Eğitim Bakanlığı hizmetleri Milli Eğitim Bakanlığı ile e-Devlet Kapısı altyapısı üzerinden sunulmaktadır.</li><li className="progressStatus">Web Sayfası <a href="https://www.meb.gov.tr/" rel="noopener noreferrer external">https://www.meb.gov.tr/</a></li><li className="progressInfo">Cumhurbaşkanlığı İletişim Merkezi (CİMER) aracılığıyla kamu kurumlarına dilekçe hakkı kapsamında istek ve şikâyetlerinizi gönderebilir veya bilgi edinme hakkı kapsamında kamu kurumlarından bilgi talebinde bulunabilirsiniz. Ayrıca aldığınız hizmet sonrası kamu kurum veya personeline teşekkür mesajlarınızı iletilebilir ve politika önerileri sunarak yönetime katılabilirsiniz.</li></ul></aside>
                        <section id="contentStart" className="serviceContainer">

                            <div id="serviceListBlock">
                                <div className="agencyServicesContainer servicelist-unstyled">

                                    <ul className="agencyServices">
                                        <li className="agencyServiceBlock" data-city="" data-mname="Milli Eğitim Bakanlığı" data-type="">

                                            <div className="serviceList">
                                                <h4>Kuruma Ait İnternet Sitesi Üzerinden Sunulan Hizmetler</h4>
                                                <ul>
                                                    <li className="subSection">
                                                        <a href="http://www.meb.gov.tr/mevzuat/" className="integratedService" data-tags="MEB Mevzuat Bankası" rel="external" data-description="">MEB Mevzuat Bankası</a>
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
                                <dd>Milli Eğitim Bakanlığı</dd>
                                <dt> Web Sayfası</dt>
                                <dd> <a href="https://www.meb.gov.tr/" rel="noopener noreferrer external" className="defaultlink">https://www.meb.gov.tr/</a></dd>
                                <dt> Tel</dt>
                                <dd> +90 3124191410</dd>
                                <dt> Adres</dt>
                                <dd> (Merkez Bina): Atatürk Bulvarı Bakanlıklar   ANKARA TÜRKİYE </dd>
                            </dl>
                            <div id="mapid" ></div>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}

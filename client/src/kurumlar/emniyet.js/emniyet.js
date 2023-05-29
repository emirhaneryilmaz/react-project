import React from 'react'
import Nav from '../nav'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Emniyet() {
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
            </header><main id="serviceBlock" className="typeSocialSecurity">
                <div id="vue">
                    <div className="serviceBanner " role="presentation">
                    </div>
                    <nav className="pageTabNavigation" aria-label="Üst Sayfalar">
                        <ul className="breadcrumbNavigation">
                            <li><a href='#' className="home" onClick={goHome}>Ana Sayfa</a></li>
                            <li><a href="#" onClick={goBack}>Kurumlar</a></li>
                            <li className="here">Emniyet Genel Müdürlüğü</li>
                        </ul>
                    </nav>
                    <section id="pageContentBlock" className="themed">
                        <section className="serviceTitleBlock"><div className="serviceDetails"><img className="agencyLogo webp" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/13.1.8.0.webp" alt="" width="64" height="64" /><h2><a>Emniyet Genel Müdürlüğü</a><em></em></h2></div><div className="serviceActions"><div className="share_item"><button className="share_button" id="share_button" data-match-height="serviceActs"><i className="ico-share" aria-hidden="true"></i> <span className="serviceActions_maintitle">Paylaş</span></button><div className="share_menu" id="share_menu" data-match-height="serviceActs"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.turkiye.gov.tr/emniyet-genel-mudurlugu&text=Emniyet+Genel+M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC&via=ekapi&related=ekapi"><i className="ico-twitter" aria-hidden="true"></i><span className="serviceActions_maintitle">Twitter'da Paylaş</span></a><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.turkiye.gov.tr/emniyet-genel-mudurlugu"><i className="ico-facebook" aria-hidden="true"></i><span className="serviceActions_maintitle"> Facebook'da Paylaş</span></a></div></div></div></section><aside id="serviceHelperBlock"><ul className="serviceIntroductionBlock"><li>Emniyet Genel Müdürlüğü hizmetleri Emniyet Genel Müdürlüğü ile e-Devlet Kapısı altyapısı üzerinden sunulmaktadır.</li><li className="progressStatus">Web Sayfası <a href="https://www.egm.gov.tr/" rel="noopener noreferrer external">https://www.egm.gov.tr/</a></li><li className="progressInfo">Cumhurbaşkanlığı İletişim Merkezi (CİMER) aracılığıyla kamu kurumlarına dilekçe hakkı kapsamında istek ve şikâyetlerinizi gönderebilir veya bilgi edinme hakkı kapsamında kamu kurumlarından bilgi talebinde bulunabilirsiniz. Ayrıca aldığınız hizmet sonrası kamu kurum veya personeline teşekkür mesajlarınızı iletilebilir ve politika önerileri sunarak yönetime katılabilirsiniz.</li></ul></aside><section id="contentStart" className="serviceContainer">

                            <div id="serviceListBlock">
                                <div className="agencyServicesContainer servicelist-unstyled">
                                    <ul className="agencyServices">
                                        <li className="agencyServiceBlock" data-city="" data-mname="Emniyet Genel Müdürlüğü" data-type="">

                                            <div className="serviceList">
                                                <h4>Kuruma Ait İnternet Sitesi Üzerinden Sunulan Hizmetler</h4>
                                                <ul>
                                                    <li className="subSection">
                                                        <a href="http://trafik.gov.tr/istatistikler37" className="integratedService" data-tags="Detay Nitelikteki Trafik İstatistiki Bilgileri" rel="external" data-description="">Detay Nitelikteki Trafik İstatistiki Bilgileri</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://www.egm.gov.tr/egm-mobil" className="integratedService" data-tags="EGM Mobil" rel="external" data-description="">EGM Mobil</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://kbs.egm.gov.tr/" className="integratedService" data-tags="Kimlik Bildirim Sistemi" rel="external" data-description="">Kimlik Bildirim Sistemi</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://arackiralama.egm.gov.tr/" className="integratedService" data-tags="Kiralık Araç Bildirim Sistemi (KABİS)" rel="external" data-description="">Kiralık Araç Bildirim Sistemi (KABİS)</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://www.egm.gov.tr/ozel-guvenlik-bilgi-sistemi" className="integratedService" data-tags="Özel Güvenlik Bilgi Sistemi" rel="external" data-description="">Özel Güvenlik Bilgi Sistemi</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="http://www.terorarananlar.pol.tr/" className="integratedService" data-tags="Terör Arananlar" rel="external" data-description="">Terör Arananlar</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://onlineislemler.egm.gov.tr/Sayfalar/Ihbar.aspx" className="integratedService" data-tags="Online İhbar" rel="external" data-description="">Online İhbar</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://www.egm.gov.tr/bilgi-edinme" className="integratedService" data-tags="Bilgi Edinme Başvuru Formu" rel="external" data-description="">Bilgi Edinme Başvuru Formu</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://onlineislemler.egm.gov.tr/Sayfalar/insanhaklari.aspx" className="integratedService" data-tags="İnsan Hakları Başvuru Formu" rel="external" data-description="">İnsan Hakları Başvuru Formu</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://www.egm.gov.tr/en-yakin-polis-merkezi" className="integratedService" data-tags="En Yakın Polis Merkezi" rel="external" data-description="">En Yakın Polis Merkezi</a>
                                                    </li>
                                                    <li className="subSection">
                                                        <a href="https://www.egm.gov.tr/kayip-alarmi" className="integratedService" data-tags="Kayıp Alarmı" rel="external" data-description="">Kayıp Alarmı</a>
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
                                <dd>Emniyet Genel Müdürlüğü</dd>
                                <dt> Web Sayfası</dt>
                                <dd> <a href="https://www.egm.gov.tr/" rel="noopener noreferrer external" className="defaultlink">https://www.egm.gov.tr/</a></dd>
                                <dt> Tel</dt>
                                <dd> +90 3124620462</dd>
                                <dt> Adres</dt>
                                <dd> Ayrancı Mahallesi Dikmen Caddesi No: 11 06100 ÇANKAYA ANKARA TÜRKİYE </dd>
                            </dl>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}

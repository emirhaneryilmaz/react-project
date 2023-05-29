import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../nav'

export default function Ptt() {
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
            <main id="serviceBlock" class="typeSocialSecurity">
                <div id="vue">
                    <div class="serviceBanner " role="presentation">
                    </div>
                    <nav class="pageTabNavigation" aria-label="Üst Sayfalar">
                        <ul class="breadcrumbNavigation">
                            <li><a href='#' className="home" onClick={goHome}>Ana Sayfa</a></li>
                            <li><a href="#" onClick={goBack}>Kurumlar</a></li>
                            <li class="here">PTT</li>
                        </ul>
                    </nav>
                    <section id="pageContentBlock" class="themed">
                        <section class="serviceTitleBlock"><div class="serviceDetails"><img class="agencyLogo webp" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/28.1.8.0.webp" alt="" width="64" height="64" /><h2><a>PTT</a><em></em></h2></div><div class="serviceActions"><div class="share_item"><button class="share_button" id="share_button" data-match-height="serviceActs"><i class="ico-share" aria-hidden="true"></i> <span class="serviceActions_maintitle">Paylaş</span></button><div class="share_menu" id="share_menu" data-match-height="serviceActs"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.turkiye.gov.tr/ptt&text=PTT&via=ekapi&related=ekapi"><i class="ico-twitter" aria-hidden="true"></i><span class="serviceActions_maintitle">Twitter'da Paylaş</span></a><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.turkiye.gov.tr/ptt"><i class="ico-facebook" aria-hidden="true"></i><span class="serviceActions_maintitle"> Facebook'da Paylaş</span></a></div></div></div></section><aside id="serviceHelperBlock"><ul class="serviceIntroductionBlock"><li>PTT hizmetleri PTT ile e-Devlet Kapısı altyapısı üzerinden sunulmaktadır.</li><li class="progressStatus">Web Sayfası <a href="https://www.ptt.gov.tr/" rel="noopener noreferrer external">https://www.ptt.gov.tr/</a></li><li class="progressInfo">Cumhurbaşkanlığı İletişim Merkezi (CİMER) aracılığıyla kamu kurumlarına dilekçe hakkı kapsamında istek ve şikâyetlerinizi gönderebilir veya bilgi edinme hakkı kapsamında kamu kurumlarından bilgi talebinde bulunabilirsiniz. Ayrıca aldığınız hizmet sonrası kamu kurum veya personeline teşekkür mesajlarınızı iletilebilir ve politika önerileri sunarak yönetime katılabilirsiniz.</li></ul></aside>
                        <section id="contentStart" class="serviceContainer">

                            <div id="serviceListBlock">
                                <div class="agencyServicesContainer servicelist-unstyled">

                                    <ul class="agencyServices">
                                        <li class="agencyServiceBlock" data-city="" data-mname="PTT" data-type="">

                                            <div class="serviceList">
                                                <h4>Kuruma Ait İnternet Sitesi Üzerinden Sunulan Hizmetler</h4>
                                                <ul>
                                                    <li class="subSection">
                                                        <a href="https://www.ptt.gov.tr/Sayfalar/Gonderi/Gonderi.aspx#ptt_gonderi_ucreti_ogrenme" class="integratedService" data-tags="Gönderi Ücreti ve Süresini Öğrenme" rel="external" data-description="">Gönderi Ücreti ve Süresini Öğrenme</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <h3 class="definitionHeader">İletişim Bilgileri</h3>

                            <dl class="dataList compact">
                                <dt> Kurum Adı</dt>
                                <dd>PTT</dd>
                                <dt> Web Sayfası</dt>
                                <dd> <a href="https://www.ptt.gov.tr/" rel="noopener noreferrer external" class="defaultlink">https://www.ptt.gov.tr/</a></dd>
                                <dt> Tel</dt>
                                <dd> +90 (312) 509-5000</dd>
                                <dt> Adres</dt>
                                <dd> Şehit Teğmen Kalmaz Cd. No:2 Ulus 06101 ALTINDAĞ ANKARA TÜRKİYE </dd>
                            </dl>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from '../kurumlar/nav';

export default function Belge() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state.user;
    const id1 = location.state.id;
    const city = location.state.city;
    const neigh = location.state.neigh;
    const street = location.state.street;

    const goHome = event => {
        event.preventDefault();
        if(user){
            navigate('/home', { state: {id: id1, user: user, city: city, neigh: neigh, street: street } });
        } else {
            navigate('/', { state: {user: user} });
        }
    }

    const buttonHandler = () => {
        console.log(location.state.city);
    }

    return (
        <div>
            <header id="top">
                <Nav />
            </header><main id="serviceBlock" className="typeInsurance">
                <div id="vue">
                    <nav className="pageTabNavigation" aria-label="Üst Sayfalar">
                        <ul className="breadcrumbNavigation">
                            <li><a href="#" onClick={goHome} className="home">Ana Sayfa</a></li>
                            <li><a>Belge Doğrulama</a></li>
                            <li className="here"></li>
                        </ul>
                    </nav>
                    <section id="pageContentBlock" className="themed">
                        <section className="serviceTitleBlock"><div className="serviceDetails"><img className="agencyLogo webp" src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/edk.1.8.0.webp" alt="" width="64" height="64" /><h2><a>Belge Doğrulama</a><em></em></h2></div><div className="serviceActions"><div className="share_item"><button className="share_button" id="share_button" data-match-height="serviceActs"><i className="ico-share" aria-hidden="true"></i> <span className="serviceActions_maintitle">Paylaş</span></button><div className="share_menu" id="share_menu" data-match-height="serviceActs"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.turkiye.gov.tr/belge-dogrulama&text=Belge+Do%C4%9Frulama&via=ekapi&related=ekapi"><i className="ico-twitter" aria-hidden="true"></i><span className="serviceActions_maintitle">Twitter'da Paylaş</span></a><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.turkiye.gov.tr/belge-dogrulama"><i className="ico-facebook" aria-hidden="true"></i><span className="serviceActions_maintitle"> Facebook'da Paylaş</span></a></div></div></div></section><aside id="serviceHelperBlock"><ul className="serviceIntroductionBlock"><li>Bu hizmet barkodlu belge sahibi kurumların işbirliği ile e-Devlet Kapısı altyapısı üzerinden sunulmaktadır.</li><li className="miniTiming">Bu işlem için yaklaşık 3 dakikanızı ayırmalısınız.</li><li className="progressStatus">Bu işlem toplam <strong>4</strong> aşamalıdır. Şu anda <strong>1</strong>. aşamadasınız.<progress value="1" max="4"></progress></li><li><ol className="progressMeter" aria-label="Hizmet Aşamaları"><li className="current">Barkod Numarası</li><li className="incomplete">Sorgulama Alanı</li><li className="incomplete">Bilgilendirme ve Onay</li><li className="final">İşlem Sonucu</li></ol></li></ul></aside>
                        <section className="serviceContainer">

                            <div className="richText">e-Devlet Kapısı üzerinden oluşturulan tüm barkodlu belgeleri burada doğrulayabilirsiniz.</div>
                            <form name="mainForm" action="/belge-dogrulama?submit" method="POST" className="serviceForm">
                                <fieldset>
                                    <legend>Belge Doğrulama</legend>
                                    <div className="formRow required">

                                        <label htmlFor="sorgulananBarkod" className="rowLabel">TC Kimlik Numaranız</label>
                                        <input type="text" name="sorgulananBarkod" maxLength="50" autoComplete="off" edl-mob="barkodInput" required="required" aria-required="true" id="sorgulananBarkod" className="text" />
                                        <div className="fieldInfo">Doğrulamak istediğiniz belgeye ait barkod numarasını giriniz.</div>
                                    </div>

                                </fieldset>
                                <div className="formSubmitRow">

                                    <button className="submitButton" onClick={buttonHandler}>Göster</button>
                                </div>
                            </form>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}

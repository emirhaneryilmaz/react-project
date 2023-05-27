import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DropdownUser from '../afterLogin/dropdown'

export default function Belge() {
    const location = useLocation();
    const city = location.state.city;
    const neigh = location.state.neigh;
    const street = location.state.street;

    const buttonHandler = () => {
        console.log(city + " " + neigh + " " + street);
    }

    return (
        <div>
            <header id="top">
                <div className="headerGroup">
                    <div id="accesibilityBlock">
                        <a href="#pageContentBlock" id="contentBlockLink">İçeriğe Git</a> <a href="/">Ana Sayfa</a>
                    </div>

                    <h1 id="brandingBlock">
                        <a id="homeLink" href="/" title="Ana Sayfa'ya Dönüş">e-Devlet Kapısı</a>
                    </h1>
                    <nav id="mainActionsBlock" aria-labelledby="mainActionsBlockTitle">
                        <h2 className="sectionTitle" id="mainActionsBlockTitle">Ana Bölümler</h2>
                        <ul className="mainActionsList">
                            <li><span className="fast-shortcuts"> <a href="/iletisim?hizli=CozumMerkeziV2"><i className="edk-fonticon-fastresponse"></i><span> Hızlı Çözüm</span></a></span></li>

                            <li className="inner-wrapper">
                                <ul className="accessibility" id="accessibilityUl" aria-expanded="false" role="menu" tabIndex="0" aria-label="Erişilebilirlik">
                                    <li className="active" role="none"><i className="ico-key-1" aria-hidden="true"></i></li>
                                    <li className="menu" role="none">
                                        <ul role="none">
                                            <li role="none"><a role="menuitem" href="/bilgilendirme?konu=erisilebilirlik">Erişilebilirlik Özellikleri</a></li>
                                            <li role="none"><a role="menuitem" href="#" className="textOnlyToggle" data-state="html">Salt Metin Görünümü</a></li>
                                            <li role="none"><a role="menuitem" href="#" className="fontSizeToggle" data-state="normal">Daha Belirgin Odaklama</a></li>
                                        </ul>
                                    </li>
                                </ul> 					</li> 					<li className="search-form-wrapper">
                                <form id="searchForm" name="searchForm" method="get" action="/arama">
                                    <label htmlFor="searchField">Aranan Terim</label>
                                    <div className="search-wrapper">
                                        <div className="inner-search">
                                            <input placeholder="Size nasıl yardım edebilirim?" id="searchField" name="aranan" autoComplete="off" role="combobox" autoCorrect="off" autoCapitalize="off" /> <span className="ico-search"></span>
                                        </div>
                                        <ul id="popSearch"></ul>
                                    </div>
                                    <input id="searchButton" type="submit" value="Ara" />
                                </form>
                            </li>  					<li id="l" className="login-area">{DropdownUser()}
                            </li>				</ul>
                    </nav>
                </div>
            </header><main id="serviceBlock" className="typeInsurance">
                <div id="vue">
                    <nav className="pageTabNavigation" aria-label="Üst Sayfalar">
                        <ul className="breadcrumbNavigation">
                            <li><a href="/" className="home">Ana Sayfa</a></li>
                            <li><a href="/belge-dogrulama">Belge Doğrulama</a></li>
                            <li className="here"></li>
                        </ul>
                    </nav>
                    <section id="pageContentBlock" className="themed">
                        <section className="serviceTitleBlock"><div className="serviceDetails"><img className="agencyLogo webp" src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/edk.1.8.0.webp" alt="" width="64" height="64" /><h2><a href="/belge-dogrulama">Belge Doğrulama</a><em></em></h2></div><div className="serviceActions"><div className="share_item"><button className="share_button" id="share_button" data-match-height="serviceActs"><i className="ico-share" aria-hidden="true"></i> <span className="serviceActions_maintitle">Paylaş</span></button><div className="share_menu" id="share_menu" data-match-height="serviceActs"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.turkiye.gov.tr/belge-dogrulama&text=Belge+Do%C4%9Frulama&via=ekapi&related=ekapi"><i className="ico-twitter" aria-hidden="true"></i><span className="serviceActions_maintitle">Twitter'da Paylaş</span></a><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.turkiye.gov.tr/belge-dogrulama"><i className="ico-facebook" aria-hidden="true"></i><span className="serviceActions_maintitle"> Facebook'da Paylaş</span></a></div></div></div></section><aside id="serviceHelperBlock"><ul className="serviceIntroductionBlock"><li>Bu hizmet barkodlu belge sahibi kurumların işbirliği ile e-Devlet Kapısı altyapısı üzerinden sunulmaktadır.</li><li className="miniTiming">Bu işlem için yaklaşık 3 dakikanızı ayırmalısınız.</li><li className="progressStatus">Bu işlem toplam <strong>4</strong> aşamalıdır. Şu anda <strong>1</strong>. aşamadasınız.<progress value="1" max="4"></progress></li><li><ol className="progressMeter" aria-label="Hizmet Aşamaları"><li className="current">Barkod Numarası</li><li className="incomplete">Sorgulama Alanı</li><li className="incomplete">Bilgilendirme ve Onay</li><li className="final">İşlem Sonucu</li></ol></li></ul></aside>
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

import React, { useState } from 'react';
import '../css/common.css';
import DropdownUser from '../afterLogin/dropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../firebase_setup/firebase';

export default function Services() {
    const location = useLocation();
    const navigate = useNavigate();
    const id1 = location.state.id;
    const [userData, setUserData] = useState([]);
    const [adrs, setAdrs] = useState('');

    const getUserData = async () => {
        const docSnap = await getDocs(collection(firestore, "user-data", id1, "address"));
        docSnap.forEach((doc) => {
            setUserData(current => [...current, doc.data()]);
            setAdrs(doc.id);
        });
    }

    React.useEffect(() => {
        getUserData();
    }, []);

    const go = event => {
        event.preventDefault();
        navigate('/address', { state: { id: id1 } });
    }

    const goToUp = event => {
        event.preventDefault();
        try {
            let city = userData[0].sehir;
            let neigh = userData[0].mahalle;
            let street = userData[0].sokak;
            if (city == null || neigh == null || street == null) {
                throw new Error("Lütfen tüm bilgileri giriniz.");
            }
            navigate('/addressUpdate', { state: { id: id1, adrs: adrs } });

        } catch (error) {
            alert("Lütfen önce adres bilgisi ekleyiniz!");
            console.error(error.message);
        }
    }


    const goTo = event => {
        event.preventDefault();
        try {
            let city = userData[0].sehir;
            let neigh = userData[0].mahalle;
            let street = userData[0].sokak;
            if (city == null || neigh == null || street == null) {
                throw new Error("Lütfen tüm bilgileri giriniz.");
            }
            navigate('/addressQuestion', { state: { id: id1, city: city, neigh: neigh, street: street } });

        } catch (error) {
            alert("Lütfen önce adres bilgisi ekleyiniz!");
            console.error(error.message);
        }
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
                            <li><span className="fast-shortcuts"> <a href="#"><i className="edk-fonticon-fastresponse"></i><span> Hızlı Çözüm</span></a></span></li>

                            <li className="inner-wrapper">
                                <ul className="accessibility" id="accessibilityUl" tabIndex="0" aria-label="Erişilebilirlik">
                                    <li className="active" role="none"><i className="ico-key-1" aria-hidden="true"></i></li>
                                    <li className="menu" role="none">
                                        <ul role="none">
                                            <li role="none"><a role="menuitem" href="#">Erişilebilirlik Özellikleri</a></li>
                                            <li role="none"><a role="menuitem" href="#" className="textOnlyToggle" data-state="html">Salt Metin Görünümü</a></li>
                                            <li role="none"><a role="menuitem" href="#" className="fontSizeToggle" data-state="normal">Daha Belirgin Odaklama</a></li>
                                        </ul>
                                    </li>
                                </ul> 					</li> 					<li className="search-form-wrapper">
                                <form id="searchForm" name="searchForm" method="get" action="/arama">
                                    <label htmlFor="searchField">Aranan Terim</label>
                                    <div className="search-wrapper">
                                        <div className="inner-search">
                                            <input placeholder="Size nasıl yardım edebilirim?" id="searchField" name="aranan" autoComplete="off" autoCorrect="off" autoCapitalize="off" /> <span className="ico-search"></span>
                                        </div>
                                        <ul id="popSearch"></ul>
                                    </div>
                                    <input id="searchButton" type="submit" value="Ara" />
                                </form>
                            </li>  					<li id="l" className="login-area">{DropdownUser()}
                            </li> 				</ul>
                    </nav>
                </div>
            </header><main id="serviceListBlock" className="typeSocialSecurity">
                <div id="vue">
                    <div className="serviceListBanner " role="presentation"></div>
                    <section id="pageContentBlock" className="themed">
                        <ul className="htoogleBar">
                            <li><a href="#" className="selected">Kurum Hizmetleri</a></li>
                            <li><a href="#">Belediye Hizmetleri</a></li>
                            <li><a href="#">Firma Hizmetleri</a></li>
                            <li><a href="#">Üniversiteler</a></li>
                            <li><a href="#">Diğer Kurum Portallarına Giriş</a></li>
                            <li><a href="#">Yeni Eklenen Hizmetler</a></li>
                            <li><a href="#">Çok Kullanılanlar</a></li>
                        </ul>		<div className="contentWrapper">
                            <h2 className="sectionTitle bigHeader personalInfoCategoryLink">Kişisel Bilgiler</h2>
                            <p className="richText">Devlet kurumlarında bulunan kişisel bilgilerinize göz atın.</p>        </div><div className="agencyServicesContainer">
                            <div className="rolodexContainer">
                                <ul className="letterList" aria-label="Sayfayı Seçili Harfe Göre Kaydır">
                                    <li data-offset="230" className="active"><a href="#A">A</a></li>
                                    <li data-offset="696" className=""><a href="#B">B</a></li>
                                    <li data-offset="1309"><a href="#C">C</a></li>
                                    <li data-offset="1402" className=""><a href="#Ç">Ç</a></li>
                                    <li data-offset="2004" className=""><a href="#D">D</a></li>
                                    <li data-offset="2512" className=""><a href="#E">E</a></li>
                                    <li data-offset="3018" className=""><a href="#G">G</a></li>
                                    <li data-offset="3938"><a href="#H">H</a></li>
                                    <li data-offset="4031" className=""><a href="#İ">İ</a></li>
                                    <li data-offset="4765" className=""><a href="#K">K</a></li>
                                    <li data-offset="6250" className=""><a href="#M">M</a></li>
                                    <li data-offset="7957" className=""><a href="#N">N</a></li>
                                    <li data-offset="8066" className=""><a href="#Ö">Ö</a></li>
                                    <li data-offset="8253" className=""><a href="#P">P</a></li>
                                    <li data-offset="8414" className=""><a href="#S">S</a></li>
                                    <li data-offset="10566"><a href="#T">T</a></li>
                                    <li data-offset="11773"><a href="#U">U</a></li>
                                    <li data-offset="13766"><a href="#Y">Y</a></li>
                                </ul>
                                &nbsp;
                            </div>    <ul className="agencyServices">
                                <li className="agencyServiceBlock" data-city="" data-mname="" data-type="">
                                    <div className="head">
                                        <a href="/nufus-ve-vatandaslik-isleri-genel-mudurlugu"><img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/26.1.8.0.png" alt="Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü" width="64" height="64" className="serviceLogo" /></a>
                                        <h3>Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü</h3><em className="sc">41 Hizmet</em>
                                    </div>
                                    <div className="serviceList">
                                        <ul>
                                            <li><a href="#" onClick={go} className="integratedService " data-parent="1" data-security="2">Adres Bilgisi Ekleme</a></li>
                                            <li><a href="#" onClick={goTo} className="integratedService " data-parent="1" data-tags="Adres No Öğrenme - Adres Bilgilerim" data-security="2" data-description="Bu hizmeti kullanarak, Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü&#039;nde kayıtlı olan adres bilgilerinizi ve NVİ Adres Numaranızı görüntüleyebilirsiniz.">Adres Öğrenme - NVİ Adres Bilgilerim</a></li>
                                            <li><a href="#" onClick={goToUp} className="integratedService " data-parent="1" data-tags="Adres Değişikliği Bildirimi" data-security="2" data-description="Bu hizmeti kullanarak, yerleşim yeri adresi ve / veya diğer adres bildiriminde bulunabilirsiniz.">Adres Değişikliği Bildirimi</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="agencyServiceBlock" data-city="" data-mname="" data-type="">
                                    <div className="head">
                                        <a href="#"><img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/46.1.8.0.png" alt="Yüksek Seçim Kurulu Başkanlığı" width="64" height="64" className="serviceLogo" /></a>
                                        <h3>Yüksek Seçim Kurulu Başkanlığı</h3><em className="sc">2 Hizmet</em>
                                    </div>
                                    <div className="serviceList">
                                        <ul>
                                            <li><a href="#" className="integratedService " data-parent="1" data-tags="Yurt İçi Seçmen Kaydı Sorgulama" data-security="2" data-description="Bu hizmet ile, oy kullanabilecek vatandaşlar yurt içi seçmen kütüğündeki bilgilerini ve seçim dönemlerinde oy kullanılacak yer bilgisini, Yüksek Seçim Kurulu Başkanlığı tarafından açıklandığında, görüntüleyebilecektir.">Yurt İçi Seçmen Kaydı Sorgulama</a></li>
                                            <li><a href="#" className="integratedService " data-parent="1" data-tags="Yurt Dışı Seçmen Kaydı Sorgulama" data-security="2" data-description="Bu hizmet ile, oy kullanabilecek vatandaşlar yurt dışı seçmen kütüğündeki bilgilerini ve seçim dönemlerinde oy kullanılacak yer bilgisini, Yüksek Seçim Kurulu Başkanlığı tarafından açıklandığında, görüntüleyebilecektir.">Yurt Dışı Seçmen Kaydı Sorgulama</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import '../css/common.css';
import DropdownUser from '../afterLogin/dropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../firebase_setup/firebase';

export default function Services() {
    const location = useLocation();
    const navigate = useNavigate();
    const id1 = location.state.id;
    const user = location.state.user;
    const [userData, setUserData] = useState([]);
    const [adrs, setAdrs] = useState('');

    const getUserData = async () => {
        const docSnap = await getDocs(collection(firestore, "user-data", id1, "address"));
        docSnap.forEach((doc) => {
            setUserData(current => [...current, doc.data()]);
            setAdrs(doc.id);
        });
    }

    useEffect(() => {
        getUserData();
    }, []);

    const go = event => {
        event.preventDefault();
        navigate('/address', { state: { id: id1, user: user } });
    }

    const goHome = event => {
        event.preventDefault();
        navigate('/home', { state: { id: id1, user: user } });
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
            navigate('/addressUpdate', { state: { id: id1, adrs: adrs, user: user } });

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
            navigate('/addressQuestion', { state: { id: id1, city: city, neigh: neigh, street: street, user: user } });

        } catch (error) {
            alert("Lütfen önce adres bilgisi ekleyiniz!");
            console.error(error.message);
        }
    }

    return (
        <div>
            <header id="top">
                <div className="headerGroup">
                    <h1 id="brandingBlock">
                        <a id="homeLink" href="/home" onClick={goHome} title="Ana Sayfa'ya Dönüş">e-Devlet Kapısı</a>
                    </h1>
                    <nav id="mainActionsBlock" aria-labelledby="mainActionsBlockTitle">
                        <h2 className="sectionTitle" id="mainActionsBlockTitle">Ana Bölümler</h2>
                        <ul className="mainActionsList">
                            <li><span className="fast-shortcuts"> <a><i className="edk-fonticon-fastresponse"></i><span> Hızlı Çözüm</span></a></span></li>

                            <li className="inner-wrapper">
                                <ul className="accessibility" id="accessibilityUl" tabIndex="0" aria-label="Erişilebilirlik">
                                    <li className="active" role="none"><i className="ico-key-1" aria-hidden="true"></i></li>
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
                            </li>  					<li id="l" className="login-area"><DropdownUser />
                            </li> 				</ul>
                    </nav>
                </div>
            </header><main id="serviceListBlock" className="typeSocialSecurity">
                <div id="vue">
                    <div className="serviceListBanner " role="presentation"></div>
                    <section id="pageContentBlock" className="themed">
                        <ul className="htoogleBar">
                            <li><a className="selected">Kurum Hizmetleri</a></li>
                            <li><a>Belediye Hizmetleri</a></li>
                            <li><a>Firma Hizmetleri</a></li>
                            <li><a>Üniversiteler</a></li>
                            <li><a>Diğer Kurum Portallarına Giriş</a></li>
                            <li><a>Yeni Eklenen Hizmetler</a></li>
                            <li><a>Çok Kullanılanlar</a></li>
                        </ul>		<div className="contentWrapper">
                            <h2 className="sectionTitle bigHeader personalInfoCategoryLink">Kişisel Bilgiler</h2>
                            <p className="richText">Devlet kurumlarında bulunan kişisel bilgilerinize göz atın.</p>        </div><div className="agencyServicesContainer">
                               <ul className="agencyServices">
                                <li className="agencyServiceBlock" data-city="" data-mname="" data-type="">
                                    <div className="head">
                                        <a><img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/26.1.8.0.png" alt="Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü" width="64" height="64" className="serviceLogo" /></a>
                                        <h3>Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü</h3><em className="sc">41 Hizmet</em>
                                    </div>
                                    <div className="serviceList">
                                        <ul>
                                            <li><a href="/address" onClick={go} className="integratedService " data-parent="1" data-security="2">Adres Bilgisi Ekleme</a></li>
                                            <li><a href="/addressQuestion" onClick={goTo} className="integratedService " data-parent="1" data-tags="Adres No Öğrenme - Adres Bilgilerim" data-security="2" data-description="Bu hizmeti kullanarak, Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü&#039;nde kayıtlı olan adres bilgilerinizi ve NVİ Adres Numaranızı görüntüleyebilirsiniz.">Adres Öğrenme - NVİ Adres Bilgilerim</a></li>
                                            <li><a href="/addressUpdate" onClick={goToUp} className="integratedService " data-parent="1" data-tags="Adres Değişikliği Bildirimi" data-security="2" data-description="Bu hizmeti kullanarak, yerleşim yeri adresi ve / veya diğer adres bildiriminde bulunabilirsiniz.">Adres Değişikliği Bildirimi</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="agencyServiceBlock" data-city="" data-mname="" data-type="">
                                    <div className="head">
                                        <a><img src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/46.1.8.0.png" alt="Yüksek Seçim Kurulu Başkanlığı" width="64" height="64" className="serviceLogo" /></a>
                                        <h3>Yüksek Seçim Kurulu Başkanlığı</h3><em className="sc">2 Hizmet</em>
                                    </div>
                                    <div className="serviceList">
                                        <ul>
                                            <li><a className="integratedService " data-parent="1" data-tags="Yurt İçi Seçmen Kaydı Sorgulama" data-security="2" data-description="Bu hizmet ile, oy kullanabilecek vatandaşlar yurt içi seçmen kütüğündeki bilgilerini ve seçim dönemlerinde oy kullanılacak yer bilgisini, Yüksek Seçim Kurulu Başkanlığı tarafından açıklandığında, görüntüleyebilecektir.">Yurt İçi Seçmen Kaydı Sorgulama</a></li>
                                            <li><a className="integratedService " data-parent="1" data-tags="Yurt Dışı Seçmen Kaydı Sorgulama" data-security="2" data-description="Bu hizmet ile, oy kullanabilecek vatandaşlar yurt dışı seçmen kütüğündeki bilgilerini ve seçim dönemlerinde oy kullanılacak yer bilgisini, Yüksek Seçim Kurulu Başkanlığı tarafından açıklandığında, görüntüleyebilecektir.">Yurt Dışı Seçmen Kaydı Sorgulama</a></li>
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

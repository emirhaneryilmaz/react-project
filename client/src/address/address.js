import React, { useState, useRef } from 'react'
import '../css/common.css'
import DropdownUser from '../afterLogin/dropdown'
import { collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase_setup/firebase';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Address() {
    const [city, setCity] = useState('')
    const [neighbour, setNeighbour] = useState('')
    const [street, setStreet] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const id1 = location.state.id;
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const cityChange = event => {
        const result = event.target.value;
        setCity(result);
    }

    const neighChange = event => {
        const result = event.target.value;
        setNeighbour(result);
    }

    const streetChange = event => {
        const result = event.target.value;
        setStreet(result);
    }

    const set = () => {
        ref.current.value = '';
        ref1.current.value = '';
        ref2.current.value = '';
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(firestore, 'user-data', id1, 'address'), {
                sehir: city,
                mahalle: neighbour,
                sokak: street,
                created: Timestamp.now()
            })
            let err = 'Adresiniz kaydedilmiştir.';
            alert(err);
            set();
        }
        catch (err) {
            alert(err);
        }
    }
    const go = event => {
        event.preventDefault();
        navigate('/services', {state: {id: id1}});
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
                                    <input id="searchButton" type="submit" />
                                </form>
                            </li>  					<li id="l" className="login-area"><DropdownUser /></li> 				</ul>
                    </nav>
                </div>
            </header><main id="serviceBlock" className="typeInsurance">
                <div id="vue">
                    <nav className="pageTabNavigation" aria-label="Üst Sayfalar">
                        <ul className="breadcrumbNavigation">
                            <li><a href="/" className="home">Ana Sayfa</a></li>
                            <li><a href="/services">Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü</a></li>
                            <li className="here">Adres No Öğrenme - NVİ Adres Bilgilerim</li>
                        </ul>
                    </nav>
                    <section id="pageContentBlock" className="themed">
                        <section className="serviceTitleBlock"><div className="serviceDetails"><img className="agencyLogo webp" src="//cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/26.1.8.0.webp" alt="" width="64" height="64" /><h2><a href="/nufus-ve-vatandaslik-isleri-genel-mudurlugu">Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü</a><em>Adres No Öğrenme - NVİ Adres Bilgilerim</em></h2></div><div className="serviceActions"><div className="share_item"><button className="share_button" id="share_button" data-match-height="serviceActs"><i className="ico-share" aria-hidden="true"></i> <span className="serviceActions_maintitle">Paylaş</span></button><div className="share_menu" id="share_menu" data-match-height="serviceActs"><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.turkiye.gov.tr/nvi-adres-bilgilerim&text=N%C3%BCfus+ve+Vatanda%C5%9Fl%C4%B1k+%C4%B0%C5%9Fleri+Genel+M%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BCAdres+No+%C3%96%C4%9Frenme+-+NV%C4%B0+Adres+Bilgilerim&via=ekapi&related=ekapi"><i className="ico-twitter" aria-hidden="true"></i><span className="serviceActions_maintitle">Twitter'da Paylaş</span></a><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.turkiye.gov.tr/nvi-adres-bilgilerim"><i className="ico-facebook" aria-hidden="true"></i><span className="serviceActions_maintitle"> Facebook'da Paylaş</span></a></div></div></div></section><aside id="serviceHelperBlock"><ul className="serviceIntroductionBlock"></ul></aside>
                        <section id="contentStart" className="serviceContainer">
                            <form id="loginForm" name="sifreGirisForm" autoComplete="off" onSubmit={submitHandler}>
                                <fieldset className='formRowField'>
                                    <div className="formRowAddress">

                                        <label htmlFor="tridField"
                                            className="rowLabel">Yaşadığınız il ve ilçe
                                        </label>
                                        <div className="fieldGroup">
                                            <input name="tridField" type="text" className="text" id="tridField"
                                                tabIndex="1" ref={ref}
                                                autoComplete="off"
                                                onChange={cityChange}
                                                title="Yaşadığınız ili ve ilçeyi yazınız"
                                                aria-required="true" required />
                                        </div>
                                    </div>

                                    <div className="formRowAddress">
                                        <label htmlFor="egpField"
                                            className="rowLabel">Oturduğunuz mahalle
                                        </label>
                                        <div className="fieldGroup">
                                            <input name="egpField" type="text" className="text" ref={ref2}
                                                tabIndex="2" autoComplete="off" onChange={neighChange}
                                                aria-required="true" required />
                                        </div>
                                    </div>

                                    <div className="formRowAddress">
                                        <label htmlFor="egpField"
                                            className="rowLabel">Sokak bilgileriniz
                                        </label>
                                        <div className="fieldGroup">
                                            <input name="egpField" type="text" className="text" ref={ref1}
                                                tabIndex="2" autoComplete="off" onChange={streetChange}
                                                aria-required="true" required />
                                        </div>
                                    </div>

                                </fieldset>
                                <div className="formSubmitRow">
                                    <a href='#' onClick={go} className="backButton" name="cancelButton">İptal</a>
                                    <button className="submitButton" name="submitButton" type="submit"
                                        tabIndex="3">Kaydet</button>
                                </div>
                            </form>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}

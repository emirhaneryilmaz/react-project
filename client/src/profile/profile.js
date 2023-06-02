import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropdownUser from '../afterLogin/dropdown';
import { useAtom } from 'jotai';
import { userName, userTc, userId, userCity, userStreet, userNeigh } from '../store';

export default function Profile() {
    const name = useAtom(userName);
    const tck = useAtom(userTc);
    const id = useAtom(userId);
    const city = useAtom(userCity);
    const neigh = useAtom(userNeigh);
    const street = useAtom(userStreet);
    const navigate = useNavigate();

    const goServices = event => {
        event.preventDefault();
        navigate('/services', { state: { id: id[0] } });
    }

    const goHome = event => {
        event.preventDefault();
        navigate('/home', { state: { id: id[0] } });
    }

    const refresh = event => {
        event.preventDefault();
        navigate('', { state: { id: id[0] } });
    }

    const goAddress = event => {
        event.preventDefault();
        if(city[0]!=='' && neigh[0]!=='' && street[0]!==''){
            navigate('/addressQuestion', { state: { id: id[0], city: city[0], neigh: neigh[0], street: street[0] } });
        } else if (city[0]==='' && neigh[0]==='' && street[0]==='') {
            alert('Lütfen önce adres bilgisi ekleyiniz.');
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
                            <li><span className="fast-shortcuts"> <a href="#"><i className="edk-fonticon-fastresponse"></i><span> Hızlı Çözüm</span></a></span></li>

                            <li className="inner-wrapper">
                                <ul className="accessibility" id="accessibilityUl" tabIndex="0" aria-label="Erişilebilirlik">
                                    <li className="active" role="none"><i className="ico-key-1" aria-hidden="true"></i></li>
                                    <li className="menu" role="none">
                                        <ul role="none">
                                            <li role="none"><a role="menuitem">Erişilebilirlik Özellikleri</a></li>
                                            <li role="none"><a role="menuitem" className="textOnlyToggle" data-state="html">Salt Metin Görünümü</a></li>
                                            <li role="none"><a role="menuitem" className="fontSizeToggle" data-state="normal">Daha Belirgin Odaklama</a></li>
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
                            <li><a href="/home" onClick={goHome} className="home">Ana Sayfa</a></li>
                            <li><a href="/services" onClick={goServices}>Hizmetler</a></li>
                            <li><a className="selected">Bilgilerim</a></li>
                        </ul>
                    </nav>
                    <section id="pageContentBlock" className="themed">
                        <ul className="htoogleBar">
                            <li><a>Bana Özel</a></li>
                            <li><a className="selected">Bilgilerim</a></li>
                            <li><a>Güvenlik Ayarları</a></li>
                        </ul>
                        <aside id="serviceHelperBlock">
                            <ul className="serviceIntroductionBlock">
                                <li><a href="/profile" onClick={refresh} className="selected">Kimlik Bilgilerim</a></li>
                                <li><a href="/addressQuestion" onClick={goAddress}>Adres Bilgilerim</a></li>
                            </ul>
                        </aside>
                        <section id="contentStart" className="serviceContainer">
                            <form id="loginForm" name="sifreGirisForm" autoComplete="off">
                                <fieldset className='formRowField'>
                                    <div className="formRowAddress">
                                        <h3 className="definitionHeader">Kişisel Bilgileriniz</h3>
                                        <dl className="dataList compact">
                                            <dt> Ad soyad: </dt>
                                            <dd> {name}</dd>
                                            <dt> TC Kimlik Numaranız: </dt>
                                            <dd>{tck}</dd>
                                        </dl>
                                    </div>

                                </fieldset>
                                <div className="formSubmitRow">
                                    <a href='/home' onClick={goHome} className="backButton" name="cancelButton">Geri Dön</a>
                                </div>
                            </form>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    )

}

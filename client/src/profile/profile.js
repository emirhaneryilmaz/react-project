import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DropdownUser from '../afterLogin/dropdown';

const Profile = () => (
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
                        <li><a href="/" className="home">Ana Sayfa</a></li>
                        <li><a href="/services">Bilgilerim</a></li>
                        {/* <li className="here">Adres No Öğrenme - NVİ Adres Bilgilerim</li> */}
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
                            <li><a href="/profile" className="selected">Kimlik Bilgilerim</a></li>
                            <li><a href="/addressQuestion">Adres Bilgilerim</a></li>
                        </ul>
                    </aside>
                    <section id="contentStart" className="serviceContainer">
                        <form id="loginForm" name="sifreGirisForm" autoComplete="off">
                            <fieldset className='formRowField'>
                                <div className="formRowAddress">

                                    <label htmlFor="tridField"
                                        className="rowLabel"> Bilgilerim
                                    </label>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='tdSpace'>
                                                    T.C. Kimilik NO:
                                                </td>
                                                <td>
                                                    {/* {city} */} 91919191991
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='tdSpace'>
                                                    Soyadı:
                                                </td>
                                                <td>
                                                    {/* {neigh} */} Loliş
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='tdSpace'>
                                                    Adı:
                                                </td>
                                                <td>
                                                    {/* {street} */} Loliş
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='tdSpace'>
                                                    Cinsiyet:
                                                </td>
                                                <td>
                                                    {/* {street} */} Loliş
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='tdSpace'>
                                                    Doğum Yeri:
                                                </td>
                                                <td>
                                                    {/* {street} */} Loliş
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </fieldset>
                            <div className="formSubmitRow">
                                {<a href='#' className="backButton" name="cancelButton">Geri Dön</a>}
                            </div>
                        </form>
                    </section>
                </section>
            </div>
        </main>
    </div>
);

export default Profile;

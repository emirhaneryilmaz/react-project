import React from 'react';
import DropdownUser from '../afterLogin/dropdown';
import { useLocation } from 'react-router-dom';

export default function Nav() {
    const location = useLocation();
    const isUser = location.state.user;

    if (isUser===true) {
        return (
            <div className="headerGroup">
                <h1 id="brandingBlock">
                    <a id="homeLink" title="Ana Sayfa'ya Dönüş">e-Devlet Kapısı</a>
                </h1>
                <nav id="mainActionsBlock" aria-labelledby="mainActionsBlockTitle">
                    <h2 className="sectionTitle" id="mainActionsBlockTitle">Ana Bölümler</h2>
                    <ul className="mainActionsList">
                        <li><span className="fast-shortcuts"> <a><i className="edk-fonticon-fastresponse"></i><span> Hızlı Çözüm</span></a></span></li>
    
                        <li className="inner-wrapper">
                            <ul className="accessibility" id="accessibilityUl" aria-expanded="false" role="menu" tabIndex="0" aria-label="Erişilebilirlik">
                                <li className="active" role="none"><i className="ico-key-1" aria-hidden="true"></i></li>
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
                        </li>  					<li id="l" className="login-area"><DropdownUser />
                            </li> 				</ul>
                </nav>
            </div>
        )
    } else {
        return (
            <div className="headerGroup">
                <h1 id="brandingBlock">
                    <a id="homeLink" title="Ana Sayfa'ya Dönüş">e-Devlet Kapısı</a>
                </h1>
                <nav id="mainActionsBlock" aria-labelledby="mainActionsBlockTitle">
                    <h2 className="sectionTitle" id="mainActionsBlockTitle">Ana Bölümler</h2>
                    <ul className="mainActionsList">
                        <li><span className="fast-shortcuts"> <a><i className="edk-fonticon-fastresponse"></i><span> Hızlı Çözüm</span></a></span></li>
    
                        <li className="inner-wrapper">
                            <ul className="accessibility" id="accessibilityUl" aria-expanded="false" role="menu" tabIndex="0" aria-label="Erişilebilirlik">
                                <li className="active" role="none"><i className="ico-key-1" aria-hidden="true"></i></li>
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
                        </li>  					<li id="l" className="login-area"><a href="/login"> Giriş Yap <span className="ico-login"></span>
                        </a></li> 				</ul>
                </nav>
            </div>
        )
    }
}
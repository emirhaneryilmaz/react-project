import React from 'react';
import '../css/home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const user = false;

  const enter = event => {
    event.preventDefault();
    navigate('/login');
  };

  const goKurumlar = event => {
    event.preventDefault();
    navigate('/kurumlar', { state: { user: user } });
  };

  const goTo = event => {
    event.preventDefault();
    navigate('/belgeDogrulama', { state: { user: user } });
}

  return (
    <div id="homePage">
      <header id="top">
        <div className="headerGroup">
          <h1 id="brandingBlock">
            <a id="homeLink" href="/" title="Ana Sayfa'ya Dönüş">e-Devlet Kapısı</a>
          </h1>
          <nav id="mainActionsBlock" aria-labelledby="mainActionsBlockTitle">
            <h2 className="sectionTitle" id="mainActionsBlockTitle">Ana Bölümler</h2>
            <ul className="mainActionsList">
              <li><span className="fast-shortcuts"> <a><i className="edk-fonticon-fastresponse"></i><span> Hızlı Çözüm</span></a></span></li>
              <li className="inner-wrapper">					</li>  					<li id="l" className="login-area"><button onClick={enter}> Giriş Yap <span className="ico-login"></span></button>
              </li> 				</ul>
          </nav>
        </div>
      </header><div id="homepageHeroBlock" data-image="https://cdn.e-devlet.gov.tr/themes/izmir/images/banners/m00019.jpg">
        <section id="homepageSearchBlock" role="search">
          <h2 className="sectionTitle">Hızlı Arama</h2>
          <form id="searchForm" name="searchForm" method="get" action="/arama">
            <label htmlFor="searchField">Aranan Terim</label>
            <input id="searchField" name="aranan" type="text" data-placeholder="Merhaba, size nasıl yardım edebilirim?" placeholder="Merhaba, size nasıl yardım edebilirim?" maxLength="100" autoComplete="off" />
            <input id="searchButton" type="submit" value="Ara" />
            <ul id="popSearch"></ul>
          </form>
          <em className="first" aria-live="off">e-Devlet Kapısı ile bilgi ve belgelerinize tek noktadan ulaşabilir, başvuru işlemlerinizi hızla gerçekleştirebilirsiniz</em>
        </section>
      </div>
      <nav id="homepageActionsBlock" className="active" aria-labelledby="homepageActionsBlockTitle">
        <h2 id="homepageActionsBlockTitle">Temel İşlevler</h2>
        <ul id="homepageActionsList">
          <li><a ><span className="menu-icon"><i className="edk-fonticon-eservice"></i></span><em>e-Hizmetler</em>
            <span>Sorgulama, Başvuru ve Ödeme hizmetleri.</span></a>
          </li>
          <li><a href="/kurumlar" onClick={goKurumlar}><span className="menu-icon"><i className="edk-fonticon-agency"></i></span><em>Kurumlar</em>
            <span>Resmi kurumların hizmetleri ve iletişim bilgileri.</span></a>
          </li>
          <li><a ><span className="menu-icon"><i className="edk-fonticon-municipality"></i></span><em>Belediyeler</em>
            <span>Belediyelerin iletişim bilgileri ve sundukları hizmetler.</span></a>
          </li>
          <li><a ><span className="menu-icon"><i className="edk-fonticon-private"></i></span><em>Firmalar</em>
            <span>Şirketlerdeki fatura ve abonelik bilgilerinize erişin.</span></a>
          </li>
          <li>
            <a>
              <span className="menu-icon"><i className="ico-graduation-cap-1"></i></span>
              <em>Üniversiteler</em>
              <span>Üniversitelerin sundukları hizmetler.</span>
            </a>
          </li>
        </ul>
      </nav>

      <section id="homepageBannersBlock">
        <div className="homepageTopBanners">
          <div className="precious-card">
            <a rel="noopener noreferrer" href="http://www.atam.gov.tr/" data-mh="homepage-top"
              className="innerbox"> <span className="card-img"> <img className="webp" src="https://cdn.e-devlet.gov.tr/themes/izmir/images/banners/b0002.jpg" alt="ATAM"
                width="400" height="200"></img></span>
              <h3>ATAM</h3>
              <p>Atatürk Araştırma Merkezi Başkanlığı İnternet sitesini ziyaret edin.</p>
            </a>
          </div>
          <div className="slider-content">
            <ul id="homepageBannersList" className="scrollElementsList">
              <li className="homepageBannerContainer">
                <img src="https://cdn.e-devlet.gov.tr/themes/ankara/images/banners/f179.1.8.0.png"
                  className="lazy homePageBannerImage" width="725" height="315"
                  alt="Yurt İçi Seçmen Kaydı Sorgulama"></img>
                <div className="homePageBannerContent">
                  <h3>Yurt İçi Seçmen Kaydı Sorgulama</h3>
                  <span>Yurt içi seçmen kütüğü bilgilerinizi ve oy kullanacağınız yer bilgisini görüntüleyebilirsiniz.</span>
                  <a className="agencyServiceLink">Yurt İçi Seçmen Kaydı Sorgulama</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="homepageServicesCard">
        <div className="homepageconceptList">
          <div className="edk-row card-block">
            <div className="colc3">
              <a > <span className="card-block-icon"> <img className="webp" alt="" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/konsept003.1.8.0.webp"></img>
              </span>
                <div className="card-content">
                  <h3>Çalışma Hayatım</h3>
                </div>
              </a>
            </div>
            <div className="colc3">
              <a > <span className="card-block-icon"> <img className="webp" alt="" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/konsept001.1.8.0.webp"></img>
              </span>
                <div className="card-content">
                  <h3>Araçlarım (Gerçek Kişi)</h3>
                </div>
              </a>
            </div>
            <div className="colc3">
              <a > <span className="card-block-icon"> <img className="webp" alt="" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/konsept004.1.8.0.webp"></img>
              </span>
                <div className="card-content">
                  <h3>Araçlarım (Tüzel Kişi)</h3>
                </div>
              </a>
            </div>

            <div className="colc3">
              <a> <span className="card-block-icon"> <img className="webp" alt="" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/hizmetikon001.1.8.0.webp"></img>
              </span>
                <div className="card-content">
                  <h3>Adrese Teslim Şifre Başvurusu</h3>
                </div>
              </a>
            </div>
            <div className="colc3">
              <a > <span className="card-block-icon"> <img className="webp" alt="" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64webp/konsept002.1.8.0.webp"></img>
              </span>
                <div className="card-content">
                  <h3>İkametgahım (Adrese Bağlı Hizmetler)</h3>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>
      <section className="homepageCardblock">
        <div className="homepageCardblockList">
          <div className="edk-row ">
            <div className="colc3 card-item">
              <a > <span className="card-icon"> <i className="ico-briefcase" ></i>
              </span>
                <div className="card-content">
                  <h3>Şirket Hizmetleri</h3>
                  <p>Yetkilisi Olduğunuz Şirket Hizmetleri</p>
                </div> <span className="read-more">Tümü <i className="ico-right-open-big"></i></span>
              </a>
            </div>
            <div className="colc3 card-item">
              <a > <span className="card-icon"> <i className="ico-megaphone" ></i></span>
                <div className="card-content">
                  <h3>Yeni Hizmetler</h3>
                  <p>e-Devlet Kapısı'na en son eklenen Hizmetler</p>
                </div> <span className="read-more">Tümü <i className="ico-right-open-big"></i></span>
              </a>
            </div>
            <div className="colc3 card-item">
              <a href="/belgeDogrulama" onClick={goTo}> <span className="card-icon"> <i className="ico-doc-text-inv" ></i>
              </span>
                <div className="card-content">
                  <h3>Belge Doğrulama Hizmetleri</h3>
                  <p>e-Devlet Kapısı'ndan alınmış</p>
                </div> <span className="read-more">Tümü <i className="ico-right-open-big"></i></span>
              </a>
            </div>
          </div>
        </div>
      </section><section id="homepageTopServicesBlock">
        <h2>En Çok Kullanılan Hizmetler</h2>
        <ol start="1" id="homepageTopServicesList">
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/254.1.8.0.png" alt="Sosyal Güvenlik Kurumu" role="presentation" data-has-webp></img>
              <em>Sosyal Güvenlik Kurumu</em>
              <span>SGK Tescil ve Hizmet Dökümü / İşyeri Unvan Listesi</span>
            </a>
          </li>
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/254.1.8.0.png" alt="Sosyal Güvenlik Kurumu" role="presentation" data-has-webp></img>
              <em>Sosyal Güvenlik Kurumu</em>
              <span>Normal Şartlarda Ne Zaman Emekli Olabilirim?</span>
            </a>
          </li>
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/1378.1.8.0.png" alt="Aile ve Sosyal Hizmetler Bakanlığı" role="presentation" data-has-webp></img>
              <em>Aile ve Sosyal Hizmetler Bakanlığı</em>
              <span>Sosyal Yardım Bilgileri Sorgulama</span>
            </a>
          </li>
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/254.1.8.0.png" alt="Sosyal Güvenlik Kurumu" role="presentation" data-has-webp></img>
              <em>Sosyal Güvenlik Kurumu</em>
              <span>4A Emekli Aylık Bilgisi</span>
            </a>
          </li>
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/28.1.8.0.png" alt="PTT" role="presentation" data-has-webp></img>
              <em>PTT</em>
              <span>PTT Üzerinden Yapılan Kurum Ödemeleri Sorgulama ve Hesaba Aktarma</span>
            </a>
          </li>
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/15.1.8.0.png" alt="Ticaret Bakanlığı" role="presentation" data-has-webp></img>
              <em>Ticaret Bakanlığı</em>
              <span>Sahibi / Ortağı / Yetkilisi Olduğum Ticari İşletme veya Şirketler</span>
            </a>
          </li>
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/254.1.8.0.png" alt="Sosyal Güvenlik Kurumu" role="presentation" data-has-webp></img>
              <em>Sosyal Güvenlik Kurumu</em>
              <span>Emekli Günlük Ödeme Sorgulama</span>
            </a>
          </li>
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/1378.1.8.0.png" alt="Aile ve Sosyal Hizmetler Bakanlığı" role="presentation" data-has-webp></img>
              <em>Aile ve Sosyal Hizmetler Bakanlığı</em>
              <span>Sosyal Yardım Başvuru Hizmeti</span>
            </a>
          </li>
          <li>
            <a className="integratedService">
              <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/ankara/images/logos/64px/46.1.8.0.png" alt="Yüksek Seçim Kurulu Başkanlığı" role="presentation" data-has-webp></img>
              <em>Yüksek Seçim Kurulu Başkanlığı</em>
              <span>Yurt İçi Seçmen Kaydı Sorgulama</span>
            </a>
          </li>
        </ol>
      </section><section id="homepageShortcutsBlock">
        <h2 className="sectionTitle">Gündemdeki Kısayollar</h2>
        <ul>
          <li>
            <a href="/belgeDogrulama" onClick={goTo} data-mh="homepage-shortcut">
              <figure className="card">
                <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/izmir/images/banners/b0001.jpg" alt="" role="presentation" width="400" height="200" data-has-webp />
              </figure>
              <em>Belge Doğrulama</em>
              <span>e-Devlet Kapısı'ndan alınan barkodlu belgeleri burada doğrulayın.</span>
            </a>
          </li>
          <li>
            <a data-mh="homepage-shortcut">
              <figure className="card">
                <img className="lazy" src="https://cdn.e-devlet.gov.tr/themes/izmir/images/banners/b0003.jpg" alt="" role="presentation" width="400" height="200" data-has-webp />
              </figure>
              <em>e-Devlet'te Engel Yok</em>
              <span>Çağrı Merkezimize artık işaret dili kullanarak da ulaşabilirsiniz.</span>
            </a>
          </li>
        </ul>
      </section><section id="homepageCategoriesBlock">
        <div className="innerFrame">
          <div className="contentWrapper">
            <h2 className="sectionTitle bigHeader">e-Hizmet Kategorileri</h2>
            <p className="richText">e-Devlet Kapısı altyapısını kullanarak hizmet sunan yüzlerce kuruma ait binlerce hizmetten siz de güvenle faydalanabilir bu sayede zamanınızı ve paranızı boşa harcamamış olursunuz. Bu sayfa üzerindeki seçenekleri kullanarak ulaşmak istediğiniz bilgi, belge veya başvuru formuna hızla ulaşabilirsiniz.</p>
          </div>
          <ul className="serviceCategoriesList">
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/adalet-hizmetleri" className="justiceCategoryLink"> <em>Adalet</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/cevre-tarim-ve-hayvancilik-hizmetleri" className="agricultureCategoryLink"> <em>Çevre, Tarım ve Hayvancılık</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/devlet-ve-mevzuat-hizmetleri" className="stateCategoryLink"> <em>Devlet ve Mevzuat</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/egitim-hizmetleri" className="educationCategoryLink"> <em>Eğitim</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/genel-bilgiler-hizmetleri" className="generalInfoCategoryLink"> <em>Genel Bilgiler</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/guvenlik-hizmetleri" className="securityCategoryLink"> <em>Güvenlik</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/is-ve-kariyer-hizmetleri" className="businessCategoryLink"> <em>İş ve Kariyer</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/kisisel-bilgiler-hizmetleri" className="personalInfoCategoryLink"> <em>Kişisel Bilgiler</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/saglik-hizmetleri" className="healthCategoryLink"> <em>Sağlık</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/sosyal-guvenlik-ve-sigorta-hizmetleri" className="socialSecurityCategoryLink"> <em>Sosyal Güvenlik ve Sigorta</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/sikayet-ve-bilgi-edinme-hizmetleri" className="complaintsCategoryLink"> <em>Şikayet ve Bilgi Edinme</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/telekomunikasyon-hizmetleri" className="communicationCategoryLink"> <em>Telekomünikasyon</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/trafik-ve-ulasim-hizmetleri" className="transportationCategoryLink"> <em>Trafik ve Ulaşım</em></a></li>
            <li data-mh="service-category" style={{ height: "48px" }}><a href="https://www.turkiye.gov.tr/vergi-harc-ve-cezalar-hizmetleri" className="taxCategoryLink"> <em>Vergi, Harç ve Cezalar</em></a></li>
          </ul>
        </div>
      </section><section id="homepageSingleBannerBlock">
        <div className="homepageBannerContainer">
          <div className="homePageBannerContent">
            <h3>Mobil Cihazlar için e-Devlet Kapısı</h3>
            <span>e-Devlet Kapısı Mobil ile e-hizmetlere Android, iPhone, iPad ve Huawei cihazlarınızdan kolayca erişebilir, "Anlık Bilgilendirme" ile gelişmelerden vakit kaybetmeden haberdar olabilirsiniz.</span>
            <div className="mobileMarketIcons">
              <a href="https://itunes.apple.com/tr/app/e-devlet/id976505454?mt=8" className="mobileMarketLink"
              > <img
                src="https://cdn.e-devlet.gov.tr/themes/izmir/images/icons/mobile-market/apple-tr.1.8.0.png"
                alt="App Store'dan indirin"></img>

              </a> <a href="https://play.google.com/store/apps/details?id=tr.gov.turkiye.edevlet.kapisi" className="mobileMarketLink"
              > <img
                src="https://cdn.e-devlet.gov.tr/themes/izmir/images/icons/mobile-market/google-tr.1.8.0.png"
                alt="Google Play'den alın"></img>

              </a> <a href="https://appgallery7.huawei.com/#/app/C101588643" className="mobileMarketLink">
                <img src="https://cdn.e-devlet.gov.tr/themes/izmir/images/icons/mobile-market/huawei-tr.1.8.0.png"
                  alt="App Gallery'den indirin"></img>

              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="homepage_mygov">
        <div className="homepageBannerContainer">
          <div className="homePageBannerContent mygov_logo"><img
            src="https://cdn.e-devlet.gov.tr/themes/izmir/images/home_page/mygovlogo.png"
            alt="Azerbaycan e-Devlet Portali Logo"></img></div>
          <div className="homePageBannerContent">
            <h3 id="my_gov_title">Kardeş Ülke Azerbaycan e-Devlet Portali</h3>
            <div className="mobileMarketIcons">
              <a href="https://www.e-gov.az/" className="mygov" aria-labelledby="my_gov_title">www.e-gov.az
                <i className="ico-right-open-big" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </section><section id="homepageSocialMediaBlock" >
        <div className="homepageSocialMediaContainer">
          <div className="homepageSocialMediaContent">
            <h3>Sosyal Medyada da Sizin Yanınızdayız!</h3>
            <span className="homepageSocialMediaText">Resmî sosyal medya hesaplarımızda e-Devlet Kapısı ile ilgili gelişmelerden haberdar olabilir, tüm soru ve hata bildirimlerinizi ekibimize iletebilirsiniz. Bize ulaşan tüm yorum ve mesajlar dikkatle incelenmekte ve tümüne cevap verilmesi amaçlanmaktadır.</span>
            <a href="https://twitter.com/ekapi" rel="external" className="socialMediaLink twitter"><em>Twitter</em> <span>@ekapi</span></a>
            <a href="https://www.facebook.com/edevletkapi" rel="external" className="socialMediaLink facebook"><em>Facebook</em> <span>/edevletkapi</span></a>
            <a href="https://www.youtube.com/channel/UChX28IHPQ2jyaBatdfRqGSQ" rel="external" className="socialMediaLink youtube"><em>YouTube</em> <span>e-Devlet Kapısı</span></a>
            <a href="https://www.instagram.com/edevletkapisi" rel="external" className="socialMediaLink instagram"><em>Instagram</em> <span>/edevletkapisi</span></a>
            <em className="hashtag">#edevlet <a>Sosyal Medya Kullanım Kılavuzu</a></em>
          </div>
        </div>
      </section>
      <section id="homepageStatisticsBlock"><h2>e-Devlet Kapısı ile İlgili Bilgiler</h2><div className="homepageStatisticsContent"><ul className="homepageStatisticsList"><li className="homepageStatisticsItem"><dl><dt><dfn>Kayıtlı Kullanıcı</dfn></dt><dd><span>6</span><span>3</span><span>.</span><span>0</span><span>9</span><span>2</span><span>.</span><span>6</span><span>2</span><span>7</span></dd></dl></li><li className="homepageStatisticsItem"><dl><dt><dfn>Hizmet Sayısı</dfn></dt><dd><span>7</span><span>.</span><span>0</span><span>6</span><span>8</span></dd></dl></li><li className="homepageStatisticsItem"><dl><dt><dfn>Mobil Hizmetler</dfn></dt><dd><span>4</span><span>.</span><span>0</span><span>5</span><span>2</span></dd></dl></li><li className="homepageStatisticsItem"><dl><dt><dfn>Kurum</dfn></dt><dd><span>9</span><span>7</span><span>8</span></dd></dl></li></ul><a href="https://e-devlet.gov.tr/edevlet-istatistikleri" className="olbtn"> Detaylı İstatistik Bilgileri <i className="ico-right-open-big"></i></a></div></section><section id="homepageinfoBlock"><h2>e-Devlet Kapısı ile İlgili Bilgiler</h2><div className="homepageStatisticsContent"><div className="homepageStatisticsText"><strong>e-Devlet Kapısı</strong> ile kamu kurumlarının sunduğu hizmetlere tek noktadan, hızlı ve güvenli erişin.<ul><li><a href="https://www.turkiye.gov.tr/bilgilendirme?konu=nasilCalisiyor" className="integration"><em>Nasıl Çalışıyor?</em><span>e-Hizmetlerin nasıl çalıştığını ve sistemin genel mimarisini öğrenin.</span></a></li><li><a href="https://www.turkiye.gov.tr/bilgilendirme?konu=erisilebilirlik" className="a11y"><em>Erişilebilirlik</em><span>Engelli bireyler için kullanımı kolaylaştıran özelliklerimizi inceleyin.</span></a></li><li><a href="https://www.turkiye.gov.tr/bilgilendirme?konu=yuksekGuvenlik" className="security"><em>Yüksek Güvenlik</em><span>Kişisel bilgilerinizin korunması için aldığımız önlemleri inceleyin.</span></a></li></ul></div></div></section>
    </div>

  )
}

import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Nav from '../kurumlar/nav'
import { jsPDF } from "jspdf";
import { useAtom } from 'jotai';
import html2canvas from 'html2canvas';
import { userName, userTc, userId, userCity, userStreet, userNeigh } from '../store';


export default function Belge() {
    const location = useLocation();
    const navigate = useNavigate();

    const user = location.state.user;
    const id1 = location.state.id;
    const tcKimlik = location.state.tcKimlik;
    let [name] = useAtom(userName);
    const [tck] = useAtom(userTc);
    const [id] = useAtom(userId);
    let [city] = useAtom(userCity);
    let [neigh] = useAtom(userNeigh);
    let [street] = useAtom(userStreet);

    const [showInfo, setShowInfo] = useState(false);

    const buttonHandler = async () => {
        setShowInfo(true);

    };

    function replaceTurkishCharacters(text) {
        const turkish = ['ş', 'Ş', 'ı', 'İ', 'ğ', 'Ğ', 'ü', 'Ü', 'ö', 'Ö', 'ç', 'Ç'];
        const english = ['s', 'S', 'i', 'I', 'g', 'G', 'u', 'U', 'o', 'O', 'c', 'C'];
        for (let i = 0; i < turkish.length; i++) {
            let regex = new RegExp(turkish[i], "g");
            text = text.replace(regex, english[i]);
        }
        return text;
    }



    name = replaceTurkishCharacters(name);
    city = replaceTurkishCharacters(city);
    neigh = replaceTurkishCharacters(neigh);
    street = replaceTurkishCharacters(street);


    const inputRef = useRef();

    const printDocument = () => {
        console.log(inputRef.current)
        html2canvas(inputRef.current)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                // const pdf = new jsPDF();
                // pdf.addImage(imgData, 'JPEG', 10, 10, 180, 160); 
                // pdf.save("download.pdf");
                const doc = new jsPDF();
                doc.setFontSize(22);
                doc.text('E-devlet', 10, 30);

                doc.setFontSize(16);
                doc.setFont("helvetica", "bold");
                doc.text(`TC: ${tck}`, 10, 50);

                doc.setFont("helvetica", "normal");
                doc.text(`Name: ${name}`, 10, 70);

                doc.setFont("helvetica", "bold");
                doc.text(`City: ${city}`, 10, 90);

                doc.setFont("helvetica", "normal");
                doc.text(`Neighborhood: ${neigh}`, 10, 110);

                doc.setFont("helvetica", "bold");
                doc.text(`Street: ${street}`, 10, 130);

                doc.save('belge.pdf');
            });
    }

    const goHome = event => {
        event.preventDefault();
        if (user===true) {
            navigate('/home', { state: { id: id1, user: user} });
        } else {
            navigate('/', { state: { user: user } });
        }
    }

    return (
        <div>
            <header id="top">
                <Nav />
            </header><main id="serviceBlock" className="typeInsurance">
                <div id="vue">
                    <nav className="pageTabNavigation" aria-label="Üst Sayfalar">
                        <ul className="breadcrumbNavigation">
                            <li><a href="/home" onClick={goHome} className="home">Ana Sayfa</a></li>
                            <li><a>Belge Doğrulama</a></li>
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

                            </form>
                            <div className="formSubmitRow">


                                {!showInfo && <button id="gosterButton" className="submitButton" onClick={buttonHandler}>Göster</button>}

                                {showInfo && (
                                    <div className='informationField'>
                                        <div ref={inputRef}>
                                            <h1>Belge</h1>
                                            <p>TC: {tck}</p>
                                            <p>Name: {name}</p>
                                            <p>City: {city}</p>
                                            <p>Neighborhood: {neigh}</p>
                                            <p>Street: {street}</p>
                                        </div>
                                        <button className="submitButton" onClick={printDocument}>İndir</button>
                                    </div>
                                )}
                            </div>


                        </section>
                    </section>
                </div>
            </main>
        </div>
    )
}
